import React from "react";
import {add, sub, mult, div} from './Calc';


function App(){
    return(
        <>
        <ul>
            <li>{add(40, 4)}</li>
            <li>{sub(40, 4)}</li>
            <li>{mult(40,4)}</li>
            <li>{div(40, 3)}</li>
        </ul>
        
        </>
    );
}
export default App