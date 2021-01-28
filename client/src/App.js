import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((response) => setData(response.data));
  }, []);

  return (
    <div className="flex_div">
      {data.map(item => (
      <Card
        key={item.id}
        title={item.title}
        content={item.content}
        img={item.url}
        price={item.price}
        photo={item.img}
      />
      ))}
    </div>
  );
}

export default App;
