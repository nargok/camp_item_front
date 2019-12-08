import React, { useState, useEffect } from 'react';

const App = () => {
  const [itemsData, setItemsData] = useState([])

  async function fetchAllItems() {
    const res = await fetch('http://localhost:3001/api/v1/items');
    const responseData = await res.json();
    console.log(responseData)
    console.log(responseData.data)
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

export default App;
