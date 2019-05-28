webpackJsonp([0],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaPageModule", function() { return AyudaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ayuda__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AyudaPageModule = /** @class */ (function () {
    function AyudaPageModule() {
    }
    AyudaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ayuda__["a" /* AyudaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__ayuda__["a" /* AyudaPage */]),
            ],
        })
    ], AyudaPageModule);
    return AyudaPageModule;
}());

//# sourceMappingURL=ayuda.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
 * Generated class for the AyudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AyudaPage = /** @class */ (function () {
    function AyudaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.dasta = [
            {
                "name": "CALENDARIO",
                "children": [
                    {
                        "name": "Reservas manuales",
                        "information": "Crea las reservas manuales que tienes a la fecha por otros medios, para que los clientes que reservan a través de la App tengan tu disponibilidad real. Se crea la misma mediante el icono + en la parte superior derecha del calendario."
                    },
                    {
                        "name": "Reserva de tiempo",
                        "information": " en caso de manejar unos horarios especiales en un tiempo determinado, o de no trabajar unos días en concreto puedes configurarlo en” nueva reserva de tiempo” en el icono +,  todo con el fin que los usuarios cuenten con tu disponibilidad  real."
                    },
                    {
                        "name": "Visualizacion de reservas",
                        "information": " En el calendario se reflejan todas las reservas y el estado de las mismas. Puedes seleccionar la vista por mes donde se despliegan todas las reservas del día seleccionado; o ver mayor detalle en la vista por día. Al dar click sobre una reserva, te desplaza al detalle donde puedes confirmar,  solicitar reprogramar, declinar  y/o completar la reserva."
                    }
                ]
            },
            {
                "name": "HORARIO",
                "children": [
                    {
                        "name": "Tu Horario",
                        "information": "Indica los días y las horas que laboras en el centro, este horario es tomado en cuenta en el momento de mostrar tu disponibilidad en el app de usuario."
                    },
                    {
                        "name": "Horario Especial",
                        "information": "En caso de  horarios o fechas extraordinarias debes indicarlo  en la pestaña + en “nueva reserva de tiempo”.  Tu horario debes siempre tenerlo actualizado"
                    }
                ]
            },
            {
                "name": "PERFIL",
                "children": [
                    {
                        "name": "",
                        "information": "En esta opción puedes actualizar tus datos de contacto y agregar una foto a tu perfil, la misma se refleja en la app de usuario."
                    }
                ]
            },
            {
                "name": "AYUDA",
                "children": [
                    {
                        "name": "Soporte",
                        "information": "Encontrarás faq que te pueden ayudar a cualquier duda que tengas, en caso de información adicional puedes escribir a soporte@yourbeauty.com.pa"
                    }
                ]
            }
        ];
        this.information = this.dasta;
    }
    AyudaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AyudaPage');
    };
    AyudaPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    AyudaPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    AyudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ayuda',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\ayuda\ayuda.html"*/'<!--\n  Generated template for the AyudaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="header">\n  <ion-buttons left>\n      <button ion-button  menuToggle>\n         <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n     </button>\n</ion-buttons>\n\n        <ion-title>Ayuda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n<ion-list class="accordion-list" style=\'\'>\n    <!-- First Level -->\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <!-- Toggle Button -->\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-forward"  style=\'color: #34bfa3;\' *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n          {{ item.name }}\n      </button>\n \n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <!-- Second Level -->\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <!-- Toggle Button -->\n          <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n            {{ child.name }}\n          </button>\n \n          <!-- Direct Add Button as Fallback -->\n          <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p style="margin-top: 13px;    text-transform: none !important;">{{ child.information }}</p>\n          \n          </ion-item>\n \n          <ion-list *ngIf="child.children && child.open">\n            <!-- Third Level -->\n            <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n              <h2>{{ item.name }}</h2>\n              <p text-lowercase>{{ item.information }}</p>\n              <!-- Direct Add Button -->\n           \n            </ion-item>\n          </ion-list>\n \n        </ion-list-header>\n      </ion-list>\n      \n    </ion-list-header>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\ayuda\ayuda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AyudaPage);
    return AyudaPage;
}());

//# sourceMappingURL=ayuda.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(10);
var map_1 = __webpack_require__(108);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=0.js.map