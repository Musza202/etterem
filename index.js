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
        rendeles.push({name:asd[i].name,darab:0,price:asd[i].price});
        let gomb = document.createElement("button");
        gomb.textContent="Rendelés";
        gomb.addEventListener('click',x=>{
            for(let j = 0;j<rendeles.length;j++){
                if(rendeles[j].name==asd[i].name){
                    rendeles[j].darab++;
                    kosar_fris();
                    alert(`A ${asd[i].name} hozzáadtuk a rendelésedhez!`);
                    
                };
            }
        })
        doboz.appendChild(gomb);
        hely.appendChild(doboz);
    } 
}
let vizsg = false;
function kosar(){
    if(vizsg==false){
        document.getElementById("kosar").style.display="block";
        vizsg=true;
        kosar_fris();
    }
    else{
        document.getElementById("kosar").style.display="none";
        vizsg=false;
    }

}
function kosar_fris(){
    let ki = document.getElementById("kosar");
    ki.innerHTML="";
    szamlalo=0;
    rendeles.forEach(element => {
        if(element.darab!=0){
           let span = document.createElement("span");
           span.innerHTML=`${element.name} : x${element.darab}`;
           ki.appendChild(span); 
           let gomb = document.createElement("button");
            gomb.style.margin="15px";
            gomb.textContent="Törlés";
            gomb.addEventListener('click',x=>{
                for(let i =0;i<rendeles.length;i++){
                    if(rendeles[i].name==element.name){
                        rendeles[i].darab--;
                        kosar_fris();
                    }
                }
            })
            ki.appendChild(gomb);
            ki.appendChild(document.createElement("br"));
        }
        else szamlalo++;
    });
    console.log(szamlalo);
    if(szamlalo==20)ki.innerHTML="Üres Kosarad!";
    else{
        let oszeg = document.createElement("div");
        let sz = 0;
        rendeles.forEach(x => {
            if(x.darab !=0){
                sz+=x.darab*x.price;
                console.log(x.darab,x.price);
            }
        });
        oszeg.innerHTML=`Összesen: ${sz}Ft`;
        ki.appendChild(oszeg);
    }
}
sz();
