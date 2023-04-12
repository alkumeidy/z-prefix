import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

//window.sessionStorage.setItem("reducer", JSON.stringify([{"loggedIn": false, "user": {}}]));
const initialStateSaved =  window.sessionStorage.getItem("reducer") && JSON.parse( window.sessionStorage.getItem("reducer"));

function Inventory() {

    const [inventory, setInventory] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/inventory", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((res) => res.json())
            .then((data) => setInventory(data))
    }, []);

    const inventoryArray = inventory.map((item) => <tr key={item.id} contentEditable={false}>
        <td>{item.id}</td>
        <td>{item.user_id}</td>
        <td>{item.item_name}</td>
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        </tr> )

    return (
        <>
      <h3> Inventory Table</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Assigned To</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryArray}
                </tbody>
            </Table>
        </>
    );
}

export default Inventory;