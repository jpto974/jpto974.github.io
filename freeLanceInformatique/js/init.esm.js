import {user, idUser, idCust, idProd} from './constante.esm.js'
import {ouvrirPopup} from './popup.esm.js'
import {FormClass} from './form.esm.js'
import {ArrayStorage} from './storage.esm.js'
import {listCustomer} from './client.esm.js'
import {listProduct} from './produit.esm.js'

let nbProduct = 0
let total = 0
let idRep
let formOrigine = ['origineCust', '']
let formChoix = ['choixCust', 'choixProd']
let tabClass = ['grid-container', 'ligne', 'grid-item']

//test sauvegarde client ou produit et sauvegarde
function save(e ,list){

    const returnFrom = e.target.parentNode.parentNode.childNodes//retour au form de l'event
    let verif = true
    const valNode = returnFrom[0].childNodes//retour au input contenant les valeur
    let recupVal = []
    for(let i = 0; i < valNode.length; i++){
            
        if(valNode.length < 4){

            recupVal[i] = valNode[i].childNodes[1].value

        }else{

            recupVal[i] = valNode[i].childNodes[0].value

        }

    }
    list.listL.forEach(val => {

        if(recupVal[0] === '' || recupVal[0] === val[0]){//si le 1er champs est identique ou vide

            verif = false

        }

    })

    if(verif){

        list.setL(recupVal)
        alert("c'est fait!")

    }

}

//test pour suppression client et suppression
function suppr(e, list){

    const returnFrom = e.target.parentNode.parentNode.childNodes//retour au form de l'event
    let verif = false
    const valNode = returnFrom[0].childNodes//retour au input contenant les valeur
    let recupVal = []
    for(let i = 0; i < valNode.length; i++){

        recupVal[i] = valNode[i].childNodes[1].value

    }
    list.listL.forEach(val => {

        for(let i = 0; i < recupVal.length; i++){

            if(recupVal[0] !== '' && recupVal[i] === val[i]){

                verif = true

            }
        
        }

    })

    if(verif){

        list.removeL(recupVal)
        alert("c'est fait!")

    }

}

//affichage des données vendeur
function userContact(tab1, tab2, elm){

    const divCharacter = document.createElement('div')

    for(let i = 0; i < tab1.length; i++){

        const p = document.createElement('p')
        p.setAttribute(`data-attr`, `${i}`)
        p.textContent = `${tab2[i]}: ${tab1[i]}`
        divCharacter.appendChild(p)
    
    }
    elm.appendChild(divCharacter)

}

//affichage du vendeur
function presta(){

    const provider = document.querySelector('.prestataire')

    userContact(user, idUser, provider)

}

//affichage client et gestion des events
function fCustomer(){

    const customer = document.querySelector('.client')
    const formAddC = document.createElement('form')
    const button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.setAttribute('id', 'add-c')
    button.textContent = 'Ajouter'
    button.addEventListener('click', (e) => {//ajout form client

        e.preventDefault()
        formAddC.style.display = 'none'
        let tabButtonCust = []

        const buttonAdd = document.createElement('button')
        buttonAdd.setAttribute('type', 'submit')
        buttonAdd.textContent = 'Charger'
        buttonAdd.addEventListener('click', (e) => {//charge un client

            e.preventDefault()
            formOrigine[0] = e.target.name
            let origine = new ArrayStorage('origine')//envoi des valeurs au popup
            if(origine.list.length !== 0){

                origine.clear()
                origine = new ArrayStorage('origine')
            
            }
            origine.set(formOrigine[0])
            origine.set(idCust.length)
            ouvrirPopup('popupc.html','popupc','width=500,height=300,menubar=no,status=no')

        })

        tabButtonCust.push(buttonAdd)

        const buttonSave = document.createElement('button')
        buttonSave.setAttribute('type', 'submit')
        buttonSave.textContent = 'Sauvegarder'
        buttonSave.addEventListener('click', (e) => {//sauvegarder un client

            e.preventDefault()
            save(e, listCustomer)

        })
        tabButtonCust.push(buttonSave)

        const buttonSuppr = document.createElement('button')
        buttonSuppr.setAttribute('type', 'submit')
        buttonSuppr.textContent = 'Supprimer'
        buttonSuppr.addEventListener('click', (e) => {//supprimer un client

            e.preventDefault()
            suppr(e, listCustomer)

        })
        tabButtonCust.push(buttonSuppr)
        //creation du form
        const formCustomer = new FormClass(customer, idCust, idCust, formOrigine[0], 0, formChoix[0], tabButtonCust, [])
        formCustomer.madeForm()

    })

    formAddC.appendChild(button)
    formAddC.style.textAlign = 'center'
    customer.appendChild(formAddC)

}

//affichage du titre
function titreFacture(){

    const titre = document.querySelector('.nom-facture')
    const titreForm = ['Facture']
    //creation du form
    const formTitre = new FormClass(titre, titreForm, titreForm, 'titre', 0, 'titre', [], [])
    formTitre.madeForm()

}

// affichage des lignes de tarif et gestion des events
function initLigne(){

    const product = document.querySelector('.ligne-facturable')
    const formAddP = document.createElement('form')
    const button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.setAttribute('id', 'add-p')
    button.textContent = 'Ajouter'
    button.addEventListener('click', (e) => {//ajout d'une ligne

        nbProduct++
        let nbLigne = nbProduct

        e.preventDefault()
        let tabButtonProd = []

        const buttonAdd = document.createElement('button')
        buttonAdd.setAttribute('type', 'submit')
        buttonAdd.textContent = 'Charger'
        buttonAdd.addEventListener('click', (e) => {//charger une valeur

            e.preventDefault()

            let inputNotNull = buttonAdd.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].value

            if(inputNotNull){//si l'input n'est pas vide! sorti et ne rien faire

                return

            }

            formOrigine[1] = e.target.name
            let origine = new ArrayStorage('origine')//origine de la demande pour le popup
            if(origine.list.length !== 0){

                origine.clear()
                origine = new ArrayStorage('origine')
            
            }
            origine.set(formOrigine[1])
            origine.set(idProd.length)
            ouvrirPopup('popupp.html','popupp','width=500,height=300,menubar=no,status=no')

        })

        tabButtonProd.push(buttonAdd)

        const buttonSave = document.createElement('button')
        buttonSave.setAttribute('type', 'submit')
        buttonSave.textContent = 'Sauvegarder'
        buttonSave.addEventListener('click', (e) => {//sauvegarde d'un produit

            e.preventDefault()
            save(e, listProduct)
            let desactivation = new ArrayStorage('desactived')//activation ou pas du radio popup
            let valsuppr = buttonSuppr.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].value
            if(desactivation.list.indexOf(valsuppr) === -1){//ajout ou pas d'une valeur stocké

                desactivation.set(valsuppr)

            }

        })

        tabButtonProd.push(buttonSave)

        const buttonSuppr = document.createElement('button')
        buttonSuppr.setAttribute('type', 'submit')
        buttonSuppr.textContent = 'Supprimer'
        buttonSuppr.addEventListener('click', (e) => {//suppression d'une ligne

            e.preventDefault()
            nbProduct--
            let desactivation = new ArrayStorage('desactived')//activation ou pas du radio popup
            let valsuppr = buttonSuppr.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].value

            if(desactivation.list.indexOf(valsuppr) !== -1){//suppression ou pas d'une valeur stocké

                desactivation.remove(valsuppr)

            }
            
            buttonSuppr.parentNode.parentNode.remove()

        })

        tabButtonProd.push(buttonSuppr)
        //creation du form
        formOrigine[1] = `originePro${nbLigne}`
        const formProduct = new FormClass(product, idProd, [], formOrigine[1], nbLigne, formChoix[1], tabButtonProd, tabClass)
        formProduct.madeForm()

    })
    formAddP.appendChild(button)
    formAddP.style.textAlign = 'center'
    formAddP.style.margin = '5px'
    product.appendChild(formAddP)



}

//fonction d'affichage paiement et calcul des différentes colonnes prix
//gestion des evenement pour afficher
function prixTotal(){

    //fonction d'arrondi des prix
    function arrondir(num){

        const tmp = Math.pow(10, 2)
        const parsed = Math.round( num*tmp )/tmp
        return parsed

    }

    const ht = document.querySelector('.ht')
    const tva = document.querySelector('.tva')
    const ttc = document.querySelector('.ttc')
    let tvaC
    let ttcC

    // remplissage automatique des cases totaux
    function calcul(){

        total = 0
        const formLigne = document.querySelectorAll('.ligne-facturable form')
        for(let i = 1; i < formLigne.length; i++){

            let cal1 = formLigne[i].childNodes[0].childNodes[2].childNodes[0].value
            let cal2 = formLigne[i].childNodes[0].childNodes[3].childNodes[0].value
            formLigne[i].childNodes[0].childNodes[4].childNodes[0].value = cal1 * cal2

            const lastChildFormValeur = formLigne[i].childNodes[0].childNodes[4].childNodes[0].value
            if(lastChildFormValeur){
                
                //convertion des valeur afficher pour les calculs
                const parsed = parseFloat(lastChildFormValeur, 10)
               
                total += arrondir(parsed)

            }

        }

        ht.textContent = `Total: ${total}`
        tvaC = arrondir(total * 20 /100)
        tva.textContent = `Tva: ${tvaC}`
        ttcC = total + tvaC
        ttc.textContent = `Ttc: ${ttcC}`

    }
    //rafraichissement de l'affichage totaux toutes les deux secondes
    idRep = setInterval(calcul, 2000)
    //rafraichissement de l'affichage totaux sur evenement clavier
    document.addEventListener('keyup', calcul)
    //rafraichissement de l'affichage totaux sur evenement click
    document.addEventListener('click', calcul)

    ht.textContent = `Total: ${total}`
    tvaC = arrondir(total * 20 /100)
    tva.textContent = `Tva: ${tvaC}`
    ttcC = total + tvaC
    ttc.textContent = `Ttc: ${ttcC}`

}


export {presta, fCustomer, initLigne, titreFacture, nbProduct, prixTotal, formOrigine, formChoix, idRep}



