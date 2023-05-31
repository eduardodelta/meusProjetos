
let horas = document.getElementById('hora');
let minutos = document.getElementById('min');
let segundos = document.getElementById('seg');

const relogio = setInterval(() => {
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if(hr < 10){hr = '0' + hr};
    if(min < 10){min = '0' + min};
    if(seg < 10){seg = '0' + seg};
    horas.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;

},1000)


