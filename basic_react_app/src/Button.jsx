function handleClick() {
  console.log("Hello!");
}

function handleHover() {
  console.log("Bye!");
}

function handleDbClick(){
    console.log("Double clicked!");
}

export default function Button() {
  return (
    <div>
      <p>
        <button onClick={handleClick}>Greet Hello!</button>
      </p>
      <p onMouseOver={handleHover}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia
        laborum id fugit numquam autem molestiae rem deserunt, impedit enim hic
        quae adipisci eligendi, facilis odit, dicta optio suscipit minus!
      </p>
      <p>
        <button onDoubleClick={handleDbClick}>Greet Bye!</button>
      </p>
    </div>
  );
}
