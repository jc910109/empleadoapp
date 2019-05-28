webpackJsonp([5],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NreservaPageModule", function() { return NreservaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nreserva__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NreservaPageModule = /** @class */ (function () {
    function NreservaPageModule() {
    }
    NreservaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nreserva__["a" /* NreservaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__nreserva__["a" /* NreservaPage */]),
            ],
        })
    ], NreservaPageModule);
    return NreservaPageModule;
}());

//# sourceMappingURL=nreserva.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NreservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
var NreservaPage = /** @class */ (function () {
    function NreservaPage(navCtrl, navParams, modalCtrl, events, alertCtrl, loadingCtrl, DomSanitizer, restProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.DomSanitizer = DomSanitizer;
        this.restProvider = restProvider;
        this.storage = storage;
        this.seleccion = {};
        this.serviciosCita = [];
        this.servicios = [];
        this.cats = [];
        this.subcats = [];
        this.cita = {};
        this.seleccion.categoria = [];
        this.seleccion.subcategoria = [];
        events.subscribe('addServicio', function (ss) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.serviciosCita.push(ss);
            if (_this.cita.horaInicio) {
                _this.asignarHoras();
            }
        });
    }
    NreservaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('usr_tok_byae').then(function (result) {
            if (result) {
                _this.idEmpleado = result.idEmpleado;
                console.log(result);
                var dataE = { idEmpleado: _this.idEmpleado };
                _this.restProvider.getCategoriasEmpleadoC(dataE)
                    .then(function (data) {
                    _this.cats = data;
                    console.log(_this.cats);
                }, function (err) {
                    console.log('someError');
                    _this.presentAlert('Ups!', 'Ha ocurrido un error inesperado');
                });
            }
        });
    };
    NreservaPage.prototype.reintentarAlert = function (funcionEnviar) {
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
    NreservaPage.prototype.getDuracion = function (duracion) {
        var first = Math.floor(duracion / 60);
        var sec = duracion % 60;
        return first + 'h ' + sec + 'min';
    };
    NreservaPage.prototype.getTotal = function () {
        var total = 0;
        this.serviciosCita.forEach(function (item) {
            item.precioFinal = item.precio;
            total += item.precio;
        });
        return total;
    };
    NreservaPage.prototype.getSubCats = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        console.log(this.seleccion.categoria);
        this.seleccion.subcategoria = 0;
        //this.seleccion.subcategoria = undefined;
        this.servicios = [];
        this.servicioSeleccionado = 0;
        var dataE = { idCategoria: this.seleccion.categoria, idEmpleado: this.idEmpleado };
        this.restProvider.getSubcategoriasEmpleado(dataE)
            .then(function (data) {
            if (data) {
                _this.subcats = data.subcats;
                _this.servicios = data.servicios;
                loading.dismiss();
            }
            else {
                _this.reintentarAlert(_this.getSubCats.bind(_this));
            }
        }, function (err) {
            console.log('someError');
            _this.reintentarAlert(_this.getSubCats.bind(_this));
            loading.dismiss();
        });
    };
    NreservaPage.prototype.getSubCatsS = function () {
        var _this = this;
        console.log(this.seleccion.subcategoria);
        if (this.seleccion.subcategoria && this.seleccion.subcategoria > 0) {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            this.servicios = [];
            this.servicioSeleccionado = 0;
            var dataE = { sub: this.seleccion.subcategoria, idEmpleado: this.idEmpleado };
            this.restProvider.getSubcategoriasServ(dataE)
                .then(function (data) {
                //  this.subcats = data.subcats;
                _this.servicios = data;
                console.log(data);
                loading_1.dismiss();
            }, function (err) {
                console.log('someError');
                _this.presentAlert('Ups!', 'Ha ocurrido un error inesperado');
                loading_1.dismiss();
            });
        }
    };
    NreservaPage.prototype.guardarNR = function () {
        var _this = this;
        var fechaSeleccionada = this.cita.fecha;
        var dataE = {
            idCentro: this.idEmpleado,
            idEmpleado: this.idEmpleado,
            idCliente: 0,
            fechaInicio: this.serviciosCita[0].inicio + ':00',
            fechaFinal: this.serviciosCita[this.serviciosCita.length - 1].fin + ':00',
            total: this.getTotal(),
            notaCita: 'cita manual',
            clienteReferencia: this.cita.nombreCliente || ' ',
            fecha: fechaSeleccionada,
            servicios: this.serviciosCita
        };
        console.log(dataE);
        var loading = this.loadingCtrl.create({ content: "Cargando..." });
        loading.present();
        this.restProvider.addCitaManual2(dataE)
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
    NreservaPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    NreservaPage.prototype.sacarItem = function (ins) {
        this.serviciosCita.splice(ins, 1);
        if (this.cita.horaInicio) {
            this.asignarHoras();
        }
    };
    NreservaPage.prototype.getDataFormatMM = function (hora) {
        return hora.replace(/-/g, "/");
    };
    NreservaPage.prototype.openCalendar = function () {
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
    NreservaPage.prototype.asignarHoras = function () {
        var hInicio = this.cita.fecha + ' ' + this.cita.horaInicio;
        var hInicioTemp = this.cita.fecha + ' ' + this.cita.horaInicio;
        console.log(hInicio);
        this.serviciosCita.map(function (item) {
            item.inicio = hInicioTemp;
            item.fin = __WEBPACK_IMPORTED_MODULE_6_moment__(hInicioTemp, 'YYYY-MM-DD HH:mm').add(item.duracion, 'minutes').format("YYYY-MM-DD HH:mm");
            hInicioTemp = __WEBPACK_IMPORTED_MODULE_6_moment__(hInicioTemp, 'YYYY-MM-DD HH:mm').add(item.duracion, 'minutes').format("YYYY-MM-DD HH:mm");
            console.log(item);
            return JSON.parse(JSON.stringify(item));
        });
        console.log(this.serviciosCita);
    };
    NreservaPage.prototype.showSome = function (ds) {
        console.log(ds);
    };
    NreservaPage.prototype.getHoras = function (hora) {
        return Math.floor(hora / 60);
    };
    NreservaPage.prototype.openServices = function (ss) {
        /*
                   var dataE={idCategoria:this.navParams.get('idCategoria'),
                            idCentro:this.navParams.get('idCentro')};
        
               let profileModal = this.modalCtrl.create('ModalServicesPage');
               profileModal.present();
        
             */
        var sss = this.servicios.filter(function (item) { return item.idServicio == ss; })[0];
        console.log(sss);
        var copyWR = JSON.parse(JSON.stringify(sss));
        this.serviciosCita.push(copyWR);
        if (this.cita.horaInicio) {
            this.asignarHoras();
        }
    };
    NreservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nreserva',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\nreserva\nreserva.html"*/'<!--\n  Generated template for the NreservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar  color="header">\n    <ion-title>Nueva Reserva</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n  <ion-item style=\'padding-left: 3px !important;\'>\n    <ion-label color="" style=\'padding-left: 8px !important;\'>Cliente</ion-label>\n    <ion-input [(ngModel)]="cita.nombreCliente"  placeholder="Nombre del cliente"></ion-input>\n  </ion-item>\n\n\n\n\n<div (click)=\'openCalendar()\' style="       border-bottom: solid 1px lightgray;\n    padding: 13px;\n    margin-bottom: 12px; font-size: 16px">\n\n	 <span *ngIf=\'cita.fecha\'>Fecha</span>\n	 <span [hidden]=\'cita.fecha\'>Seleccionar Fecha</span>\n\n	  <span style="float: right;" *ngIf=\'cita.fecha\'>{{cita.fecha | date:\'mediumDate\'}}</span>\n\n</div>\n\n	<ion-item class=\'noLin\' [hidden]=\'!cita.fecha\'  style=\'      border-bottom: solid 1px lightgray; margin-bottom: 10px\'>\n	  	<ion-label>Hora de Inicio</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" [(ngModel)]="cita.horaInicio" \n	 	 (ngModelChange)=\'asignarHoras()\'></ion-datetime>\n	</ion-item>\n\n<div>\n<p>Selecciona un servicio</p>\n	<ion-item>\n  <ion-label>Categoria</ion-label>\n  <ion-select [(ngModel)]="seleccion.categoria" (ionChange)=\'getSubCats()\' \n     interface="popover" >\n    <ion-option  *ngFor="let ca of cats; let i = index"\n      [value]="ca.idCategoria">{{ca.nombre}}</ion-option>\n  </ion-select>\n</ion-item>\n\n\n	<ion-item>\n  <ion-label>Subcategoria</ion-label>\n  <ion-select [(ngModel)]="seleccion.subcategoria" interface="popover" \n  (ionChange)=\'getSubCatsS()\'>\n    <ion-option  *ngFor="let sc of subcats; let i = index" \n     [value]="sc.idSubcategoria">{{sc.nombre}}</ion-option>\n  </ion-select>\n</ion-item>\n\n\n\n	<ion-item [hidden]=\'seleccion.categoria.length<1\'>\n\n  <ion-select placeholder=\'selecciona una servicio\' style=\'    width: 100% !important;\n    max-width: 100% !important;\n    padding-left: 0px !important;\n   \' [hidden]=\'seleccion.categoria.length<1\'  [(ngModel)]="servicioSeleccionado">\n    <ion-option   *ngFor="let s of servicios; let i = index"  \n    [value]="s.idServicio">{{s.nombre}} / ${{s.precio}} / {{getDuracion(s.duracion)}}</ion-option>\n\n\n  </ion-select>\n</ion-item>\n\n</div>\n\n<button [disabled]=\'!servicioSeleccionado || servicioSeleccionado == 0\' (click)=\'openServices(servicioSeleccionado)\' color=\'verderapp\' ion-button full>Agregar servicio</button>\n\n<!-- <div   *ngFor="let s of serviciosCita; let i = index">\n	<span>{{s.nombre}}</span>\n\n</div> -->\n\n\n\n					<div  *ngFor="let s of serviciosCita; let i = index" class="m-timeline-2__item"  style="width: 100%;    margin-top: 8px;">\n\n	<!-- 					<div class="m-timeline-2__item-cricle">\n							<i class="fa fa-genderless mfont-danger"></i>\n						</div> -->\n						<div class="m-timeline-2__item-text  m--padding-top-5" style="    width: 100%;">\n\n							<div style="background: #faf9f7; border: 1px solid #e1e1e1; border-radius: 4px;padding: 10px; position: relative;">\n					<!-- 		--><ion-icon style=\'    width: 46px;height: 23px;font-size: 24px; margin-top: -10px;margin-left: -10px;padding-left: 10px;\' ios="ios-close" \n					(click)=\'sacarItem(i)\'></ion-icon> \n								<div style="    font-size: 16px;margin-bottom: 10px;">\n									<span style="color:#383734;font-weight: 400">{{s.nombre}}</span>\n									<span style="color:#383734;float: right;font-weight: 600">${{s.precio}}</span>\n								</div>\n\n								<div  style="    font-size: 14px;    width: 100%;\n    height: 22px;">\n									<span *ngIf=\'s.inicio\'>{{getDataFormatMM(s.inicio) | date:\'h:mm a\'}} - {{getDataFormatMM(s.fin) | date:\'h:mm a\'}}</span>\n							\n\n\n									<span style="float: right;">\n										{{getHoras(s.duracion)}}h {{s.duracion % 60}}min\n									</span>\n\n\n	\n\n								</div>\n\n		\n								<div *ngIf=\'!cita.fecha\' style=" ">\n									Seleccione una fecha en el calendario\n								</div>\n\n							</div>\n\n						</div>\n					</div>\n\n<button [hidden]=\'!cita.nombreCliente || !cita.fecha || !cita.horaInicio || serviciosCita.length<1\' (click)=\'guardarNR()\' color=\'verderapp\' ion-button full>Guardar</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\nreserva\nreserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], NreservaPage);
    return NreservaPage;
}());

//# sourceMappingURL=nreserva.js.map

/***/ })

});
//# sourceMappingURL=5.js.map