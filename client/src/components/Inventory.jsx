import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";


function Inventory() {

    const [inventory, setInventory] = useState([]);
    const navigate = useNavigate();



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
        <td>{item.description.substr(0,100)}...</td>
        <td>{item.quantity}</td>
        <td><input type="button" value="View" onClick={e => navigate(`/inventory/${item.id}`)}/></td>
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
                        <th>View Details</th>
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