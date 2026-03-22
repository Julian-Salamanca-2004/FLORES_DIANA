// Función para la flor grande que crece abajo
function crearFlorGrande() {
    const florImg = document.createElement('img');
    
    // Tu ruta de imagen local
    florImg.src = "florImg.src = "Flor_Amarilla.png"";
    
    florImg.classList.add('flor-creciente');
    
    // Aparecerá en un punto horizontal aleatorio (más disperso)
    florImg.style.left = (Math.random() * 80 + 10) + "vw"; 

    document.body.appendChild(florImg);

    // SE HA ELIMINADO EL TIMEOUT PARA QUE LA FLOR NO DESAPAREZCA
}

// Función para los tulipanes pequeños que aparecen por todos lados
function crearTulipan() {
    const flor = document.createElement('div');
    flor.classList.add('flor');
    flor.innerText = '💛'; 
    flor.style.left = Math.random() * 95 + "vw";
    flor.style.top = Math.random() * 95 + "vh";
    document.body.appendChild(flor);
    setTimeout(() => flor.remove(), 2500); // Estos sí desaparecen para no saturar
}

// Lanzar animaciones (ACTUALIZADO)
setInterval(crearTulipan, 600); // Tulipanes pequeños cada poco tiempo
setInterval(crearFlorGrande, 1000); // UNA FLOR GRANDE CADA SEGUNDO (MÁS RÁPIDO)