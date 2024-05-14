import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './action'

function Home() {

  let dis = useDispatch()
  let x = useSelector(state => state.jadav)
  return (
    <div>
      <button onClick={()=>{dis(inc())}}>+</button>
      {x}
      <button onClick={()=>{dis(dec())}}>-</button>
    </div>
  )
}

export default Home
