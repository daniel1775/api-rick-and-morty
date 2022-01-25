import { useState } from 'react';
import style from './style.module.css';

export default function Search(){
  const[searchResult, setSearchResult] = useState("");

  return(
    <form className={style.search}>
      <input className={style.search__input} type="text" search={searchResult} onChange={(e) => setSearchResult(e.target.value)}/>
      <button className={style.search__button}>Search</button>
    </form>
  );
}