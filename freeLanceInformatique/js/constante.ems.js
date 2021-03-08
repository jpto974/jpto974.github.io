//fichier des constantes

export {appelApi, user, idUser, idCust, idProd}

const user = ['FreeLance Informatique', '1 rue de toulouse 3100 Toulouse', '0562000000', '100 100 100', 'contact@freelanceinformatique.fr']
const idUser = ['Nom', 'Adresse', 'Tel', 'Siret', 'Email']
const idCust = ['Nom', 'Adresse', 'Tel']
const idProd = ['reference', 'description', 'quantité', 'prix', 'total']

async function appelApi(appel){
    
    const reponse = await fetch(appel)
    if (!reponse.ok) {

        const message = `Il y a eu une erreur: ${reponse.status}`

        throw new Error(message)
        
    }
    const data = await reponse.json()
        
    return data
        
}
