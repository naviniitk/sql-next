"use server";
import pgClient from "@/lib/db";
import { Customer } from "@/types";

export const queryDatabase = async (query: string) => {
  try {
    const response = await pgClient.query<Customer>(query);

    return { data: response.rows, error: undefined };
  } catch (e: any) {
    return { data: undefined, error: e.message };
  }
};
