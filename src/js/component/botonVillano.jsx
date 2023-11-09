import React  from "react";


const BotonV = () => {

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


    if (randomNoun1 === "El monstruo") {
      document.getElementById("description").textContent =
        "Ser de naturaleza sobrenatural o artificial que causa miedo o terror. Puede ser una criatura grotesca o monstruosa, o simplemente algo que es desconocido o inexplicable. Los monstruos suelen representar lo desconocido o lo que nos aterroriza.";
    } else if (randomNoun1 === "El psicópata") {
      document.getElementById("description").textContent =
        "Persona con rasgos antisociales, egocéntricos y violentos. Los psicópatas suelen carecer de empatía y remordimiento, y son propensos a la violencia. Los psicópatas pueden ser muy peligrosos, y a menudo son responsables de crímenes violentos.";
    } else if (randomNoun1 === "El loco") {
      document.getElementById("description").textContent =
        "Persona que ha perdido la razón o el juicio. Los locos suelen tener problemas para comprender la realidad y pueden tener comportamientos o creencias que son considerados extraños o irracionales. Los locos pueden ser peligrosos, pero también pueden ser víctimas de su propia condición.";
    } else if (randomNoun1 === "El ente") {
      document.getElementById("description").textContent =
        "Ser o entidad sobrenatural o no identificada. Los entes suelen ser seres misteriosos o inexplicables, y pueden ser objeto de creencias o supersticiones. Los entes pueden ser buenos o malos, y pueden tener un impacto significativo en la vida de las personas que los experimentan.";
    } else if (randomNoun1 === "El hechicero") {
      document.getElementById("description").textContent =
        "Ser que usa la magia para controlar fuerzas sobrenaturales. Los hechiceros suelen ser poderosos y pueden realizar una variedad de tareas, como lanzar hechizos, crear pociones y convocar espíritus.";
    } else if (randomNoun1 === "El fantasma") {
      document.getElementById("description").textContent =
        "Alma de un difunto que regresa al mundo de los vivos. Los fantasmas suelen estar asociados con la muerte y el miedo, y pueden ser benevolentes o malévolos.";
    } else if (randomNoun1 === "El vampiro") {
      document.getElementById("description").textContent =
        "Ser sobrenatural que se alimenta de sangre humana. Los vampiros suelen ser inmortales y tienen una variedad de poderes sobrenaturales, como la fuerza, la velocidad y la capacidad de volar.";
    } else if (randomNoun1 === "El zombi") {
      document.getElementById("description").textContent =
        "Cadáver reanimado que es controlado por un espíritu maligno. Los zombis suelen ser lentos y torpes, pero pueden ser muy peligrosos en grandes números.";
    } else if (randomNoun1 === "El chupacabras") {
      document.getElementById("description").textContent =
        "Criatura mítica que se cree que ataca y chupa la sangre del ganado, especialmente cabras. Se ha reportado en varios países de América, pero su existencia no ha sido confirmada científicamente.";
    } else if (randomNoun1 === "El asaltador") {
      document.getElementById("description").textContent =
        "Persona que roba o agrede a alguien de manera violenta. Los asaltantes suelen ser motivados por el dinero, la venganza o el poder. Pueden ser muy peligrosos y pueden causar lesiones graves o incluso la muerte.";
    } else if (randomNoun1 === "El devorador") {
      document.getElementById("description").textContent =
        "Ser que se alimenta de otros seres vivos. Los devoradores pueden ser animales, plantas o incluso seres sobrenaturales. Pueden ser beneficiosos para el ecosistema, ya que ayudan a controlar las poblaciones de otros seres vivos. Sin embargo, también pueden ser peligrosos para los humanos, ya que pueden transmitir enfermedades o incluso matar.";
    } else if (randomNoun1 === "El espíritu") {
      document.getElementById("description").textContent =
        "Ser sobrenatural que existe en el mundo espiritual. Los espíritus pueden ser benevolentes o malévolos, y pueden tener una variedad de formas y poderes. Los espíritus suelen estar asociados con la muerte y el más allá, y pueden ser una fuente de inspiración o miedo.";
    } else if (randomNoun1 === "El espectro") {
      document.getElementById("description").textContent =
        "Entidad sobrenatural que representa la muerte o la destrucción. Los espectros suelen ser representados como seres fantasmagóricos o monstruosos. Pueden ser una fuente de miedo y terror, ya que a menudo son asociados con la muerte y el más allá.";
    } else if (randomNoun1 === "El intruso") {
      document.getElementById("description").textContent =
        "Persona o cosa que entra en un lugar sin permiso. Los intrusos pueden ser peligrosos, ya que pueden representar una amenaza para la seguridad o la propiedad. Los intrusos también pueden ser una fuente de inquietud o ansiedad, ya que pueden violar la privacidad o la sensación de seguridad de una persona.";
    } else if (randomNoun1 === "El mutante") {
      document.getElementById("description").textContent =
        "Ser que tiene una mutación genética que le otorga una habilidad o característica sobrenatural. Los mutantes pueden tener una variedad de habilidades, como la fuerza, la velocidad, la telepatía o la capacidad de volar. Los mutantes suelen ser discriminados por los humanos, ya que son considerados diferentes o peligrosos.";
    } else {
      document.getElementById("description").textContent =
        "No hay descripción disponible de este villano.";
    }

		
	 
	  	return `${randomNoun1} ${randomAdjective} ${randomNoun2}`;
		
	  } 

    return (
        
      <button type="button" onClick={() => {
        document.querySelector("h4").innerHTML = randomVillainName();
      }} className="btn btn-primary btn-lg m-2" id="botonHV" >Villano</button> 
           
    );
};







export default BotonV;