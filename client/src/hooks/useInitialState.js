import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [ initialState, setInitialState ] = useState([]);
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then((data) => setInitialState(data))
  }, [API]);
  return initialState;
}

export default useInitialState;