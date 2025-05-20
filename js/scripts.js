//selectionne et permet de click sur les membre de l'équipe
const boutonsModale = document.querySelectorAll('.perso');
const modale = document.querySelector('.modale');

for (let i = 0; i < boutonsModale.length; i++) {
    boutonsModale[i].addEventListener('click', openModale);
}


// ouvre une modale en utilisant les enfant du div de l'épique pour attribué les valeur pour le nom l'image et le role
function openModale(event) {
    const fond = document.createElement("div");
    const chemin = this.children[0].getAttribute("src");
    const cheminNom = this.children[1].innerText;
    const cheminText = this.children[2].innerText;
    const image = document.createElement('img');
    const nom =document.createElement("h2");
    const role = document.createElement("h3");
    image.setAttribute('src', chemin);
    image.classList.add('zoom');
    modale.appendChild(fond);
    fond.appendChild(image);
    fond.appendChild(nom);
    fond.appendChild(role);
    

    modale.classList.add('visible');
    fond.addEventListener("click", closeModale);
    nom.textContent=cheminNom;
    role.textContent=cheminText;
}
// ferme la modale et surprime tout les enfants
function closeModale() {
    modale.innerHTML = '';
    modale.classList.remove('visible');
}