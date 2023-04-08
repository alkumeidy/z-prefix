import React, { useEffect, useState, useContext } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Row, Col} from 'react-bootstrap';
import App from "../App";

function Inventory() {
    const [inventory, setInventory] = useState([]);
    const [itemName, setItemName] = useState(""); 
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");
    const [editState, setEditState] = useState(false);

    // const loggedIn = useContext()

    useEffect(() => {
        fetch("http://localhost:8080/inventory", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((res) => res.json())
            .then((data) => setInventory(data))
    }, [addItem, deleteItem]);

    const inventoryArray = inventory.map((item) => <tr key={item.id} contentEditable={editState}>
        <td>{item.id}</td>
        <td>{item.user_id}</td>
        <td>{item.item_name}</td>
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        </tr> )

    function addItem(){
        console.log("Adding item")
        fetch('http://localhost:8080/inventory/', {
        method:'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({user_id: 1, item_name: itemName, quantity: quantity, description: description})
        })
    }

    function deleteItem(item){
        console.log("Item: ",item)
        fetch(`http://localhost:8080/inventory/${item.id}`, {
            method:'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(item)
            })
        }

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