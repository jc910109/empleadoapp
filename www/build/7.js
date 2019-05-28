webpackJsonp([7],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(107);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menu, formBuilder, events, loadingCtrl, storage, alertCtrl, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.apiProvider = apiProvider;
        this.menu.swipeEnable(false);
        this.authForm = formBuilder.group({
            // username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(5), Validators.maxLength(15)])],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
        // If you have more than one side menu, use the id like below
        // this.menu.swipeEnable(false, 'menu1');
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // Don't forget to return the swipe to normal, otherwise 
        // the rest of the pages won't be able to swipe to open menu
        this.menu.swipeEnable(true);
        // If you have more than one side menu, use the id like below
        // this.menu.swipeEnable(true, 'menu1');
    };
    LoginPage.prototype.alertaAcep = function (mensake) {
        var alert = this.alertCtrl.create({
            title: 'Recuperar contraseña',
            subTitle: mensake,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginPage.prototype.olvidePass = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Recuperar Contraseña',
            message: 'Ingrese el email asociado a su cuenta Ybstaff',
            inputs: [
                {
                    name: 'correo',
                    placeholder: 'Email'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Recuperar',
                    handler: function (data) {
                        //data.correo
                        var loading = _this.loadingCtrl.create({ content: "Verificando..." });
                        loading.present();
                        _this.apiProvider.recuperarStaffPass({ email: data.correo })
                            .then(function (datax) {
                            console.log(datax);
                            if (datax && datax.email == 1) {
                                _this.alertaAcep('Se ha enviado la contraseña a su correo electronico');
                            }
                            else {
                                _this.alertaAcep('Email invalido');
                            }
                            loading.dismiss();
                        });
                        /*
                                  if (User.isValid(data.correo)) {
                                    // logged in!
                                  } else {
                                    // invalid login
                                    return false;
                                  }
                        */
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginPage.prototype.doLogin = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Verificando Credenciales..." });
        loading.present();
        console.log(data);
        this.apiProvider.doLoginApiAE(data)
            .then(function (data) {
            console.log(data);
            if (data.data[0] && (data.data[0].idEmpleado > 0)) {
                if (data.data[0].centroActivo == 1) {
                    _this.storage.get('pushKeyAEBYST').then(function (value) {
                        if (value) {
                            console.log(value);
                            var pushState = {
                                pushK: value,
                                device: device.platform,
                                deviceId: device.uuid,
                                login: Date.now(),
                                user: data.data[0].idEmpleado
                            };
                            console.log(pushState);
                            _this.apiProvider.addPush2(pushState).then(function (data) {
                                console.log(data);
                            });
                        }
                    });
                    // this.dataProfile = data.data[0];
                    _this.storage.set("usr_tok_byae", data.data[0]);
                    _this.events.publish('loginOK', data.data[0]);
                    if (data.data[0].horarioSet == 1) {
                        _this.apiProvider.horarioSet({ idEmpleado: data.data[0].idEmpleado })
                            .then(function (datax) { console.log(datax); });
                        _this.navCtrl.setRoot('HorarioPage', { first: 1 });
                        _this.storage.set("usr_alrt_byae", true);
                    }
                    else {
                        _this.navCtrl.setRoot('CalendarioPage');
                        _this.storage.set("usr_alrt_byae", false);
                    }
                    //this.events.publish('userCreated', data.data[0]);
                    loading.dismiss();
                    //this.navCtrl.push('CalendarioPage');
                    //this.closeModal();
                }
                else {
                    loading.dismiss();
                    _this.presentAlert('Cuenta suspendida', 'Por favor contacte a su administrador');
                }
            }
            else {
                loading.dismiss();
                _this.presentAlert('Ups!', 'Credenciales incorrectas');
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding style=\'background-color: rgb(230,111,145)\' >\n\n\n<div style="text-align: center">\n<img style="    height: 200px;" src="assets/imgs/banner.png">\n</div>\n    <form [formGroup]="authForm" (ngSubmit)="doLogin(authForm.value)">\n\n              <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\'    color: #e6e6e6;\n    position: absolute;\n    right: 6px;\n    font-size: 21px;\n    top: 1px;\'>\n                  <ion-icon   ios="md-mail" md="md-mail" ></ion-icon>\n            </ion-label>\n            <ion-input placeholder=\'Email\' class=\'inputT\'  formControlName="username" type="text"></ion-input>\n        </ion-item>\n  \n<!--         <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n            <p>Email invalido</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n            <p>Email invalido</p>\n        </ion-item>        \n        <ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n            <p>Sorry, minimum username length is 5!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n            <p>Sorry, maximum username length is 15!</p>\n        </ion-item> -->\n  \n                   <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;\n    position: absolute;\n    right: 6px;\n    font-size: 21px;\n    top: 1px;\'>\n                  <ion-icon   ios="md-lock" md="md-lock" ></ion-icon>\n            </ion-label>\n            <ion-input placeholder=\'Contraseña\' class=\'inputT\'  formControlName="password" type="password"></ion-input>\n        </ion-item>\n <!--        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n            <p>Contraseña invalida</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n            <p>Contraseña invalida</p>\n        </ion-item>   -->              \n  \n        <button ion-button full color="verderapp" [disabled]="!authForm.valid" style="    border-radius: 40px;margin-top: 20px;" type="submit"><span>Iniciar Sesión</span></button>        \n    </form>\n\n<p style="    text-align: center;\n    color: white !important;\n    font-size: 16px;\n    margin-top: 21px;" (click)=\'olvidePass()\'>olvidé mi contraseña</p>\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=7.js.map