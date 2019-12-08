import React, { useState, useEffect } from 'react';

const Items = () => {
  const [itemsData, setItemsData] = useState([])

  async function fetchAllItems() {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/api/v1/items`);
    const responseData = await res.json();
    setItemsData(responseData.data);
  }

  useEffect(() => {
    fetchAllItems()
  }, [])

  return (
    <div className="App">
     <ul>
       {
         itemsData.map((item, index) => (
           <li key={index}>
             {item.name}
           </li>
         ))
       }
     </ul> 
    </div>
  );
}

export default Items;
