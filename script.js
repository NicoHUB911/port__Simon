//Todo comienza apretando el inciobtn, llama a la funcion secuencia. esta llena un variable array (sec[])
//de un numero del 0 al 3 (4 numeros (cada numero (0,1,2,3) representa un boton)) y llama al reproductor.
//El reproductor cambia la opacidad del boton al que corresponda el numero de la secuencia mientras recorre
//el array (sec[]). Cuando ya se apreto el boton inicio (la var comienzo != 0) se pueden apretar los otros 
//botones y estos llamaran a la funcion cuestionario con el valor del boton que se apreto como parametro.
//Este lo agarra y comprueba si es el correcto dependiendo de la posicion (lo explico mas en la funcion).

//	SELECTORES
const inciobtn = document.querySelector(".Contenedor__Inicio"); 
const azulbtn = document.querySelector(".Contenedor__Azul");
const rojobtn = document.querySelector(".Contenedor__Rojo");
const verdebtn = document.querySelector(".Contenedor__Verde");
const amarillobtn = document.querySelector(".Contenedor__Amarillo");
const audio1 = document.querySelector(".Contenedor__Azul__audio_1");
const audio2 = document.querySelector(".Contenedor__Rojo__audio_2");
const audio3 = document.querySelector(".Contenedor__Verde__audio_3");
const audio4 = document.querySelector(".Contenedor__Amarillo__audio_4");

//	VARIABLES 
let comienzo = 0; 
let sec = [];
let cuest = 0;

//	ESCUCHAS 
rojobtn.addEventListener("click", ()=>{
	if (comienzo == 0) {
	}else{
		audio2.play();
		cuestionario(0);
	}
});
azulbtn.addEventListener("click", ()=>{
	if (comienzo == 0) {
	}else{
		audio1.play();
		cuestionario(1);
	}
});
verdebtn.addEventListener("click", ()=>{
	if (comienzo == 0) {
	}else{
		audio3.play();
		cuestionario(2);
	}
});	
amarillobtn.addEventListener("click", ()=>{
	if (comienzo == 0) {
	}else{
		audio4.play();
		cuestionario(3);
	}
});

//	INICIO
inciobtn.addEventListener("click", ()=>{
	if (comienzo == 0) {
		comienzo = 1;
		secuencia();
	}else{
		sec = [];
		secuencia();
	}
});

//	FUNCIONES

function secuencia() {
	let num1 = Math.random()*3.99;
	let num2 = Math.trunc(num1);
	sec.push(num2);
	reproductor();
}

function reproductor() {
	comienzo = 2;
	let s = 0;
	var I = setInterval(function () {
		s++;
		switch(sec[s-1]){
			case 0:
				rojobtn.style.opacity = "1";
				audio2.play();
				azulbtn.style.opacity = "0.5";
				verdebtn.style.opacity = "0.5";
				amarillobtn.style.opacity = "0.5";
			break;
			case 1:
				azulbtn.style.opacity = "1";
				audio1.play();
				rojobtn.style.opacity = "0.5";
				verdebtn.style.opacity = "0.5";
				amarillobtn.style.opacity = "0.5";
			break;
			case 2:
				verdebtn.style.opacity = "1";
				audio3.play();
				rojobtn.style.opacity = "0.5";
				azulbtn.style.opacity = "0.5";
				amarillobtn.style.opacity = "0.5";
			break;
			case 3:
				amarillobtn.style.opacity = "1";
				audio4.play();
				verdebtn.style.opacity = "0.5";
				azulbtn.style.opacity = "0.5";
				rojobtn.style.opacity = "0.5";
			break;
		}
		
		if (s == sec.length + 1) {
			verdebtn.style.opacity = "0.5";
			azulbtn.style.opacity = "0.5";
			rojobtn.style.opacity = "0.5";	
			amarillobtn.style.opacity = "0.5";
			comienzo = 1;
			clearInterval(I);
		}
	}, 1000);
}

function cuestionario(btn) {
	if (btn == sec[cuest]) {
		//Se entra aqui si el boton que se apreto es el correcto segun el orden (lo confirma la var cuest),
		//despues se usa la var cuest para ver si es el ultimo valor de la secuencia (array) y si es asi
		//se reinicia a 0, sino se le suma uno para comprovar el siguiente valor.
		inciobtn.style.background = "#84CC04";
		let T = setTimeout(function(){inciobtn.style.background = "#000"; clearTimeout(T);},400);
		if (cuest == sec.length -1) {
			cuest = 0;
			secuencia();
		}else{
			cuest ++;	
		}
	}
	else{
		//Se entra aqui si el valor del boton ingresado no es el correspondiente segun el lugar(cuest) en la secuencia.
		//se iguala todo a 0 ose vacia y se llama a secuencia para crear una secuencia nueva y iniciar denuevo.  
		inciobtn.style.background = "#DA1B20";
		let T = setTimeout(function(){inciobtn.style.background = "#000"; clearTimeout(T);},400);
		sec = [];
		cuest = 0;
		secuencia();
	}
}
