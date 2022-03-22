import Card from './views/Card';
import style from './App.module.css';
import { useEffect, useState } from 'react';
import Next from './views/Next';

export default function App() {
  const[ api, setApi ] = useState({});

  const handleApi = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    setApi(data);
  };

  useEffect(() => {
    handleApi("https://rickandmortyapi.com/api/character");
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.container__title}>RICK AND MORTY'S API</h1>
      <div className={style.container__cards}>
        {api.results?.map(value => <Card key={value.id} data={value}/>)}
      </div>
      <Next api={api.info} onPage={handleApi}/>
    </div>
  );
}
