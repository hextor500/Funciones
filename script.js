//Change color via Console
let semaforo_color = "green";

//Function to change colors
function semaforo (color) {
    if (color == "green"){
            console.log(color);
            color = "yellow";
            document.getElementById("semaforo").src="yellow.png";
        }
    else if (color == "yellow"){
            console.log(color);
            color = "red";
            document.getElementById("semaforo").src="red.png";
    }
    else if (color == "red"){
            console.log(color);
            color = "green";
            document.getElementById("semaforo").src="green.png";
    }
    return color;
}

//SetInterval used to run the function every 2000 ms
setInterval(function (){
    semaforo_color = semaforo(semaforo_color);
}, 2000);
    