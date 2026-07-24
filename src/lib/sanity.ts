import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "2lm7s5yj",
  dataset: "production",
  apiVersion: "2024-10-01",
  useCdn: true,
});