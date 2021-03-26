//class de creation des formulaires

export {FormClass}

class FormClass {

    constructor(parentElm, nbInput, tabLabel, origineForm, nbForm, choixForm, tabButton, tabClass){

        this.parentElm = parentElm
        this.nbInput = nbInput
        this.tabLabel = tabLabel
        this.origineForm = origineForm
        this.nbForm = nbForm
        this.choixForm = choixForm
        this.tabButton = tabButton
        this.tabClass = tabClass

    }

    madeForm(){
        
        const parent = this.parentElm
        const formConst = document.createElement('form')
        formConst.setAttribute('name', `${this.origineForm}`)
        const divContainer = document.createElement('div')

        if(this.tabClass.length !== 0){

            divContainer.classList.add(this.tabClass[0])
            divContainer.classList.add(this.tabClass[1])

        }

        for(let i = 0; i < this.nbInput.length; i++){

            const divItem = document.createElement('div')
            if(this.tabClass.length !== 0){

                divItem.classList.add(this.tabClass[2])

            }

            const label = document.createElement('label')
            if(this.tabLabel.length !== 0){

                label.setAttribute('for', this.tabLabel[i])
                label.textContent = `${this.tabLabel[i]}:`

            }else{

                label.remove()

            }

            if(i === 1){

                const textAera = document.createElement('textarea')

                textAera.setAttribute('rows', '3')
                textAera.setAttribute('cols', '30')

                if(this.tabLabel.length !== 0){

                    textAera.setAttribute('id', this.tabLabel[i])

                }

                textAera.setAttribute('name', `${this.choixForm}${i}`)


                if(this.tabLabel.length !== 0){

                    divItem.appendChild(label)

                }
            
                divItem.appendChild(textAera)
                divContainer.appendChild(divItem)

            }else{

                const input = document.createElement('input')
                if(i > 1 && this.nbInput.length > 3){

                    input.setAttribute('type', 'number')
                    input.setAttribute('step', '0.01')

                }else{

                    input.setAttribute('type', 'text')

                }
                
                if(this.tabLabel.length !== 0){

                    input.setAttribute('id', this.tabLabel[i])

                }

                input.setAttribute('name', `${this.choixForm}${i}`)


                if(this.tabLabel.length !== 0){

                    divItem.appendChild(label)

                }
            
                divItem.appendChild(input)
                divContainer.appendChild(divItem)

            }

        }

        const divButton = document.createElement('div')
        for(let i = 0; i < this.tabButton.length; i++){

            
            this.tabButton[i].setAttribute('name', `${this.origineForm}`)
            divButton.appendChild(this.tabButton[i])

        }

        formConst.appendChild(divContainer)
        formConst.appendChild(divButton)
        parent.appendChild(formConst)
        
    }

}