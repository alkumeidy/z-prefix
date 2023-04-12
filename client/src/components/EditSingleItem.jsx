import React, { useEffect, useState } from "react";
import useCookie from "./useCookie"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button} from 'react-bootstrap';



function SingleItem() {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const itemId = window.location.pathname.split("/").pop()
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");
    const [cookie, updateCookie] = useCookie("userId", null )


    useEffect(() => {
        fetch(`http://localhost:8080/inventory/${itemId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((res) => res.json())
            .then((data)=>{setItemName(data[0].item_name);
            setQuantity(data[0].quantity);
         setDescription(data[0].description);
        setItem(data[0])})

            .then(setLoading(false))
    }, []);

    function submitEdit(){
      console.log("Adding item")
      fetch(`http://localhost:8080/inventory/${itemId}`, {
      method:'PUT',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({id: itemId, user_id: cookie, item_name: itemName, quantity: quantity, description: description})
      })
  }
if (loading) {return <p>Loading, please wait...</p>}

   else return (
        <>
     <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" >Item Name</InputGroup.Text>
        <Form.Control
          onChange={e => setItemName(e.target.value)}
          placeholder="Enter item name"
          value={itemName}
          aria-label="itemName"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Quantity</InputGroup.Text>
        <Form.Control
        onChange={e => setQuantity(e.target.value)}
          placeholder="Enter number"
          value={quantity}
          aria-label="quantity"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Item Description</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Item Description" value={description} onChange={e => setDescription(e.target.value)} />
        <Button variant="outline-secondary" className="btn" id="button-addon2" onClick={e => submitEdit()}>
          Edit Entry
        </Button>
      </InputGroup>
      </>
    );
}

export default SingleItem;