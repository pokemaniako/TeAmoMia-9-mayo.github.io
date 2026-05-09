const yesBtn = document.querySelector('.btn-yes');
const noBtn = document.querySelector('.btn-no');
const pageContent = document.getElementById('pageContent');

const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

if(music){
    music.volume = 0.45;
    music.autoplay = true;
    music.loop = true;
    music.playsInline = true;
    music.play().catch(()=>{});
}

const startDate = new Date("2025-12-15");
const today = new Date();
const diffTime = today - startDate;
const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const daysTogether = document.getElementById('daysTogether');
if(daysTogether){
    daysTogether.innerText = days;
}

function updateMusicToggle(){
    if(!musicToggle) return;
    if(music.paused){
        musicToggle.querySelector('.play').textContent = '▶';
        musicToggle.querySelector('span').textContent = 'Escúchame';
    } else {
        musicToggle.querySelector('.play').textContent = '⏸';
        musicToggle.querySelector('span').textContent = 'Pausa';
    }
}

function tryPlayMusic(){
    if(!music) return;
    music.play().then(()=>{
        updateMusicToggle();
    }).catch(()=>{
        // Autoplay may be blocked until user interaction on some móviles
    });
}

window.addEventListener('load', ()=>{
    tryPlayMusic();
});

document.addEventListener('click', ()=>{
    if(music){
        music.muted = false;
    }
    tryPlayMusic();
}, { once: true });

document.addEventListener('touchstart', ()=>{
    if(music){
        music.muted = false;
    }
    tryPlayMusic();
}, { once: true });

musicToggle.addEventListener('click',()=>{
    if(!music) return;
    if(music.paused){
        music.play();
    } else {
        music.pause();
    }
    updateMusicToggle();
});

let scale = 1;

noBtn.addEventListener('click',()=>{
    scale += 0.14;
    yesBtn.style.transform = `scale(${scale})`;
    noBtn.style.transform = `scale(${1 - (scale - 1) / 2})`;

    if(scale > 2){
        noBtn.innerHTML = 'ya pues 💔';
    }

    if(scale > 2.8){
        noBtn.style.display = 'none';
    }
});

yesBtn.addEventListener('click',()=>{
    if(!pageContent) return;

    pageContent.innerHTML = `
    <div class="gift-screen">

    <h1 class="gift-title">
    ESCOGE TU REGALO ♡
    </h1>

    <div class="gift-grid">

    <div class="gift-card">

    <h3>💌 Dedicatoria</h3>

    <div class="dedication">

    nose si te lo digo mucho pero de verdad eres de las mejores cosas q me pasaron este año :( ♡<br><br>

    me haces sentir tranquilo incluso cuando estoy mal o cansado y aunq aveces no sepa demostrarlo tanto te amo muchisimo mia.

    gracias por quedarte conmigo y por hacer mis dias mas bonitos.

    prometo llevarte al acuario y abrazarte mucho muchooo ♡

    </div>

    </div>

    <div class="gift-card">

    <h3>📸 Nuestro Collage</h3>

    <div class="collage">

    <img src="imagenes/foto1.jpg">
    <img src="imagenes/foto2.jpg">
    <img src="imagenes/foto3.jpg">
    <img src="imagenes/foto4.jpg">
    <img src="imagenes/foto5.jpg">
    <img src="imagenes/foto6.jpg">

    </div>

    </div>

    <div class="gift-card">

    <h3>🎟 Vale Especial</h3>

    <div class="ticket">

    <h4>🎟 ACUARIO DATE ♡</h4>

    <p>
    Vale elegante para una cita mágica conmigo.
    <br><br>
    • ver pececitos juntos 🐠
    <br>
    • tomarnos fotos bonitas 📸
    <br>
    • abrazos suaves e infinitos 🤍
    <br>
    • momentos perfectos bajo las luces ✨
    <br><br>
    Canjeable cuando tú quieras.
    </p>

    </div>

    </div>

    </div>

    </div>
    `;

    const backBtn = document.createElement('button');
    backBtn.className = 'back-button';
    backBtn.textContent = '← volver';
    backBtn.onclick = ()=>{
        location.reload();
    };
    document.body.insertBefore(backBtn, document.body.firstChild);

    if(music){
        music.play().catch(()=>{});
    }
});