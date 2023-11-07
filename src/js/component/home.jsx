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
						<BotonV onClick={randomVillainName()}></BotonV>

					</div>
					<div className="col-3"></div>
				</div>
			</div>


		</>
	);
};


let noun1 = [
	"El monstruo",
	"El psicópata",
	"El loco",
	"El ente",
	"El hechicero",
	"El fantasma",
	"El vampiro",
	"El zombi",
	"El chupacabras",
	"El asaltador",
	"El devorador",
	"El espíritu",
	"El espectro",
	"El intruso",
	"El mutante"
  ];
  
  let adjective = [
	"tenebroso",
	"oscuro",
	"horroroso",
	"maligno",
	"sobrenatural",
	"aterrador",
	"horripilante",
	"macabro",
	"inquietante",
	"sobrecogedor",
	"espeluznante",
	"peligroso",
	"terrible",
	"atroz",
	"caótico"
  ];
  
  let noun2 = [
	"del pantano",
	"del bosque fantasmal",
	"del cementerio abandonado",
	"del túnel",
	"del ascensor",
	"de la bahía lúgubre",
	"del averno",
	"del oscuro pasillo",
	"del sótano húmedo",
	"del universo paralelo",
	"de la casa embrujada",
	"de la mansión abandonada",
	"de la montaña embrujada",
	"de la dimensión desconocida",
	"del mundo de los sueños"
  ];
  
  function randomVillainName() {
	let randomNoun1 = noun1[Math.floor(Math.random() * noun1.length)];
	let randomAdjective =
	  adjective[Math.floor(Math.random() * adjective.length)];
	let randomNoun2 = noun2[Math.floor(Math.random() * noun2.length)];
	
  
	return `${randomNoun1} ${randomAdjective} ${randomNoun2}`;
	
  }
  


export default Home;
