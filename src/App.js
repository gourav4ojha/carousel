import './App.css';
import { useEffect, useRef, useState } from 'react';
import {data} from "./data"
function App() {
  const [index, setIndex] = useState(0);

const handleLeftClick = () => {
  setIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
};

const handleRightClick = () => {
  setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
};

const ref = useRef(null);

useEffect(() => {
  ref.current = setTimeout(() => handleRightClick(), 1000);
  return () => clearTimeout(ref.current); 
}, [index]);

  return (
    <div className="app">
    <div className="slider" onMouseEnter={()=>clearTimeout(ref.current)} onMouseLeave={()=>{ref.current = setTimeout(() => handleRightClick(), 1000);}}>
      <button className="btn left" onClick={handleLeftClick}>❮</button>
      {data.map((url, i) => (
        <img key={url} src={url} alt="wallpaper" className={`slide ${index === i ? "active" : ""}`} />
      ))}
      <button className="btn right" onClick={handleRightClick}>❯</button>
    </div>
  </div>
  );
}

export default App;
