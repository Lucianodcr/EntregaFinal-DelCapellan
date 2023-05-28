const formulario = document.getElementById("formulario");
const tasaInteres = 0.65;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const importe = document.getElementById("importe").value;
    const plazo = document.getElementById("plazo").value;
    const interes = (importe * tasaInteres * plazo) / 12;
    const total = parseFloat(importe) + parseFloat(interes);

    mostrarMensaje(interes, total);
})

const mostrarMensaje = (interes, total) => {
    formulario.innerHTML =

        `<strong>El interés generado es de $${interes.toFixed(2)} y el monto total a recibir es de $${total.toFixed(2)}</strong>
        
        <div class="form-group">
        <h2>Ingrese sus datos</h2>
        <label for="nombre">Nombre</label>
        <input type="text" class="form-control" id="nombre" required> <br>

        <label for="apellido">Apellido</label>
        <input type="text" class="form-control" id="Apellido" required> <br>

        <label for="email">E-mail</label>
        <input type="text" class="form-control" id="email" required> <br>

        <button id="crearPF" class="botonCalcular">Crear Plazo Fijo</button>
    </div>`

    const crearPF = document.getElementById("crearPF");
    crearPF.addEventListener("click", () => {
        Swal.fire("En breve nos podremos en contacto con usted");
        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const email = document.getElementById("email");
        
        const datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            interes: interes,
            total: total,
        }
        //guardar en localStorage
        localStorage.setItem("datos", JSON.stringify(datos));
    })
}

const dolares = document.getElementById("dolares");

const url = "https://criptoya.com/api/dolar";

setInterval(() => {
    fetch(url)
        .then((response) => response.json())
        .then(({ oficial, blue, mep, ccl, ccb }) => {
            dolares.innerHTML = `<p>Dolar Oficial $${oficial} - Dolar Blue $${blue} - Dolar Mep $${mep} - Dolar CCL $${ccl} - Dolar CCB $${ccb}</p>`
        })
},2000)



