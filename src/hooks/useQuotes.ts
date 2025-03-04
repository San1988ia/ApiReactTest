import { useState, useEffect } from "react";
import { fetchQuotes, Quote } from "../api/api";

const useQuotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const quotesData = await fetchQuotes();
      setQuotes(quotesData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Okänt fel inträffade");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { quotes, loading, error, fetchData };
};
export default useQuotes;
