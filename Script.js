function crearFlorGrande() {
    const florImg = document.createElement('img');
    // IMPORTANTE: El nombre debe ser idéntico al que subiste (Flor_Amarilla.png)
    florImg.src = "Flor_Amarilla.png"; 
    florImg.classList.add('flor-creciente');
    florImg.style.left = (Math.random() * 70 + 10) + "vw"; 
    document.body.appendChild(florImg);
}

function crearTulipan() {
    const flor = document.createElement('div');
    flor.classList.add('flor');
    flor.innerText = '🌷'; 
    flor.style.left = Math.random() * 95 + "vw";
    flor.style.top = Math.random() * 95 + "vh";
    document.body.appendChild(flor);
    setTimeout(() => flor.remove(), 2500);
}

setInterval(crearTulipan, 600);
setInterval(crearFlorGrande, 1500);
