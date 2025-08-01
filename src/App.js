import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const API = 'https://xcountries-backend.azurewebsites.net/all';
  useEffect(() => {
    fetch(API)
      .then((res) =>res.json())
      .then((jsonRes) => setData(jsonRes))
      .catch ((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="App" style={{display: "flex",  flexWrap: "wrap", gap: "10px"}}>
      {data.map((item, index) => (
        <div key={index} className="item" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", border: "1px solid black", borderRadius: "4px", width: "200px", height: "200px"}}>
          {console.log('Rendering item:', item.image)}
          <img src='' alt={`Flag of ${item.abbr}`}/>
          <h2>{item.name}</h2>
        </div> 
      ))}
    </div>
  );
}

export default App;
