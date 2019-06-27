webpackJsonp([3],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
            ],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PerfilPage = /** @class */ (function () {
    function PerfilPage(DomSanitizer, navCtrl, navParams, modalCtrl, alertCtrl, loadingCtrl, events, zone, apiProvider, storage) {
        var _this = this;
        this.DomSanitizer = DomSanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.zone = zone;
        this.apiProvider = apiProvider;
        this.storage = storage;
        this.dataUser = {};
        this.porcenBarra = 0;
        this.getImages = function () {
            var options = {
                quality: 100,
                destinationType: navigator.camera.DestinationType.FILE_URI,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
            };
            navigator.camera.getPicture(function (imageData) {
                console.log(imageData);
                _this.zone.run(function () { _this.imageFileName = imageData; });
            }, function (err) {
                console.log(err);
            }, options);
        };
        this.uploadFile = function (datak) {
            var loader = _this.loadingCtrl.create({
                content: "Guardando..."
            });
            loader.present();
            //const fileTransfer: FileTransferObject = this.transfer.create();
            var options = new FileUploadOptions();
            options.fileKey = "ionicfile";
            options.fileName = 'ionicfile2';
            options.mimeType = "image/jpeg";
            options.chunkedMode = false;
            options.headers = {};
            options.params = datak;
            var ft = new FileTransfer();
            ft.upload(_this.imageFileName, 'http://50.116.17.150:3000/editarCFE2', function (datag) {
                console.log(datag);
                var data = JSON.parse(datag.response);
                console.log(data);
                if (data.data && data.data.affectedRows > 0) {
                    /*
                  this.storage.get('usr_tok_byae').then((value) => {
                  // console.log(value);
                  var da = value;
      
       
                  da.telefono = this.dataUser.telefono;
                  da.nombre = this.dataUser.nombre;
                  da.idFoto = data.idFoto;
                  console.log(da);
                  this.storage.set(`usr_tok_byae`, da);
      
      
                  }).catch(() => resolve(false));
                  */
                    _this.dataUser.idFoto = data.idFoto;
                    _this.storage.set('usr_tok_byae', _this.dataUser);
                    _this.events.publish('loginOK', _this.dataUser);
                    loader.dismiss();
                    _this.agregadoOk();
                    //console.log('borrada');
                    _this.editarData = true;
                }
                else {
                    loader.dismiss();
                    _this.errorSu();
                    console.log('Ha ocurrido un error');
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                // this.presentToast(err);
            }, options);
        };
        this.editarData = true;
        this.dataUserInput = {};
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('usr_tok_byae').then(function (result) {
            if (result) {
                _this.dataUser = result;
                console.log(_this.dataUser);
            }
            else {
                console.log('error-nologin');
            }
        });
    };
    PerfilPage.prototype.agregadoOk = function () {
        var alert = this.alertCtrl.create({
            title: 'Editado correctamente',
            subTitle: 'Sus datos han sido editados correctamente',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    PerfilPage.prototype.errorSu = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Ha ocurrido un error',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    PerfilPage.prototype.getPorcentaje = function () {
        var enviar = ((900) / (this.dataUser.completadas * 100)) + '%';
        console.log(enviar);
        return enviar;
    };
    PerfilPage.prototype.guardarCambios = function () {
        var _this = this;
        if (this.imageFileName) {
            this.uploadFile(this.dataUser);
        }
        else {
            var loading_1 = this.loadingCtrl.create({ content: "Cargando ..." });
            loading_1.present();
            this.apiProvider.editarEmpleadoAE(this.dataUser)
                .then(function (data) {
                loading_1.dismissAll();
                console.log(data);
                if (data.affectedRows > 0) {
                    console.log(_this.dataUser);
                    _this.storage.set('usr_tok_byae', _this.dataUser);
                    _this.events.publish('loginOK', _this.dataUser);
                    /*
                                this.storage.get('usr_tok_byae').then((value) => {
                                // console.log(value);
                                var da = value;
                    
                    
                                da.telefono = this.dataUser.telefono;
                                da.nombre = this.dataUser.nombreEmpleado;
                                   
                    
                                console.log(da);
                    
                                this.storage.set('usr_tok_byae', da);
                                this.events.publish('loginOK',da);
                    
                                }).catch(() => resolve(false));
                    */
                    _this.agregadoOk();
                    _this.editarData = true;
                }
                else {
                    console.log('Ha ocurrido un error');
                }
            });
        }
        //console.log(this.dataUser);
    };
    PerfilPage.prototype.cancelarEdicion = function () {
        var _this = this;
        this.storage.get('usr_tok_byae').then(function (result) {
            if (result) {
                _this.dataUser = result;
                console.log(_this.dataUser);
                _this.editarData = true;
                _this.imageFileName = undefined;
            }
            else {
                console.log('error-nologin');
            }
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil',template:/*ion-inline-start:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="header">\n  <ion-buttons left>\n      <button ion-button  menuToggle>\n         <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n     </button>\n</ion-buttons>\n\n        <ion-title>Perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!--\n  Generated template for the AjustesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n<ion-content style=\'background-color:  #f7f8f9; \' >\n	<ion-list style=\'margin-bottom: 0px !important\' no-lines>\n        <ion-item style=\'      color: #444;  margin-top: 0px;\n    background-color: white !important;\n    padding: 10px;\' class=\'fixProfileMargin\'>\n          <ion-avatar item-start>\n\n          <img *ngIf="!imageFileName && editarData"  [hidden]=\'imageFileName\' style=\'width:75px; height: 75px\' src="http://50.116.17.150:3000/{{dataUser?.idFoto}}" \n        onError="this.src=\'assets/imgs/usuario.png\';" />\n\n\n            <img  (click)=\'getImages()\' *ngIf="!imageFileName && !editarData" [hidden]=\'imageFileName\' style=\'width:75px; height: 75px\' src="assets/imgs/editImage.png"   />\n\n        <img (click)=\'getImages()\' [src]="DomSanitizer.bypassSecurityTrustUrl(imageFileName)"  *ngIf="imageFileName" style=\'width:75px; height: 75px\' />\n\n          </ion-avatar>\n          <h2 style="margin-bottom: 1px;font-weight: 800">{{dataUser?.nombreEmpleado}}</h2>\n\n          <span style="display: block;    font-size: 15px;">{{dataUser?.descripcion}}</span>\n        </ion-item>\n\n\n\n</ion-list>\n          <ion-list  no-lines>\n<!-- \n\n\n          <button  class="claseItem"  ion-item  >\n          {{dataUser?.nombre || \'no especificado\'}}\n    \n          </button>       <button  class="claseItem"  ion-item  >\n          {{dataUser?.email || \'no especificado\'}}\n        \n          </button>\n          <button  class="claseItem"  ion-item  >\n          {{dataUser?.telefono || \'no especificado\'}}\n        \n          </button>\n\n          <button  class="claseItem"  ion-item  >\n          Genero: {{dataUser?.genero || \'no especificado\'}}\n        \n          </button>\n-->\n\n\n  <ion-item style=\'    border-bottom: solid 1px lightgray !important; background-color:  #f7f8f9;margin-top: 20px\'  >\n    <ion-label color="headerColor" stacked>Nombre</ion-label>\n    <ion-input  [ngClass]="{\'itemActi\':!editarData}"   [disabled]=\'editarData\' [(ngModel)]="dataUser.nombreEmpleado"  type="text" placeholder="nombre"></ion-input>\n  </ion-item>\n\n  <ion-item  style=\'  border-bottom: solid 1px lightgray !important; background-color:  #f7f8f9;margin-top: 20px\'>\n    <ion-label color="headerColor" stacked>Email</ion-label>\n    <ion-input  [disabled]=\'true\' [(ngModel)]="dataUser.email"  type="text" placeholder="correo electronico"></ion-input>\n  </ion-item>\n\n  <ion-item  style=\'  border-bottom: solid 1px lightgray !important; background-color:  #f7f8f9;margin-top: 20px\'>\n    <ion-label color="headerColor" stacked>Telefono</ion-label>\n    <ion-input  [ngClass]="{\'itemActi\':!editarData}"  [disabled]=\'editarData\' [(ngModel)]="dataUser.telefono"  type="tel" placeholder="telefono"></ion-input>\n  </ion-item>\n\n\n  <ion-item  style=\'  border-bottom: solid 1px lightgray !important; background-color:  #f7f8f9;margin-top: 20px\'>\n    <ion-label color="headerColor" stacked>Contraseña</ion-label>\n    <ion-input  [ngClass]="{\'itemActi\':!editarData}"  [disabled]=\'editarData\' [(ngModel)]="dataUser.password"  type="password" placeholder="********"></ion-input>\n  </ion-item>\n\n\n    \n\n<!-- <ion-item   style=\'    height: 75px;\'>\n  <ion-label class=\'headerColor\' style=\'    font-size: 1.2rem;\n    color: #EC527E;\n    opacity: 1; \' >Fecha Nacimiento</ion-label><br>\n <ion-datetime [disabled]=\'editarData\' [(ngModel)]="dataUser.fechaNacimiento" displayFormat="YYYY-MM-DD"  style=\'     position: absolute;\n    margin-top: 24px;\n    border: solid 2px lightgray;\n    padding: 0px 15px;\n    min-width: 50px;\' > </ion-datetime> \n\n</ion-item>\n -->\n\n\n\n\n          </ion-list>\n\n\n<!--\n              <div [hidden]=\'!editarData\'  style="width: 100%;\n    position: fixed;\n    bottom: 0px;\n    background: rgb(247,248,249);\n    padding-bottom: 6px;\n">\n          <button (click)=\'editarData=false\' ion-button class="botonVerdeFull">Actualizar informacion<ion-icon style=\'    margin-left: 10px !important;\' name="md-arrow-forward"></ion-icon> \n\n          </button>\n </div>\n\n <div  style="width: 100%;\n    position: fixed;\n    bottom: 0px;\n    background: rgb(247,248,249);\n    padding-bottom: 6px;\n" [hidden]=\'editarData\'>\n    \n\n    <button (click)=\'guardarCambios()\'  style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;float:left"  color=\'verdeApp\' ion-button> Guardar cambio</button> \n\n    <button (click)=\'cancelarEdicion()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" >Deshacer</button>\n\n\n</div> -->\n\n\n\n\n\n   \n\n\n\n\n\n</ion-content>\n\n<ion-footer  style=\'  background-color: #f7f8f9 !important; \'>\n \n\n<div [hidden]=\'editarData\'>\n    <button (click)=\'guardarCambios()\'  style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;float:left"  color=\'verderapp\'  ion-button> Guardar</button> \n\n    <button (click)=\'cancelarEdicion()\'  color=\'header\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" >Deshacer</button>\n    </div>\n    <div [hidden]=\'!editarData\'>\n      \n       <button (click)=\'editarData=false\' color=\'verderapp\' ion-button full>Actualizar información<ion-icon style=\'    margin-left: 10px !important;\' name="md-arrow-forward"></ion-icon> \n\n          </button>\n\n    </div>\n\n\n</ion-footer>\n'/*ion-inline-end:"D:\Work\beautyapp\empleadoApp\empleadoApp\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=3.js.map