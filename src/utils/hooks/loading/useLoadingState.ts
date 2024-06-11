import { useLayoutEffect, useState } from "react";

export function useLoadingState(ms?: number) {
  const [loadingCompleted, setLoadingCompleted] = useState<boolean>(false);

  const milliseconds = !ms ? 5000 : ms;

  useLayoutEffect(() => {
    setInterval(() => {
      setLoadingCompleted(true);
    }, milliseconds);
  }, []);
  return [loadingCompleted];
}
