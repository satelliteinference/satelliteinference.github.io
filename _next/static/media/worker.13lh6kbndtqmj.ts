// Runs the node's heat balance off the page's main thread.

import { runThermalJob, type ThermalJob } from "./jobs";

type Job = ThermalJob & { id: number };

const scope = self as unknown as { onmessage: ((event: MessageEvent<Job>) => void) | null; postMessage: (message: unknown) => void };

scope.onmessage = (event) => {
  const job = event.data;
  try {
    scope.postMessage({ id: job.id, ok: true, result: runThermalJob(job) });
  } catch (error) {
    scope.postMessage({ id: job.id, ok: false, error: String(error) });
  }
};
