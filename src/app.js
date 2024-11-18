/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");

        let emails = pronoun[i] + adj[j] + noun[k] + ".com"; // Creamos una variable que guarde el resultado de la iteración//

        let emailsList = document.getElementById("emails"); //Creamos una variable sin definir y la asociamos al id de HTML//

        let li = document.createElement("li"); // Creamos una variable que añade un elemento de lista //

        emailsList.appendChild(li); //Declaramos la lista dentro de la variable emailsList //

        li.innerHTML = emails; // Añadimos los resultados generados al elemento li dentro del HTML que a su vez se añade en emailsList que va asociado al id//
      }
    }
  }
};
