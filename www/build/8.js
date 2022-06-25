webpackJsonp([8],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarUsuarioPageModule", function() { return CadastrarUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_usuario__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarUsuarioPageModule = /** @class */ (function () {
    function CadastrarUsuarioPageModule() {
    }
    CadastrarUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_usuario__["a" /* CadastrarUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_usuario__["a" /* CadastrarUsuarioPage */]),
            ],
        })
    ], CadastrarUsuarioPageModule);
    return CadastrarUsuarioPageModule;
}());

//# sourceMappingURL=cadastrar-usuario.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastrarUsuarioPage = /** @class */ (function () {
    function CadastrarUsuarioPage(navCtrl, navParams, usuarioProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.alertCtrl = alertCtrl;
        this.usuarios = { email: '', senha: '', nome: '' };
    }
    CadastrarUsuarioPage.prototype.ionViewDidLoad = function () {
    };
    CadastrarUsuarioPage.prototype.cadastrar = function () {
        var _this = this;
        var email = this.usuarios.email;
        var senha = this.usuarios.senha;
        this.usuarioProvider.CadastrarUsuario(email, senha).
            then(function (sucesso) {
            console.log(sucesso);
            var mensagem = 'Usuário cadastrado com sucesso';
            _this.navCtrl.pop();
            _this.showAlert(mensagem);
        }).catch(function (error) {
            console.log(error);
            var mensagem = 'Ocorreu um erro no cadastro';
            _this.showAlert(mensagem);
        });
    };
    CadastrarUsuarioPage.prototype.showAlert = function (mensagem) {
        var alert = this.alertCtrl.create({
            title: mensagem,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastrarUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar-usuario',template:/*ion-inline-start:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\cadastrar-usuario\cadastrar-usuario.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cadastro usuário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="usuarios.nomeUsuario"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="usuarios.email"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Senha</ion-label>\n      <ion-input type="password"[(ngModel)]="usuarios.senha"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n\n  <button ion-button color="primary" round (click)="cadastrar()">Cadastrar</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\breno\Downloads\projetos\ClinicasApp_Map\src\pages\cadastrar-usuario\cadastrar-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CadastrarUsuarioPage);
    return CadastrarUsuarioPage;
}());

//# sourceMappingURL=cadastrar-usuario.js.map

/***/ })

});
//# sourceMappingURL=8.js.map