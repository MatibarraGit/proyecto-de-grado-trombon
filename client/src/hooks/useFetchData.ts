'use client'
import { useEffect, useState } from "react"

type Fetcher<T> = () => Promise<T>;

export function useFetchData<T>({ fetchFunction, initialData = null as T | null } : { fetchFunction: Fetcher<T>; initialData?: T | null }) {
  const [data, setData] = useState<T | null>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(!initialData);
  const [error, setError] = useState<unknown>(null);

  async function fetchData(): Promise<T | null> {
    setIsLoading(true);
    try {
      const result = await fetchFunction();
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, setData, isLoading, error, fetchData };
}