import { useEffect, useState } from "react";
import { avatarList } from "../constant/data"
import Card from "./Card";

const ClientCard=({className})=>{
     const [counter, setCounter] = useState(0);
      const [counter2, setCounter2] = useState(0);
      useEffect(() => {
        if (counter < 25) {
          const timer = setTimeout(() => {
            setCounter(prev=>prev+1)
          }, 100);
          return () => clearTimeout(timer);
        }
      }, [counter]);
     useEffect(() => {
        if (counter2<20) {
          const timer = setTimeout(() => {
            setCounter2(prev=>prev+1)
          }, 100);
          return () => clearTimeout(timer);
        }
      }, [counter2]);
    return(
   <div className="flex items-center mt-8 flex-col">
             <Card counter={counter} className={className}/>
{            <h2 className="mt-3">Our {counter2}k+ Satisficed Customer</h2>}
          </div>
    )
}
export default ClientCard