//fichier popup client


import {listCustomer} from './client.esm.js'
import {Reporter} from './popup.esm.js'
import {formOrigine, formChoix} from './init.esm.js'
import {ArrayStorage} from './storage.esm.js'

const selectC = document.querySelector('.cl')

const button = document.createElement('button')
button.setAttribute('type', 'submit')
button.textContent = 'valider'
button.addEventListener('click', (e) => {

    e.preventDefault()
    const origine = new ArrayStorage('origine')
    Reporter(e, origine, formChoix[0], listCustomer.listL, 'c')
    
})


for(let i = 0; i < listCustomer.listL.length; i++){

    const divFC = document.createElement('div')
    const choixRadio = document.createElement('input')
    choixRadio.setAttribute('type', 'radio')
    choixRadio.setAttribute('id', `${listCustomer.listL[i][0]}`)
    choixRadio.setAttribute('value', `${listCustomer.listL[i][0]}`)
    choixRadio.setAttribute('name', 'customer')
    const choixLabel = document.createElement('label')
    choixLabel.setAttribute('for', `${listCustomer.listL[i][0]}`)
    choixLabel.textContent = listCustomer.listL[i][0]
    choixLabel.style.margin = '5px'
    choixRadio.style.margin = '5px'
    divFC.appendChild(choixRadio)
    divFC.appendChild(choixLabel)
    selectC.appendChild(divFC)

}

selectC.appendChild(button)
