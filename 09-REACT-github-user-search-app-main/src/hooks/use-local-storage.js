import { useState, useCallback } from "react";

function persistItem(key, value) {
  localStorage.setItem(key, value);
  return value;
}

export function usePersistState(key, initialValue) {
  const [state, setState] = useState(
    () => localStorage.getItem(key) || persistItem(key, initialValue)
  );
  const setStateAndPersist = useCallback(
    (newState) => {
      setState(newState);
      return persistItem(key, newState);
    },
    [key, setState]
  );
  return [state, setStateAndPersist];
}
