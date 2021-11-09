import './../../App.css';
import './Counter.css'
function CounterItem(props) {
  return (
    <div className="container">
       <button onClick={props.increase}>+</button>
       {props.count}
       <button onClick={props.decrease}>-</button>
    </div>
  );
}

export default CounterItem;
