export {appelApi, cle, villes, KEYMAP, stationVille, tabMarker}

const cle = '560b9d867db1d9b791ed8bf6fbcc6199db1046aa'

const KEYMAP = 'pk.eyJ1IjoianB0byIsImEiOiJja2t2YjFreDE0aDZ0MnZxdGJrNGVoNTZ4In0.ONBWTw7yRwsgdk74aOAIAg'
const tabMarker = []

// tableau des ville francais JCDecaux et leur géolocalisation
const villes = [

    {
        nom: 'rouen',
        lat: 49.4404591,
        long: 1.0939658
    },
    {
        nom: 'toulouse',
        lat: 43.6043,
        long: 1.4437
    },
    {
        nom: 'amiens',
        lat: 49.8941708,
        long: 2.2956951
    },
    {
        nom: 'mulhouse',
        lat: 47.7467,
        long: 7.3389275
    },
    {
        nom: 'lyon',
        lat: 45.7578137,
        long: 4.8320114
    },
    {
        nom: 'nancy',
        lat: 48.6937223,
        long: 6.1834097
    },
    {
        nom: 'creteil',
        lat: 48.7771486,
        long: 2.4530731
    },
    {
        nom: 'cergy-pontoise',
        lat: 49.0527528,
        long: 2.0388736
    },
    {
        nom: 'marseille',
        lat: 43.2961743,
        long: 5.3699525
    },
    {
        nom: 'nantes',
        lat: 47.2186371,
        long: -1.5541362
    },
    {
        nom: 'besancon',
        lat: 47.2380222,
        long: 6.0243622
    }
    

]

// class de récupération des stations 

class stationVille {

    constructor(name, adresse, lat, lng, place, nbVelo){

        this.name = name
        this.adresse = adresse
        this.lat = lat
        this.lng = lng
        this.place = place
        this.nbVelo = nbVelo

    }

    // dessin sur la carte d'un marker pour la station
    dessinSurCarte(mymap){

        const marker = L.marker([this.lat, this.lng], {

            bubblingMouseEvents: true

        }).addTo(mymap)

        tabMarker.push(marker)

    }

    /*dessinSurCarte(mymap, color){

        const redIcon = L.icon({
            iconUrl: './imgs/marker_red.png',
        
            iconSize:     [40, 50], // size of the icon
            iconAnchor:   [20, 0], // point of the icon which will correspond to marker's location
            
        })

        const blueIcon = L.icon({
            iconUrl: './imgs/marker_blue.png',
        
            iconSize:     [40, 50], // size of the icon
            iconAnchor:   [20, 0], // point of the icon which will correspond to marker's location
            
        })

        if(color === 'red'){

            const marker = L.marker([this.lat, this.lng], {

                bubblingMouseEvents: true,
                icon: redIcon
    
            }).addTo(mymap)

            tabMarker.push(marker)

        }else{

            const marker = L.marker([this.lat, this.lng], {

                bubblingMouseEvents: true,
                icon: blueIcon
    
            }).addTo(mymap)

            tabMarker.push(marker)

        }

    }*/

    //fonction de récupération des infos utiles de la station 
    information(nameSt, add, stands, bikes){

        const tab = []
        nameSt = this.name
        tab.push(nameSt)
        add = this.adresse
        tab.push(add)
        stands = this.place.toString()
        tab.push(stands)
        bikes = this.nbVelo.toString()
        tab.push(bikes)

        return tab

    }

}

// fonction general d'appel api

async function appelApi(appel){
    
    const reponse = await fetch(appel)
    if (!reponse.ok) {
        const message = `Il y a eu une erreur: ${reponse.status}`
        throw new Error(message)
    }
    const data = await reponse.json()

    return data

}


