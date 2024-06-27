
import { RestrauntList } from "../../config";
import { RestrauntCard } from "./RestrauntCard";
import { useState } from "react";

function filterData(searchText,restraunts)
{
  return restraunts.filter((restraunt)=>
  restraunt.named.includes(searchText)) ;
}



const Body = () => {

    const[restraunts,setRestaurants]=useState(RestrauntList);
    const[searchText,setSearchText]=useState("");
    const[searchTab,setSearchTab]=useState(true);
    // const[searchClick,setSearchClick]=useState(true);
    return (
        <>
        <div className="search-container">
            <input type="text" 
            className="search-input" 
            placeholder="Search"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            />
           
            <button 
            className="search-btn" 
            onClick={()=>
            {  
              if(searchTab)
                {
                  setRestaurants(RestrauntList)
                }else
                {
                  const data=filterData(searchText,restraunts) ;
                  setRestaurants(data);
                }
               setSearchTab(!searchTab)   
            }}>
              Search</button> 
        </div>
            <div className="container">
        {restraunts.map((restraunt)=>
          {
            return <RestrauntCard src={restraunt.src} named={restraunt.named} time={restraunt.time} dishes={restraunt.rating}/>
          })}
       

      </div>
        
        
        
        </>
  
     
    )
  }

  export default Body ;