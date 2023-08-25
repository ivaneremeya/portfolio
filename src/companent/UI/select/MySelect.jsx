import React from "react";


function MySelect ({options, defoltVel, value ,onChange}) {
    return (
        <select value={value} onChange= { event => onChange(event.target.value)}>
          <option disabled value=""> {defoltVel}</option>
          {options.map(opt => 
            <option value= {opt.value} key={opt.value}>
                {opt.name}</option>
          )}
        </select>
    )
}

export default MySelect;