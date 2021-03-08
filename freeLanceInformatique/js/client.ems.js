//init de la liste client

import {ArrayStorage} from './storage.ems.js'
import {ListClass} from './list.ems.js'

export {listCustomer}

const customerVar = new ArrayStorage('customer')

let listC = []

function initC(res, tab, type){

    for(let i = 0; i < res.length; i++){

        tab[i] = [res[i].nom, res[i].adresse, res[i].tel]
        type.set(tab[i])
    
    }

}


const listCustomer = new ListClass(customerVar, './data/client.json', listC, initC)