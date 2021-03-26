//class localstorage

export {ArrayStorage}

class ArrayStorage {
    
    //Le constructeur de la class
    constructor(name){

        this.name = name
        this.list = this.init()
        
    }

    //initialisation du tableau de liste des valeurs sauvegardées
    init(){

        if(!localStorage.getItem(this.name)){

            localStorage.setItem(this.name, '[]')

        }

        return JSON.parse(localStorage.getItem(this.name))

    }

    //nouvelle valeur de la liste
    set(value){

        this.list.push(value)
        localStorage.setItem(this.name, JSON.stringify(this.list))

    }

    //supprime une valeur
    remove(value){

        const index = this.list.indexOf(value)
        this.list.splice(index, 1)
        localStorage.setItem(this.name, JSON.stringify(this.list))

    }

    //supprimer le liste de valeur
    clear(){

        localStorage.removeItem(this.name)

    }


}