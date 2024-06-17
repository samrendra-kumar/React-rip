
import React from "react";
import ReactDOM from "react-dom/client";
import { IoFastFood } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
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

 const RestrauntList = [
  {
    src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b4817ea5bb972089f419c6f14e5a0bdd",
    named:"Burger-king",
    rating:"4.1",
    time:"35-40min",
    dishes:"Chinese,AsianmTibetan,Desserts"
  },
  {
    src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    named:"Burger-king",
    rating:"4.1",
    time:"35-40min",
    dishes:"Chinese,AsianmTibetan,Desserts"
  },
  {
    src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ubypvyevkrogfvj1ygio",
    named:"Burger-king",
    rating:"4.1",
    time:"35-40min",
    dishes:"Chinese,AsianmTibetan,Desserts"
  },
  {
    src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xxh8c7ggvlhlzlx3oyv4",
    named:"Burger-king",
    rating:"4.1",
    time:"35-40min",
    dishes:"Chinese,AsianmTibetan,Desserts"
  },
  {
    src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xxh8c7ggvlhlzlx3oyv4",
    named:"Burger-king",
    rating:"4.1",
    time:"35-40min",
    dishes:"Chinese,AsianmTibetan,Desserts" 
  },
  {
    src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xxh8c7ggvlhlzlx3oyv4",
    named:"Burger-king",
    rating:"4.1",
    time:"35-40min",
    dishes:"Chinese,AsianmTibetan,Desserts"
  }]
 
    
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

    const RestrauntCard = ({src,named,time,dishes,rating})=>{
      const truncateName = (named) => {
         if(named.length > 15) {
          return named.substring(0, 15) + "...";
        }
        return named;
}
      
        return(
          
          <div className="card">
            <div className="foodImage">
            <img src={src}
            ></img>
            </div>
           <div className="specifications">
          <h2>{truncateName(named)}</h2> 
            <h3><IoStarSharp />{rating} {time}</h3>
            
            <h4>{dishes}</h4>
           </div>
            
          </div>
         
        )
    }
   
    
    const Body = () => {
      return (
        <div className="container">
          {RestrauntList.map((restraunt)=>
            {
              return <RestrauntCard src={restraunt.src} named={restraunt.named} time={restraunt.time} dishes={restraunt.rating}/>
            })}
         

        </div>
       
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