import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';



function SingleItem() {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const itemId = window.location.pathname.split("/").pop()


    useEffect(() => {
        fetch(`http://localhost:8080/inventory/${itemId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((res) => res.json())
            .then((data) => setItem(data[0]))
            .then(setLoading(false))
    }, []);
if (loading) {return <p>Loading, please wait...</p>}

   else return (
        <>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.item_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Quantity: {item.quantity}</Card.Subtitle>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
    </Card>
        </>
    );
}

export default SingleItem;