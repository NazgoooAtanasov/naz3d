import { doc, getDoc, setDoc } from "firebase/firestore";
import { z } from "zod";
import { db } from "~/firebase/api";
import nanoid from "~/nanoid";
import { getFileUrl } from "~/r2/api";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const orderSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  zipcode: z.string().min(1),
  printDetails: z.object({
    modelFilename: z.string(),
    infill: z.string().min(1),
    material: z.string().min(1),
    quantity: z.number().min(1),
    color: z.string().min(1),
  }),
});

export const ordersRouter = createTRPCRouter({
  begin: publicProcedure
    .input(z.string())
    .mutation(async ({ input: filename }) => {
      const id = nanoid();
      const document = doc(db, "orders", id);
      try {
        await setDoc(document, { printDetails: { modelFilename: filename } });
      } catch (err) {
        throw new Error(
          `There was an error with firebase order begining ${err}`,
        );
      }
      return { orderId: id };
    }),

  getBeginOrder: publicProcedure.input(z.string()).query(async ({ input }) => {
    const filter = doc(db, "orders", input);
    const document = await getDoc(filter);

    const orderBeginData = document.data() as {
      printDetails: { modelFilename: string };
    };

    if (!orderBeginData) {
      return { orderBeginData: null, fileUrl: null };
    }

    const fileUrl = await getFileUrl(orderBeginData.printDetails.modelFilename);

    return { orderBeginData, fileUrl };
  }),

  updateOrderData: publicProcedure
    .input(
      z.object({
        orderId: z.string(),
        order: orderSchema,
      }),
    )
    .mutation(async ({ input }) => {
      const { orderId, order } = input;
      const orderDocument = doc(db, "orders", orderId);
      const orderData = (await getDoc(orderDocument)).data() as z.infer<
        typeof orderSchema
      >;
      order.printDetails.modelFilename = orderData.printDetails.modelFilename;
      await setDoc(orderDocument, order, { merge: true });
    }),
});
