export default function Next(props){
  const { onPage, api } = props;

  return(
    <div>
      <button onClick={() => onPage(api.prev)}>
        Prev
      </button>
      <button onClick={() => onPage(api.next)}>
        Next
      </button>
    </div>
  );
}