import React from "react";
import twitter from "./icons8-twitter-50.png";

const QuoteBox = ({ data, getIdQuote }) => {
  const { id, texto, autor } = data;

  console.log(id);

  return (
    <div className="quote-box">
      <div>
        <p id="text" style={{ color: `var(--color-${id})` }}>
          {texto}
        </p>
      </div>
      <div>
        <p id="author" style={{ color: `var(--color-${id})` }}>
          - {autor}
        </p>
      </div>
      <div className="buttons">
        <a
          href="https://twitter.com/intent/tweet"
          target="_blank"
          rel="noreferrer"
          id="tweet-quote"
          style={{ background: `var(--color-${id})` }}
        >
          <img src={twitter} alt="icono" width={40} height={40} />
        </a>
        <button
          onClick={getIdQuote}
          id="new-quote"
          style={{ background: `var(--color-${id})` }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
