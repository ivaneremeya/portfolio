import './CostForm.css';
import React, { useState } from 'react';

const CostForm = (prop) => {
    // timeCode(4.17.21)
    const [inputName, setName] = useState('');
    const [inputDate, setDate] = useState('');
    const [inputAmout, setAmout] = useState('');


    const dateChangeHandler = (event) => {
       setDate(event.target.value);
    
    }

    const descrChangeHandler = (event) => {
        setName(event.target.value);
    }

    const amoutChangeHandler = (event) => {
        setAmout(event.target.value);
    }

    const submitHendler = (e) => {
        e.preventDefault();
        const costDate = {
            descr: inputName,
            amout: inputAmout,
            data: new Date(inputDate)
        }

        setName('');
        setAmout('');
        setDate('')

        prop.onSaveCostDate(costDate);

    }



    return (
        <form onSubmit={submitHendler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" value={inputName} onChange={descrChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min='0.01' step='0.01' value={inputAmout} onChange={amoutChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="date" min='2019-01-01' max='2023-08-17' value={inputDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить расход</button>
                </div>

            </div>
        </form>
    )
}

export default CostForm;