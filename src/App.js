// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}














/* function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Traveling around the world!!</h2>
      <h4>Countries Available: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name.common} capital={country?.capital?.[0]}></Country>)
      }
    </div>
  )
}
function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
    </div>
  )
} */

export default App;