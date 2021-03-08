//class de création de liste client ou produit

import {appelApi} from './constante.ems.js'

export {ListClass}

class ListClass {

    constructor(type, data, tabinit, func){

        this.type = type
        this.data = data
        this.tabinit = tabinit
        this.func = func
        this.listL = this.initL()

    }

    //initialiser la liste des clients ou des produits
    initL(){

        if(this.type.list.length === 0){

            appelApi(this.data).then(res => {

                this.func(res, this.tabinit, this.type)

            }).catch(error => {
            
                error.message
            
            })

        }

        return this.type.list

    }

    //ajouter un client  ou un produit
    setL(value){

        this.type.set(value)

    }
    //supprime un client ou produit
    removeL(value){

        this.type.remove(value)

    }

    //supprimer la liste des clients ou des produits
    clearL(){

        this.type.clear()

    }

}