webpackJsonp([8],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorarioPageModule", function() { return HorarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horario__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HorarioPageModule = /** @class */ (function () {
    function HorarioPageModule() {
    }
    HorarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__horario__["a" /* HorarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__horario__["a" /* HorarioPage */]),
            ],
        })
    ], HorarioPageModule);
    return HorarioPageModule;
}());

//# sourceMappingURL=horario.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ion2_calendar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ion2_calendar__);
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
 * Generated class for the HorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HorarioPage = /** @class */ (function () {
    function HorarioPage(navCtrl, navParams, loadingCtrl, storage, restProvider, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.options = {
            from: Date.now(),
            defaultDate: Date.now(),
            weekdays: ['D', 'L', 'M', 'K', 'J', 'V', 'S'],
            weekStart: 1,
            monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
            daysConfig: [{
                    date: new Date(2018, 7, 25),
                    disable: true,
                    subTitle: 'Sin espacio'
                }],
        };
        this.horarioHoras = [
            { 'text': '05:00 AM', 'valor': '05:00:00' },
            { 'text': '05:05 AM', 'valor': '05:05:00' },
            { 'text': '05:10 AM', 'valor': '05:10:00' },
            { 'text': '05:15 AM', 'valor': '05:15:00' },
            { 'text': '05:20 AM', 'valor': '05:20:00' },
            { 'text': '05:25 AM', 'valor': '05:25:00' },
            { 'text': '05:30 AM', 'valor': '05:30:00' },
            { 'text': '05:35 AM', 'valor': '05:35:00' },
            { 'text': '05:40 AM', 'valor': '05:40:00' },
            { 'text': '05:45 AM', 'valor': '05:45:00' },
            { 'text': '05:55 AM', 'valor': '05:55:00' },
            { 'text': '06:00 AM', 'valor': '06:00:00' },
            { 'text': '06:05 AM', 'valor': '06:05:00' },
            { 'text': '06:10 AM', 'valor': '06:10:00' },
            { 'text': '06:15 AM', 'valor': '06:15:00' },
            { 'text': '06:20 AM', 'valor': '06:20:00' },
            { 'text': '06:25 AM', 'valor': '06:25:00' },
            { 'text': '06:30 AM', 'valor': '06:30:00' },
            { 'text': '06:35 AM', 'valor': '06:35:00' },
            { 'text': '06:40 AM', 'valor': '06:40:00' },
            { 'text': '06:45 AM', 'valor': '06:45:00' },
            { 'text': '06:55 AM', 'valor': '06:55:00' },
            { 'text': '07:00 AM', 'valor': '07:00:00' },
            { 'text': '07:05 AM', 'valor': '07:05:00' },
            { 'text': '07:10 AM', 'valor': '07:10:00' },
            { 'text': '07:15 AM', 'valor': '07:15:00' },
            { 'text': '07:20 AM', 'valor': '07:20:00' },
            { 'text': '07:25 AM', 'valor': '07:25:00' },
            { 'text': '07:30 AM', 'valor': '07:30:00' },
            { 'text': '07:35 AM', 'valor': '07:35:00' },
            { 'text': '07:40 AM', 'valor': '07:40:00' },
            { 'text': '07:45 AM', 'valor': '07:45:00' },
            { 'text': '07:55 AM', 'valor': '07:55:00' },
            { 'text': '08:00 AM', 'valor': '08:00:00' },
            { 'text': '08:05 AM', 'valor': '08:05:00' },
            { 'text': '08:10 AM', 'valor': '08:10:00' },
            { 'text': '08:15 AM', 'valor': '08:15:00' },
            { 'text': '08:20 AM', 'valor': '08:20:00' },
            { 'text': '08:25 AM', 'valor': '08:25:00' },
            { 'text': '08:30 AM', 'valor': '08:30:00' },
            { 'text': '08:35 AM', 'valor': '08:35:00' },
            { 'text': '08:40 AM', 'valor': '08:40:00' },
            { 'text': '08:45 AM', 'valor': '08:45:00' },
            { 'text': '08:55 AM', 'valor': '08:55:00' },
            { 'text': '09:00 AM', 'valor': '09:00:00' },
            { 'text': '09:05 AM', 'valor': '09:05:00' },
            { 'text': '09:10 AM', 'valor': '09:10:00' },
            { 'text': '09:15 AM', 'valor': '09:15:00' },
            { 'text': '09:20 AM', 'valor': '09:20:00' },
            { 'text': '09:25 AM', 'valor': '09:25:00' },
            { 'text': '09:30 AM', 'valor': '09:30:00' },
            { 'text': '09:35 AM', 'valor': '09:35:00' },
            { 'text': '09:40 AM', 'valor': '09:40:00' },
            { 'text': '09:45 AM', 'valor': '09:45:00' },
            { 'text': '09:55 AM', 'valor': '09:55:00' },
            { 'text': '10:00 AM', 'valor': '10:00:00' },
            { 'text': '10:05 AM', 'valor': '10:05:00' },
            { 'text': '10:10 AM', 'valor': '10:10:00' },
            { 'text': '10:15 AM', 'valor': '10:15:00' },
            { 'text': '10:20 AM', 'valor': '10:20:00' },
            { 'text': '10:25 AM', 'valor': '10:25:00' },
            { 'text': '10:30 AM', 'valor': '10:30:00' },
            { 'text': '10:35 AM', 'valor': '10:35:00' },
            { 'text': '10:40 AM', 'valor': '10:40:00' },
            { 'text': '10:45 AM', 'valor': '10:45:00' },
            { 'text': '10:55 AM', 'valor': '10:55:00' },
            { 'text': '11:00 AM', 'valor': '11:00:00' },
            { 'text': '11:05 AM', 'valor': '11:05:00' },
            { 'text': '11:10 AM', 'valor': '11:10:00' },
            { 'text': '11:15 AM', 'valor': '11:15:00' },
            { 'text': '11:20 AM', 'valor': '11:20:00' },
            { 'text': '11:25 AM', 'valor': '11:25:00' },
            { 'text': '11:30 AM', 'valor': '11:30:00' },
            { 'text': '11:35 AM', 'valor': '11:35:00' },
            { 'text': '11:40 AM', 'valor': '11:40:00' },
            { 'text': '11:45 AM', 'valor': '11:45:00' },
            { 'text': '11:55 AM', 'valor': '11:55:00' },
            { 'text': '12:00 PM', 'valor': '12:00:00' },
            { 'text': '12:05 PM', 'valor': '12:05:00' },
            { 'text': '12:12 PM', 'valor': '12:12:00' },
            { 'text': '12:15 PM', 'valor': '12:15:00' },
            { 'text': '12:20 PM', 'valor': '12:20:00' },
            { 'text': '12:25 PM', 'valor': '12:25:00' },
            { 'text': '12:30 PM', 'valor': '12:30:00' },
            { 'text': '12:35 PM', 'valor': '12:35:00' },
            { 'text': '12:40 PM', 'valor': '12:40:00' },
            { 'text': '12:45 PM', 'valor': '12:45:00' },
            { 'text': '12:55 PM', 'valor': '12:55:00' },
            { 'text': '01:00 PM', 'valor': '13:00:00' },
            { 'text': '01:05 PM', 'valor': '13:05:00' },
            { 'text': '01:01 PM', 'valor': '13:01:00' },
            { 'text': '01:15 PM', 'valor': '13:15:00' },
            { 'text': '01:20 PM', 'valor': '13:20:00' },
            { 'text': '01:25 PM', 'valor': '13:25:00' },
            { 'text': '01:30 PM', 'valor': '13:30:00' },
            { 'text': '01:35 PM', 'valor': '13:35:00' },
            { 'text': '01:40 PM', 'valor': '13:40:00' },
            { 'text': '01:45 PM', 'valor': '13:45:00' },
            { 'text': '01:55 PM', 'valor': '13:55:00' },
            { 'text': '02:00 PM', 'valor': '14:00:00' },
            { 'text': '02:05 PM', 'valor': '14:05:00' },
            { 'text': '02:10 PM', 'valor': '14:10:00' },
            { 'text': '02:15 PM', 'valor': '14:15:00' },
            { 'text': '02:20 PM', 'valor': '14:20:00' },
            { 'text': '02:25 PM', 'valor': '14:25:00' },
            { 'text': '02:30 PM', 'valor': '14:30:00' },
            { 'text': '02:35 PM', 'valor': '14:35:00' },
            { 'text': '02:40 PM', 'valor': '14:40:00' },
            { 'text': '02:45 PM', 'valor': '14:45:00' },
            { 'text': '02:55 PM', 'valor': '14:55:00' },
            { 'text': '03:00 PM', 'valor': '15:00:00' },
            { 'text': '03:05 PM', 'valor': '15:05:00' },
            { 'text': '03:03 PM', 'valor': '15:03:00' },
            { 'text': '03:15 PM', 'valor': '15:15:00' },
            { 'text': '03:20 PM', 'valor': '15:20:00' },
            { 'text': '03:25 PM', 'valor': '15:25:00' },
            { 'text': '03:30 PM', 'valor': '15:30:00' },
            { 'text': '03:35 PM', 'valor': '15:35:00' },
            { 'text': '03:40 PM', 'valor': '15:40:00' },
            { 'text': '03:45 PM', 'valor': '15:45:00' },
            { 'text': '03:55 PM', 'valor': '15:55:00' },
            { 'text': '04:00 PM', 'valor': '16:00:00' },
            { 'text': '04:05 PM', 'valor': '16:05:00' },
            { 'text': '04:10 PM', 'valor': '16:10:00' },
            { 'text': '04:15 PM', 'valor': '16:15:00' },
            { 'text': '04:20 PM', 'valor': '16:20:00' },
            { 'text': '04:25 PM', 'valor': '16:25:00' },
            { 'text': '04:30 PM', 'valor': '16:30:00' },
            { 'text': '04:35 PM', 'valor': '16:35:00' },
            { 'text': '04:40 PM', 'valor': '16:40:00' },
            { 'text': '04:45 PM', 'valor': '16:45:00' },
            { 'text': '04:55 PM', 'valor': '16:55:00' },
            { 'text': '05:00 PM', 'valor': '17:00:00' },
            { 'text': '05:05 PM', 'valor': '17:05:00' },
            { 'text': '05:10 PM', 'valor': '17:15:00' },
            { 'text': '05:15 PM', 'valor': '17:15:00' },
            { 'text': '05:20 PM', 'valor': '17:20:00' },
            { 'text': '05:25 PM', 'valor': '17:25:00' },
            { 'text': '05:30 PM', 'valor': '17:30:00' },
            { 'text': '05:35 PM', 'valor': '17:35:00' },
            { 'text': '05:40 PM', 'valor': '17:40:00' },
            { 'text': '05:45 PM', 'valor': '17:45:00' },
            { 'text': '05:55 PM', 'valor': '17:55:00' },
            { 'text': '06:00 PM', 'valor': '18:00:00' },
            { 'text': '06:05 PM', 'valor': '18:05:00' },
            { 'text': '06:10 PM', 'valor': '18:10:00' },
            { 'text': '06:15 PM', 'valor': '18:15:00' },
            { 'text': '06:20 PM', 'valor': '18:20:00' },
            { 'text': '06:25 PM', 'valor': '18:25:00' },
            { 'text': '06:30 PM', 'valor': '18:30:00' },
            { 'text': '06:35 PM', 'valor': '18:35:00' },
            { 'text': '06:40 PM', 'valor': '18:40:00' },
            { 'text': '06:45 PM', 'valor': '18:45:00' },
            { 'text': '06:55 PM', 'valor': '18:55:00' },
            { 'text': '07:00 PM', 'valor': '19:00:00' },
            { 'text': '07:05 PM', 'valor': '19:05:00' },
            { 'text': '07:10 PM', 'valor': '19:10:00' },
            { 'text': '07:15 PM', 'valor': '19:15:00' },
            { 'text': '07:20 PM', 'valor': '19:20:00' },
            { 'text': '07:25 PM', 'valor': '19:25:00' },
            { 'text': '07:30 PM', 'valor': '19:30:00' },
            { 'text': '07:35 PM', 'valor': '19:35:00' },
            { 'text': '07:40 PM', 'valor': '19:40:00' },
            { 'text': '07:45 PM', 'valor': '19:45:00' },
            { 'text': '07:55 PM', 'valor': '19:55:00' },
            { 'text': '08:00 PM', 'valor': '20:00:00' },
            { 'text': '08:05 PM', 'valor': '20:05:00' },
            { 'text': '08:10 PM', 'valor': '20:10:00' },
            { 'text': '08:15 PM', 'valor': '20:15:00' },
            { 'text': '08:20 PM', 'valor': '20:20:00' },
            { 'text': '08:25 PM', 'valor': '20:25:00' },
            { 'text': '08:30 PM', 'valor': '20:30:00' },
            { 'text': '08:35 PM', 'valor': '20:35:00' },
            { 'text': '08:40 PM', 'valor': '20:40:00' },
            { 'text': '08:45 PM', 'valor': '20:45:00' },
            { 'text': '08:55 PM', 'valor': '20:55:00' },
            { 'text': '09:00 PM', 'valor': '21:00:00' },
            { 'text': '09:05 PM', 'valor': '21:05:00' },
            { 'text': '09:10 PM', 'valor': '21:10:00' },
            { 'text': '09:15 PM', 'valor': '21:15:00' },
            { 'text': '09:20 PM', 'valor': '21:20:00' },
            { 'text': '09:25 PM', 'valor': '21:25:00' },
            { 'text': '09:30 PM', 'valor': '21:30:00' },
            { 'text': '09:35 PM', 'valor': '21:35:00' },
            { 'text': '09:40 PM', 'valor': '21:40:00' },
            { 'text': '09:45 PM', 'valor': '21:45:00' },
            { 'text': '09:55 PM', 'valor': '21:55:00' },
            { 'text': '10:00 PM', 'valor': '22:00:00' },
            { 'text': '10:05 PM', 'valor': '22:05:00' },
            { 'text': '10:10 PM', 'valor': '22:10:00' },
            { 'text': '10:15 PM', 'valor': '22:15:00' },
            { 'text': '10:20 PM', 'valor': '22:20:00' },
            { 'text': '10:25 PM', 'valor': '22:25:00' },
            { 'text': '10:30 PM', 'valor': '22:30:00' },
            { 'text': '10:35 PM', 'valor': '22:35:00' },
            { 'text': '10:40 PM', 'valor': '22:40:00' },
            { 'text': '10:45 PM', 'valor': '22:45:00' },
            { 'text': '10:55 PM', 'valor': '22:55:00' },
            { 'text': '11:00 PM', 'valor': '23:00:00' },
            { 'text': '11:05 PM', 'valor': '23:05:00' },
            { 'text': '11:10 PM', 'valor': '23:10:00' },
            { 'text': '11:15 PM', 'valor': '23:15:00' },
            { 'text': '11:20 PM', 'valor': '23:20:00' },
            { 'text': '11:25 PM', 'valor': '23:25:00' },
            { 'text': '11:30 PM', 'valor': '23:30:00' },
            { 'text': '11:35 PM', 'valor': '23:35:00' },
            { 'text': '11:40 PM', 'valor': '23:40:00' },
            { 'text': '11:45 PM', 'valor': '23:45:00' },
            { 'text': '11:55 PM', 'valor': '23:55:00' },
        ];
        this.fecha = {};
        this.horarioEmpleado = [];
        this.horarioEspecial = [];
        this.fechasEspeciales = [];
        this.showItems = false;
        this.rotulo = false;
        this.diasSemana = { domingo: {}, lunes: {}, martes: {}, miercoles: {}, jueves: {}, viernes: {}, sabado: {} };
        this.hora = 'horario';
        this.diasSemana.domingo = { diaSemana: 0, estado: 0, horaEntrar: '00:00:00', horaSalir: '00:00:00' };
        this.diasSemana.lunes = { diaSemana: 1, estado: 0, horaEntrar: '00:00:00', horaSalir: '00:00:00' };
        this.diasSemana.martes = { diaSemana: 2, estado: 0, horaEntrar: '00:00:00', horaSalir: '00:00:00' };
        this.diasSemana.miercoles = { diaSemana: 3, estado: 0, horaEntrar: '00:00:00', horaSalir: '00:00:00' };
        this.diasSemana.jueves = { diaSemana: 4, estado: 0, horaEntrar: '00:00:00', horaSalir: '00:00:00' };
        this.diasSemana.viernes = { diaSemana: 5, estado: 0, horaEntrar: '00:00:00', horaSalir: '00:00:00' };
        this.diasSemana.sabado = { diaSemana: 6, estado: 0, horaEntrar: '00:00:00', horaSalir: '00:00:00' };
    }
    HorarioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('usr_tok_byae').then(function (result) {
            if (result) {
                _this.idEmpleado = result.idEmpleado;
                console.log(_this.idEmpleado);
                _this.getHorario();
            }
            else {
                console.log('error-nologin');
            }
        });
        console.log('ionViewDidLoad HorarioPage');
        if (this.navParams.get("first")) {
            this.rotulo = true;
        }
    };
    HorarioPage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            pickMode: 'multi',
            title: ' ',
            weekStart: 1,
            weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            color: 'light',
            doneLabel: 'Listo',
            closeLabel: 'Salir',
            defaultDates: this.fechasEspeciales,
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date);
            if (date) {
                _this.fechasEspeciales = date.map(function (item) {
                    return item.string;
                });
            }
        });
    };
    HorarioPage.prototype.getHorario = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando..." });
        loading.present();
        console.log(this.idEmpleado);
        this.restProvider.getInfoEmpleadoAE({ idEmpleado: this.idEmpleado })
            .then(function (data) {
            _this.showItems = true;
            console.log(data);
            _this.horarioEmpleado = data.horario;
            _this.horarioEspecial = data.horarioEspecial;
            _this.horarioEmpleado.forEach(function (item) {
                if (item.diaSemana == 0) {
                    _this.diasSemana.domingo = item;
                }
                ;
                if (item.diaSemana == 1) {
                    _this.diasSemana.lunes = item;
                }
                ;
                if (item.diaSemana == 2) {
                    _this.diasSemana.martes = item;
                }
                ;
                if (item.diaSemana == 3) {
                    _this.diasSemana.miercoles = item;
                }
                ;
                if (item.diaSemana == 4) {
                    _this.diasSemana.jueves = item;
                }
                ;
                if (item.diaSemana == 5) {
                    _this.diasSemana.viernes = item;
                }
                ;
                if (item.diaSemana == 6) {
                    _this.diasSemana.sabado = item;
                }
                ;
            });
            loading.dismiss();
        }, function (err) {
            _this.showItems = true;
            _this.presentAlert('Ups!', 'Ha ocurrido un error inesperado');
            loading.dismiss();
            console.log(err);
        });
    };
    HorarioPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    HorarioPage.prototype.ddss = function () {
        console.log(this.fecha.entrada);
    };
    HorarioPage.prototype.guardarHE = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Guardando..." });
        loading.present();
        var dataE = { idEmpleado: this.idEmpleado,
            fecha: this.fechasEspeciales,
            horaAbrir: this.fecha.entrada,
            horaCerrar: this.fecha.salida,
            estado: this.fecha.estado ? 0 : 1 };
        this.restProvider.agregarHEENC(dataE)
            .then(function (data) {
            console.log(data);
            _this.fecha.entrada = null;
            _this.fecha.salida = null;
            _this.fecha.estado = null;
            _this.fechasEspeciales = [];
            loading.dismiss();
            _this.getHorario();
        }, function (err) {
            _this.presentAlert('Ups!', 'Ha ocurrido un error inesperado');
            loading.dismiss();
            console.log(err);
        });
    };
    HorarioPage.prototype.eliminarHE = function (id) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Guardando..." });
        loading.present();
        this.restProvider.eliminarHE({ id: id })
            .then(function (data) {
            console.log(data);
            loading.dismiss();
            _this.getHorario();
        }, function (err) {
            _this.presentAlert('Ups!', 'Ha ocurrido un error inesperado');
            loading.dismiss();
            console.log(err);
        });
    };
    HorarioPage.prototype.guardarHorario = function () {
        var _this = this;
        console.log(Object.values(this.diasSemana));
        var loading = this.loadingCtrl.create({ content: "Guardando..." });
        loading.present();
        var dataEnv = { horario: Object.values(this.diasSemana), idEmpleado: this.idEmpleado };
        this.restProvider.guardarHorarioNC(dataEnv)
            .then(function (data) {
            console.log(data);
            loading.dismiss();
            if (_this.rotulo) {
                //this.navCtrl.push('CalendarioPage');
                _this.navCtrl.setRoot('CalendarioPage');
            }
            else {
                _this.presentAlert('Guardado', 'Horario guardado correctamente');
            }
        }, function (err) {
            _this.presentAlert('Ups!', 'Ha ocurrido un error inesperado');
            loading.dismiss();
            console.log(err);
        });
    };
    HorarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-horario',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\horario\horario.html"*/'<!--\n  Generated template for the HorarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="header">\n\n  	  <ion-buttons left>\n      <button ion-button  menuToggle>\n         <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n     </button>\n</ion-buttons>\n\n\n    <ion-title>Horario</ion-title>\n\n      <ion-buttons right>\n      <button ion-button *ngIf="hora == \'horario\'" (click)=\'guardarHorario()\'>\n             <ion-icon name="checkmark-circle" ></ion-icon>\n     </button>\n</ion-buttons>\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n<ion-content padding style=\'    background-color: #f7f8f9;\'>\n\n	 <ion-segment  color=\'verderapp\' [(ngModel)]="hora">\n    <ion-segment-button value="horario">\n      Horario\n    </ion-segment-button>\n    <ion-segment-button value="especial">\n      Fechas Especiales\n    </ion-segment-button>\n  </ion-segment>\n\n\n<div [ngSwitch]="hora">\n  <ion-list *ngSwitchCase="\'horario\'" [hidden]=\'!showItems\'>\n  <div>\n  	<ion-list  no-lines style=\'    margin-top: 5px;\'>\n\n  	  <div>	\n\n  	  	<div *ngIf=\'rotulo\' style="    text-align: center;\n    font-weight: 500;\n    font-size: 16px;\n    margin: 20px;">Por favor configure su horario</div>\n\n\n	  <ion-item [ngStyle]="{\'border-bottom\': diasSemana.lunes.estado ? \'none\' : \'solid 1px lightgray\'}" style=\'font-weight: 500\'>\n	    <ion-label>Lunes</ion-label>\n	    <ion-label [hidden]=\'diasSemana.lunes.estado\' class=\'cerradoLabel\'>NO TRABAJA</ion-label>\n	    <ion-checkbox color=\'header\' [(ngModel)]="diasSemana.lunes.estado"></ion-checkbox>		\n	  </ion-item>\n\n		<ion-item [hidden]=\'!diasSemana.lunes.estado\'  style=\'\'>\n	  	<ion-label>Hora Entrada</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.lunes.horaEntrar\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n\n		<ion-item [hidden]=\'!diasSemana.lunes.estado\'  style=\'\'>\n	  	<ion-label>Hora Salida</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.lunes.horaSalir\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n\n	  </div>\n\n\n\n  	  <div>	\n\n	  <ion-item [ngStyle]="{\'border-bottom\': diasSemana.martes.estado ? \'none\' : \'solid 1px lightgray\'}" style=\'font-weight: 500\'>\n	    <ion-label>Martes</ion-label>\n	    <ion-label [hidden]=\'diasSemana.martes.estado\' class=\'cerradoLabel\'>NO TRABAJA</ion-label>\n	    <ion-checkbox color=\'header\' [(ngModel)]="diasSemana.martes.estado"></ion-checkbox>		\n	  </ion-item>\n\n	\n		<ion-item [hidden]=\'!diasSemana.martes.estado\'  style=\'\'>\n	  	<ion-label>Hora Entrada</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.martes.horaEntrar\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n\n		<ion-item [hidden]=\'!diasSemana.martes.estado\'  style=\'\'>\n	  	<ion-label>Hora Salida</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.martes.horaSalir\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n	  </div>\n\n\n\n  	  <div>	\n\n	  <ion-item [ngStyle]="{\'border-bottom\': diasSemana.miercoles.estado ? \'none\' : \'solid 1px lightgray\'}" style=\'font-weight: 500\'>\n	    <ion-label>Miercoles</ion-label>\n	    <ion-label [hidden]=\'diasSemana.miercoles.estado\' class=\'cerradoLabel\'>NO TRABAJA</ion-label>\n	    <ion-checkbox color=\'header\' [(ngModel)]="diasSemana.miercoles.estado"></ion-checkbox>		\n	  </ion-item>\n\n		<ion-item [hidden]=\'!diasSemana.miercoles.estado\'  style=\'\'>\n	  	<ion-label>Hora Entrada</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.miercoles.horaEntrar\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n\n		<ion-item [hidden]=\'!diasSemana.miercoles.estado\'  style=\'\'>\n	  	<ion-label>Hora Salida</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.miercoles.horaSalir\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n	  </div>\n\n\n	    	  <div>	\n\n	  <ion-item [ngStyle]="{\'border-bottom\': diasSemana.jueves.estado ? \'none\' : \'solid 1px lightgray\'}" style=\'font-weight: 500\'>\n	    <ion-label>Jueves</ion-label>\n	    <ion-label [hidden]=\'diasSemana.jueves.estado\' class=\'cerradoLabel\'>NO TRABAJA</ion-label>\n	    <ion-checkbox color=\'header\' [(ngModel)]="diasSemana.jueves.estado"></ion-checkbox>		\n	  </ion-item>\n\n<!-- 	  	<ion-item [hidden]=\'!diasSemana.jueves.estado\' style=\'\'>\n		  <ion-label>Hora Entrada</ion-label>\n		  <ion-select [(ngModel)]=\'diasSemana.jueves.horaEntrar\'>\n		    <ion-option *ngFor="let h of horarioHoras; let ii = index" value="{{h.valor}}">\n		    {{h.text}}</ion-option>\n		  </ion-select>\n		</ion-item> -->\n\n		<ion-item [hidden]=\'!diasSemana.jueves.estado\'  style=\'\'>\n	  	<ion-label>Hora Entrada</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.jueves.horaEntrar\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n\n		<ion-item [hidden]=\'!diasSemana.jueves.estado\'  style=\'\'>\n	  	<ion-label>Hora Salida</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.jueves.horaSalir\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n		<!-- 		\n		<ion-item [hidden]=\'!diasSemana.jueves.estado\'  style=\'border-bottom: solid 1px lightgray;\'>\n		  <ion-label>Hora Salida</ion-label>\n		  <ion-select [(ngModel)]=\'diasSemana.jueves.horaSalir\'>\n		    <ion-option *ngFor="let h of horarioHoras; let ii = index" value="{{h.valor}}">\n		    {{h.text}}</ion-option>\n		  </ion-select>\n		</ion-item> \n		-->\n\n	  </div>\n\n\n	    	  <div>	\n\n	  <ion-item [ngStyle]="{\'border-bottom\': diasSemana.viernes.estado ? \'none\' : \'solid 1px lightgray\'}" style=\'font-weight: 500\'>\n	    <ion-label>Viernes</ion-label>\n	    <ion-label [hidden]=\'diasSemana.viernes.estado\' class=\'cerradoLabel\'>NO TRABAJA</ion-label>\n	    <ion-checkbox color=\'header\' [(ngModel)]="diasSemana.viernes.estado"></ion-checkbox>		\n	  </ion-item>\n\n		<ion-item [hidden]=\'!diasSemana.viernes.estado\'  style=\'\'>\n	  	<ion-label>Hora Entrada</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.viernes.horaEntrar\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n\n		<ion-item [hidden]=\'!diasSemana.viernes.estado\'  style=\'\'>\n	  	<ion-label>Hora Salida</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.viernes.horaSalir\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n	  </div>\n\n\n	    	  <div>	\n\n	  <ion-item [ngStyle]="{\'border-bottom\': diasSemana.sabado.estado ? \'none\' : \'solid 1px lightgray\'}" style=\'font-weight: 500\'>\n	    <ion-label>Sabado</ion-label>\n	    <ion-label [hidden]=\'diasSemana.sabado.estado\' class=\'cerradoLabel\'>NO TRABAJA</ion-label>\n	    <ion-checkbox color=\'header\' [(ngModel)]="diasSemana.sabado.estado"></ion-checkbox>		\n	  </ion-item>\n\n		<ion-item [hidden]=\'!diasSemana.sabado.estado\'  style=\'\'>\n	  	<ion-label>Hora Entrada</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.sabado.horaEntrar\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n\n		<ion-item [hidden]=\'!diasSemana.sabado.estado\'  style=\'\'>\n	  	<ion-label>Hora Salida</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.sabado.horaSalir\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n	  </div>\n\n\n	    	  <div>	\n\n	  <ion-item [ngStyle]="{\'border-bottom\': diasSemana.domingo.estado ? \'none\' : \'solid 1px lightgray\'}" style=\'font-weight: 500\'>\n	    <ion-label>Domingo</ion-label>\n	    <ion-label [hidden]=\'diasSemana.domingo.estado\' class=\'cerradoLabel\'>NO TRABAJA</ion-label>\n	    <ion-checkbox color=\'header\' [(ngModel)]="diasSemana.domingo.estado"></ion-checkbox>		\n	  </ion-item>\n\n		<ion-item [hidden]=\'!diasSemana.domingo.estado\'  style=\'\'>\n	  	<ion-label>Hora Entrada</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.domingo.horaEntrar\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n\n\n		<ion-item [hidden]=\'!diasSemana.domingo.estado\'  style=\'\'>\n	  	<ion-label>Hora Salida</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 [(ngModel)]=\'diasSemana.domingo.horaSalir\'\n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" ></ion-datetime>\n		</ion-item>\n	  </div>\n\n\n\n	</ion-list>\n\n  </div>\n   \n   <button ion-button full color="verderapp" (click)=\'guardarHorario()\' > Guardar </button>\n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'especial\'" no-lines>\n  	\n\n  	<div style="    border: solid 1px lightgray;\n    margin-top: 17px;\n    border-radius: 5px;">\n  		\n\n  		<div style="padding: 16px;color: #444;font-size: 16px;" (click)=\'openCalendar()\'>\n  			<span *ngIf=\'fechasEspeciales.length<1\'>Seleccionar Fechas</span>\n  			<div *ngIf=\'fechasEspeciales.length>0\' >\n\n  				<span style="display: block; font-weight: 500">Fecha<span *ngIf=\'fechasEspeciales.length>1\'>s</span> Seleccionada<span *ngIf=\'fechasEspeciales.length>1\'>s</span>:\n  				</span>\n\n  			<span style="font-weight: 500;display: block;margin-top: 14px;" *ngFor="let f of fechasEspeciales; let ii = index">\n  			 {{f | date:\'mediumDate\'}}</span>\n  			</div>\n  		</div>\n	  \n\n	  	<ion-item style=\' border-top: solid 1px lightgray\'>\n	    <ion-label>Dia Libre</ion-label>\n	    <ion-checkbox color=\'header\' [(ngModel)]="fecha.estado"></ion-checkbox>		\n	  </ion-item>\n\n		<ion-item [hidden]=\'fecha.estado\'  style=\' border-top: solid 1px lightgray\'>\n	  	<ion-label>Hora Entrada</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" [(ngModel)]="fecha.entrada"></ion-datetime>\n		</ion-item>\n\n		<ion-item [hidden]=\'fecha.estado\'  style=\' border-top: solid 1px lightgray\'>\n	  	<ion-label>Hora Salida</ion-label>\n	 	 <ion-datetime displayFormat="hh:mm a" \n	 	 minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" [(ngModel)]="fecha.salida"></ion-datetime>\n		</ion-item>\n\n\n		<div style=\'    border-top: solid 1px lightgray;\n    text-align: right;\n    padding: 10px;\'>\n  		<button ion-button  color="verderapp" style="height: 30px;" \n  		[disabled]=\'(fecha.estado && fechasEspeciales.length==0) \n  		|| (!fecha.estado && (fechasEspeciales.length<1 || !fecha.entrada || !fecha.salida) )\' \n  		(click)=\'guardarHE()\'> Guardar </button>\n  		</div>\n  	</div>\n\n  \n\n  <div  style="    margin-top: 20px;font-size: 16px;color: #444;" *ngIf=\'horarioEspecial.length>0\'>\n\n  	  \n\n  		<span style="    margin-bottom: 10px;display: block;font-weight: 800;">Fechas Especiales</span>\n\n  		<div  class=\'cajaHE\' *ngFor="let fecha of horarioEspecial; let ii = index">\n  			<ion-icon (click)=\'eliminarHE(fecha.idHorarioEspecialEmpleado)\' name="close" class=\'iconDelete\'></ion-icon>\n\n  			<span style="margin-bottom: 10px;display: block;">\n  			Fecha: {{fecha.fecha.split(\'T\')[0]  | date:\'mediumDate\'}}\n  			</span>\n\n  			<span style="    margin-bottom: 10px;display: block;" *ngIf=\'fecha.abierto==1\'>\n  				{{fecha.horaFI}} - {{fecha.horaFF}}\n  			</span>\n  			<span style="    margin-bottom: 10px;display: block;" *ngIf=\'fecha.abierto==0\'>Dia Libre</span>\n  		</div>\n\n  </div>\n\n\n  </ion-list>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\horario\horario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], HorarioPage);
    return HorarioPage;
}());

//# sourceMappingURL=horario.js.map

/***/ })

});
//# sourceMappingURL=8.js.map