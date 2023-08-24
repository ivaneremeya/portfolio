import CostItem from "./CostItem";
import './cost.css';
import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import React, { useState } from "react";

function Cost(prop) {

    const [selectedYear, setSelectedYear] = useState('2022');

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredCosts = prop.cost.filter(cos => {
        return cos.data.getFullYear().toString() === setSelectedYear;
    })

    return (
            <Card className="costs">
                <CostsFilter year = {selectedYear} onChangeYear = {yearChangeHandler}/>
                {console.log(prop.cost)}
                {prop.cost.map((cos) => 
                    <CostItem  key = {cos.id} data={cos.data} descr={cos.descr} amout={cos.amout}></CostItem>
                   
                )}
                {console.log(filteredCosts)}

                {/* <CostItem data={prop.cost[0].data} descr={prop.cost[0].amout} amout={prop.cost[0].amout}></CostItem>
                <CostItem data={prop.cost[1].data} descr={prop.cost[1].amout} amout={prop.cost[1].amout}></CostItem>
                <CostItem data={prop.cost[2].data} descr={prop.cost[2].amout} amout={prop.cost[2].amout}></CostItem> */}
            </Card>
    )
}

export default Cost;