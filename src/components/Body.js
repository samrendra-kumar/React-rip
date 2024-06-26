
import { RestrauntList } from "../../config";
import { RestrauntCard } from "./RestrauntCard";
import { useState } from "react";
const Body = () => {
    const[searchText,setSearchText]=useState("");
    return (
        <>
        <div className="search-container">
            <input type="text" 
            className="search-input" 
            placeholder="Search"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            />
            <button className="search-btn">Search</button>
        </div>
            <div className="container">
        {RestrauntList.map((restraunt)=>
          {
            return <RestrauntCard src={restraunt.src} named={restraunt.named} time={restraunt.time} dishes={restraunt.rating}/>
          })}
       

      </div>
        
        
        
        </>
  
     
    )
  }

  export default Body ;