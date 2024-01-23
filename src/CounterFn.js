import React, { useState } from "react";
import App from "./App";

function Counter({ max  }){
    let [ clicks, setClicks ] = useState(0);
    let inc1 = () => (clicks < max) ? setClicks(clicks + 1) : null;
    let inc2 = () => (clicks < max) ? setClicks(clicks + 100) : setClicks(max - clicks);
    

        return <div>
                <span onClick={inc1}>{ clicks }</span>
                <button type="button" onClick={inc1} disabled={ clicks == max }> + </button>
                <h5> счет +100</h5>
                <span onDoubleClick={inc2}> { clicks }</span>
                <button type="button" onClick={inc2}> ++ </button>
        </div>
}

export default Counter;
