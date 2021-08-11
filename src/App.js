import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TableCell from './TableCell';

function App() {

  const [data, setData] = useState('');
  const [info, setInfo] = useState();

  // useEffect(() => {
  //   if(data.length == 2) {
  //    const interval = setTimeout(() => {
  //       fetch(`https://corona-api.com/countries/${data}`)
  //       .then(stream => stream.json())
  //       .then(results => setInfo(results))
  //     }, 1000)

  //     return () => {
  //       clearTimeout(interval)
  //     }
  //   }
  // }, [data])

  // const inputChangeHandler = (evt) =>{
  //     // setData(evt.target.value);
  //     if (evt.target.value > 2) {
  //        fetch(`https://corona-api.com/countries/${data}`)
  //         .then(stream => stream.json())
  //         .then(results => setInfo(results))
  //     }
  // }

  function DefaultFetch(value) {
    fetch(`https://corona-api.com/countries/${value ? value : 'us'}`)
         .then(stream => stream.json())
         .then(results => {
           setInfo(results)
          //  setData('')
          } )
  }
  function handleChange(evt) {
    if(evt.target.value.length === 2) {
      DefaultFetch(evt.target.value);

    }
    setData(evt.target.value);
  }
  
  useEffect(() => {
    DefaultFetch()
  }, [])

  return (
    <div className="App">
      <input 
      type="text"
      value={data}
      placeholder="Enter Valid character.."
      onChange={handleChange}
      ></input>
      <TableCell info={info} />
    </div>
  );
}

export default App;
