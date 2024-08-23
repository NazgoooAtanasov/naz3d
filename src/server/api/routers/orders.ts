import {
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { z } from "zod";
import { db } from "~/firebase/api";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const orderSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  zipcode: z.string().min(1),
  color: z.string().min(1),
  infill: z.string().min(1),
  material: z.string().min(1),
  quantity: z.number().min(1),
});

type Order = Zod.infer<typeof orderSchema> & { id: string };

export const ordersRouter = createTRPCRouter({
  getall: publicProcedure.query(async () => {
    const ordersCollection = collection(db, "orders");
    const q = query(ordersCollection);
    const orders: Order[] = [];
    (await getDocs(q)).forEach((order) => orders.push(order.data() as Order));
    return { orders };
  }),

  create: publicProcedure.input(orderSchema).mutation(async ({ input }) => {
    const document = doc(db, "orders", "testtest");
    await setDoc(document, input);
    return {};
  }),
});
