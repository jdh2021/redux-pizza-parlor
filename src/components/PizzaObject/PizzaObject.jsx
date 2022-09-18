import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './PizzaObject.css';

const PizzaObject = ({pizza}) => {

    // state variables for conditional rendering of add, remove buttons
    const [pizzaAdded, setPizzaAdded] = useState(false);

    // dispatch to send selected pizzas and selected pizza prices to store
    const dispatch = useDispatch();

    const addPizza = () => {
        console.log('in addPizza');
        // pizza object dispatched to pizzas reducer. quantity property needed for line_item table
        dispatch({type: 'SET_PIZZAS', payload: {id: pizza.id, name: pizza.name, price: pizza.price, quantity: 1}});
        // pizza price dispatched to total reducer
        dispatch({type: 'SET_TOTAL', payload: pizza.price})
        // when true, remove button is displayed
        setPizzaAdded(true);
    }

    const removePizza = () => {
        console.log('in removePizza');
        // pizza object dispatched to pizzas reducer
        dispatch({ type: 'REMOVE_PIZZAS', payload: pizza})
        // pizza price dispatched to pizzas reducer
        dispatch({ type: 'REDUCE_TOTAL', payload: pizza.price})
        // when false, add button is displayed
        setPizzaAdded(false);
    }

    return <div className="PizzaObject" id={pizza.id}>
        <img src={pizza.image_path} width="250" height="200"/>
        <h3>{pizza.name}</h3>
        <h5>Description: {pizza.description}</h5>
        <h5>Price: ${pizza.price}</h5>
        {pizzaAdded === false ? <button onClick={addPizza}>Add</button> : <button onClick ={removePizza}>Remove</button>}
    </div>
}

export default PizzaObject;