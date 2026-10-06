// Runs the radiation model off the page's main thread.

import { fetchMaps } from "./maps";
import { parseMaps, runRadiation, type RadiationInput, type RadiationMaps } from "./model";

type Job = { id: number; input: RadiationInput; mapsUrl: string; mapsBuffer?: ArrayBuffer };

const scope = self as unknown as { onmessage: ((event: MessageEvent<Job>) => void) | null; postMessage: (message: unknown) => void };
const cache = new Map<string, Promise<RadiationMaps>>();

scope.onmessage = async (event) => {
  const job = event.data;
  try {
    if (job.mapsBuffer) cache.set(job.mapsUrl, Promise.resolve(parseMaps(job.mapsBuffer)));
    if (!cache.has(job.mapsUrl)) cache.set(job.mapsUrl, fetchMaps(job.mapsUrl));
    const maps = await cache.get(job.mapsUrl)!;
    scope.postMessage({ id: job.id, ok: true, result: runRadiation(job.input, maps) });
  } catch (error) {
    scope.postMessage({ id: job.id, ok: false, error: String(error) });
  }
};
