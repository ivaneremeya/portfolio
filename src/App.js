import Cost from "./components/Costs/cost";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COST = [
  {
    id: 'c1',
    data: new Date("2022, 2, 12"),
    descr:'холодильник',
    amout:999.9 
  },
  {
    id: 'c2',
    data: new Date("2022, 2, 12"),
    descr:'х',
    amout:99.9 
  },
  {
    id: 'c3',
    data: new Date("2023, 2, 12"),
    descr:'холод',
    amout:9.9 
  },
]

function App() {
  const [cost, setCost] = useState(INITIAL_COST)
  


  const addCostHandler = (cost) => {
    setCost(prevCost => {
      return [...cost, prevCost]
    })
      
    
  }

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}></NewCost>
      <Cost cost = {cost}></Cost>
    </div>
  );
}

export default App;

