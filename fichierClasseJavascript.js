// ➢ Créer un fichier javascript nommée fichierClasseJavascript.js
class Voiture {
    // ➢ Donner la classe Voiture possédant 2 caractéristiques : la marque et l’année.
    constructor(marque, annee) {
        this._marque = marque;
        this._annee = annee;
    }

    // ➢ Donner 2 méthodes accesseur nommées getMarque et getAnnee
    getMarque() {
        return this._marque;
    }

    getAnnee() {
        return this._annee;
    }

    // Mutateurs pour la complétude
    setMarque(nouvelleMarque) {
        this._marque = nouvelleMarque;
    }

    setAnnee(nouvelleAnnee) {
        this._annee = nouvelleAnnee;
    }
}

// Nouvelle fonction pour créer une voiture à partir des saisies utilisateur
function creerNouvelleVoiture() {
    // 1. Récupération des valeurs des champs de saisie
    const marqueInput = document.getElementById('inputMarque').value;
    const anneeInput = parseInt(document.getElementById('inputAnnee').value);
    
    const conteneur = document.getElementById('resultats-voitures');

    // 2. Validation simple
    if (!marqueInput || isNaN(anneeInput)) {
        conteneur.innerHTML += `<p style="color: red;">[Erreur] Veuillez saisir une marque et une année valides.</p>`;
        return;
    }
    
    // 3. Instanciation de la nouvelle voiture
    const nouvelleVoiture = new Voiture(marqueInput, anneeInput);

    // 4. Affichage des détails sur la page
    const p = document.createElement('p');
    p.textContent = `Nouvelle voiture créée : Marque = ${nouvelleVoiture.getMarque()}, Année = ${nouvelleVoiture.getAnnee()}.`;
    conteneur.appendChild(p);
    
    // 5. Affichage dans la console
    console.log("Nouvelle voiture instanciée par saisie utilisateur :", nouvelleVoiture);
}


// Fonction existante pour l'instanciation du TP (maintenue)
function creationObjetsClasse() {
    // ➢ Donner la création de 2 objets de la classe Voiture : pour une Renault de 2023 et une Peugeot de 2020.
    const maRenault = new Voiture("Renault", 2023); 
    const maPeugeot = new Voiture("Peugeot", 2020); 

    const conteneur = document.getElementById('resultats-voitures');
    conteneur.innerHTML = ''; 

    // ➢ Ajouter dans la fonction, l’affichage sur la console des caractéristiques des 2 objets.
    console.log("--- Instanciation et Affichage Console (TP) ---");
    console.log(`Objet 1 : ${maRenault.getMarque()} (${maRenault.getAnnee()})`);
    console.log(`Objet 2 : ${maPeugeot.getMarque()} (${maPeugeot.getAnnee()})`);
    console.log("----------------------------------------");
    
    // ➢ Finalement faire en sorte que ces informations apparaissent aussi sur la page elle-même sous le bouton.
    const pRenault = document.createElement('p');
    pRenault.textContent = `Voiture 1 (TP) : Marque = ${maRenault.getMarque()}, Année = ${maRenault.getAnnee()}.`;
    conteneur.appendChild(pRenault);
    
    const pPeugeot = document.createElement('p');
    pPeugeot.textContent = `Voiture 2 (TP) : Marque = ${maPeugeot.getMarque()}, Année = ${maPeugeot.getAnnee()}.`;
    conteneur.appendChild(pPeugeot);
}
