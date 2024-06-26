
import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./components/Header"
import { Title } from "./components/Header";
import Body from "./components/Body";
//funxtional components
// const Heading=()=>(
//     <h1 id="title" key="h2">
//         Namaste React
//     </h1>
// )

 
    
//React  component


    
   
    
   
    const Footer = () => {
        return (
          <h4>App</h4>
        )
      }

    
  
//without return statement even we can write that 
const AppLayout = () => {
    return(
        <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
       
     
        
    )
}
 

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>);