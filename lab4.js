window.onload=function(){
    console.log("despuéss")
    document.getElementById('myinput').onkeydown = function(event) {
        if (event.keyCode == 13) {
            enviar();
        }
    }
    setInterval(reload,1000);
}
function enviar(){
    var mensaje = document.getElementById('myinput').value;
    console.log(mensaje);
}

function reload(){
    fetch("http://34.210.35.174:7000/").then(r => r.json()).then(response => {
        const messages = document.querySelector("#messages");
        //messages.innerHtml ="";
        response.forEach( m => {
            const messageli = document.createElement("li");
            const messagelitext = document.createTextNode(m.text);
            const messagelistudentid = document.createTextNode(m.student_id);
            console.log(m.student_id+": "+messagelitext);
            //messageli.append(message);
            //messages.append();
        })
    })
}