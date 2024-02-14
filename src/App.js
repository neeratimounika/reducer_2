import React, { useReducer } from 'react'
import './App.css'

function counterReducer(state,action){
  switch(action.type){
    case 'INC':return state+1;
    case 'DEC':return state-1;
    case 'RESET':return 0;
    default : return state
  }
  

}

const App = () => {
  const [counter,dispatch] = useReducer(counterReducer,0)
  return (
    <div className='mt-4 d-flex' >
      <button className='btn btn-primary m-2' onClick={()=>{
        dispatch({type:'DEC',payload:-1})
      }}>-</button>
      <div className='m-2'>Counter:{counter}</div>
      <button className='btn btn-primary m-2' onClick={()=>{
        dispatch({type:'INC',payload:1})
      }}>+</button>
      <button className='btn btn-danger m-2' onClick={()=>{
        dispatch({type:'RESET',payload:1})
      }}>RESET</button>
    </div>
  )
}

export default App
