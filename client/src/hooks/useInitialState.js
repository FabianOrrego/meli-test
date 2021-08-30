import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [loading, setLoading] = useState(true);
  const [ initialState, setInitialState ] = useState([]);
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then((data) => {
      setLoading(false);
      setInitialState(data);
    })
  }, [API]);
  return { initialState, loading };
}

export default useInitialState;