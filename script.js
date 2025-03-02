function calcular() {
    const capacidad = parseInt(document.getElementById("capacidad").value);
    const habilidad = parseInt(document.getElementById("habilidad").value);
    const totalTiradores = parseInt(document.getElementById("total-tiradores").value);

    let aumento = 0;
    switch (habilidad) {
        case 1: aumento = 1500; break;
        case 2: aumento = 3000; break;
        case 3: aumento = 4500; break;
        case 4: aumento = 6000; break;
        case 5: aumento = 7500; break;
        case 6: aumento = 9000; break;
        case 7: aumento = 10500; break;
        case 8: aumento = 12000; break;
        case 9: aumento = 13500; break;
        case 10: aumento = 15000; break;
    }

    const capacidadTotal = capacidad + aumento;
    const porcentaje = (totalTiradores / (capacidadTotal * 7)) * 100;

    document.getElementById("resultado").innerHTML = "Porcentaje de tiradores: " + porcentaje.toFixed(2) + "%";
}

document.getElementById("calculateButton").addEventListener("click", calcular);