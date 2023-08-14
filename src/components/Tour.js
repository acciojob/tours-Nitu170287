import React,{useState} from "react"


const Tour =({tour,deleteTourBtn})=>{
const [showMore, setShowMore] = useState(false)


    return(
        
            <div key={tour.id} className="single-tour" id="tour-item-para-rec6d6T3q5EBIdCfD">
                    <img src={tour.image} alt="" />
                    <div>
                        <p className="title">{tour.name}</p>
                        <p className="tour-info">{showMore ? tour.info : tour.info.slice(0,194)+"..."}</p>
                        <button onClick={()=>setShowMore(prevItem => !prevItem)}>{showMore ? "see less" : "show more"}</button>
                        <p className="tour-price">{tour.price}</p>
                    </div>
                    <button className="delete-btn" id="delete-btn-rec6d6T3q5EBIdCfD" onClick={()=>deleteTourBtn(tour.id)}>Delete Tour</button>
            </div>
        
    )
}
export default Tour