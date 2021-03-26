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

        if(Array.isArray(value)){

            let test = 0
            let indexArray = -1

            for(let i = 0; i < this.list.length; i++){

                for(let j = 0; j < value.length; j++){

                    if(value[j] === this.list[i][j]) test++

                }

                if(test === value.length){
                    
                    indexArray = i

                }

                test = 0

            }

            if(indexArray !== -1){

                this.list.splice(indexArray, 1)
                localStorage.setItem(this.name, JSON.stringify(this.list))

            }
        

        }else{

            const index = this.list.indexOf(value)
            this.list.splice(index, 1)
            localStorage.setItem(this.name, JSON.stringify(this.list))

        }

    }

    //supprimer le liste de valeur
    clear(){

        localStorage.removeItem(this.name)

    }


}