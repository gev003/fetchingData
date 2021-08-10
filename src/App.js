import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TableCell from './TableCell';

function App() {

  const [data, setData] = useState('');
  const [info, setInfo] = useState()

  useEffect(() => {
    if(data.length == 2) {
     const interval = setTimeout(() => {
        fetch(`https://corona-api.com/countries/${data}`)
        .then(stream => stream.json())
        .then(results => setInfo(results))
      }, 1000)

      return () => {
        clearTimeout(interval)
      }
    }
  }, [data])

  return (
    <div className="App">
      <input 
      type="text"
      placeholder="Enter Valid character.."
      onChange={(evt) => {
        setData(evt.target.value);
      }}
      ></input>
      <TableCell info={info} />
    </div>
  );
}

export default App;
