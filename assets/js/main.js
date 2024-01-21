const arrayTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "barbara-ramos-graphic-designer.jpg",
    }

]

const nomeHtml = document.getElementById("nome");

const grigliaCardsHtml = document.getElementById("grigliaCarte");


for(let i = 0; i < arrayTeam.length; i++){
    let elemento = arrayTeam[i];
    let elementoImmagine = elemento.immagine;
    const cardFigure = document.createElement("figure");
    const figureImg = document.createElement("img");
    cardFigure.appendChild(figureImg);
    figureImg.setAttribute("src", `./assets/img/` + `${elementoImmagine}`);
    figureImg.setAttribute("alt", "profile-picture");
    figureImg.setAttribute("id", "imageId");

    /*
    document.writeln(`${elemento.nome}`);
    document.writeln(`${elemento.ruolo}`);
    document.writeln(`${elemento.immagine}`);*/


    const card = document.createElement("div");
    const cardName = document.createElement("span");
    const cardJob = document.createElement("span");
    card.classList.add("card");
    cardName.setAttribute("id", "nome");
    cardJob.setAttribute("id", "ruolo");
    



    
    
    
    card.appendChild(cardFigure);
    card.appendChild(cardName);
    card.appendChild(cardJob);
    
    

    grigliaCardsHtml.appendChild(card);
    console.log(elementoImmagine);

    cardName.innerText = elemento.nome;
    cardJob.innerText = elemento.ruolo;
    
    
    





    
}