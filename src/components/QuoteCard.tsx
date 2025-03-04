import React from "react";
import { Quote } from "../api/api";
import "../styles/QuoteCard.scss";

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  return (
    <div className="quote-card">
      <p>"{quote.quote}"</p>
      <small>- {quote.author}</small>
    </div>
  );
};

export default QuoteCard;
