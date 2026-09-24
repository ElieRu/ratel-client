import { createRequestListener } from "@react-router/node";

export default createRequestListener({
  // @ts-ignore – build/server/index.js is generated at build time
  build: () => import("../build/server/index.js"),
});
