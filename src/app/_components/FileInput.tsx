import Button from "./Button";

export default function FileInput() {
  return (
    <div className="flex w-full">
      <div className="mr-2 flex flex-grow cursor-pointer rounded-md border border-cultured pb-2 pl-3 pr-3 pt-2">
        <input
          type="file"
          className="cursor-pointer file:border-none file:bg-transparent file:font-bold"
        />
      </div>
      <Button>Upload</Button>
    </div>
  );
}
