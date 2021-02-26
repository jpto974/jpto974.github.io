import {appelApi, cle, villes, KEYMAP, stationVille, tabMarker} from './constante.ems.js'
import {ArrayLocalStorage, ArraySessionStorage} from './storage.ems.js'
import {classSlider} from './slider.ems.js'

//const CONTRACT = `https://api.jcdecaux.com/vls/v3/contracts?&apiKey=${cle}`

//la carte et le loader
const carte = document.getElementById('mapid')
const placeCarte = document.querySelector('.place-carte')
const placeLoader = document.getElementById('place-loader')

//les storages
const indexVilleStorage = new ArraySessionStorage('indexVille')

const leNom = new ArrayLocalStorage('nom')
const lePrenom = new ArrayLocalStorage('prenom')
const laStation = new ArraySessionStorage('station')
const leTemps = new ArraySessionStorage('temps')

//le temps après réservation
const temps = 20*60

const tempsString = temps.toString()
let chrono

let tempsPresent
let min
let sec

//le slider init
const images = document.querySelectorAll('.cont-slide-img img')
const span = document.querySelectorAll('.cont-slide-info span')
const commandes = document.querySelectorAll('.commandes button')
const cercles = document.querySelectorAll('.cercles div')
const slider = document.querySelector('.slider')
const nbImg = images.length

const leSlider = new classSlider(images, commandes, cercles, nbImg)
const lesInfos = new classSlider(span, commandes, cercles, nbImg)

//initialisation de l'affichage d'ensemble lien html js
const formulaire = document.querySelector('.formulaire')
const canvas = document.getElementById('canvasid')
const canvasTitre = document.getElementById('canvas-title')
const signature = document.getElementById('canvas-signature')
const stylo = document.getElementById('source')
const labelNom = document.querySelector('.text-nom')
const labelPrenom = document.querySelector('.text-prenom')
labelNom.innerText = 'Nom : '
labelPrenom.innerText = 'Prenom : '
const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const infoAdresse = document.getElementById('info-adresse')
infoAdresse.innerText = ''
const infoPlace = document.getElementById('info-place')
infoPlace.innerText = ''
const infoVelo = document.getElementById('info-velo')
infoVelo.innerText = ''

//les context canvas
let ctx //formulaire
let ctx2 //titre
let ctx3 //signature

//le bouton reserver
const reserver = document.getElementById('res')
//section d'information
const info = document.querySelector('.info')

//dessin formulaire

//fonction du dessin formulaire
function dessine(ctx){

    const tailleX = canvas.width
    const positionRes = (tailleX - 75)/2
    ctx.font = '12px serif'
    ctx.fillStyle = "#333"
    ctx.fillText('Adresse: ', 10, 30)
    ctx.fillText(infoAdresse.innerText, 10, 45)
    ctx.fillText(infoPlace.innerText, 10, 60)
    ctx.fillText(infoVelo.innerText, 10, 80)
    if(tailleX < 260){

        ctx.font = '15px serif'

    }else{

        ctx.font = '20px serif'

    }
    
    ctx.fillText(labelNom.innerText, 10, 120)
    ctx.fillText(labelPrenom.innerText, 10, 160)
    ctx.fillText(nom.value, (tailleX)*28/100, 120)
    ctx.fillText(prenom.value, (tailleX)*28/100, 160)

    ctx.save()
    
    ctx.beginPath()
    ctx.lineWidth= 2
    ctx.strokeStyle = '#333'
    ctx.moveTo((tailleX)*28/100 -12, 124)
    ctx.lineTo((tailleX)*28/100 + 152, 124)
    ctx.lineTo((tailleX)*28/100 + 152, 94)
    ctx.lineTo((tailleX)*28/100 -12, 94)
    ctx.lineTo((tailleX)*28/100 -12, 124)
    ctx.stroke()
    ctx.closePath()
    
    ctx.beginPath()
    ctx.lineWidth= 2
    ctx.strokeStyle = '#333'
    ctx.moveTo((tailleX)*28/100 -12, 164)
    ctx.lineTo((tailleX)*28/100 + 152, 164)
    ctx.lineTo((tailleX)*28/100 + 152, 134)
    ctx.lineTo((tailleX)*28/100 -12, 134)
    ctx.lineTo((tailleX)*28/100 -12, 164)
    ctx.stroke()
    ctx.closePath()
    
    ctx.beginPath()
    ctx.strokeStyle = '#333'
    ctx.font = '20px serif'
    ctx.fillText(reserver.innerText, positionRes, 230)
    ctx.lineWidth= 2
    ctx.arc(positionRes, 225, 20, Math.PI/2, -Math.PI/2)
    ctx.arc(positionRes + 75, 225, 20, -Math.PI/2, Math.PI/2)
    ctx.lineTo(positionRes, 245)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.strokeStyle = '#333'
    ctx.lineWidth= 2
    ctx.shadowColor = '#333'
    ctx.shadowBlur = 4
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY = 3
    ctx.arc(positionRes + 75, 225, 20, 0, Math.PI/2)
    ctx.lineTo(positionRes, 245)
    ctx.stroke()
    ctx.closePath()

    ctx.restore()

}

//signature
function dessinSigne(ctx3){

    //fonction du dessin point à point
    function drawLine(ctx3, x1, y1, x2, y2) {

        ctx3.beginPath()
        ctx3.lineWidth = 1
        ctx3.moveTo(x1, y1)
        ctx3.lineTo(x2, y2)
        ctx3.stroke()
        ctx3.closePath()
    
    }

    // Un booléen qui, lorsqu'il est vrai, indique que le déplacement de
    // la souris entraîne un dessin sur le canevas
    let isDrawing = false;
    let x = 0;
    let y = 0;

    
    // On récupère le décalage du canevas en x et y par rapport aux bords
    // de la page
    const rect = signature.getBoundingClientRect()
    
    // On ajoute les gestionnaires d'évènements pour mousedown, mousemove
    // et mouseup
    
    //je commence à signer
    function debutSigMouse(e){

        x = e.clientX - rect.left
        y = e.clientY - rect.top
        isDrawing = true

    }

    function debutSigTouch(e){

        x = e.touches[0].clientX - rect.left
        y = e.touches[0].clientY - rect.top

        isDrawing = true

    }
    //depart signature mouse
    signature.addEventListener('mousedown', debutSigMouse)
    //depart signature doigt
    signature.addEventListener('touchstart', debutSigTouch)
    
    //je bouge la souris pendant la signature

    function EnCoursMouse(e){

        e.preventDefault()
        
        if (isDrawing === true) {

            drawLine(ctx3, x, y, e.clientX - rect.left, e.clientY - rect.top)
            x = e.clientX - rect.left
            y = e.clientY - rect.top
    
        }

    }

    function EnCoursTouch(e){

        e.preventDefault()

        if (isDrawing === true) {
            
            drawLine(ctx3, x, y, e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top)
            x = e.touches[0].clientX - rect.left
            y = e.touches[0].clientY - rect.top
            
    
        }

    }

    //mouvement de la souris
    signature.addEventListener('mousemove', EnCoursMouse)
    //mouvement du doigt
    signature.addEventListener('touchmove', EnCoursTouch)
    
    //je leve la souris apres la signature
    function finSigMouse(e){

        if (isDrawing === true) {
            
            console.log('signe1')
            drawLine(ctx3, x, y, e.clientX - rect.left, e.clientY - rect.top)
            x = 0
            y = 0
            isDrawing = false
            signature.classList.add('cache')//cache de la signature
            carte.classList.add('map-seul')//la carte prend toute la place
            placeCarte.classList.add('seul')
            mymap.invalidateSize()//nouvelle taille de la carte
            
            //storage
            leNom.set(nom.value)
            lePrenom.set(prenom.value)
            laStation.set(tabInfo[0])
            leTemps.set(tempsString)
            tempsPresent = parseInt(leTemps.valeur, 10)
            formulaire.classList.add('cache')// cache du formulaire
            this.removeEventListener('mouseup', finSigMouse)
            this.removeEventListener('mousemove', EnCoursMouse)
            this.removeEventListener('mousedown', debutSigMouse)

        }

    }

    function finSingTouch(){

        if (isDrawing === true) {
            
            console.log('signe1')
            x = 0
            y = 0
            isDrawing = false
            signature.classList.add('cache')//cache de la signature
            carte.classList.add('map-seul')//la carte prend toute la place
            placeCarte.classList.add('seul')
            mymap.invalidateSize()//nouvelle taille de la carte

            //storage
            leNom.set(nom.value)
            lePrenom.set(prenom.value)
            laStation.set(tabInfo[0])
            leTemps.set(tempsString)
            tempsPresent = parseInt(leTemps.valeur, 10)
            formulaire.classList.add('cache')// cache du formulaire
            this.removeEventListener('touchend', finSingTouch)
            this.removeEventListener('touchmove', EnCoursTouch)
            this.removeEventListener('touchstart', debutSigTouch)

        }

    }
    //signature mouse
    signature.addEventListener('mouseup', finSigMouse)
    //signature tactile
    signature.addEventListener('touchend', finSingTouch)

}

//initialisation de la ville
const selectVille = document.getElementById('ville-select')

let indexVille = (indexVilleStorage.valeur === '')? 0 : parseInt(indexVilleStorage.valeur, 10)


// initialisation des valeur de stockage velo et marker
let valStation =[]
let tabInfo = []
for(let i = 0; i < 4; i++){

    tabInfo[i] = ''

}

// fonction API velo

function appelAfficheVelo(){

    const APIVELO = `https://api.jcdecaux.com/vls/v3/stations?contract=${villes[indexVille].nom}&apiKey=${cle}`

    appelApi(APIVELO).then(station => {

        //stockage des données de la l'api vélo
        for(let i = 0; i < station.length; i++){

            valStation[i] = new stationVille(station[i].name, station[i].address, station[i].position.latitude, station[i].position.longitude, station[i].totalStands.availabilities.stands, station[i].totalStands.availabilities.bikes)

            //valStation[i].dessinSurCarte(mymap, 'blue')
            valStation[i].dessinSurCarte(mymap)

        }

        // fonction d'action sur le marker
        function actionMark(){

            //affichage du canvas
            canvas.classList.remove('cache')//réapparition du canvas
            canvasTitre.classList.remove('cache')
            placeCarte.classList.remove('seul')
            carte.classList.remove('map-seul')
            formulaire.classList.remove('cache')

            canvas.width = formulaire.clientWidth
            canvas.height = formulaire.clientHeight
            ctx = canvas.getContext('2d')

            canvasTitre.width = canvasTitre.clientWidth
            canvasTitre.height = canvasTitre.clientHeight
            ctx2 = canvasTitre.getContext('2d')

            //Initialisation de la nouvelle taille de la carte
            mymap.invalidateSize()

            //récupération des données de la station en fonction du marker
            valStation.forEach(lieu => {

                if(lieu.lat === this._latlng.lat && lieu.lng === this._latlng.lng){

                    tabInfo = lieu.information(lieu.name, lieu.adresse, lieu.place, lieu.nbVelo)

                    infoAdresse.innerText = `${tabInfo[1].toLowerCase()}`
                    infoPlace.innerText = `${tabInfo[2]} place(s) libre(s)`
                    infoVelo.innerText = `${tabInfo[3]} vélo(s) disponible(s)`

                    //récupération du nom et du pénom stocké
                    nom.value = leNom.valeur
                    prenom.value = lePrenom.valeur

                    //centrage de la carte
                    mymap.setView([lieu.lat, lieu.lng], 13)
                    
                    //dessin du formulaire
                    dessine(ctx)

                    ctx2.font = '20px serif'
                    ctx2.fillStyle = "#333"
                    ctx2.fillText('Détail de la station', 8, 25)

                }
        
            })

        }
        //clique sur un marker
        tabMarker.forEach(mark => {

            mark.addEventListener('click', actionMark)

        })

    }).catch(error => {

        error.message

    })

}

//fonction réservation

function reservation(){
    
    if(nom.value !== '' && prenom.value !== '' && tabInfo[3] !== '0'){

        canvas.classList.toggle('cache')
        canvasTitre.classList.toggle('cache')
        signature.classList.toggle('cache')

        signature.width = formulaire.clientWidth
        signature.height = formulaire.clientHeight
        ctx3 = signature.getContext('2d')
        ctx3.clearRect(0, 0, signature.width, signature.height)
        ctx3.font = '20px serif'
        ctx3.strokeStyle = '#333'
        ctx3.drawImage(stylo, 0, 0, 200, 200, 5, 5, 80, 80)
        ctx3.fillText('Signature', 20, 100)
        dessinSigne(ctx3)

    }else {

        if(nom.value === '' || prenom.value === ''){

            alert(`Bonjour, Vous n'avez pas renseigné le nom et le prénom`)

        }else{

            alert(`Bonjour ${lePrenom.valeur} ${leNom.valeur}, il n'y a pas de vélo libre dans cette station`)

        }

    }

}

//ecrire le nom

nom.addEventListener('keyup', (lettre) => {

    let text = lettre.target.value
    nom.value = text
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    dessine(ctx)

})

//ecrire le prenom

prenom.addEventListener('keyup', (lettre) => {

    let text = lettre.target.value
    prenom.value = text
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    dessine(ctx)

})

//clique sur la réservation
reserver.addEventListener('click', (event) => {

    event.preventDefault()
    reservation()

})

//création de la selection des villes
for(let i=0; i<villes.length; i++){

    if(i === indexVille){

        const option = document.createElement('option')
        option.setAttribute('selected', true)
        option.innerText = villes[i].nom.charAt(0).toUpperCase() + villes[i].nom.slice(1)
        selectVille.appendChild(option)

    }else{

        const option = document.createElement('option')
        option.innerText = villes[i].nom.charAt(0).toUpperCase() + villes[i].nom.slice(1)
        selectVille.appendChild(option)

    }

}


// le slider

//id de rotation auto des images
let idImgRot = setInterval(() => {

    leSlider.rotationImages()
    lesInfos.rotationImages()
    
}, 5000)


//event sur les commandes
leSlider.commandes.forEach(commande => {

    commande.addEventListener('click', (com) => {
    
        com.preventDefault()
        if(idImgRot !== 0){

            clearInterval(idImgRot)
            idImgRot = 0

        }
        leSlider.clickCommande(com.target)
    
    })

})

lesInfos.commandes.forEach(commande => {

    commande.addEventListener('click', (com) => {
    
        com.preventDefault()
        if(idImgRot !== 0){

            clearInterval(idImgRot)
            idImgRot = 0

        }
        lesInfos.clickCommande(com.target)
    
    })

})

//event sur les cercles
leSlider.cercles.forEach(cercle => {

    cercle.addEventListener('click', (elm) => {
    
        elm.preventDefault()
        if(idImgRot !== 0){

            clearInterval(idImgRot)
            idImgRot = 0

        }
        leSlider.clickCercle(elm.target)
    
    })

})

lesInfos.cercles.forEach(cercle => {

    cercle.addEventListener('click', (elm) => {
    
        elm.preventDefault()
        if(idImgRot !== 0){

            clearInterval(idImgRot)
            idImgRot = 0

        }
        lesInfos.clickCercle(elm.target)
    
    })

})

// click sur le slider play ou pause
slider.addEventListener('click', (elm) => {
    
    elm.preventDefault()

    if(idImgRot === 0 && !elm.target.classList.contains('left') && !elm.target.classList.contains('right') && !elm.target.classList.contains('cercle')){

        idImgRot = setInterval(() => {

            leSlider.rotationImages()
            lesInfos.rotationImages()
                
        }, 5000)

    }else{

        if(idImgRot !== 0){

            clearInterval(idImgRot)
            idImgRot = 0

        }

    }
        
    
})

//gestion du slider avec les touches

function leSliderKeyPressed(event){

    event.preventDefault()


    let index = leSlider.indexImageActive()

    if(event.keyCode !== 37 && event.keyCode !== 39 ) return

    if(idImgRot !== 0){

        clearInterval(idImgRot)
        idImgRot = 0

    }

    leSlider.images[index].classList.remove('active')
    leSlider.cercles[index].classList.remove('active-cercle')

    if(event.keyCode === 37){

        if(index === 0){

            leSlider.images[leSlider.nbImg - 1].classList.add('active')
            leSlider.cercles[leSlider.nbImg - 1].classList.add('active-cercle')

        }else{

            leSlider.images[index - 1].classList.add('active')
            leSlider.cercles[index - 1].classList.add('active-cercle')

        }

    }else if(event.keyCode === 39){
            
        if(index === leSlider.nbImg - 1){

            leSlider.images[0].classList.add('active')
            leSlider.cercles[0].classList.add('active-cercle')


        }else{

            leSlider.images[index + 1].classList.add('active')
            leSlider.cercles[index + 1].classList.add('active-cercle')

        }
    }

}

function lesInfosKeyPressed(event){

    event.preventDefault()

    let index = lesInfos.indexImageActive()

    if(event.keyCode !== 37 && event.keyCode !== 39 ) return

    if(idImgRot !== 0){

        clearInterval(idImgRot)
        idImgRot = 0

    }

    lesInfos.images[index].classList.remove('active')
    lesInfos.cercles[index].classList.remove('active-cercle')

    if(event.keyCode === 37){

        if(index === 0){

            lesInfos.images[lesInfos.nbImg - 1].classList.add('active')
            lesInfos.cercles[lesInfos.nbImg - 1].classList.add('active-cercle')

        }else{

            lesInfos.images[index - 1].classList.add('active')
            lesInfos.cercles[index - 1].classList.add('active-cercle')

        }

    }else if(event.keyCode === 39){
            
        if(index === lesInfos.nbImg - 1){

            lesInfos.images[0].classList.add('active')
            lesInfos.cercles[0].classList.add('active-cercle')


        }else{

            lesInfos.images[index + 1].classList.add('active')
            lesInfos.cercles[index + 1].classList.add('active-cercle')

        }
    }

}

// gestion du slider avec les touches
document.addEventListener('keyup', leSliderKeyPressed)
document.addEventListener('keyup', lesInfosKeyPressed)


//affichage info
chrono = setInterval(() => {

    if(laStation.valeur === '' && leNom.valeur === ''){

        info.innerHTML = 'Choisissez votre ville, votre station et inscrivez-vous!'

    }else if(laStation.valeur === ''){

        info.innerHTML = `<p>Bonjour ${lePrenom.valeur} ${leNom.valeur}</p>`

    }else{

        if(tempsPresent !== 0){

            tempsPresent -= 1
            min = Math.trunc(tempsPresent/(60))
            sec = tempsPresent%(60)
            leTemps.set(tempsPresent.toString())
            info.innerHTML = `<p>Vélo réservé à la station ${laStation.valeur} par ${lePrenom.valeur} ${leNom.valeur}</p>
            <br>
            <p> Temps restant ${min} min : ${sec} s</p>
            <br>`

        }else{

            info.innerHTML = `<p>Bonjour ${lePrenom.valeur} ${leNom.valeur}</p>`
            leTemps.clear()
            laStation.clear()

        }

    }

}, 1000)

window.addEventListener("beforeunload", (e) => {

    e.preventDefault()
    clearInterval(chrono)
    leTemps.clear()
    laStation.clear()
    indexVilleStorage.clear()

})

//creation de la carte
const mymap = L.map('mapid').setView([villes[indexVille].lat, villes[indexVille].long], 13)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: KEYMAP
}).addTo(mymap)


//info ville et velo
appelAfficheVelo()

//si on change de ville
selectVille.addEventListener('change', () => {

    setTimeout(() => {

        carte.classList.toggle('cache')
        placeLoader.classList.toggle('cache')
    
    },2000)

    indexVille = selectVille.selectedIndex
    indexVilleStorage.set(indexVille.toString())
    mymap.setView([villes[indexVille].lat, villes[indexVille].long], 13)
    carte.classList.toggle('cache')
    placeLoader.classList.toggle('cache')
    
    //info ville et velo
    appelAfficheVelo()

})

//affichage de la carte avec effet de chargement

setTimeout(() => {

    carte.classList.toggle('cache')
    placeLoader.classList.toggle('cache')

},2000)

carte.classList.toggle('cache')
placeLoader.classList.toggle('cache')
