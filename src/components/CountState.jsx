import { useState } from 'react'


const CountState = ({fn}) => {
    const [count, setCount] = useState(1)

  return (
    <>
          <button onClick={()=>{
            setCount((count-1 < 1? 1: count-1) )
            fn((count-1 < 1? 1: count-1))
            }}>-</button>
        <span>{count}</span>
        <button onClick={()=>{
          setCount(count+1)
          fn(count+1)
          }}>+</button>
    </>
  )
}

export default CountState