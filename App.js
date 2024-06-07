
import React from "react";
import ReactDOM from "react-dom/client";
import { IoFastFood } from "react-icons/io5";
const Title = ()=>(
    <h1 id="title" className="name" key="h2">
    <div className="food"><IoFastFood /></div>
        Food villa
    </h1>
)

//funxtional components
// const Heading=()=>(
//     <h1 id="title" key="h2">
//         Namaste React
//     </h1>
// )

 
    
//React  component
const Header = () => 
    {
        return (
            <div className="header">
               <Title/>
             <div className="nav-items">
             <ul >
                <li style={{fontSize:"23px"}}>Home</li>
                <li style={{fontSize:"23px"}}>About</li>
                <li style={{fontSize:"23px"}}>Contact</li>
                <li style={{fontSize:"23px"}}>Cart</li>
                
             </ul>
             </div>
            </div>
          
        )
    }

    const RestrauntCard = ()=>{
        
    }
   
    
    const Body = () => {
      return (
        <h4>App</h4>
      )
    }
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