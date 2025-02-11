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
        <p id="ar">${asd[i].price} Ft</p>
        `;
        let gomb = document.createElement("button");
        gomb.textContent="Rendelés";
        gomb.addEventListener('click',x=>{
            rendeles.push(String(asd[i].name));
            alert(`A ${asd[i].name} hozzáadtuk a rendelésedhez!`);
        })
        doboz.appendChild(gomb);
        hely.appendChild(doboz);
    } 
}

function r_hozad(asd){
    rendeles.append(String(asd));
    console.log(rendeles);
}

sz();
