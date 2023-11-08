import React from "react";

const BotonH = () => {
    return (
        
              

            <button type="button" className="btn btn-primary btn-lg m-2" onClick={() => {
                document.querySelector("h4").innerHTML = "Hola soy un héroe";
              }} >Heroe</button>  
           
    );
};

export default BotonH;

