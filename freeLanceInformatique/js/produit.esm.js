// fichier initialisation liste des produits

import {ArrayStorage} from './storage.esm.js'
import {ListClass} from './list.esm.js'

export {listProduct}

const productVar = new ArrayStorage('product')

let listP = []

function initP(res, tab, type){

    for(let i = 0; i < res.length; i++){

        tab[i] = [res[i].reference, res[i].description, res[i].quantité, res[i].prix]
        type.set(tab[i])
    
    }

}

const listProduct = new ListClass(productVar, './data/data.json', listP, initP)


