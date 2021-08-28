import { useState, useEffect } from "react";

const useInitialState = (API) => {
  console.log('url para get: ' + API)
  const [ initialState, setInitialState ] = useState([]);
  useEffect(() => {
    console.log("voy a hacer fetch: ", API)
    fetch(API)
    .then(response => response.json())
    .then((data) => setInitialState(data))
  }, [API]);
  console.log("holaa desde hook ", initialState)
  return initialState;
}

export default useInitialState;