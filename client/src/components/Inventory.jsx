import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

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

    const inventoryArray = inventory.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.UserId}</td><td>{item.item_name}</td><td>{item.description}</td><td>{item.quantity}</td><td><input type="button" value="Delete" /></td></tr> )

    return (
        <>
            <input type="text" value="Enter item name" />
            <input type="text" value="Enter quantity" />
            <input type="text" value="Enter description" />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Assigned To</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Remove</th>
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