import { useState, useEffect, useCallback } from "react";

export const useAsync = (asyncFunction, status = true) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);

  const execute = useCallback(() => {
    setPending(true);
    setValue(null);
    setError(null);
    return asyncFunction()
      .then((response) => setValue(response))
      .catch((error) => setError(error))
      .finally(() => setPending(false));
  }, [asyncFunction]);

  useEffect(() => {
    if (status) {
      execute();
    }
  }, [execute, status]);
};
