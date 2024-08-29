"use client";
import Header from "./Header";
import FileInput from "./FileInput";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export default function UploadFileAndGoToOrder() {
  const { mutateAsync } = api.orders.begin.useMutation();
  const router = useRouter();

  async function beginOrder(filename: string) {
    const { orderId } = await mutateAsync(filename);
    router.push(orderId);
  }

  return (
    <>
      <Header
        head="Upload Your STL File"
        description="Our 3D printing experts will bring your design to life. Upload your STL file and we'll provide a quote."
      >
        <FileInput onFileSubmitted={beginOrder} />
      </Header>
    </>
  );
}
