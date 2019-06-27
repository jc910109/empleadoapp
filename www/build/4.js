webpackJsonp([4],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NreservatPageModule", function() { return NreservatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nreservat__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NreservatPageModule = /** @class */ (function () {
    function NreservatPageModule() {
    }
    NreservatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nreservat__["a" /* NreservatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__nreservat__["a" /* NreservatPage */]),
            ],
        })
    ], NreservatPageModule);
    return NreservatPageModule;
}());

//# sourceMappingURL=nreservat.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NreservatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
 * Generated class for the NreservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NreservatPage = /** @class */ (function () {
    function NreservatPage(navCtrl, navParams, modalCtrl, events, alertCtrl, loadingCtrl, restProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.storage = storage;
        this.serviciosCita = [];
        this.cita = {};
        events.subscribe('addServicio', function (ss) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.serviciosCita.push(ss);
            if (_this.cita.horaInicio) {
                _this.asignarHoras();
            }
        });
    }
    NreservatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('usr_tok_byae').then(function (result) {
            if (result) {
                _this.idEmpleado = result.idEmpleado;
                console.log(result);
            }
        });
    };
    NreservatPage.prototype.getTotal = function () {
        var total = 0;
        this.serviciosCita.forEach(function (item) {
            item.precioFinal = item.precio;
            total += item.precio;
        });
        return total;
    };
    NreservatPage.prototype.guardarNR = function () {
        var _this = this;
        var fechaSeleccionada = this.cita.fecha;
        var dataE = {
            idEmpleado: this.idEmpleado,
            horaInicio: fechaSeleccionada + ' ' + this.cita.horaInicio + ':00',
            horaFinalEsperado: fechaSeleccionada + ' ' + this.cita.horaFin + ':00'
        };
        console.log(dataE);
        var loading = this.loadingCtrl.create({ content: "Cargando..." });
        loading.present();
        this.restProvider.agregarBloque(dataE)
            .then(function (data) {
            loading.dismiss();
            _this.presentAlert('Guardado', 'Reserva guardada con exito');
            _this.navCtrl.pop();
        }, function (err) {
            loading.dismiss();
            console.log('someError');
            _this.presentAlert('Ups!', 'Ha ocurrido un error inesperado');
        });
    };
    NreservatPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    NreservatPage.prototype.sacarItem = function (ins) {
        this.serviciosCita.splice(ins, 1);
        if (this.cita.horaInicio) {
            this.asignarHoras();
        }
    };
    NreservatPage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            pickMode: 'single',
            title: ' ',
            weekStart: 1,
            weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            color: 'light',
            doneLabel: 'Listo',
            closeLabel: 'Salir',
            defaultDates: this.fechasEspeciales,
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date);
            if (date) {
                _this.cita.fecha = date.string;
            }
        });
    };
    NreservatPage.prototype.asignarHoras = function () {
        var hInicio = this.cita.fecha + ' ' + this.cita.horaInicio;
        var hInicioTemp = this.cita.fecha + ' ' + this.cita.horaInicio;
        console.log(hInicio);
        this.serviciosCita.forEach(function (item, index) {
            item.inicio = hInicioTemp;
            item.fin = __WEBPACK_IMPORTED_MODULE_5_moment__(hInicioTemp, 'YYYY-MM-DD HH:mm').add(item.duracion, 'minutes').format("YYYY-MM-DD HH:mm");
            hInicioTemp = __WEBPACK_IMPORTED_MODULE_5_moment__(hInicioTemp, 'YYYY-MM-DD HH:mm').add(item.duracion, 'minutes').format("YYYY-MM-DD HH:mm");
        });
        console.log(this.serviciosCita);
    };
    NreservatPage.prototype.showSome = function (ds) {
        console.log(ds);
    };
    NreservatPage.prototype.getHoras = function (hora) {
        return Math.floor(hora / 60);
    };
    NreservatPage.prototype.openServices = function () {
        /*
                   var dataE={idCategoria:this.navParams.get('idCategoria'),
                            idCentro:this.navParams.get('idCentro')};
        */
        var profileModal = this.modalCtrl.create('ModalServicesPage');
        profileModal.present();
    };
    NreservatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nreservat',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\nreservat\nreservat.html"*/'<!--\n  Generated template for the NreservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar  color="header">\n    <ion-title>Reserva-Tiempo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n<div (click)=\'openCalendar()\' style="       border-bottom: solid 1px lightgray;\n    padding: 13px;\n    margin-bottom: 12px; font-size: 16px">\n\n	 <span *ngIf=\'cita.fecha\'>Fecha</span>\n	 <span [hidden]=\'cita.fecha\'>Seleccionar Fecha</span>\n\n	  <span style="float: right;" *ngIf=\'cita.fecha\'>{{cita.fecha | date:\'mediumDate\'}}</span>\n\n</div>\n\n	<ion-item class=\'noLin\'   style=\'      border-bottom: solid 1px lightgray; margin-bottom: 10px\'>\n	  	<ion-label>Hora Inicio</ion-label>\n	 	 <ion-datetime [disabled]=\'!cita.fecha\' displayFormat="hh:mm a" \n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" [(ngModel)]="cita.horaInicio" \n	 	 ></ion-datetime>\n	</ion-item>\n\n\n	<ion-item class=\'noLin\'     style=\'      border-bottom: solid 1px lightgray; margin-bottom: 10px\'>\n	  	<ion-label>Hora Fin</ion-label>\n	 	 <ion-datetime [disabled]=\'!cita.fecha || !cita.horaInicio\' displayFormat="hh:mm a" \n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" [(ngModel)]="cita.horaFin" \n	 	 ></ion-datetime>\n	</ion-item>\n\n<!--\n<button (click)=\'openServices()\' color=\'verderapp\' ion-button full>Agregar servicios </button>\n\n <div   *ngFor="let s of serviciosCita; let i = index">\n	<span>{{s.nombre}}</span>\n\n</div> -->\n\n\n\n<button [hidden]=\'!cita.fecha || !cita.horaFin || !cita.horaInicio\' (click)=\'guardarNR()\' color=\'verderapp\' ion-button full>Guardar</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\nreservat\nreservat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], NreservatPage);
    return NreservatPage;
}());

//# sourceMappingURL=nreservat.js.map

/***/ })

});
//# sourceMappingURL=4.js.map