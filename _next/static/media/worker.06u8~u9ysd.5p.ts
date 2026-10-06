// Runs the request-path simulation off the page's main thread.

import { runRequest, type RequestInput } from "./sim";

type Job = { id: number; input: RequestInput };

const scope = self as unknown as { onmessage: ((event: MessageEvent<Job>) => void) | null; postMessage: (message: unknown, transfer: Transferable[]) => void };

scope.onmessage = (event) => {
  const job = event.data;
  try {
    const result = runRequest(job.input);
    const s = result.stats;
    scope.postMessage({ id: job.id, ok: true, result }, [
      result.ecef.buffer,
      s.captureOnboard.values.buffer,
      s.captureRaw.values.buffer,
      s.requestOnboard.values.buffer,
      s.requestRaw.values.buffer,
    ]);
  } catch (error) {
    scope.postMessage({ id: job.id, ok: false, error: String(error) }, []);
  }
};
