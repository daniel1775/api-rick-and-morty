import Card from './views/Card';
import style from './App.module.css';
import { useEffect, useState } from 'react';

export default function App() {
  const[ api, setApi ] = useState([]);

  const handleApi = async () => {
    let res = await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json(); 
    setApi(data.results);

    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {setApi(data.results)});
  };

  useEffect(() => {
    handleApi();
  }, []);

  const array = () => {
    let arr = api.map(value => <Card key={value.id} data={value}/>)
    return(
      arr
    );
  }

  return (
    <div className={style.container}>
      <h1 className={style.container__title}>RICK AND MORTY'S API</h1>
      <div className={style.container__cards}>
        {/* {api.length!==0 && <Card data={api[0]}/>} */}
        {array()} 
        {/* {api.map(value => <Card key={value.id} data={value}/>)} */}
      </div>
    </div>
  );
}
