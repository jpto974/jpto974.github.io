// le slider

export {classSlider}

// class de manipulation du slider

class classSlider {

    constructor(images, commandes, cercles, nbImg){

        this.images = images
        this.commandes = commandes
        this.cercles = cercles
        this.nbImg = nbImg

    }

    // slider l'image active

    indexImageActive(){

        for(let i=0; i<this.nbImg; i++){

            if(this.images[i].classList.contains('active')){

                return i

            }

        }

    }

    // slider le cercle actif

    indexCercle(elm){

        for(let i=0; i<this.nbImg; i++){

            if(this.cercles[i].getAttribute('data-clic') === elm.getAttribute('data-clic')){

                return i

            }

        }

    }

    //gestion du slider avec les touches

/*    keyPressed(event){

        event.preventDefault()

        console.log(this)

        let index = this.indexImageActive()

        if(event.keyCode !== 37 && event.keyCode !== 39 ) return

        this.images[index].classList.remove('active')
        this.cercles[index].classList.remove('active-cercle')

        if(event.keyCode === 37){

            if(index === 0){

                this.images[this.nbImg - 1].classList.add('active')
                this.cercles[this.nbImg - 1].classList.add('active-cercle')

            }else{

                this.images[index - 1].classList.add('active')
                this.cercles[index - 1].classList.add('active-cercle')

            }

        }else if(event.keyCode === 39){
            
            if(index === this.nbImg - 1){

                this.images[0].classList.add('active')
                this.cercles[0].classList.add('active-cercle')


            }else{

                this.images[index + 1].classList.add('active')
                this.cercles[index + 1].classList.add('active-cercle')

            }
        }

    }*/

    // gestion du slider avec les cercles
    clickCercle(elm){

        let index = this.indexImageActive()
        let indexClick = this.indexCercle(elm)

        this.images[index].classList.remove('active')
        this.cercles[index].classList.remove('active-cercle')

        this.images[indexClick].classList.add('active')
        this.cercles[indexClick].classList.add('active-cercle')


    }

    // gestion du slider avec les bouton de commande
    clickCommande(e){

        let index = this.indexImageActive()

        this.images[index].classList.remove('active')
        this.cercles[index].classList.remove('active-cercle')

        if(e.classList.contains('left')){

            if(index === 0){

                this.images[this.nbImg - 1].classList.add('active')
                this.cercles[this.nbImg - 1].classList.add('active-cercle')

            }else{

                this.images[index - 1].classList.add('active')
                this.cercles[index - 1].classList.add('active-cercle')

            }

        }else{
            
            if(index === this.nbImg - 1){

                this.images[0].classList.add('active')
                this.cercles[0].classList.add('active-cercle')


            }else{

                this.images[index + 1].classList.add('active')
                this.cercles[index + 1].classList.add('active-cercle')

            }
        }

    }

    // rotation des images
    rotationImages(){

        let index = this.indexImageActive()

        this.images[index].classList.remove('active')
        this.cercles[index].classList.remove('active-cercle')


        if(index === this.nbImg - 1){

            this.images[0].classList.add('active')
            this.cercles[0].classList.add('active-cercle')


        }else{

            this.images[index + 1].classList.add('active')
            this.cercles[index + 1].classList.add('active-cercle')

        }


    }

}

