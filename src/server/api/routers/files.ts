import { getFileUrl, setFileUrl } from "~/r2/api";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const filesRouter = createTRPCRouter({
  getSignedGetUrl: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      if (input.length <= 0) return { url: "" };

      const url = await getFileUrl(input);
      return { url };
    }),

  getSignedPutUrl: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      if (input.length <= 0) {
        return { url: "" };
      }
      const url = await setFileUrl(input);
      return { url };
    }),
});
