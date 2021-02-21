export {ArrayLocalStorage, ArraySessionStorage}

// class du storage local
class ArrayLocalStorage {
    
    //Le constructeur de la class
    constructor(name){
        this.name = name
        this.valeur = this.get()
    }

    //initialisation
    get(){

        if(!localStorage.getItem(this.name)){

            localStorage.setItem(this.name, '')

        }

        return localStorage.getItem(this.name)

    }

    //nouvelle valeur
    set(value){

        this.valeur = value
        localStorage.setItem(this.name, this.valeur)

    }

    //supprimer une valeur
    clear(){

        localStorage.removeItem(this.name)

    }


}

//class du storage session

class ArraySessionStorage {
    
    //Le constructeur de la class
    constructor(name){
        this.name = name
        this.valeur = this.get()
    }

    //initialisation
    get(){

        if(!sessionStorage.getItem(this.name)){

            sessionStorage.setItem(this.name, '')

        }

        return sessionStorage.getItem(this.name)

    }

    //nouvelle valeur
    set(value){

        this.valeur = value
        sessionStorage.setItem(this.name, this.valeur)

    }

    //supprimer une valeur
    clear(){

        sessionStorage.removeItem(this.name)

    }


}