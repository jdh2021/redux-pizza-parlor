import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Checkout.css";
import axios from "axios";

const Checkout = () => {
    const order = useSelector((store) => store);
    const pizzas = useSelector((store) => store.pizzas);
    // const pizzas = [
    //     { id: 1, name: "Tomato Soup", price: 12.99 },
    //     { id: 2, name: "Onomatopizza", price: 14.99 },
    // ];
    const dispatch = useDispatch();
    const history = useHistory();

    const validate = () => {
        console.log("Checking out");
        var ready = confirm("Press OK to Checkout");
        if (ready) {
            sendOrder();
        }
    };

    const sendOrder = () => {
        console.log("Sending order...");
        axios({
            method: "POST",
            url: "/api/order",
            data: {
                customer_name: order.customer_name,
                street_address: order.street_address,
                city: order.city,
                zip: order.zip,
                type: order.type,
                total: order.total,
                pizzas: order.pizzas,
            },
        })
            .then((response) => {
                // After confirmation and POST, clear all reducers
                dispatch({ type: "CLEAR_ALL" });
                // Back to select pizzas page
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });
    };

    return (
        <>
            <h3> Step 3: Checkout </h3>
            <h4> {order.customer_name} </h4>
            <h4> {order.street_address} </h4>
            <h4> {order.city} </h4>
            <h4> {order.zip} </h4>
            <h4> {order.type} </h4>
            <h4> {order.total} </h4>
            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Cost </th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas.map((pizzas) => (
                        <tr key={pizzas.id}>
                            <td>{pizzas.name}</td>
                            <td>{pizzas.price}</td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td>Name of pizza</td>
                        <td>Cost of pizza</td>
                    </tr> */}
                </tbody>
                <tfoot>
                    {/* <tr>
                        <td></td>
                        <td></td>
                    </tr> */}
                </tfoot>
            </table>
            <button onClick={validate}> CHECKOUT </button>
        </>
    );
};

export default Checkout;
