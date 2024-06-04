
import React from "react";
import ReactDOM from "react-dom/client";

//React element
const Heading=()=>(
    <h1 id="title" key="h2">
        Namaste React
    </h1>
)

 
    
//React  component
const HeaderComponent = () => 
    {
        return (
            <div>
             <Heading/>   {/*component composition (component inside the component ) */}
                  <h1>functional component </h1>
                  <h1>functional component </h1>
            </div>
          
        )
    }
//without return statement even we can write that 
const HeaderComponent2 = ()=>(
    <div>
        <h1>Namaste react functional component</h1>
        <h2>This is a h2 tag</h2>
    </div>
)
 

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeaderComponent/>);