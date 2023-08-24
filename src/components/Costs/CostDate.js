import "./CostDate.css"
function CostDate(prop) {

    const month = prop.data.toLocaleString("ru-RU", { month: "long"});
    const year = prop.data.getFullYear();
    const day = prop.data.toLocaleString("ru-RU", { day: "2-digit"});

    return (
        <div className="cost-date">
            <div className="cost-date__month">{month}</div>
            <div className="cost-date__year">{year}</div>
            <div className="cost-date__day">{day}</div>
        </div>
            
    );
}

 export default CostDate; 