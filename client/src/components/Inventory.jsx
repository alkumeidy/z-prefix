import React, { useEffect, useState } from "react";

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

      const inventoryArray = inventory.map((item) => <li>{item.item_name}</li>)

    return (
        <>
        <ul>
            {inventoryArray}
        </ul>
        </>
    );
  }
  
  export default Inventory;