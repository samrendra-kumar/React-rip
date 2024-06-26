
import { IoFastFood } from "react-icons/io5";
export const Title = ()=>(
    <h1 id="title" className="name" key="h2">
    <div className="food"><IoFastFood /></div>
        Food villa
    </h1>
)
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
   
    export default Header ;