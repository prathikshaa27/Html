import React,{useState} from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function NewCakeContainer(props) {
    const[number,setNumber]=useState(1)
  return (
    <div>
        <h2>No of cakes: {props.number_of_cakes}</h2>
        <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
        <button onClick={()=>props.buyCake(number)}>Buy {number} cake</button> 
    </div>
  )
}
//dispatch the buy cake action on a button click
//defining a fun , redux state a param and returns a object
//state from redux store is  mapped to a component prop
const mapStatetoProps =(state)=>{
    return{
        number_of_cakes:state.cake.number_of_cakes

    }
}
//defing a fun redux dispatch methid a s a paarm and returns a object
//dispatch of an action creator to the prop in an component
//second additioanl prop :buyCake
const mapDispatchtoProps =(dispatch)=>{
    return{
        buyCake:number=>dispatch(buyCake(number))
    }

}
export default connect(
    mapStatetoProps,
    mapDispatchtoProps
    )(NewCakeContainer)
