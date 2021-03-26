import {presta, fCustomer, initLigne, titreFacture, nbProduct, prixTotal, idRep} from './init.esm.js'
import { ArrayStorage } from './storage.esm.js'

//affichage du prestataire
presta()

//affichage de la partie client
fCustomer()

//affichage de la partie titre de la facture
titreFacture()

//affichage de la partie facturation
initLigne()

//affichage de la partie paiement
prixTotal()


//evenement pour afficher la validation
const validation = document.querySelector('.validation')
const message = document.getElementById('info')


document.addEventListener('click', () => {


    if(nbProduct > 0){//affichage de validation s'il y a au moins une ligne

        validation.classList.add('valide')

    }else{

        validation.classList.remove('valide')

    }

    


})

message.innerHTML = ''

validation.addEventListener('click', (e) => {

    e.preventDefault()

    const tousLesInputs = document.querySelectorAll('input')

    let testInput = true

    tousLesInputs.forEach(input => {//recherche des inputs vide
        
        if(input.value === ''){

            testInput = false

        }

    })

    if(testInput){//réinitialisation des valeurs

        message.innerHTML = 'votre facture est sauvegardée !<br>'
        let desactivation = new ArrayStorage('desactived')
        desactivation.clear()
        let origine = new ArrayStorage('origine')
        origine.clear()
        const tousLesInputs = document.querySelectorAll('input')

        tousLesInputs.forEach(input => {
        
        input.value = ''

        })
        clearInterval(idRep)
        
        setTimeout(() => {

            message.innerHTML = ''
        
        }, 2000)

    }else{

        message.innerHTML = 'Au moins un emplacement de la facture est vide!<br>'


    }

})

