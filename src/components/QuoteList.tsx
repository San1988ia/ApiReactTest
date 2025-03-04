import React, { useState } from "react";
import QuoteCard from "./QuoteCard";
import useQuotes from "../hooks/useQuotes";
import "../styles/QuoteList.scss";

const QuoteList: React.FC = () => {
  const { quotes, loading, error, fetchData } = useQuotes();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData(); //hämta nya citat
    setRefreshing(false);
  };

  if (loading) {
    return <p>Laddar citat...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="quote-list">
      <button onClick={handleRefresh} disabled={refreshing}>
        {refreshing ? "Laddar nya citat...." : "Hämta nya citat"}
      </button>
      {quotes.length === 0 ? (
        <p>Det finns inga citat att visa.</p>
      ) : (
        quotes.map((quote, index) => <QuoteCard key={index} quote={quote} />)
      )}
    </div>
  );
};

export default QuoteList;
