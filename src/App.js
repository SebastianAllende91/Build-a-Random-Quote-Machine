import QuoteBox from "./QuoteBox";
import data from "./data.json";
import { useEffect, useState } from "react";

let initialValue = Math.ceil(Math.random() * data.length - 1);

function App() {
  const [infoId, setInfoId] = useState(initialValue);

  useEffect(() => {}, [infoId]);

  const getIdQuote = () => {
    setInfoId(Math.ceil(Math.random() * data.length - 1));
  };

  console.log(infoId + 1);

  return (
    <div className="container">
      <QuoteBox data={data[infoId]} getIdQuote={getIdQuote} />
    </div>
  );
}

export default App;
