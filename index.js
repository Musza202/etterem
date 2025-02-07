let adat = [];
let rendeles=[];
function sz(){
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        render(data);
    });
}

function render(asd) {
    adat = asd.map(elem => {
        return {
            name: String(elem.name),
            description: String(elem.description),
            price: Number(elem.price),
            image: String(elem.image)
        };
    });

    kiir(adat);
}

function kiir(asd){
    let hely = document.getElementById('kimenet');
    for(let i = 0; i<asd.length;i++){
        let doboz=document.createElement('div');
        doboz.className='doboz';
        doboz.innerHTML=`
        <img src="${asd[i].image}" alt=""> 
        <h2>${asd[i].name}</h2>
        <p>${asd[i].description}</p>
        <p id="ar">${asd[i].price}</p>
        <button onclick="r_hozad(${String(asd[i].name)}">Rendelés</button>
        `;
        hely.appendChild(doboz);
    } 
}

function r_hozad(asd){
    rendeles.append(String(asd));
    console.log(rendeles);
}

sz();
