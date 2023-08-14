import React, { useEffect, useState } from "react";
import { initialtours } from "./tours";
import Tour from "./Tour";

const Tourlist = ()=>{

    const[tours, setTours] = useState(initialtours)
    const [isLoading, setIsloading] = useState(false)
    
    useEffect(()=>{
        setIsloading(true)
        setTimeout(()=>{setTours(initialtours),setIsloading(false)},2000)
        
    },[])

    function deleteTourBtn(tourId){
        const deletedTour = tours.filter((t)=> tourId !== t.id)
        setTours(deletedTour)
    }


    return(
        <div>
            {isLoading ? (<p className="loading">Loading...</p>) : tours.length === 0 ? 
            (<div><p>No more tour</p><button onClick={()=>setTours(initialtours)} className="btn">Refresh</button></div>)  :  
            
            (<div>{tours.map((tour)=>
                <Tour key={tour.id} tour={tour} deleteTourBtn={deleteTourBtn}/>
               
                
            )}</div>)}
        
        </div>
        
    )
}

export default Tourlist