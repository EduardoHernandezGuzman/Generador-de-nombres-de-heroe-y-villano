import React from "react";

const BotonH = () => {

    let noun1 = [
		"El caballero",
		"El guerrero",
		"El héroe",
		"El mago",
		"El rey",
		"El señor",
		"El vigilante",
		"El bárbaro",
		"El cazador",
		"El gladiador",
		"El jinete",
		"El centauro",
		"El espartano",
		"El ninja",
		"El halcón"
	  ];
	  
	  let adjective = [
		"audaz",
		"brillante",
		"compasivo",
		"eficaz",
		"excepcional",
		"fuerte",
		"incorruptible",
		"inspirador",
		"indomable",
		"inteligente",
		"justo",
		"magnífico",
		"noble",
		"valiente",
		"protector"
	  ];
	  
	  let noun2 = [
		"del sendero de la aventura",
		"del la laguna de la belleza",
		"del río de la vida",
		"del sendero serpenteante",
		"de la laguna cristalina",
		"de la montaña imponente",
		"del bosque frondoso",
		"de la paz serena",
		"del sótano húmedo",
		"de la tranquilidad infinita",
		"de la montaña de la esperanza",
		"de la naturaleza salvaje",
		"de la magia resplandeciente",
		"de  la inspiración infinita",
		"de la esperanza eterna"
	  ];
	  
	   function randomHeroName() {
		let randomNoun1 = noun1[Math.floor(Math.random() * noun1.length)];
		let randomAdjective =
		  adjective[Math.floor(Math.random() * adjective.length)];
		let randomNoun2 = noun2[Math.floor(Math.random() * noun2.length)];

        if (randomNoun1 === "El caballero") {
            document.getElementById("description").textContent =
              "Protector de los que no pueden protegerse a sí mismos. Lucha por lo que cree, incluso cuando es difícil. Es un símbolo de la nobleza, la virtud y la justicia.";
          } else if (randomNoun1 === "El guerrero") {
            document.getElementById("description").textContent =
              "Luchador nato. Es hábil en el uso de las armas y las tácticas de combate. Está dispuesto a sacrificarse por lo que cree, incluso a costa de su propia vida. Es un símbolo de la fuerza, la determinación y la libertad.";
          } else if (randomNoun1 === "El héroe") {
            document.getElementById("description").textContent =
              "Persona realiza actos extraordinarios que inspiran a los demás. Es valiente y desinteresado, y está dispuesto a ayudar a los demás, incluso a costa de su propia seguridad. Es un símbolo de la esperanza, la inspiración y la bondad.";
          } else if (randomNoun1 === "El mago") {
            document.getElementById("description").textContent =
              "Maestro de las artes arcanas. Usa sus poderes para proteger a los débiles y los oprimidos. Es un símbolo de la fuerza, la sabiduría y el poder del bien.";
          } else if (randomNoun1 === "El rey") {
            document.getElementById("description").textContent =
              "Máxima autoridad política de un reino. Es responsable de la defensa, el bienestar y la prosperidad de sus súbditos. Su deber es proteger a su pueblo y mantener la paz y el orden en su reino.";
          } else if (randomNoun1 === "El señor") {
            document.getElementById("description").textContent =
              "Líder de un territorio, generalmente un feudo. Es responsable de la defensa y el bienestar de sus vasallos. Su deber es proteger a sus súbditos de los enemigos y garantizar su seguridad.";
          } else if (randomNoun1 === "El vigilante") {
            document.getElementById("description").textContent =
              "Protector de la ley y el orden. Lucha contra el crimen y la delincuencia, y defiende a los inocentes. Su deber es mantener la ley y el orden en su comunidad, protegiendo a los inocentes de los criminales.";
          } else if (randomNoun1 === "El bárbaro") {
            document.getElementById("description").textContent =
              "Guerrero feroz y despiadado. Es un luchador nato, y está dispuesto a todo por lo que cree. Su deber es proteger a su pueblo de los enemigos, incluso a costa de su propia vida.";
          } else if (randomNoun1 === "El cazador") {
            document.getElementById("description").textContent =
              "Experto en la caza de animales. Es un rastreador hábil, y está familiarizado con el comportamiento animal. Su deber es proporcionar alimento a su pueblo, así como protegerlo de los animales salvajes.";
          } else if (randomNoun1 === "El gladiador") {
            document.getElementById("description").textContent =
              "Luchador profesional que lucha en combates públicos por entretenimiento. Es un guerrero hábil y entrenado, y está dispuesto a arriesgar su vida por la victoria.";
          } else if (randomNoun1 === "El jinete") {
            document.getElementById("description").textContent =
              "Experto en equitación. Es capaz de controlar a un caballo con gran habilidad y destreza.";
          } else if (randomNoun1 === "El centauro") {
            document.getElementById("description").textContent =
              "Criatura mitológica con el torso de un hombre y las patas de un caballo. Es un guerrero feroz y despiadado, y está dispuesto a luchar por lo que cree.";
          } else if (randomNoun1 === "El espartano") {
            document.getElementById("description").textContent =
              "Guerrero de la antigua Esparta. Es un luchador entrenado y disciplinado, y está dispuesto a morir por su patria.";
          } else if (randomNoun1 === "El ninja") {
            document.getElementById("description").textContent =
              "Guerrero secreto que se especializa en el sigilo y el combate. Es un maestro de las artes marciales, y está dispuesto a usar cualquier medio para lograr sus objetivos.";
          } else if (randomNoun1 === "El halcón") {
            document.getElementById("description").textContent =
              "Ave de presa que se caracteriza por su velocidad, su agilidad y su visión aguda. Es un cazador experto, y está dispuesto a perseguir a su presa hasta el final.";
          } else {
            document.getElementById("description").textContent =
              "No hay descrición disponible de este héroe.";
          }
		
	 
	  	return `${randomNoun1} ${randomAdjective} ${randomNoun2}`;
		
	  } 

    return (
        
              

            <button type="button" className="btn btn-primary btn-lg m-2" id="botonHV" onClick={() => {
                document.querySelector("h4").innerHTML = randomHeroName();
              }} >Heroe</button>  
           
    );
};

export default BotonH;

