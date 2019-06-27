webpackJsonp([11],{

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ayuda/ayuda.module": [
		431,
		0
	],
	"../pages/calendario/calendario.module": [
		440,
		10
	],
	"../pages/detalle-reserva/detalle-reserva.module": [
		439,
		9
	],
	"../pages/horario/horario.module": [
		441,
		8
	],
	"../pages/login/login.module": [
		432,
		7
	],
	"../pages/modal-services/modal-services.module": [
		433,
		6
	],
	"../pages/nreserva/nreserva.module": [
		435,
		5
	],
	"../pages/nreservat/nreservat.module": [
		434,
		4
	],
	"../pages/perfil/perfil.module": [
		436,
		3
	],
	"../pages/reprogramacion/reprogramacion.module": [
		437,
		2
	],
	"../pages/sobreby/sobreby.module": [
		438,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_calendar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ion2_calendar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_locales_es__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_rest_rest__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















Object(__WEBPACK_IMPORTED_MODULE_13__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_14__angular_common_locales_es__["a" /* default */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { mode: 'ios', backButtonText: '' }, {
                    links: [
                        { loadChildren: '../pages/ayuda/ayuda.module#AyudaPageModule', name: 'AyudaPage', segment: 'ayuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-services/modal-services.module#ModalServicesPageModule', name: 'ModalServicesPage', segment: 'modal-services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nreservat/nreservat.module#NreservatPageModule', name: 'NreservatPage', segment: 'nreservat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nreserva/nreserva.module#NreservaPageModule', name: 'NreservaPage', segment: 'nreserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reprogramacion/reprogramacion.module#ReprogramacionPageModule', name: 'ReprogramacionPage', segment: 'reprogramacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobreby/sobreby.module#SobrebyPageModule', name: 'SobrebyPage', segment: 'sobreby', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-reserva/detalle-reserva.module#DetalleReservaPageModule', name: 'DetalleReservaPage', segment: 'detalle-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horario/horario.module#HorarioPageModule', name: 'HorarioPage', segment: 'horario', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ionic2_calendar__["a" /* NgCalendarModule */], __WEBPACK_IMPORTED_MODULE_11_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'es-pa' },
                __WEBPACK_IMPORTED_MODULE_15__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 163,
	"./af.js": 163,
	"./ar": 164,
	"./ar-dz": 165,
	"./ar-dz.js": 165,
	"./ar-kw": 166,
	"./ar-kw.js": 166,
	"./ar-ly": 167,
	"./ar-ly.js": 167,
	"./ar-ma": 168,
	"./ar-ma.js": 168,
	"./ar-sa": 169,
	"./ar-sa.js": 169,
	"./ar-tn": 170,
	"./ar-tn.js": 170,
	"./ar.js": 164,
	"./az": 171,
	"./az.js": 171,
	"./be": 172,
	"./be.js": 172,
	"./bg": 173,
	"./bg.js": 173,
	"./bm": 174,
	"./bm.js": 174,
	"./bn": 175,
	"./bn.js": 175,
	"./bo": 176,
	"./bo.js": 176,
	"./br": 177,
	"./br.js": 177,
	"./bs": 178,
	"./bs.js": 178,
	"./ca": 179,
	"./ca.js": 179,
	"./cs": 180,
	"./cs.js": 180,
	"./cv": 181,
	"./cv.js": 181,
	"./cy": 182,
	"./cy.js": 182,
	"./da": 183,
	"./da.js": 183,
	"./de": 184,
	"./de-at": 185,
	"./de-at.js": 185,
	"./de-ch": 186,
	"./de-ch.js": 186,
	"./de.js": 184,
	"./dv": 187,
	"./dv.js": 187,
	"./el": 188,
	"./el.js": 188,
	"./en-au": 189,
	"./en-au.js": 189,
	"./en-ca": 190,
	"./en-ca.js": 190,
	"./en-gb": 191,
	"./en-gb.js": 191,
	"./en-ie": 192,
	"./en-ie.js": 192,
	"./en-il": 193,
	"./en-il.js": 193,
	"./en-nz": 194,
	"./en-nz.js": 194,
	"./eo": 195,
	"./eo.js": 195,
	"./es": 196,
	"./es-do": 197,
	"./es-do.js": 197,
	"./es-us": 198,
	"./es-us.js": 198,
	"./es.js": 196,
	"./et": 199,
	"./et.js": 199,
	"./eu": 200,
	"./eu.js": 200,
	"./fa": 201,
	"./fa.js": 201,
	"./fi": 202,
	"./fi.js": 202,
	"./fo": 203,
	"./fo.js": 203,
	"./fr": 204,
	"./fr-ca": 205,
	"./fr-ca.js": 205,
	"./fr-ch": 206,
	"./fr-ch.js": 206,
	"./fr.js": 204,
	"./fy": 207,
	"./fy.js": 207,
	"./gd": 208,
	"./gd.js": 208,
	"./gl": 209,
	"./gl.js": 209,
	"./gom-latn": 210,
	"./gom-latn.js": 210,
	"./gu": 211,
	"./gu.js": 211,
	"./he": 212,
	"./he.js": 212,
	"./hi": 213,
	"./hi.js": 213,
	"./hr": 214,
	"./hr.js": 214,
	"./hu": 215,
	"./hu.js": 215,
	"./hy-am": 216,
	"./hy-am.js": 216,
	"./id": 217,
	"./id.js": 217,
	"./is": 218,
	"./is.js": 218,
	"./it": 219,
	"./it.js": 219,
	"./ja": 220,
	"./ja.js": 220,
	"./jv": 221,
	"./jv.js": 221,
	"./ka": 222,
	"./ka.js": 222,
	"./kk": 223,
	"./kk.js": 223,
	"./km": 224,
	"./km.js": 224,
	"./kn": 225,
	"./kn.js": 225,
	"./ko": 226,
	"./ko.js": 226,
	"./ky": 227,
	"./ky.js": 227,
	"./lb": 228,
	"./lb.js": 228,
	"./lo": 229,
	"./lo.js": 229,
	"./lt": 230,
	"./lt.js": 230,
	"./lv": 231,
	"./lv.js": 231,
	"./me": 232,
	"./me.js": 232,
	"./mi": 233,
	"./mi.js": 233,
	"./mk": 234,
	"./mk.js": 234,
	"./ml": 235,
	"./ml.js": 235,
	"./mn": 236,
	"./mn.js": 236,
	"./mr": 237,
	"./mr.js": 237,
	"./ms": 238,
	"./ms-my": 239,
	"./ms-my.js": 239,
	"./ms.js": 238,
	"./mt": 240,
	"./mt.js": 240,
	"./my": 241,
	"./my.js": 241,
	"./nb": 242,
	"./nb.js": 242,
	"./ne": 243,
	"./ne.js": 243,
	"./nl": 244,
	"./nl-be": 245,
	"./nl-be.js": 245,
	"./nl.js": 244,
	"./nn": 246,
	"./nn.js": 246,
	"./pa-in": 247,
	"./pa-in.js": 247,
	"./pl": 248,
	"./pl.js": 248,
	"./pt": 249,
	"./pt-br": 250,
	"./pt-br.js": 250,
	"./pt.js": 249,
	"./ro": 251,
	"./ro.js": 251,
	"./ru": 252,
	"./ru.js": 252,
	"./sd": 253,
	"./sd.js": 253,
	"./se": 254,
	"./se.js": 254,
	"./si": 255,
	"./si.js": 255,
	"./sk": 256,
	"./sk.js": 256,
	"./sl": 257,
	"./sl.js": 257,
	"./sq": 258,
	"./sq.js": 258,
	"./sr": 259,
	"./sr-cyrl": 260,
	"./sr-cyrl.js": 260,
	"./sr.js": 259,
	"./ss": 261,
	"./ss.js": 261,
	"./sv": 262,
	"./sv.js": 262,
	"./sw": 263,
	"./sw.js": 263,
	"./ta": 264,
	"./ta.js": 264,
	"./te": 265,
	"./te.js": 265,
	"./tet": 266,
	"./tet.js": 266,
	"./tg": 267,
	"./tg.js": 267,
	"./th": 268,
	"./th.js": 268,
	"./tl-ph": 269,
	"./tl-ph.js": 269,
	"./tlh": 270,
	"./tlh.js": 270,
	"./tr": 271,
	"./tr.js": 271,
	"./tzl": 272,
	"./tzl.js": 272,
	"./tzm": 273,
	"./tzm-latn": 274,
	"./tzm-latn.js": 274,
	"./tzm.js": 273,
	"./ug-cn": 275,
	"./ug-cn.js": 275,
	"./uk": 276,
	"./uk.js": 276,
	"./ur": 277,
	"./ur.js": 277,
	"./uz": 278,
	"./uz-latn": 279,
	"./uz-latn.js": 279,
	"./uz.js": 278,
	"./vi": 280,
	"./vi.js": 280,
	"./x-pseudo": 281,
	"./x-pseudo.js": 281,
	"./yo": 282,
	"./yo.js": 282,
	"./zh-cn": 283,
	"./zh-cn.js": 283,
	"./zh-hk": 284,
	"./zh-hk.js": 284,
	"./zh-tw": 285,
	"./zh-tw.js": 285
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 389;

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, loadingCtrl, storage, events, apiProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.events = events;
        this.apiProvider = apiProvider;
        this.rootPage = '';
        this.userDataProfile = {};
        this.storage.get('usr_tok_byae').then(function (result) {
            console.log(result);
            if (result) {
                _this.rootPage = 'CalendarioPage';
                _this.userDataProfile = result;
            }
            else {
                _this.rootPage = 'LoginPage';
            }
        });
        events.subscribe('loginOK', function (data) {
            _this.userDataProfile = data;
        });
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Calendario', component: 'CalendarioPage' },
            { title: 'Horario', component: 'HorarioPage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //navigator.splashscreen.hide();
            _this.statusBar.styleDefault();
            //this.splashScreen.hide();
            _this.platform.registerBackButtonAction(function () {
                console.log('donothing');
            });
            //if(false){
            if (_this.platform.is('android') || _this.platform.is('ios')) {
                console.log('amhere1');
                var push = window.PushNotification.init({
                    "android": {
                        "senderID": "990502902161"
                    },
                    "ios": {
                        "alert": "true",
                        "badge": "true",
                        "sound": "true"
                    },
                    "windows": {}
                });
                push.on('registration', function (data) { return _this.registrarDevice(data); });
                push.on('notification', function (data) {
                    /*
                    if(data.additionalData.tipoNoti=="2" || data.additionalData.tipoNoti==2){
                    var ga=Number(data.additionalData.puntosGanados) * 1;
                    var ge=Number(data.additionalData.totalExc)* 1;
                    var gi=Number(data.additionalData.puntosActual)* 1;
                    var idCC=Number(data.additionalData.idCC);
                    if(idCC>0){
                    let profileModal = this.modalCtrl.create('CongratsPage',{'idCuponCliente':idCC},{
                    enterAnimation: 'modal-scale-up-enter',
                    leaveAnimation: 'modal-scale-up-leave'
                    });
                    profileModal.present();
                    }
                    else{
                    this.goAnimacion2(ga,ge,gi);
                    }
                     this.nav.push('OpinionesPage');
                   }
                   */
                    if (data.additionalData.tipoNoti == "1" || data.additionalData.tipoNoti == 1) {
                        var id = Number(data.additionalData.idCita);
                        _this.nav.push('DetalleReservaPage', { idCita: id });
                        //this.presentAlert(data.title,data.message);
                    }
                    console.log(data);
                });
                push.on('error', function (e) {
                    console.log(e.message);
                    console.log(e);
                });
            }
        });
    };
    MyApp.prototype.registrarDevice = function (data) {
        console.log('regsustr');
        console.log(data);
        this.storage.set("pushKeyAEBYST", data.registrationId);
    };
    MyApp.prototype.cerrarSesion = function () {
        this.apiProvider.cerrarS({ idEmpleado: this.userDataProfile.idEmpleado })
            .then(function (data) {
            console.log(data);
        });
        this.userDataProfile = {};
        this.storage.set("usr_tok_byae", false);
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\app\app.html"*/'<ion-menu [content]="content">\n<!--   <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content style=\'background-color: #f7f8f9;\'>\n\n    <div *ngIf=\'userDataProfile.idEmpleado\' style="    padding: 16px;background-color: #34bfa3 !important;\n    color: white">\n      \n      <img src="http://50.116.17.150:3000/{{userDataProfile?.idFoto}}" \n        onError="this.src=\'assets/imgs/usuario.png\';" style="    display: inline-block;\n    height: 50px;\n    width: 50px;\n    border-radius: 50px;\n    border: solid 2px white;\n    vertical-align: text-bottom;\n    margin-right: 9px;">\n\n    <div style="display: inline-block;">\n      <div style="margin-top: 10px;    margin-top: 10px;\n    font-size: 20px;\n    font-weight: 800;">{{userDataProfile?.nombreEmpleado}}</div>\n      <div style="margin-top: 2px;">{{userDataProfile?.descripcion}}</div>\n    </div>\n    </div>\n\n\n\n    <ion-list>\n      <button menuClose ion-item  class=\'btnMenu\' (click)="openPage(\'CalendarioPage\')">\n       <ion-icon name="calendar"></ion-icon> Calendario\n      </button>\n\n            <button menuClose ion-item  class=\'btnMenu\' (click)="openPage(\'HorarioPage\')">\n      <ion-icon name="timer"></ion-icon> Horario\n      </button>\n\n            <button menuClose ion-item class=\'btnMenu\'  (click)="openPage(\'PerfilPage\')">\n      <ion-icon name="contact"></ion-icon> Perfil\n      </button>\n\n            <button menuClose ion-item class=\'btnMenu\' (click)="openPage(\'AyudaPage\')">\n      <ion-icon name="help-circle"></ion-icon> Ayuda\n      </button>\n\n      <button menuClose ion-item class=\'btnMenu\' (click)="cerrarSesion()">\n        <ion-icon name="log-out"></ion-icon> Cerrar sesión\n      </button>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.calendar = {
            locale: 'es-MX',
            startingDayWeek: '1',
            mode: 'day',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                },
                formatMonthViewDayHeader: function (date) {
                    return 'MonMH';
                },
                formatMonthViewTitle: function (date) {
                    return 'testMT';
                },
                formatWeekViewDayHeader: function (date) {
                    return 'MonWH';
                },
                formatWeekViewTitle: function (date) {
                    return 'testWT';
                },
                formatWeekViewHourColumn: function (date) {
                    return 'testWH';
                },
                formatDayViewHourColumn: function (date) {
                    return 'testDH';
                },
                formatDayViewTitle: function (date) {
                    return 'testDT';
                }
            }
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.loadEvents();
    };
    HomePage.prototype.loadEvents = function () {
        // this.eventSource = this.createRandomEvents();
        var _this = this;
        this.restProvider.getEventosUserNC({ idEmpleado: 3 })
            .then(function (data) {
            _this.eventSource = data.map(function (item) {
                var arrayTemp = item;
                arrayTemp.title = item.nombreCliente;
                var date1 = new Date(item.y, item.m - 1, item.d, item.h, item.min);
                var date2 = new Date(item.y, item.m - 1, item.d, item.h2, (item.min2 - 2));
                var date22 = new Date(item.y, item.m - 1, item.d, item.h2, (item.min2));
                arrayTemp.startTime = date1;
                arrayTemp.endTime = date2;
                arrayTemp.endString = date22;
                arrayTemp.allDay = false;
                arrayTemp.servicio = item.nombreServicio;
                //console.log(arrayTemp);
                return arrayTemp;
            });
        });
    };
    HomePage.prototype.goDetalle = function (event) {
        console.log(event);
        this.navCtrl.push('DetalleReservaPage', { idCita: event.idCita });
    };
    HomePage.prototype.showItems = function (item) {
        console.log(item);
        //return item.filter(e=>e.estado == 0).length;
    };
    HomePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    HomePage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    HomePage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    HomePage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    HomePage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    HomePage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    HomePage.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var estado = Math.floor(Math.random() * 4) + 0;
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (false) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true,
                    servicio: 'Corte de Pelo',
                    estado: estado,
                    pendientes: Math.floor(Math.random() * 4) + 0
                });
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false,
                    estado: estado,
                    servicio: 'Corte de Pelo',
                    pendientes: Math.floor(Math.random() * 2) + 0
                });
            }
        }
        console.log(events);
        return events;
    };
    HomePage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar color="header">\n  <ion-buttons left>\n      <button ion-button  menuToggle>\n         <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n     </button>\n</ion-buttons>\n\n        <ion-title>{{viewTitle}}</ion-title>\n\n         <ion-buttons right>\n\n                <button class=\'bWhite\' ion-button small [ngClass]=\'{"activeBtn":calendar.mode=="month"}\' (click)="changeMode(\'month\')">\n            mes\n        </button>\n\n        <button class=\'bWhite\' ion-button small [ngClass]=\'{"activeBtn":calendar.mode=="day"}\' (click)="changeMode(\'day\')">\n         dia\n        </button>\n\n    </ion-buttons>\n\n\n    </ion-navbar>\n</ion-header>\n<ion-content >\n\n<!-- <div>\n     \n            <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n            <button ion-button (click)="changeMode(\'month\')">M</button>\n            <button ion-button (click)="changeMode(\'week\')">W</button>\n            <button ion-button (click)="changeMode(\'day\')">D</button>\n            <button ion-button (click)="loadEvents()">Load Events</button>\n  \n\n</div> -->\n\n<!--  \nitems en el calendario\n[monthviewDisplayEventTemplate]="template"  -->\n\n\n\n <ng-template #template2 let-view="view" let-row="row" let-col="col" >\n            {{view.dates[row*7+col].label}}\n\n<!-- <span class="badge1" *ngIf=\'showItems(view.dates[row*7+col].events) > 0\'>{{showItems(view.dates[row*7+col].events)}}</span> -->\n<span class="badge1" *ngIf=\'view.dates[row*7+col].events[0]?.pendientes > 0\'>{{view.dates[row*7+col].events[0].pendientes}}</span>\n\n        </ng-template>\n\n        \n\n       \n\n\n\n        <ng-template #template let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n            <ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false">\n\n      \n\n                    <ion-item *ngIf="selectedDate?.events.length>0" \n                      style=\'padding-left: 0px !important;color: #999;\' >\n                    <div class="no-events-label">Reservaciones</div>\n                </ion-item>\n\n              <ion-item *ngIf="selectedDate?.events.length==0" \n              style=\'padding-left: 0px !important;color: #999;\'>\n                    <div class="no-events-label">No hay reservas</div>\n                </ion-item>\n\n\n    <div class=\'cardReserva\' *ngFor="let event of selectedDate?.events" (click)=\'goDetalle(event)\'>\n <ion-icon class=\'iconR\' name="arrow-forward"></ion-icon>\n    <div>\n        <div style="display: inline-block;    width: 100%;">\n        <div  class="fechaItem" \n        [ngClass]="{\'citaE3sb3\':event.estado == 3,\'citaE4sb3\':event.estado == 4, \'citaE2sb3\': event.estado == 2, \'citaE1sb3\':event.estado == 1, \'citaE0sb3\':event.estado == 0}">\n            <span class="spanCenter" style="color: #444;display: block; text-transform: uppercase;">{{event.startTime|date: \'MMM\'}}  </span>\n            <span class="spanCenter" style="    color: #444;display: block;font-size: 22px;">{{event.startTime|date: \'d\'}}</span>\n           <div class="spanCenter">\n                     <span *ngIf=\'event.estado==0\' class=\'estadoReservas\' style="color: #cabf2b;">\n        PENDIENTE CONFIRMAR\n        </span>\n        <span *ngIf=\'event.estado==1\'  class=\'estadoReservas\' style="color:#3ca1ff ">\n        CONFIRMADA\n        </span>\n        <span *ngIf=\'event.estado==3\'  class=\'estadoReservas\' style="color: #77dd77;">\n        COMPLETA\n        </span>\n        <span *ngIf=\'event.estado==2\'  class=\'estadoReservas\' style="color: #ffb34c">\n        REPROGRA. - PENDIENTE</span>\n        <span *ngIf=\'event.estado==4\' class=\'estadoReservas\' style="color: #ff1e1e;">\n        CANCELADA\n        </span>\n\n           </div>\n        </div>\n        <div style="display: inline-block;vertical-align: middle;width: calc(100% - 105px);">\n        <span class="nombreCliente">\n        {{event.title}}\n        </span>  \n\n        <span  style="font-size: 15px;\n        color: #444; ">\n        {{event.servicio}} \n      </span>\n <span style="display: block;    color: #444;">{{event.startTime|date: \'h:mm a\'}} - {{event.endTime|date: \'h:mm a\'}}</span>\n  \n      \n        </div>\n       \n        </div>\n\n    </div>\n    </div>\n\n\n  \n\n<!--                 <ion-item *ngFor="let event of selectedDate?.events" (click)="eventSelected(event)">\n                        <span *ngIf="!event.allDay" class="monthview-eventdetail-timecolumn">{{event.startTime|date: \'HH:mm\'}}\n                            -\n                            {{event.endTime|date: \'HH:mm\'}}\n                        </span>\n                    <span *ngIf="event.allDay" class="monthview-eventdetail-timecolumn">All day</span>\n                    <span class="event-detail">  |  {{event.title}}</span>\n                </ion-item>\n                <ion-item *ngIf="selectedDate?.events.length==0">\n                    <div class="no-events-label">{{noEventsLabel}}</div>\n                </ion-item> -->\n            </ion-list>\n        </ng-template>\n\n\n\n\n\n<ng-template #template4 let-displayEvent="displayEvent" >\n\n\n            <div class="calendar-event-inner " style="text-align: left !important">\n\n\n            <div class="txtDots">{{displayEvent.event.startTime|date: \'h:mm\'}} - {{displayEvent.event.endString|date: \'h:mm\'}}</div>\n\n            <div class="txtDots">\n             <span>{{displayEvent.event.title}}</span>\n             -<span>{{displayEvent.event.servicio}} </span>\n            </div>\n          </div>\n\n\n\n        </ng-template>\n\n\n                <ng-template #template5 let-tm="tm" let-hourParts="hourParts" let-eventTemplate="eventTemplate">\n            <div [ngClass]="{\'calendar-event-wrap\': tm.events}" *ngIf="tm.events">\n                <div *ngFor="let displayEvent of tm.events" class="calendar-event" tappable\n                     (click)="goDetalle(displayEvent.event)"\n                     [ngStyle]="{top: (37*displayEvent.startOffset/hourParts)+\'px\',left: 100/displayEvent.overlapNumber*displayEvent.position+\'%\', width: 100/displayEvent.overlapNumber+\'%\', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+\'px\'}" \n                      [ngClass]="{\'citaE3\':displayEvent.event.estado == 3, \'citaE4\':displayEvent.event.estado == 4,\'citaE2\': displayEvent.event.estado == 2, \'citaE1\':displayEvent.event.estado == 1, \'citaE0\':displayEvent.event.estado == 0}" style=\'    width: 100% !important;\'>\n                    <ng-template [ngTemplateOutlet]="eventTemplate"\n                                 [ngTemplateOutletContext]="{displayEvent:displayEvent}">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n\n\n  <calendar [eventSource]="eventSource"\n  [monthviewDisplayEventTemplate]="template2"\n\n  [dayviewNormalEventTemplate]="template4" \n  [dayviewNormalEventSectionTemplate]="template5" \n\n [monthviewEventDetailTemplate]="template"\n  [startingDayMonth]="calendar.startingDayWeek" \n    [startingDayWeek]="calendar.startingDayWeek" \n        [calendarMode]="calendar.mode"\n        [currentDate]="calendar.currentDate"\n        (onCurrentDateChanged)="onCurrentDateChanged($event)"\n        (onRangeChanged)="reloadSource(startTime, endTime)"\n        (onEventSelected)="goDetalle($event)"\n        (onTitleChanged)="onViewTitleChanged($event)"\n        (onTimeSelected)="onTimeSelected($event)"\n         formatHourColumn=\'h:mma\'\n        startHour="5"\n        endHour="24"\n        step="1"\n        timeInterval="30" \n        [preserveScrollPosition]="true">\n        \n    </calendar>\n\n\n\n<!--   <button ion-button secondary menuToggle>Toggle Menu</button> -->\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    //apiUrl = 'http://192.168.100.5:3001'; 
    //apiUrl = 'http://10.100.100.139:3001'; 
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'http://50.116.17.150:3001';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getEmpleadoAE = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getEmpleadoAE', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.cambiarServicioCitaNCREPRO = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/cambiarServicioCitaNCREPRO', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                resolve(false);
            });
        });
    };
    RestProvider.prototype.addPush2 = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/addPush2', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.cerrarS = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/cerrarS2', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.editarEmpleadoAE = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/editarEmpleadoAE2', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.agregarBloque = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/agregarBloque', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.recuperarStaffPass = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/recuperarStaffPass', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.eliminarHE = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/eliminarHE', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.agregarHEENC = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/agregarHEENC', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.addCitaManual2 = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/addCitaManual2  ', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.guardarHorarioNC = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/guardarHorarioNC', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getInfoEmpleadoAE = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getInfoEmpleadoAE', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.horarioSet = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/horarioSet', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getEventosUserNC = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getEventosUserNC', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                resolve(false);
            });
        });
    };
    RestProvider.prototype.doLoginApiAE = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/doLoginApiAE', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getSubcategorias = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getSubcategorias', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getSubcategoriasEmpleado = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getSubcategoriasEmpleado', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getSubcategoriasServ = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getSubcategoriasServ', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getCategoriasEmpleadoC = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getCategoriasEmpleadoC', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getEmpleadoServicios = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getEmpleadoServicios', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.cancelarRMAS = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/cancelarRMAS', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                resolve(false);
            });
        });
    };
    RestProvider.prototype.cambiarServicioCitaNC = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/cambiarServicioCitaNC', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                resolve(false);
            });
        });
    };
    RestProvider.prototype.getDataCita = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/getDataCitaAE', data)
                .subscribe(function (res) {
                console.log(res);
                resolve(res);
            }, function (err) {
                resolve(false);
            });
        });
    };
    RestProvider.prototype.actualizarCitasEstado = function (data) {
        return this.http.post(this.apiUrl + '/actualizarCitasEstado', data);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RestProvider);
    return RestProvider;
    var _a;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map