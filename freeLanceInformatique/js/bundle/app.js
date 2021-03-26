/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.esm.js */ \"./js/init.esm.js\");\n/* harmony import */ var _storage_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.esm.js */ \"./js/storage.esm.js\");\n\n //affichage du prestataire\n\n(0,_init_esm_js__WEBPACK_IMPORTED_MODULE_0__.presta)(); //affichage de la partie client\n\n(0,_init_esm_js__WEBPACK_IMPORTED_MODULE_0__.fCustomer)(); //affichage de la partie titre de la facture\n\n(0,_init_esm_js__WEBPACK_IMPORTED_MODULE_0__.titreFacture)(); //affichage de la partie facturation\n\n(0,_init_esm_js__WEBPACK_IMPORTED_MODULE_0__.initLigne)(); //affichage de la partie paiement\n\n(0,_init_esm_js__WEBPACK_IMPORTED_MODULE_0__.prixTotal)(); //evenement pour afficher la validation\n\nvar validation = document.querySelector('.validation');\nvar message = document.getElementById('info');\ndocument.addEventListener('click', function () {\n  if (_init_esm_js__WEBPACK_IMPORTED_MODULE_0__.nbProduct > 0) {\n    //affichage de validation s'il y a au moins une ligne\n    validation.classList.add('valide');\n  } else {\n    validation.classList.remove('valide');\n  }\n});\nmessage.innerHTML = '';\nvalidation.addEventListener('click', function (e) {\n  e.preventDefault();\n  var tousLesInputs = document.querySelectorAll('input');\n  var testInput = true;\n  tousLesInputs.forEach(function (input) {\n    //recherche des inputs vide\n    if (input.value === '') {\n      testInput = false;\n    }\n  });\n\n  if (testInput) {\n    //réinitialisation des valeurs\n    message.innerHTML = 'votre facture est sauvegardée !<br>';\n    var desactivation = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_1__.ArrayStorage('desactived');\n    desactivation.clear();\n    var origine = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_1__.ArrayStorage('origine');\n    origine.clear();\n\n    var _tousLesInputs = document.querySelectorAll('input');\n\n    _tousLesInputs.forEach(function (input) {\n      input.value = '';\n    });\n\n    clearInterval(_init_esm_js__WEBPACK_IMPORTED_MODULE_0__.idRep);\n    setTimeout(function () {\n      message.innerHTML = '';\n    }, 2000);\n  } else {\n    message.innerHTML = 'Au moins un emplacement de la facture est vide!<br>';\n  }\n});\n\n//# sourceURL=webpack://freeLanceInformatique/./js/app.js?");

/***/ }),

/***/ "./js/client.esm.js":
/*!**************************!*\
  !*** ./js/client.esm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listCustomer\": () => (/* binding */ listCustomer)\n/* harmony export */ });\n/* harmony import */ var _storage_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.esm.js */ \"./js/storage.esm.js\");\n/* harmony import */ var _list_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.esm.js */ \"./js/list.esm.js\");\n//init de la liste client\n\n\n\nvar customerVar = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_0__.ArrayStorage('customer');\nvar listC = [];\n\nfunction initC(res, tab, type) {\n  for (var i = 0; i < res.length; i++) {\n    tab[i] = [res[i].nom, res[i].adresse, res[i].tel];\n    type.set(tab[i]);\n  }\n}\n\nvar listCustomer = new _list_esm_js__WEBPACK_IMPORTED_MODULE_1__.ListClass(customerVar, './data/client.json', listC, initC);\n\n//# sourceURL=webpack://freeLanceInformatique/./js/client.esm.js?");

/***/ }),

/***/ "./js/constante.esm.js":
/*!*****************************!*\
  !*** ./js/constante.esm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appelApi\": () => (/* binding */ appelApi),\n/* harmony export */   \"user\": () => (/* binding */ user),\n/* harmony export */   \"idUser\": () => (/* binding */ idUser),\n/* harmony export */   \"idCust\": () => (/* binding */ idCust),\n/* harmony export */   \"idProd\": () => (/* binding */ idProd)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//fichier des constantes\n\nvar user = ['FreeLance Informatique', '1 rue de toulouse 3100 Toulouse', '0562000000', '100 100 100', 'contact@freelanceinformatique.fr'];\nvar idUser = ['Nom', 'Adresse', 'Tel', 'Siret', 'Email'];\nvar idCust = ['Nom', 'Adresse', 'Tel'];\nvar idProd = ['reference', 'description', 'quantité', 'prix', 'total'];\n\nfunction appelApi(_x) {\n  return _appelApi.apply(this, arguments);\n}\n\nfunction _appelApi() {\n  _appelApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(appel) {\n    var reponse, message, data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(appel);\n\n          case 2:\n            reponse = _context.sent;\n\n            if (reponse.ok) {\n              _context.next = 6;\n              break;\n            }\n\n            message = \"Il y a eu une erreur: \".concat(reponse.status);\n            throw new Error(message);\n\n          case 6:\n            _context.next = 8;\n            return reponse.json();\n\n          case 8:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _appelApi.apply(this, arguments);\n}\n\n//# sourceURL=webpack://freeLanceInformatique/./js/constante.esm.js?");

/***/ }),

/***/ "./js/form.esm.js":
/*!************************!*\
  !*** ./js/form.esm.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormClass\": () => (/* binding */ FormClass)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//class de creation des formulaires\n\n\nvar FormClass = /*#__PURE__*/function () {\n  function FormClass(parentElm, nbInput, tabLabel, origineForm, nbForm, choixForm, tabButton, tabClass) {\n    _classCallCheck(this, FormClass);\n\n    this.parentElm = parentElm;\n    this.nbInput = nbInput;\n    this.tabLabel = tabLabel;\n    this.origineForm = origineForm;\n    this.nbForm = nbForm;\n    this.choixForm = choixForm;\n    this.tabButton = tabButton;\n    this.tabClass = tabClass;\n  }\n\n  _createClass(FormClass, [{\n    key: \"madeForm\",\n    value: function madeForm() {\n      var parent = this.parentElm;\n      var formConst = document.createElement('form');\n      formConst.setAttribute('name', \"\".concat(this.origineForm));\n      var divContainer = document.createElement('div');\n\n      if (this.tabClass.length !== 0) {\n        divContainer.classList.add(this.tabClass[0]);\n        divContainer.classList.add(this.tabClass[1]);\n      }\n\n      for (var i = 0; i < this.nbInput.length; i++) {\n        var divItem = document.createElement('div');\n\n        if (this.tabClass.length !== 0) {\n          divItem.classList.add(this.tabClass[2]);\n        }\n\n        var label = document.createElement('label');\n\n        if (this.tabLabel.length !== 0) {\n          label.setAttribute('for', this.tabLabel[i]);\n          label.textContent = \"\".concat(this.tabLabel[i], \":\");\n        } else {\n          label.remove();\n        }\n\n        if (i === 1) {\n          var textAera = document.createElement('textarea');\n          textAera.setAttribute('rows', '3');\n          textAera.setAttribute('cols', '30');\n\n          if (this.tabLabel.length !== 0) {\n            textAera.setAttribute('id', this.tabLabel[i]);\n          }\n\n          textAera.setAttribute('name', \"\".concat(this.choixForm).concat(i));\n\n          if (this.tabLabel.length !== 0) {\n            divItem.appendChild(label);\n          }\n\n          divItem.appendChild(textAera);\n          divContainer.appendChild(divItem);\n        } else {\n          var input = document.createElement('input');\n\n          if (i > 1 && this.nbInput.length > 3) {\n            input.setAttribute('type', 'number');\n            input.setAttribute('step', '0.01');\n          } else {\n            input.setAttribute('type', 'text');\n          }\n\n          if (this.tabLabel.length !== 0) {\n            input.setAttribute('id', this.tabLabel[i]);\n          }\n\n          input.setAttribute('name', \"\".concat(this.choixForm).concat(i));\n\n          if (this.tabLabel.length !== 0) {\n            divItem.appendChild(label);\n          }\n\n          divItem.appendChild(input);\n          divContainer.appendChild(divItem);\n        }\n      }\n\n      var divButton = document.createElement('div');\n\n      for (var _i = 0; _i < this.tabButton.length; _i++) {\n        this.tabButton[_i].setAttribute('name', \"\".concat(this.origineForm));\n\n        divButton.appendChild(this.tabButton[_i]);\n      }\n\n      formConst.appendChild(divContainer);\n      formConst.appendChild(divButton);\n      parent.appendChild(formConst);\n    }\n  }]);\n\n  return FormClass;\n}();\n\n//# sourceURL=webpack://freeLanceInformatique/./js/form.esm.js?");

/***/ }),

/***/ "./js/init.esm.js":
/*!************************!*\
  !*** ./js/init.esm.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"presta\": () => (/* binding */ presta),\n/* harmony export */   \"fCustomer\": () => (/* binding */ fCustomer),\n/* harmony export */   \"initLigne\": () => (/* binding */ initLigne),\n/* harmony export */   \"titreFacture\": () => (/* binding */ titreFacture),\n/* harmony export */   \"nbProduct\": () => (/* binding */ nbProduct),\n/* harmony export */   \"prixTotal\": () => (/* binding */ prixTotal),\n/* harmony export */   \"formOrigine\": () => (/* binding */ formOrigine),\n/* harmony export */   \"formChoix\": () => (/* binding */ formChoix),\n/* harmony export */   \"idRep\": () => (/* binding */ idRep)\n/* harmony export */ });\n/* harmony import */ var _constante_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constante.esm.js */ \"./js/constante.esm.js\");\n/* harmony import */ var _popup_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.esm.js */ \"./js/popup.esm.js\");\n/* harmony import */ var _form_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.esm.js */ \"./js/form.esm.js\");\n/* harmony import */ var _storage_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.esm.js */ \"./js/storage.esm.js\");\n/* harmony import */ var _client_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.esm.js */ \"./js/client.esm.js\");\n/* harmony import */ var _produit_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produit.esm.js */ \"./js/produit.esm.js\");\n\n\n\n\n\n\nvar nbProduct = 0;\nvar total = 0;\nvar idRep;\nvar formOrigine = ['origineCust', ''];\nvar formChoix = ['choixCust', 'choixProd'];\nvar tabClass = ['grid-container', 'ligne', 'grid-item']; //test sauvegarde client ou produit et sauvegarde\n\nfunction save(e, list) {\n  var returnFrom = e.target.parentNode.parentNode.childNodes; //retour au form de l'event\n\n  var verif = true;\n  var valNode = returnFrom[0].childNodes; //retour au input contenant les valeur\n\n  var recupVal = [];\n\n  for (var i = 0; i < valNode.length; i++) {\n    if (valNode.length < 4) {\n      recupVal[i] = valNode[i].childNodes[1].value;\n    } else {\n      recupVal[i] = valNode[i].childNodes[0].value;\n    }\n  }\n\n  list.listL.forEach(function (val) {\n    if (recupVal[0] === '' || recupVal[0] === val[0]) {\n      //si le 1er champs est identique ou vide\n      verif = false;\n    }\n  });\n\n  if (verif) {\n    list.setL(recupVal);\n    alert(\"c'est fait!\");\n  }\n} //test pour suppression client et suppression\n\n\nfunction suppr(e, list) {\n  var returnFrom = e.target.parentNode.parentNode.childNodes; //retour au form de l'event\n\n  var verif = false;\n  var valNode = returnFrom[0].childNodes; //retour au input contenant les valeur\n\n  var recupVal = [];\n\n  for (var i = 0; i < valNode.length; i++) {\n    recupVal[i] = valNode[i].childNodes[1].value;\n  }\n\n  list.listL.forEach(function (val) {\n    for (var _i = 0; _i < recupVal.length; _i++) {\n      if (recupVal[0] !== '' && recupVal[_i] === val[_i]) {\n        verif = true;\n      }\n    }\n  });\n\n  if (verif) {\n    list.removeL(recupVal);\n    alert(\"c'est fait!\");\n  }\n} //affichage des données vendeur\n\n\nfunction userContact(tab1, tab2, elm) {\n  var divCharacter = document.createElement('div');\n\n  for (var i = 0; i < tab1.length; i++) {\n    var p = document.createElement('p');\n    p.setAttribute(\"data-attr\", \"\".concat(i));\n    p.textContent = \"\".concat(tab2[i], \": \").concat(tab1[i]);\n    divCharacter.appendChild(p);\n  }\n\n  elm.appendChild(divCharacter);\n} //affichage du vendeur\n\n\nfunction presta() {\n  var provider = document.querySelector('.prestataire');\n  userContact(_constante_esm_js__WEBPACK_IMPORTED_MODULE_0__.user, _constante_esm_js__WEBPACK_IMPORTED_MODULE_0__.idUser, provider);\n} //affichage client et gestion des events\n\n\nfunction fCustomer() {\n  var customer = document.querySelector('.client');\n  var formAddC = document.createElement('form');\n  var button = document.createElement('button');\n  button.setAttribute('type', 'submit');\n  button.setAttribute('id', 'add-c');\n  button.textContent = 'Ajouter';\n  button.addEventListener('click', function (e) {\n    //ajout form client\n    e.preventDefault();\n    formAddC.style.display = 'none';\n    var tabButtonCust = [];\n    var buttonAdd = document.createElement('button');\n    buttonAdd.setAttribute('type', 'submit');\n    buttonAdd.textContent = 'Charger';\n    buttonAdd.addEventListener('click', function (e) {\n      //charge un client\n      e.preventDefault();\n      formOrigine[0] = e.target.name;\n      var origine = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_3__.ArrayStorage('origine'); //envoi des valeurs au popup\n\n      if (origine.list.length !== 0) {\n        origine.clear();\n        origine = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_3__.ArrayStorage('origine');\n      }\n\n      origine.set(formOrigine[0]);\n      origine.set(_constante_esm_js__WEBPACK_IMPORTED_MODULE_0__.idCust.length);\n      (0,_popup_esm_js__WEBPACK_IMPORTED_MODULE_1__.ouvrirPopup)('popupc.html', 'popupc', 'width=500,height=300,menubar=no,status=no');\n    });\n    tabButtonCust.push(buttonAdd);\n    var buttonSave = document.createElement('button');\n    buttonSave.setAttribute('type', 'submit');\n    buttonSave.textContent = 'Sauvegarder';\n    buttonSave.addEventListener('click', function (e) {\n      //sauvegarder un client\n      e.preventDefault();\n      save(e, _client_esm_js__WEBPACK_IMPORTED_MODULE_4__.listCustomer);\n    });\n    tabButtonCust.push(buttonSave);\n    var buttonSuppr = document.createElement('button');\n    buttonSuppr.setAttribute('type', 'submit');\n    buttonSuppr.textContent = 'Supprimer';\n    buttonSuppr.addEventListener('click', function (e) {\n      //supprimer un client\n      e.preventDefault();\n      suppr(e, _client_esm_js__WEBPACK_IMPORTED_MODULE_4__.listCustomer);\n    });\n    tabButtonCust.push(buttonSuppr); //creation du form\n\n    var formCustomer = new _form_esm_js__WEBPACK_IMPORTED_MODULE_2__.FormClass(customer, _constante_esm_js__WEBPACK_IMPORTED_MODULE_0__.idCust, _constante_esm_js__WEBPACK_IMPORTED_MODULE_0__.idCust, formOrigine[0], 0, formChoix[0], tabButtonCust, []);\n    formCustomer.madeForm();\n  });\n  formAddC.appendChild(button);\n  formAddC.style.textAlign = 'center';\n  customer.appendChild(formAddC);\n} //affichage du titre\n\n\nfunction titreFacture() {\n  var titre = document.querySelector('.nom-facture');\n  var titreForm = ['Facture']; //creation du form\n\n  var formTitre = new _form_esm_js__WEBPACK_IMPORTED_MODULE_2__.FormClass(titre, titreForm, titreForm, 'titre', 0, 'titre', [], []);\n  formTitre.madeForm();\n} // affichage des lignes de tarif et gestion des events\n\n\nfunction initLigne() {\n  var product = document.querySelector('.ligne-facturable');\n  var formAddP = document.createElement('form');\n  var button = document.createElement('button');\n  button.setAttribute('type', 'submit');\n  button.setAttribute('id', 'add-p');\n  button.textContent = 'Ajouter';\n  button.addEventListener('click', function (e) {\n    //ajout d'une ligne\n    nbProduct++;\n    var nbLigne = nbProduct;\n    e.preventDefault();\n    var tabButtonProd = [];\n    var buttonAdd = document.createElement('button');\n    buttonAdd.setAttribute('type', 'submit');\n    buttonAdd.textContent = 'Charger';\n    buttonAdd.addEventListener('click', function (e) {\n      //charger une valeur\n      e.preventDefault();\n      var inputNotNull = buttonAdd.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].value;\n\n      if (inputNotNull) {\n        //si l'input n'est pas vide! sorti et ne rien faire\n        return;\n      }\n\n      formOrigine[1] = e.target.name;\n      var origine = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_3__.ArrayStorage('origine'); //origine de la demande pour le popup\n\n      if (origine.list.length !== 0) {\n        origine.clear();\n        origine = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_3__.ArrayStorage('origine');\n      }\n\n      origine.set(formOrigine[1]);\n      origine.set(_constante_esm_js__WEBPACK_IMPORTED_MODULE_0__.idProd.length);\n      (0,_popup_esm_js__WEBPACK_IMPORTED_MODULE_1__.ouvrirPopup)('popupp.html', 'popupp', 'width=500,height=300,menubar=no,status=no');\n    });\n    tabButtonProd.push(buttonAdd);\n    var buttonSave = document.createElement('button');\n    buttonSave.setAttribute('type', 'submit');\n    buttonSave.textContent = 'Sauvegarder';\n    buttonSave.addEventListener('click', function (e) {\n      //sauvegarde d'un produit\n      e.preventDefault();\n      save(e, _produit_esm_js__WEBPACK_IMPORTED_MODULE_5__.listProduct);\n      var desactivation = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_3__.ArrayStorage('desactived'); //activation ou pas du radio popup\n\n      var valsuppr = buttonSuppr.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].value;\n\n      if (desactivation.list.indexOf(valsuppr) === -1) {\n        //ajout ou pas d'une valeur stocké\n        desactivation.set(valsuppr);\n      }\n    });\n    tabButtonProd.push(buttonSave);\n    var buttonSuppr = document.createElement('button');\n    buttonSuppr.setAttribute('type', 'submit');\n    buttonSuppr.textContent = 'Supprimer';\n    buttonSuppr.addEventListener('click', function (e) {\n      //suppression d'une ligne\n      e.preventDefault();\n      nbProduct--;\n      var desactivation = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_3__.ArrayStorage('desactived'); //activation ou pas du radio popup\n\n      var valsuppr = buttonSuppr.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].value;\n\n      if (desactivation.list.indexOf(valsuppr) !== -1) {\n        //suppression ou pas d'une valeur stocké\n        desactivation.remove(valsuppr);\n      }\n\n      buttonSuppr.parentNode.parentNode.remove();\n    });\n    tabButtonProd.push(buttonSuppr); //creation du form\n\n    formOrigine[1] = \"originePro\".concat(nbLigne);\n    var formProduct = new _form_esm_js__WEBPACK_IMPORTED_MODULE_2__.FormClass(product, _constante_esm_js__WEBPACK_IMPORTED_MODULE_0__.idProd, [], formOrigine[1], nbLigne, formChoix[1], tabButtonProd, tabClass);\n    formProduct.madeForm();\n  });\n  formAddP.appendChild(button);\n  formAddP.style.textAlign = 'center';\n  formAddP.style.margin = '5px';\n  product.appendChild(formAddP);\n} //fonction d'affichage paiement et calcul des différentes colonnes prix\n//gestion des evenement pour afficher\n\n\nfunction prixTotal() {\n  //fonction d'arrondi des prix\n  function arrondir(num) {\n    var tmp = Math.pow(10, 2);\n    var parsed = Math.round(num * tmp) / tmp;\n    return parsed;\n  }\n\n  var ht = document.querySelector('.ht');\n  var tva = document.querySelector('.tva');\n  var ttc = document.querySelector('.ttc');\n  var tvaC;\n  var ttcC; // remplissage automatique des cases totaux\n\n  function calcul() {\n    total = 0;\n    var formLigne = document.querySelectorAll('.ligne-facturable form');\n\n    for (var i = 1; i < formLigne.length; i++) {\n      var cal1 = formLigne[i].childNodes[0].childNodes[2].childNodes[0].value;\n      var cal2 = formLigne[i].childNodes[0].childNodes[3].childNodes[0].value;\n      formLigne[i].childNodes[0].childNodes[4].childNodes[0].value = cal1 * cal2;\n      var lastChildFormValeur = formLigne[i].childNodes[0].childNodes[4].childNodes[0].value;\n\n      if (lastChildFormValeur) {\n        //convertion des valeur afficher pour les calculs\n        var parsed = parseFloat(lastChildFormValeur, 10);\n        total += arrondir(parsed);\n      }\n    }\n\n    ht.textContent = \"Total: \".concat(total);\n    tvaC = arrondir(total * 20 / 100);\n    tva.textContent = \"Tva: \".concat(tvaC);\n    ttcC = total + tvaC;\n    ttc.textContent = \"Ttc: \".concat(ttcC);\n  } //rafraichissement de l'affichage totaux toutes les deux secondes\n\n\n  idRep = setInterval(calcul, 2000); //rafraichissement de l'affichage totaux sur evenement clavier\n\n  document.addEventListener('keyup', calcul); //rafraichissement de l'affichage totaux sur evenement click\n\n  document.addEventListener('click', calcul);\n  ht.textContent = \"Total: \".concat(total);\n  tvaC = arrondir(total * 20 / 100);\n  tva.textContent = \"Tva: \".concat(tvaC);\n  ttcC = total + tvaC;\n  ttc.textContent = \"Ttc: \".concat(ttcC);\n}\n\n\n\n//# sourceURL=webpack://freeLanceInformatique/./js/init.esm.js?");

/***/ }),

/***/ "./js/list.esm.js":
/*!************************!*\
  !*** ./js/list.esm.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListClass\": () => (/* binding */ ListClass)\n/* harmony export */ });\n/* harmony import */ var _constante_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constante.esm.js */ \"./js/constante.esm.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//class de création de liste client ou produit\n\n\n\nvar ListClass = /*#__PURE__*/function () {\n  function ListClass(type, data, tabinit, func) {\n    _classCallCheck(this, ListClass);\n\n    this.type = type;\n    this.data = data;\n    this.tabinit = tabinit;\n    this.func = func;\n    this.listL = this.initL();\n  } //initialiser la liste des clients ou des produits\n\n\n  _createClass(ListClass, [{\n    key: \"initL\",\n    value: function initL() {\n      var _this = this;\n\n      if (this.type.list.length === 0) {\n        (0,_constante_esm_js__WEBPACK_IMPORTED_MODULE_0__.appelApi)(this.data).then(function (res) {\n          _this.func(res, _this.tabinit, _this.type);\n        })[\"catch\"](function (error) {\n          error.message;\n        });\n      }\n\n      return this.type.list;\n    } //ajouter un client  ou un produit\n\n  }, {\n    key: \"setL\",\n    value: function setL(value) {\n      this.type.set(value);\n    } //supprime un client ou produit\n\n  }, {\n    key: \"removeL\",\n    value: function removeL(value) {\n      this.type.remove(value);\n    } //supprimer la liste des clients ou des produits\n\n  }, {\n    key: \"clearL\",\n    value: function clearL() {\n      this.type.clear();\n    }\n  }]);\n\n  return ListClass;\n}();\n\n//# sourceURL=webpack://freeLanceInformatique/./js/list.esm.js?");

/***/ }),

/***/ "./js/popup.esm.js":
/*!*************************!*\
  !*** ./js/popup.esm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ouvrirPopup\": () => (/* binding */ ouvrirPopup),\n/* harmony export */   \"Reporter\": () => (/* binding */ Reporter)\n/* harmony export */ });\n/* harmony import */ var _storage_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.esm.js */ \"./js/storage.esm.js\");\n// fichier des fonction popup\n\n\nvar desactivation = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_0__.ArrayStorage('desactived'); //fonction de remplissage input en fonction du popup\n\nfunction initForm(targetForm, targetInput, firstVal, listVal) {\n  var taille = targetForm.list[1];\n  window.opener.document.forms[targetForm.list[0]].elements[\"\".concat(targetInput, 0)].value = firstVal;\n  listVal.forEach(function (val) {\n    if (val[0] === firstVal) {\n      if (taille < 4) {\n        for (var i = 1; i < taille; i++) {\n          window.opener.document.forms[targetForm.list[0]].elements[\"\".concat(targetInput).concat(i)].value = val[i];\n        }\n      } else {\n        for (var _i = 1; _i < taille - 1; _i++) {\n          window.opener.document.forms[targetForm.list[0]].elements[\"\".concat(targetInput).concat(_i)].value = val[_i];\n        }\n\n        val[taille - 1] = val[taille - 2] * val[taille - 3];\n        window.opener.document.forms[targetForm.list[0]].elements[\"\".concat(targetInput).concat(taille - 1)].value = val[taille - 1];\n      }\n    }\n  });\n} //ouvrir un popup\n\n\nfunction ouvrirPopup(page, nom, option) {\n  window.open(page, nom, option);\n} //fonction de retour des valeur du popup\n\n\nfunction Reporter(e, origine, formChoix, list, pOuC) {\n  var choix;\n  var leChoix = e.target.parentNode;\n\n  for (var i = 0; i < leChoix.length; i++) {\n    if (leChoix[i].checked) {\n      choix = leChoix[i].value;\n    }\n  }\n\n  if (pOuC === 'p') desactivation.set(choix);\n  initForm(origine, formChoix, choix, list);\n  window.close();\n}\n\n//# sourceURL=webpack://freeLanceInformatique/./js/popup.esm.js?");

/***/ }),

/***/ "./js/produit.esm.js":
/*!***************************!*\
  !*** ./js/produit.esm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listProduct\": () => (/* binding */ listProduct)\n/* harmony export */ });\n/* harmony import */ var _storage_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.esm.js */ \"./js/storage.esm.js\");\n/* harmony import */ var _list_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.esm.js */ \"./js/list.esm.js\");\n// fichier initialisation liste des produits\n\n\n\nvar productVar = new _storage_esm_js__WEBPACK_IMPORTED_MODULE_0__.ArrayStorage('product');\nvar listP = [];\n\nfunction initP(res, tab, type) {\n  for (var i = 0; i < res.length; i++) {\n    tab[i] = [res[i].reference, res[i].description, res[i].quantité, res[i].prix];\n    type.set(tab[i]);\n  }\n}\n\nvar listProduct = new _list_esm_js__WEBPACK_IMPORTED_MODULE_1__.ListClass(productVar, './data/data.json', listP, initP);\n\n//# sourceURL=webpack://freeLanceInformatique/./js/produit.esm.js?");

/***/ }),

/***/ "./js/storage.esm.js":
/*!***************************!*\
  !*** ./js/storage.esm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArrayStorage\": () => (/* binding */ ArrayStorage)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//class localstorage\n\n\nvar ArrayStorage = /*#__PURE__*/function () {\n  //Le constructeur de la class\n  function ArrayStorage(name) {\n    _classCallCheck(this, ArrayStorage);\n\n    this.name = name;\n    this.list = this.init();\n  } //initialisation du tableau de liste des valeurs sauvegardées\n\n\n  _createClass(ArrayStorage, [{\n    key: \"init\",\n    value: function init() {\n      if (!localStorage.getItem(this.name)) {\n        localStorage.setItem(this.name, '[]');\n      }\n\n      return JSON.parse(localStorage.getItem(this.name));\n    } //nouvelle valeur de la liste\n\n  }, {\n    key: \"set\",\n    value: function set(value) {\n      this.list.push(value);\n      localStorage.setItem(this.name, JSON.stringify(this.list));\n    } //supprime une valeur\n\n  }, {\n    key: \"remove\",\n    value: function remove(value) {\n      var index = this.list.indexOf(value);\n      this.list.splice(index, 1);\n      localStorage.setItem(this.name, JSON.stringify(this.list));\n    } //supprimer le liste de valeur\n\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      localStorage.removeItem(this.name);\n    }\n  }]);\n\n  return ArrayStorage;\n}();\n\n//# sourceURL=webpack://freeLanceInformatique/./js/storage.esm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;