import style from './style.module.css';

export default function Card(props){
  const { data } = props;
  
  return(
    <div className={style.card}>
      <img className={style.card__image} src={data.image} alt=""/>
      <p className={style.card__name}>{data.name}</p>
      <p className={style.card__species}>Specie: {data.species}</p>
    </div>
  );
}