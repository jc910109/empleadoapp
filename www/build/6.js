webpackJsonp([6],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalServicesPageModule", function() { return ModalServicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_services__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalServicesPageModule = /** @class */ (function () {
    function ModalServicesPageModule() {
    }
    ModalServicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_services__["a" /* ModalServicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_services__["a" /* ModalServicesPage */]),
            ],
        })
    ], ModalServicesPageModule);
    return ModalServicesPageModule;
}());

//# sourceMappingURL=modal-services.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ModalServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalServicesPage = /** @class */ (function () {
    function ModalServicesPage(viewCtrl, navCtrl, navParams, loadingCtrl, storage, restProvider, events, alertCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.restProvider = restProvider;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.dataUser = {};
        this.listaServicios = [];
    }
    ModalServicesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('usr_tok_byae').then(function (result) {
            if (result) {
                _this.dataUser = result;
                console.log(_this.dataUser);
                console.log('ionViewDidLoad ModalServicesPage');
                var loading_1 = _this.loadingCtrl.create({ content: "Cargando..." });
                loading_1.present();
                var dare = { idEmpleado: _this.dataUser.idEmpleado };
                console.log(dare);
                _this.restProvider.getEmpleadoServicios(dare)
                    .then(function (data) {
                    console.log(data);
                    _this.listaServicios = Object.values(data);
                    loading_1.dismiss();
                }, function (err) {
                    _this.presentAlert('Ups!', 'Ha ocurrido un error inesperado');
                    loading_1.dismiss();
                    console.log(err);
                });
            }
            else {
                console.log('error-nologin');
            }
        });
    };
    ModalServicesPage.prototype.seleccionarServicio = function (s) {
        console.log(s);
        this.events.publish('addServicio', s);
        this.viewCtrl.dismiss();
    };
    ModalServicesPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    ModalServicesPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    ModalServicesPage.prototype.closeModal = function () {
        //	this.events.publish('modalServices');
        this.viewCtrl.dismiss();
    };
    ModalServicesPage.prototype.getHoras = function (hora) {
        return Math.floor(hora / 60);
    };
    ModalServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-services',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\modal-services\modal-services.html"*/'<!--\n  Generated template for the ModalServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-navbar color="header">\n    <ion-title>Agregar Servicios</ion-title>\n\n    <ion-buttons end>\n    <button style="    font-size: 34px;" ion-button (click)="closeModal()"><ion-icon ios="ios-close"></ion-icon></button>\n\n\n    </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-item-group  style=\'font-size: 16px;    margin-top: 20px;\' *ngFor="let cate of listaServicios; let ii = index" >\n\n  <ion-item-divider color="light"><span style="font-weight: 500">{{cate[0].nombreCategoria}}</span></ion-item-divider>\n    <ion-item style=\'font-size: 15px;\' *ngFor="let s of cate; let i = index" \n    (click)=\'seleccionarServicio(s)\'>\n    <span style=\'    max-width: 80% !important;\n    display: inline-block;\n    text-overflow: ellipsis;\n    white-space: normal;\' >{{s.nombre}} / {{getHoras(s.duracion)}}h {{s.duracion % 60}}min</span>\n    <span style=\'float:right;\'>${{s.precio}}</span>\n</ion-item>\n  </ion-item-group>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\modal-services\modal-services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ModalServicesPage);
    return ModalServicesPage;
}());

//# sourceMappingURL=modal-services.js.map

/***/ })

});
//# sourceMappingURL=6.js.map