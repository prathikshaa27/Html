import React from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'


function HooksCakeContainer() {
    //calling the useSelector, accepts fun as params, receives the redux state as its argument
    const number_of_cakes =useSelector(state=>state.cake.number_of_cakes)
    //returns the reference to the dispatch function from the redux store
   // saving the reference in a vaiable
    const dispatch = useDispatch()
  return (
    <div>
        <h2>No of Cakes - {number_of_cakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer