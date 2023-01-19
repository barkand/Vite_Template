import useSWR from "swr";

import userFetcher from "./api-user";

export default function useUser() {
  const { data, mutate, error } = useSWR(["api_user"], userFetcher, {
    // Less than Time of SECRET_KEY_LIFE_TIME in Server
    refreshInterval: 1000 * import.meta.env.VITE_REFRESH_SECRET_KEY,
  });

  const loading = !data && !error;
  const loggedOut = error;

  return {
    loading,
    loggedOut,
    wallet: data,
    mutate,
  };
}
