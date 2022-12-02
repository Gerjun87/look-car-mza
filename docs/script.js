//Función que me aplica el stilo a la opción seleccionada en el menú y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll("#links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menú una vez que se ha seleccionado una opción en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}
//Función que muestra el menú resposive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//Funcionalidad al formulario
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_ivb64w8";

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            btn.value = "Send Email";
            alert("Sent!");
        },
        (err) => {
            btn.value = "Send Email";
            alert(JSON.stringify(err));
        }
    );
});
