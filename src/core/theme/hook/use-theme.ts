import useSWR from "swr";

export default function useTheme() {
  const { data, error } = useSWR(["background"], fetcher, {
    refreshInterval: 500,
  });

  const loading = !data && !error;

  return {
    loading,
    background: data,
  };
}

let fetcher = async (key: string) => localStorage.getItem(key);
