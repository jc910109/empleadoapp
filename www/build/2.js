webpackJsonp([2],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReprogramacionPageModule", function() { return ReprogramacionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reprogramacion__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReprogramacionPageModule = /** @class */ (function () {
    function ReprogramacionPageModule() {
    }
    ReprogramacionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reprogramacion__["a" /* ReprogramacionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reprogramacion__["a" /* ReprogramacionPage */]),
            ],
        })
    ], ReprogramacionPageModule);
    return ReprogramacionPageModule;
}());

//# sourceMappingURL=reprogramacion.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReprogramacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(29);
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
 * Generated class for the ReprogramacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReprogramacionPage = /** @class */ (function () {
    function ReprogramacionPage(navCtrl, alertCtrl, navParams, loadingCtrl, DomSanitizer, apiProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.DomSanitizer = DomSanitizer;
        this.apiProvider = apiProvider;
        this.motivoReprograma = '';
    }
    ReprogramacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReprogramacionPage');
    };
    ReprogramacionPage.prototype.reprogramar = function () {
        var _this = this;
        var datE = { estado: 2,
            idCita: this.navParams.get('idCita'),
            comentario: this.motivoReprograma };
        console.log(datE);
        var loading = this.loadingCtrl.create({ content: "Reprogramando...", cssClass: "my-loading" });
        loading.present();
        this.apiProvider.cambiarServicioCitaNCREPRO(datE)
            .then(function (data) {
            loading.dismiss();
            console.log(data);
            if (data) {
                _this.navCtrl.pop();
            }
            else {
                _this.reintentarAlert(_this.reprogramar.bind(_this));
                console.log('Ha ocurrido un error');
            }
        });
    };
    ReprogramacionPage.prototype.reintentarAlert = function (funcionEnviar) {
        var mensaje = "<div>  \n                      <p>No hemos podido conectar. \n                      Verifica tu conexi\u00F3n a Internet para continuar</p>\n                      \n                   <div>";
        var alert = this.alertCtrl.create({
            title: 'Error de conexión',
            subTitle: this.DomSanitizer.bypassSecurityTrustHtml(mensaje),
            buttons: [
                {
                    text: 'Reintentar',
                    handler: function () {
                        funcionEnviar();
                    }
                },
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    ReprogramacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reprogramacion',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\reprogramacion\reprogramacion.html"*/'<!--\n  Generated template for the ReprogramacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar  color="header">\n    <ion-title style=\'    padding: 0px !important;\'>Solicitar reprogramación</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n	\n\n<ion-content padding>\n\n<p>Por favor incluya el motivo y otra disponibilidad de tiempo para que el cliente pueda reprogramar su cita.</p>\n\n<textarea [(ngModel)]="motivoReprograma" cols="1" rows="5" maxlength="200" \nstyle="    width: 100%;\n    border: solid 1px lightgray;\n    border-radius: 5px;\n    padding: 10px;"></textarea>\n    <div style="float: right;\n    color: darkgray;">{{motivoReprograma.length}} / 200</div>\n\n\n<button [disabled]=\'motivoReprograma.length<1\' (click)=\'reprogramar()\' color=\'verderapp\' ion-button full>Reprogramar</button>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\reprogramacion\reprogramacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], ReprogramacionPage);
    return ReprogramacionPage;
}());

//# sourceMappingURL=reprogramacion.js.map

/***/ })

});
//# sourceMappingURL=2.js.map