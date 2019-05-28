webpackJsonp([10],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageModule", function() { return CalendarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendario__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalendarioPageModule = /** @class */ (function () {
    function CalendarioPageModule() {
    }
    CalendarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calendario__["a" /* CalendarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__calendario__["a" /* CalendarioPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar__["a" /* NgCalendarModule */],
            ],
        })
    ], CalendarioPageModule);
    return CalendarioPageModule;
}());

//# sourceMappingURL=calendario.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(29);
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
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(navCtrl, cdr, restProvider, loadingCtrl, storage, actionSheetCtrl, DomSanitizer, alertCtrl) {
        this.navCtrl = navCtrl;
        this.cdr = cdr;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.DomSanitizer = DomSanitizer;
        this.alertCtrl = alertCtrl;
        this.dataUser = {};
        this.calendar = {
            locale: 'es-MX',
            startingDayWeek: '1',
            mode: 'day',
            formatMonthTitle: 'LLLL',
            formatDayTitle: 'LLL d',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                },
                formatMonthViewDayHeader: function (date) {
                    return 'LLL';
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
    CalendarioPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('usr_tok_byae').then(function (result) {
            if (result) {
                _this.dataUser = result;
                _this.loadEvents();
                console.log(_this.dataUser);
            }
            else {
                console.log('error-nologin');
            }
        });
        this.storage.get('usr_alrt_byae').then(function (result) {
            if (result) {
                _this.presentAlert('Nota Importante');
                _this.storage.set("usr_alrt_byae", false);
            }
        });
    };
    CalendarioPage.prototype.calcularPorConfirmar = function (events) {
        var sum = 0;
        events.forEach(function (event) {
            if (event.estado == 0)
                sum += 1;
        });
        return sum;
    };
    CalendarioPage.prototype.previousMonth = function () {
        console.log(this.calendar.currentDate);
        if (this.calendar.mode == "month") {
            var ff = new Date(this.calendar.currentDate.setMonth(this.calendar.currentDate.getMonth() - 1));
            this.calendar.currentDate = ff;
        }
        if (this.calendar.mode == "day") {
            var gg = new Date(this.calendar.currentDate.setDate(this.calendar.currentDate.getDate() - 1));
            this.calendar.currentDate = gg;
        }
    };
    CalendarioPage.prototype.reintentarAlert = function (funcionEnviar) {
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
    CalendarioPage.prototype.nextMonth = function () {
        if (this.calendar.mode == "month") {
            var ff = new Date(this.calendar.currentDate.setMonth(this.calendar.currentDate.getMonth() + 1));
            this.calendar.currentDate = ff;
        }
        if (this.calendar.mode == "day") {
            var gg = new Date(this.calendar.currentDate.setDate(this.calendar.currentDate.getDate() + 1));
            this.calendar.currentDate = gg;
        }
    };
    CalendarioPage.prototype.presentAlert = function (titulo) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: 'Por favor crea las reservas que tengas por otros medios en tu agenda para mostrar tu disponibilidad real y  evitar conflictos de tiempo con las reservas en línea.',
            buttons: [
                {
                    text: 'Cerrar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Crear Reserva',
                    handler: function () {
                        _this.navCtrl.push('NreservaPage');
                    }
                }
            ]
        });
        alert.present();
    };
    CalendarioPage.prototype.loadEvents = function () {
        // this.eventSource = this.createRandomEvents();
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Obteniendo Reservas..." });
        loading.present();
        this.restProvider.getEventosUserNC({ idEmpleado: this.dataUser.idEmpleado, admin: this.dataUser.tipo, idCentro: this.dataUser.idCentro })
            .then(function (data) {
            loading.dismiss();
            if (data) {
                _this.eventSource = data.map(function (item) {
                    var arrayTemp = item;
                    if (item.idReservaManual) {
                        arrayTemp.title = item.detalle;
                        var date1 = new Date(item.y, item.m - 1, item.d, item.h, item.min);
                        var date2 = new Date(item.y, item.m - 1, item.d, item.h2, (item.min2 - 2));
                        var date22 = new Date(item.y, item.m - 1, item.d, item.h2, (item.min2));
                        arrayTemp.startTime = date1;
                        arrayTemp.endTime = date2;
                        arrayTemp.endString = date22;
                        arrayTemp.allDay = false;
                        arrayTemp.servicio = ' ';
                        arrayTemp.estado = 77;
                        return arrayTemp;
                    }
                    else {
                        arrayTemp.title = item.clienteReferencia ? item.clienteReferencia : item.nombreCliente;
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
                    }
                });
            }
            else {
                console.log('err conex');
                _this.reintentarAlert(_this.loadEvents.bind(_this));
            }
        });
    };
    CalendarioPage.prototype.addReserva = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Tipo de reserva',
            buttons: [
                {
                    text: 'Nueva Reserva',
                    handler: function () {
                        //console.log('Destructive clicked');
                        _this.navCtrl.push('NreservaPage');
                    }
                }, {
                    text: 'Nueva reserva de tiempo',
                    handler: function () {
                        _this.navCtrl.push('NreservatPage');
                    }
                }, {
                    text: 'Salir',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CalendarioPage.prototype.goDetalle = function (event) {
        console.log(event);
        if (event.idReservaManual) {
            console.log('rmanual');
        }
        else {
            this.navCtrl.push('DetalleReservaPage', { idCita: event.idCita });
        }
    };
    CalendarioPage.prototype.showItems = function (item) {
        console.log(item);
        //return item.filter(e=>e.estado == 0).length;
    };
    CalendarioPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarioPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    CalendarioPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalendarioPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalendarioPage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
        // this.calendar.currentDate =  ev.selectedTime;
    };
    CalendarioPage.prototype.onCurrentDateChanged = function (event) {
        console.log(event);
        this.calendar.currentDate = event;
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    CalendarioPage.prototype.createRandomEvents = function () {
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
    CalendarioPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendario',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\calendario\calendario.html"*/'<ion-header>\n    <ion-navbar color="header">\n  <ion-buttons left>\n      <button ion-button  menuToggle>\n         <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n     </button>\n</ion-buttons>\n\n        <ion-title style=\'padding: 0px !important\'>\n           <ion-icon (click)=\'previousMonth()\' style=\'height: 39px;\n    width: 44px;\n    vertical-align: middle;\n    line-height: 33px;\' name="arrow-back"></ion-icon> \n        {{viewTitle}}\n         <ion-icon (click)=\'nextMonth()\'  style=\'height: 39px;\n    width: 44px;\n    vertical-align: middle;\n    line-height: 33px;\' name="arrow-forward"></ion-icon> \n\n      </ion-title>\n\n         <ion-buttons right>\n\n   <!--              <button class=\'bWhite \' ion-button small [ngClass]=\'{"activeBtn":calendar.mode=="month"}\' (click)="changeMode(\'month\')">\n            mes\n        </button> -->\n         <button class=\'bWhite \' ion-button small [hidden]=\'calendar.mode=="month"\' (click)="changeMode(\'month\')" >\n            mes\n        </button><button class=\'bWhite\' ion-button small [hidden]=\'calendar.mode=="day"\' (click)="changeMode(\'day\')">\n         dia\n        </button>\n       <button style="    padding-right: 0px !important;" class=\'\' ion-button small (click)="addReserva()">\n           <ion-icon name="add" style="    font-size: 27px;\n    margin-left: 8px;\n    margin-right: 8px;    font-weight: 900 !important;"></ion-icon>\n        </button>\n\n    \n\n        \n\n    </ion-buttons>\n\n\n    </ion-navbar>\n</ion-header>\n<ion-content >\n\n<!-- <div>\n     \n            <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n            <button ion-button (click)="changeMode(\'month\')">M</button>\n            <button ion-button (click)="changeMode(\'week\')">W</button>\n            <button ion-button (click)="changeMode(\'day\')">D</button>\n            <button ion-button (click)="loadEvents()">Load Events</button>\n  \n\n</div> -->\n\n<!--  \nitems en el calendario\n[monthviewDisplayEventTemplate]="template"  -->\n\n\n\n <ng-template #template2 let-view="view" let-row="row" let-col="col" >\n            {{view.dates[row*7+col].label}}\n\n<!-- <span class="badge1" *ngIf=\'showItems(view.dates[row*7+col].events) > 0\'>{{showItems(view.dates[row*7+col].events)}}</span> -->\n<span class="badge1" *ngIf=\'calcularPorConfirmar(view.dates[row*7+col].events) > 0\'>{{calcularPorConfirmar(view.dates[row*7+col].events)}}</span>\n\n        </ng-template>\n\n        \n\n       \n\n\n\n        <ng-template #template let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n            <ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false">\n\n      \n\n                    <ion-item *ngIf="selectedDate?.events.length>0" \n                      style=\'padding-left: 0px !important;color: #999;\' \n                      style=\'    padding-left: 10px;\'>\n                    <div class="no-events-label">Reservaciones</div>\n                </ion-item>\n\n              <ion-item *ngIf="selectedDate?.events.length==0" \n              style=\'padding-left: 10px !important;color: #999;\'>\n                    <div class="no-events-label">No hay reservas</div>\n                </ion-item>\n\n\n    <div class=\'cardReserva\' *ngFor="let event of selectedDate?.events" (click)=\'goDetalle(event)\'>\n <ion-icon class=\'iconR\' name="arrow-forward"></ion-icon>\n    <div>\n        <div style="display: inline-block;    width: 100%;">\n        <div  class="fechaItem" \n        [ngClass]="{\'citaE3sb3\':event.estado == 3,\'citaE4sb3\':event.estado == 4 || event.estado == 7, \'citaE2sb3\': event.estado == 2, \'citaE1sb3\':event.estado == 1, \'citaE0sb3\':event.estado == 0, \n        \'citaE77sb7\':event.estado == 77}">\n            <span class="spanCenter" style="color: #444;display: block; text-transform: uppercase;">{{event.startTime|date: \'MMM\'}}  </span>\n            <span class="spanCenter" style="    color: #444;display: block;font-size: 22px;">{{event.startTime|date: \'d\'}}</span>\n            <div class="spanCenter" [hidden]=\'!event.clienteReferencia\'>\n              R.Manual\n            </div>\n           <div class="spanCenter" [hidden]=\'event.clienteReferencia\'>\n                     <span *ngIf=\'event.estado==0\' class=\'estadoReservas\' style="color: #cabf2b;">\n        PENDIENTE CONFIRMAR\n        </span>\n        <span *ngIf=\'event.estado==1\'  class=\'estadoReservas\' style="color:#3ca1ff ">\n        CONFIRMADA\n        </span>\n        <span *ngIf=\'event.estado==3\'  class=\'estadoReservas\' style="color: #77dd77;">\n        COMPLETA\n        </span>\n        <span *ngIf=\'event.estado==2\'  class=\'estadoReservas\' style="color: #ffb34c">\n        REPROGRA. - PENDIENTE</span>\n        <span *ngIf=\'event.estado==4\' class=\'estadoReservas\' style="color: #ff1e1e;">\n        DECLINADA\n        </span>\n                <span *ngIf=\'event.estado==7\' class=\'estadoReservas\' style="color: #ff1e1e;">\n        CANCELADA\n        </span>\n\n      <span *ngIf=\'event.estado==77\' class=\'estadoReservas\' style="color: darkgrey;">\n        OCUPADO\n        </span>\n\n\n           </div>\n        </div>\n        <div style="display: inline-block;vertical-align: middle;width: calc(100% - 105px);">\n        <span class="nombreCliente">\n        {{event.title}}\n        </span>  \n\n        <span  style="font-size: 15px;\n        color: #444; ">\n        {{event.servicio}} \n      </span>\n <span style="display: block;    color: #444;">{{event.startTime|date: \'h:mm a\'}} - {{event.endString|date: \'h:mm a\'}}</span>\n  \n      \n        </div>\n       \n        </div>\n\n    </div>\n    </div>\n\n\n  \n\n<!--                 <ion-item *ngFor="let event of selectedDate?.events" (click)="eventSelected(event)">\n                        <span *ngIf="!event.allDay" class="monthview-eventdetail-timecolumn">{{event.startTime|date: \'HH:mm\'}}\n                            -\n                            {{event.endTime|date: \'HH:mm\'}}\n                        </span>\n                    <span *ngIf="event.allDay" class="monthview-eventdetail-timecolumn">All day</span>\n                    <span class="event-detail">  |  {{event.title}}</span>\n                </ion-item>\n                <ion-item *ngIf="selectedDate?.events.length==0">\n                    <div class="no-events-label">{{noEventsLabel}}</div>\n                </ion-item> -->\n            </ion-list>\n        </ng-template>\n\n\n\n\n\n<ng-template #template4 let-displayEvent="displayEvent" >\n\n\n            <div class="calendar-event-inner " style="text-align: left !important;white-space: nowrap;overflow: overlay;text-overflow: ellipsis;">\n            <div class="txtDots">{{displayEvent.event.startTime|date: \'h:mm\'}} - {{displayEvent.event.endString|date: \'h:mm\'}}</div>\n\n            <div class="txtDots">\n             <span>{{displayEvent.event.title}}</span>\n             -<span>{{displayEvent.event.servicio}} </span>\n            </div>\n          </div>\n\n\n\n        </ng-template>\n\n\n                <ng-template #template5 let-tm="tm" let-hourParts="hourParts" let-eventTemplate="eventTemplate">\n            <div [ngClass]="{\'calendar-event-wrap\': tm.events}" *ngIf="tm.events">\n                <div *ngFor="let displayEvent of tm.events" class="calendar-event" tappable\n                     (click)="goDetalle(displayEvent.event)"\n                     [ngStyle]="{top: (37*displayEvent.startOffset/hourParts)+\'px\',left: 100/displayEvent.overlapNumber*displayEvent.position+\'%\', width: 100/displayEvent.overlapNumber+\'%\', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+\'px\'}" \n                      [ngClass]="{\'alturaFix\': (37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)) < 36, \'citaE3\':displayEvent.event.estado == 3, \'citaE4\':displayEvent.event.estado == 4 || displayEvent.event.estado == 7,\'citaE2\': displayEvent.event.estado == 2, \'citaE1\':displayEvent.event.estado == 1, \'citaE0\':displayEvent.event.estado == 0,\'citaE77\':displayEvent.event.estado == 77}" style=\'    width: 100% !important;\'  >\n                    <ng-template [ngTemplateOutlet]="eventTemplate"\n                                 [ngTemplateOutletContext]="{displayEvent:displayEvent}">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n\n<!-- (onTimeSelected)="onTimeSelected($event)" -->\n\n  <calendar [eventSource]="eventSource"\n  [monthviewDisplayEventTemplate]="template2"\n\n  [dayviewNormalEventTemplate]="template4" \n  [dayviewNormalEventSectionTemplate]="template5" \n\n [monthviewEventDetailTemplate]="template"\n  [startingDayMonth]="calendar.startingDayWeek" \n    [startingDayWeek]="calendar.startingDayWeek" \n        [calendarMode]="calendar.mode"\n        [currentDate]="calendar.currentDate"\n        [formatMonthTitle]="calendar.formatMonthTitle"\n        [formatDayTitle]="calendar.formatDayTitle"\n        (onCurrentDateChanged)="onCurrentDateChanged($event)"\n        (onRangeChanged)="reloadSource(startTime, endTime)"\n        (onEventSelected)="goDetalle($event)"\n        (onTitleChanged)="onViewTitleChanged($event)"\n     \n         formatHourColumn=\'h:mma\'\n        startHour="5"\n        endHour="24"\n        step="1"\n        timeInterval="30" \n        [preserveScrollPosition]="true">\n        \n    </calendar>\n\n\n\n<!--   <button ion-button secondary menuToggle>Toggle Menu</button> -->\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\calendario\calendario.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _h || Object])
    ], CalendarioPage);
    return CalendarioPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=calendario.js.map

/***/ })

});
//# sourceMappingURL=10.js.map