//fichier popup produit

import {listProduct} from './produit.esm.js'
import {Reporter} from './popup.esm.js'
import {formOrigine, formChoix} from './init.esm.js'
import {ArrayStorage} from './storage.esm.js'

let desactivation = new ArrayStorage('desactived')

const selectP = document.querySelector('.pro')

const button = document.createElement('button')
let choixRadio
let divFP
button.setAttribute('type', 'submit')
button.textContent = 'valider'
button.addEventListener('click', (e) => {

    e.preventDefault()
    const origine = new ArrayStorage('origine')
    Reporter(e, origine, formChoix[1], listProduct.listL, 'p')

})


for(let i = 0; i < listProduct.listL.length; i++){

    divFP = document.createElement('div')
    choixRadio = document.createElement('input')
    choixRadio.setAttribute('type', 'radio')
    choixRadio.setAttribute('id', `${listProduct.listL[i][0]}`)
    choixRadio.setAttribute('value', `${listProduct.listL[i][0]}`)
    choixRadio.setAttribute('name', 'product')
    const choixLabel = document.createElement('label')
    choixLabel.setAttribute('for', `${listProduct.listL[i][0]}`)
    choixLabel.textContent = listProduct.listL[i][0]
    choixLabel.style.margin = '5px'
    choixRadio.style.margin = '5px'
    divFP.appendChild(choixRadio)
    divFP.appendChild(choixLabel)
    selectP.appendChild(divFP)

}

selectP.appendChild(button)

window.addEventListener('load', () => {//event ouverture test des radios desactivés

    
    const tousLesInputs = document.querySelectorAll('input')

    tousLesInputs.forEach(input => {

        for(let i = 0; i < desactivation.list.length; i++){
            
            if(desactivation.list[i] === input.value){
    
                input.disabled = true
    
            }
    
        }

    })

})