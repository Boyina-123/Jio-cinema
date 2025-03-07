import react from "react"
import  "./Data.css" 
function Data(){
    return(
        <div className="data">
            <div>
                <h1 id="d1">Collage id :</h1>
                <input id="d4" type="text" size={10} />
                <h1 id="d1"> First Name: </h1>
                <input id="d4"type="text" />
                <h1 id="d1"> Last Name: </h1>
                <input id="d4"type="text" />
                <h1 id="d1"> Enter Email:</h1>
                <input id="d4"type="text" />
                <h1 id="d1"> Enter Password: </h1>
                <input id="d4"type="text" />
                <button id="d3">Submit</button>
            </div>
            <div>
                <h2> </h2>
            </div>
        </div>
        
    )
}
export default Data