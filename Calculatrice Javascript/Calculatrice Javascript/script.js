//DOM récuperer toutes les touches
//... operateur spread qui permets de transformer les données en tableau
const touches = [...document.querySelectorAll(`.bouton`)];
console.log(touches);
const listKeycode = touches.map(touches => touches.dataset.key);
console.log(listKeycode);
const ecran = document.querySelector(`.ecran`);


// const nouvTb = tableau.map(element=> faireqqchoe(element));
// La fonction map() prend chaque element d'un tableau, fait qqchose
//  a cet element (fonctioncallback) et retourne le resultat sous forme
//d'un nouveau tableau (ici nouveau tableau)
//keydowm touche click

document.addEventListener(`keydown`, (e) => {
    const valeur = e.keycode.toString();
    console.log(valeur);
    calculer(valeur)
})

document.addEventListener(`click`, (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeyCode = listKeycode.indexOf(valeur);
                const touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML;
        }
    }
};

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul :' + e.message)
})

