import React from "react";
import Cabecera from "./cabecera";
import BotonH from "./botonHeroe";
import BotonV from "./botonVillano";
import Descripcion from "./descripcion";




const Home = () => {

	

	  
	return (
		<>
			<Cabecera></Cabecera>
			
			<div className="container text-center">
            <div className="row align-items-center mt-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <h4 className="display-6" id="yourVillainName">Tu nombre</h4>
                </div>
                <div className="col-1"></div>
           	 </div>
        	</div>


			<Descripcion></Descripcion>

			<div className="container text-center mt-5">
				<div className="row align-items-center mt-5">
					<div className="col-3"></div>
					<div className="col-6">

						<BotonH id="botonH" ></BotonH>
						<BotonV id="botonV" ></BotonV>

					</div>
					<div className="col-3"></div>
				</div>
			</div>


		</>
	);
};





export default Home;
