import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Form = () => {
    const history = useHistory();
    const name = useSelector(store => store.name);
    const address = useSelector(store => store.address);
    const city = useSelector(store => store.city);
    const zip = useSelector(store => store.zip);
    const type = useSelector(store => store.type);

    const dispatch = useDispatch();
    const handleCustomerName = (event) => {
        dispatch({ type: 'SET_CUSTOMER_NAME', payload: event.target.value});
    }
    const handleCustomerAddress = (event) => {
        dispatch({ type: 'SET_STREET_ADDRESS', payload: event.target.value});
    }
    const handleCustomerCity = (event) => {
        dispatch({ type: 'SET_CITY', payload: event.target.value});
    }
    const handleCustomerZip = (event) => {
        dispatch({ type: 'SET_ZIP', payload: event.target.value});
    }

    const handlePickup = (event) => {
        dispatch({ type: 'SET_TYPE', payload: event.target.value});
    }
    const submit = () => {
        history.push('/checkout');
    }
    return (
    <>
            <h3>Enter Customer Information</h3>
            <br/>
            <label>Customer Name</label>
            <input value={name} onChange={handleCustomerName}  type="text" />
            <br/>
            <br/>
            <label>Customer Address</label>
            <input value={address} onChange={handleCustomerAddress}  type="text" />
            <br/>
            <br/>
            <label>Customer City</label>
            <input value={city} onChange={handleCustomerCity}  type="text" />
            <br/>
            <br/>
            <label>Customer Zip</label>
            <input value={zip} onChange={handleCustomerZip}  type="text" />
            <br/>
            <br/>
            
            <input onClick={((event) => dispatch ({ type: "SET_TYPE", payload: event.target.value}))} type="radio" value="pickup" name="type"></input> 
            <label>Pickup</label>
            <input onClick={((event) => dispatch ({ type: "SET_TYPE", payload: event.target.value}))} type="radio" value="delivery" name="type"></input> 
            <label>Delivery</label>

            <button onClick={submit}>Submit</button>
            
    </>

    )
    
}

export default Form;