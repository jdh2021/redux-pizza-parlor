import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Admin = () => {

    const [orderData, setOrderData] = useState([]);

    useEffect (() => {
        getOrders();
    }, []);
 
    const getOrders = () => {
    axios({
        type: "GET",
        url: "/api/order"})
        .then((response) => {
            setOrderData(response.data);
        })
        .catch(error => {
            console.log(error);
            alert("Something went wrong");
        })
    }

    return (
        <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
        </tr>
    </thead>
    <tbody>
         {orderData.map((order) => {
            const date = new Date(order.time);
            const formattedDate = date.toLocaleString();

         return <tr key={order.id}>
            <td>{order.customer_name}</td>
            <td>{formattedDate}</td>
            <td>{order.type}</td>
            <td>{order.total}</td>
            </tr>
        })}
    </tbody>
</table>
    )
}



export default Admin;