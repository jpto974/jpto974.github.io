// fichier des fonction popup

export {ouvrirPopup, Reporter}
import {ArrayStorage} from './storage.esm.js'

let desactivation = new ArrayStorage('desactived')

//fonction de remplissage input en fonction du popup
function initForm(targetForm, targetInput, firstVal, listVal){

    const taille = targetForm.list[1]

    window.opener.document.forms[targetForm.list[0]].elements[`${targetInput}${0}`].value = firstVal

    listVal.forEach(val => {

        if(val[0] === firstVal){

            if(taille < 4){

                for(let i = 1; i < taille; i++){

                    window.opener.document.forms[targetForm.list[0]].elements[`${targetInput}${i}`].value = val[i]

                }

            }else{

                for(let i = 1; i < taille - 1; i++){

                    window.opener.document.forms[targetForm.list[0]].elements[`${targetInput}${i}`].value = val[i]

                }

                val[taille - 1] = val[taille - 2] * val[taille - 3]
                window.opener.document.forms[targetForm.list[0]].elements[`${targetInput}${taille - 1}`].value = val[taille - 1]

            }

        }

    })

}

//ouvrir un popup
function ouvrirPopup(page, nom, option){

    window.open(page, nom, option)

}

//fonction de retour des valeur du popup
function Reporter(e, origine, formChoix, list, pOuC){

    let choix
    const leChoix = e.target.parentNode

    for(let i = 0; i < leChoix.length; i++){

        if(leChoix[i].checked){

            choix = leChoix[i].value

        }

    }
    if(pOuC === 'p') desactivation.set(choix)
    initForm(origine, formChoix, choix, list)

    window.close()

}