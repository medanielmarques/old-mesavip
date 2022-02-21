import { useEffect, useState } from 'react';
import { api } from 'services/api';

export function useFetch<T = unknown>(url: string, dependencies?: [any]) {
  const [data, dataSet] = useState<T | undefined>(undefined);
  const [isLoading, isLoadingSet] = useState(true);
  const [error, errorSet] = useState<Error | null>(null);

  useEffect(
    () => {
      api
        .get(url)
        .then((response) => dataSet(response.data))
        .catch((e) => errorSet(e))
        .finally(() => isLoadingSet(false));
    },
    dependencies ? dependencies : []
  );

  return { data, error, isLoading };
}
