import { useContext, useState } from 'react'
import { CountContext } from './context';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={count}>
      <Count setCount={setCount}/>
    </CountContext.Provider>
     {/* <Count count={count} setCount={setCount}/> */}
    </>
  );
}

function Count({setCount}) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount}/>
  </div>
}
// function Count({count,setCount}) {
//   return <div>
//     {/* {count } */}
//     <CountRenderer count={count} />
//     <Buttons count={count} setCount={setCount}/>
//   </div>
// }

// function CountRenderer({count}) {
//   return <div>
//     {count}
//   </div>
// }

function CountRenderer() {
  const count = useContext(CountContext)

  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div> 
    <button onClick={() => {
      setCount(count+1)
    }}>increase</button>

    <button onClick={() => {
      setCount(count-1)
    }}>Decrease</button>
  </div>
}
// function Buttons({count,setCount}) {
//   return <div> 
//     <button onClick={() => {
//       setCount(count+1)
//     }}>increase</button>

//     <button onClick={() => {
//       setCount(count-1)
//     }}>Decrease</button>
//   </div>
// }

export default App
