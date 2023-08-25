import React from "react";
import cl from './MyModal.module.css';


function MyModal({children, vizible, setVizible}) {

    const rootClasses = [cl.myModal];
    if(vizible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className= {rootClasses.join(' ')} onClick = {() => setVizible(false)}>
            {/* **************************************************************************** */}
            <div className= {cl.myModalContent} onClick={e => e.stopPropagation()}>
            {children}
            </div>
        </div>
    )
}

export default MyModal;