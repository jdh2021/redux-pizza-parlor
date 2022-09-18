import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PizzaObject from '../PizzaObject/PizzaObject';

const Select = () => {
   // state variables to display menu, array of pizzas on page
   const [pizzaMenuArray, setPizzaMenuArray] = useState([]);

   // use history to navigate between pages
   const history = useHistory();

   // useEffect calls getPizzas on page load
   useEffect(() => {
       console.log('in useEffect')
       getPizzas();
   }, []);
   

   // GET request to server to retrieve menu (array of pizza objects) 
   const getPizzas = () => {
       axios({
           method: 'GET',
           url: '/api/pizza'
       }).then((response) => {
           setPizzaMenuArray(response.data);
       }).catch((err)=>{
           console.log(err);
       });
   };

   return (
       <div >
           <h2>Select Your Pizza</h2>
           <button onClick={() => history.push('/form')}>Next</button>
           {   // map over menu array and return each pizza object
               pizzaMenuArray.map((pizza) => (
                   <PizzaObject key={pizza.id} pizza={pizza} />
               ))
           }
       </div>
   )
}

export default Select;