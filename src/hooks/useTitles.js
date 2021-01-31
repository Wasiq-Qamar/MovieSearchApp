import { useEffect, useState } from "react";
import imdb from "../api/imdb";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await imdb.get("/find", {
        params: {
          q: searchTerm,
        },
      });
      setResults(response.data.results);
    } catch (err) {
      console.log(err);
      setErrorMsg("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("batman");
  }, []);

  return [searchApi, results, errorMsg, setErrorMsg];
};
