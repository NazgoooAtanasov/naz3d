"use client";
import type { ReactNode, SyntheticEvent } from "react";
import { api } from "~/trpc/react";

export default function PlaceOrderForm({ children }: { children: ReactNode }) {
  const { mutate, error } = api.orders.create.useMutation();

  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    mutate({
      name: (formData.get("name") as string) ?? "",
      address: (formData.get("address") as string) ?? "",
      city: (formData.get("city") as string) ?? "",
      zipcode: (formData.get("zipcode") as string) ?? "",
      color: (formData.get("color") as string) ?? "",
      infill: (formData.get("infill") as string) ?? "",
      material: (formData.get("material") as string) ?? "",
      quantity: parseInt((formData.get("quantity") as string) ?? "0"),
    });
  };

  return <form onSubmit={submitForm}>{children}</form>;
}
