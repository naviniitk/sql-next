"use client";
import { Button, CustomerTable, FormInput, InfoBox } from "@/components";
import { Strings } from "@/constants";
import { queryDatabase } from "@/server-actions";
import { Customer } from "@/types";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";

export default function Home() {
  const [data, setData] = useState<Customer[]>([]);
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const fetchQueryData = async () => {
    if (query === "") return;
    if (!query.toLocaleLowerCase().startsWith("select")) {
      setError(Strings.ONLY_SELECT_QUERIES_ALLOWED);
      return;
    }
    const { data, error } = await queryDatabase(query);

    if (error) {
      setError(error);
      return;
    }
    if (data) setData(data);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(() => fetchQueryData());
  };

  const handleReset = () => {
    setQuery("");
    setData([]);
  };

  return (
    <main className="flex h-screen flex-col items-center lg:px-24 md:px-16 sm:px-8 p-8">
      <h1 className="text-center text-gray-700">{Strings.SUBMIT_QUERIES}</h1>
      <form
        className="p-4 flex flex-col gap-2 w-full max-w-xl"
        onSubmit={handleSubmit}
      >
        <FormInput
          query={query}
          handleChange={handleInputChange}
          error={error}
          disabled={isPending}
        />

        <div className="flex justify-between">
          <Button disabled={isPending} name={Strings.SUBMIT} />
          <Button name={Strings.RESET} handleClick={handleReset} />
        </div>
      </form>

      {data.length ? (
        <div className="border-2 rounded border-cyan-950 max-w-full flex-grow overflow-scroll">
          <CustomerTable customers={data} />
        </div>
      ) : (
        <InfoBox />
      )}
    </main>
  );
}
