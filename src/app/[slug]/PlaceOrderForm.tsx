"use client";

import type { ReactNode, SyntheticEvent } from "react";
import { api } from "~/trpc/react";

export default function PlaceOrderForm({
  orderId,
  children,
}: {
  orderId: string;
  children: ReactNode;
}) {
  const { mutateAsync } = api.orders.updateOrderData.useMutation();
  const submitForm = async (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const printDetails = {
      infill: formData.get("infill") as string,
      material: formData.get("material") as string,
      quantity: parseInt(formData.get("quantity") as string) || 1,
      color: formData.get("color") as string,
      modelFilename: "",
    };

    const shipmentDetails = {
      name: formData.get("name") as string,
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      zipcode: formData.get("zipcode") as string,
    };

    await mutateAsync({
      orderId,
      order: {
        ...shipmentDetails,
        printDetails,
      },
    });
  };

  return <form onSubmit={submitForm}>{children}</form>;
}
