// Runs the cluster simulation off the page's main thread.

import { runFailure, runFlight, type ClusterInput } from "./sim";

type Job =
  | { id: number; type: "flight"; input: ClusterInput }
  | { id: number; type: "failure"; input: ClusterInput; failed: number; phaseDeg: number; hours: number };

const scope = self as unknown as { onmessage: ((event: MessageEvent<Job>) => void) | null; postMessage: (message: unknown, transfer: Transferable[]) => void };

scope.onmessage = (event) => {
  const job = event.data;
  try {
    if (job.type === "flight") {
      const result = runFlight(job.input);
      const t = result.track;
      scope.postMessage({ id: job.id, ok: true, result }, [t.t.buffer, t.rel.buffer, t.chiefPos.buffer, t.frame.buffer, t.sun.buffer, t.lit.buffer, t.gmst.buffer]);
    } else {
      const result = runFailure(job.input, job.failed, job.phaseDeg, job.hours);
      const t = result.track;
      scope.postMessage({ id: job.id, ok: true, result }, [t.t.buffer, t.rel.buffer, t.chiefPos.buffer, t.frame.buffer, t.sun.buffer, t.lit.buffer, t.gmst.buffer, result.nearest.buffer]);
    }
  } catch (error) {
    scope.postMessage({ id: job.id, ok: false, error: String(error) }, []);
  }
};
