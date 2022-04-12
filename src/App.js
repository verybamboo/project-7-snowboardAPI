import "./App.css";
import { useEffect, useState } from "react";
import Slides from "./Slides.jsx";

function App() {
  const [snowboards, setSnowboards] = useState(false);

  useEffect(() => {
    fetch("https://snowboard-api.herokuapp.com/api/snowboards")
      .then((response) => response.json())
      .then((result) => setSnowboards(result));
  }, []);

  if (snowboards === undefined) {
    return <>Still loading...</>;
  }

  return (
    <div className="maincontainer">
      <Slides snowboards={snowboards} className="test" />
    </div>
  );
}

export default App;
