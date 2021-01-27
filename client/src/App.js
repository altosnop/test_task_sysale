import Card from './components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("/data.json")
      .then(response => setData(response.data));
  }, []);

  return (
    data.map(item => (
      <Card key={item.id} title={item.title} content={item.content} img={item.url} price={item.price}/>
    ))
  );
}

export default App;
