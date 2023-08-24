import "./CostItem.css"
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function CostItem(prop) {
    // переменная состояния
    const [descr, setDescr] = useState(prop.descr)


    const ChangeDescr = () => {
        // тут в сетдескр присваивается новое значение и парсится функция
        setDescr("new text")
        // descr = "NewText"
        console.log(descr)
    }

    return (
        <Card className="cost-item">

            <CostDate data= {prop.data}></CostDate>
            <div className="cost-item__description">
                <h2>{descr}</h2>
                <div  className="cost-item__price">$ {prop.amout}</div>  
                <button onClick={ChangeDescr}>
                    gold
                </button>
            </div>
        </Card>
    );
}

export default CostItem;