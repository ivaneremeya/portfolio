import './NewCost.css'
import CostForm from './CostForm';

const NewCost = (prop) => {
    const saveCostDateHendler = (inputCostDate) => {
        const costDate = {
            ...inputCostDate,
            id: Math.random().toString(),
        }
        
        prop.onAddCost(costDate)
    }
    return (
        <div className="new-cost">
            <CostForm onSaveCostDate = {saveCostDateHendler}></CostForm>
        </div>
    )
}
 
export default NewCost;