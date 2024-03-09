import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function CakeContainer(props) {
  return (
    <div>
        <h2>No of cakes: {props.number_of_cakes}</h2>
        <button onClick={props.buyCake}>cake</button> 
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
        buyCake:()=>dispatch(buyCake())
    }

}
export default connect(
    mapStatetoProps,
    mapDispatchtoProps
    )(CakeContainer)
