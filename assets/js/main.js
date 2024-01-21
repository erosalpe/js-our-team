const arrayTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "barbara-ramos-graphic-designer.jpg"
    }

]

for(let i = 0; i < arrayTeam.length; i++){
    console.log(arrayTeam[i]);
    let elemento = arrayTeam[i];
    document.writeln(`${elemento.nome}`);
    document.writeln(`${elemento.ruolo}`);
    document.writeln(`${elemento.immagine}`);
}