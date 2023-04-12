import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import useCookie from "./useCookie"
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button} from 'react-bootstrap';




function MyInventory() {
    const [inventory, setInventory] = useState([]);
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");
    const [editState, setEditState] = useState(false);
    const navigate = useNavigate();
    const [cookie, updateCookie] = useCookie("userId", null )

    useEffect(() => {
        fetch(`http://localhost:8080/my-inventory/${cookie}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((res) => res.json())
            .then((data) => setInventory(data))
    }, [addItem, deleteItem, cookie]);



    const inventoryArray = inventory.map((item) => <tr key={item.id} contentEditable={editState}>
        <td>{item.id}</td>
        <td>{item.user_id}</td>
        <td>{item.item_name}</td>
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        <td><input type="button" value="View/Update" onClick={e => navigate(`my-inventory/${item.id}`)}/></td>
        <td><input type="button" value="Delete" onClick={e => deleteItem(item)}/></td>
        </tr> )

    function addItem(){
        console.log("Adding item")
        fetch('http://localhost:8080/inventory/', {
        method:'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({user_id: cookie, item_name: itemName, quantity: quantity, description: description})
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
        <br></br>
        <h1>Inventory Management System</h1>
        <hr></hr>

        <h3 style={{
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
        }}>Add New Item</h3>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" >Item Name</InputGroup.Text>
        <Form.Control
          onChange={e => setItemName(e.target.value)}
          placeholder="Enter item name"
          aria-label="itemName"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Quantity</InputGroup.Text>
        <Form.Control
        onChange={e => setQuantity(e.target.value)}
          placeholder="Enter number"
          aria-label="quantity"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Item Description</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Item Description" onChange={e => setDescription(e.target.value)} />
        <Button variant="outline-secondary" className="btn" id="button-addon2" onClick={() => addItem()}>
          Add New Entry
        </Button>
      </InputGroup>
      <hr></hr>
      <br></br>
      <div style={{
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
        }}>

        <h3>My Inventory Items</h3>

      </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Assigned To</th>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>View/Edit</th>
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

export default MyInventory;