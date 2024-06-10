import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "~/env";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

// export API handler
//trpc stands for "tRPC" which is a library for building type-safe APIs in TypeScript
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
        console.error(
          `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
        );
      }
      : undefined,
});
