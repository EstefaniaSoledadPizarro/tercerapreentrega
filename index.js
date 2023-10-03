
let form = document.querySelector('form');
let cantidadInput = document.getElementById('cantidad');
let monedaOrigenSelect = document.getElementById('moneda-origen');
let monedaDestinoSelect = document.getElementById('moneda-destino');
let resultadoDiv = document.getElementById('resultado');

const tasasDeCambio = {
    usd: 1.00,
    eur: 1.10,
    real: 0.70,
    chilenos: 720,
    libras: 1.25
};


form.addEventListener('submit', function (e) {
    e.preventDefault()
    alert("Calculando");

    let cantidad = parseFloat(cantidadInput.value);
    let monedaOrigen = monedaOrigenSelect.value;
    let monedaDestino = monedaDestinoSelect.value;

    let tasaOrigen = tasasDeCambio[monedaOrigen];
    let tasaDestino = tasasDeCambio[monedaDestino];
    let cambio = cantidad * (tasaDestino / tasaOrigen);

    resultadoDiv.textContent = 'Tu cambio es: ' + cambio + ' ' + monedaDestino;
});

const operacion = {cantidad, monedaOrigen, monedaDestino, resultado};
guardarOperacionEnLocalStorage(operacion);
function guardarOperacionEnLocalStorage(operacion) {
    const operacionesPrevias = JSON.parse(localStorage.getItem("operaciones")) || [];
    operacionesPrevias.push(operacion);
    localStorage.setItem("operaciones", JSON.stringify(operacionesPrevias));
}
function mostrarOperacionesDesdeLocalStorage() {
    const operaciones = JSON.parse(localStorage.getItem("operaciones")) || [];

    operaciones.forEach(operacion => {
        const item = document.createElement("li");
        item.textContent = `${operacion.cantidad} ${operacion.monedaOrigen} a ${operacion.monedaDestino}: ${operacion.resultado.toFixed(2)}`;
        listaOperaciones.appendChild(item);
    });
}
mostrarOperacionesDesdeLocalStorage();



