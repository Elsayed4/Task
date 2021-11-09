import './../../App.css';
import './Counter.css';
import CounterItem from './CounterItem';
import {useState} from 'react';
function App() {

const [count,setCount] = useState(2)

   const increase = () =>{
      setCount(count + 1);
   }

   const decrease = () =>{
    setCount(count - 1);
 }

  return (
    <section id="counter">
      <CounterItem increase={increase} decrease={decrease} count={count}/>
    </section>
  );
}

export default App;
