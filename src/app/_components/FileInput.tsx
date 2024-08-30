"use client";
import { api } from "~/trpc/react";
import Button from "./Button";
import { useState } from "react";

export default function FileInput({
  onFileSubmitted,
}: {
  onFileSubmitted?: (filename: string) => Promise<void>;
}) {
  const [loading, setLoading] = useState(false);
  const [filename, setFileName] = useState("");
  const { data, isLoading } = api.files.getSignedPutUrl.useQuery(filename, {
    enabled: !!filename,
  });

  const submit = async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    setLoading(true);
    try {
      const response = await fetch(form.action, {
        method: "PUT",
        body: formData.get("file"),
      });
      if (onFileSubmitted && response.ok) {
        await onFileSubmitted(filename);
      }
      setLoading(false);
    } catch (err) {}
  };

  const update = async (input: HTMLInputElement) => {
    const file = input.value;
    if (!file) return;
    setFileName(file.replace("C:\\fakepath\\", ""));
  };

  return (
    <div className="flex w-full">
      <form
        action={data?.url}
        className="contents"
        onSubmit={(e) => {
          e.preventDefault();
          void submit(e.target as HTMLFormElement);
        }}
      >
        <div className="mr-2 flex flex-grow cursor-pointer rounded-md border border-cultured pb-2 pl-3 pr-3 pt-2">
          <input
            type="file"
            name="file"
            onChange={(e) => update(e.target as HTMLInputElement)}
            className="cursor-pointer file:border-none file:bg-transparent file:font-bold"
          />
        </div>
        <Button submit={true}>
          {!isLoading && !loading ? (
            <>Upload</>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              width="30"
              height="30"
              style={{
                shapeRendering: "auto",
                display: "block",
                background: "transparent",
              }}
            >
              <g>
                <circle
                  strokeDasharray="164.93361431346415 56.97787143782138"
                  r="35"
                  strokeWidth="10"
                  stroke="#ffffff"
                  fill="none"
                  cy="50"
                  cx="50"
                >
                  <animateTransform
                    keyTimes="0;1"
                    values="0 50 50;360 50 50"
                    dur="1s"
                    repeatCount="indefinite"
                    type="rotate"
                    attributeName="transform"
                  ></animateTransform>
                </circle>
                <g></g>
              </g>
            </svg>
          )}
        </Button>
      </form>
    </div>
  );
}
