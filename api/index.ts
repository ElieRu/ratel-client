import { createRequestHandler } from "@react-router/node";

// @ts-ignore - build output exists after `npm run build`
export default createRequestHandler({ build: () => import("../build/server/index.js") });
