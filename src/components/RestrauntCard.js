import { IoStarSharp } from "react-icons/io5";
export const RestrauntCard = ({src,named,time,dishes,rating})=>{
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