import React from "react";
import Cabecera from "./cabecera";
import BotonH from "./botonHeroe";
import BotonV from "./botonVillano";
import Nombre from "./nombre";
import Descripcion from "./descripcion";




const Home = () => {
	return (
		<>
			<Cabecera></Cabecera>
			<Nombre></Nombre>
			<Descripcion></Descripcion>

			<div className="container text-center mt-5">
				<div className="row align-items-center mt-5">
					<div className="col-3"></div>
					<div className="col-6">

						<BotonH></BotonH>
						<BotonV></BotonV>

					</div>
					<div className="col-3"></div>
				</div>
			</div>


		</>
	);
};

export default Home;
