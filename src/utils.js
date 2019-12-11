import { useState, useEffect } from "react";

function errorWrapper(promise) {
  return promise.then(data => [null, data]).catch(err => [err, undefined]);
}

export function useDebounce(value, delay) {
  // see: https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
// can turn this into a custom hook with https://scotch.io/tutorials/create-a-custom-usefetch-react-hook
export async function api(url, method = "get") {
  const [err, res] = await errorWrapper(
    fetch(url, {
      method
    })
  );

  if (err) {
    console.log(err); // eslint-disable-line
    return err;
  }

  const data = res.json();
  return data;
}
