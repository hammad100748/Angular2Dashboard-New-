webpackJsonpac__name_([1],{

/***/ "./src/app/login/login.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var user_service_1 = __webpack_require__("./src/app/Services/UserServices/user.service.ts");
var Login = (function () {
    function Login(_user, router) {
        this._user = _user;
        this.router = router;
    }
    Login.prototype.login = function (user) {
        console.log(user);
        if (user.name == "Padleys" && user.password == "S3cure123!") {
            this.router.navigate(['app/dashboard']);
        }
        // this._user.loginUser(user)
        //   .subscribe(
        //     user => {
        //       // Emit list event
        //       this.router.navigate(['app/dashboard']);
        //     },
        //     err => {
        //       // Log errors if any
        //       console.log(err);
        //     });
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            styles: [__webpack_require__("./src/app/login/login.style.scss")],
            template: __webpack_require__("./src/app/login/login.template.html"),
            host: {
                class: 'login-page app'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof user_service_1.UserService !== 'undefined' && user_service_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], Login);
    return Login;
    var _a, _b;
}());
exports.Login = Login;


/***/ },

/***/ "./src/app/login/login.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
exports.routes = [
    { path: '', component: login_component_1.Login, pathMatch: 'full' }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule.routes = exports.routes;
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.Login
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginModule;


/***/ },

/***/ "./src/app/login/login.style.scss":
/***/ function(module, exports) {

module.exports = "/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.single-widget-container {\n  left: 0;\n  top: 50%;\n  margin-top: -192.5px;\n  position: absolute;\n  width: 100%; }\n  .single-widget-container .widget {\n    margin: 0 auto; }\n\n.login-widget, .registration-widget {\n  width: 350px;\n  padding-bottom: 0; }\n  .login-widget header, .registration-widget header {\n    margin: 15px 0 25px 0; }\n  .login-widget .form-control, .registration-widget .form-control {\n    font-size: 1rem; }\n  .login-widget .input-group-addon, .registration-widget .input-group-addon {\n    padding: 6px 7px; }\n    .login-widget .input-group-addon i, .registration-widget .input-group-addon i {\n      font-size: 1rem;\n      vertical-align: sub; }\n      .login-widget .input-group-addon i, .login-widget .input-group-addon i:before, .login-widget .input-group-addon i:after, .registration-widget .input-group-addon i, .registration-widget .input-group-addon i:before, .registration-widget .input-group-addon i:after {\n        width: 20px;\n        margin: 0; }\n  .login-widget .form-actions, .registration-widget .form-actions {\n    margin: 0 -17px;\n    padding: 20px 15px 0 15px; }\n    .login-widget .form-actions .small-circle, .registration-widget .form-actions .small-circle {\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      line-height: 20px;\n      border-radius: 50%;\n      background: rgba(0, 0, 0, 0.2); }\n      .login-widget .form-actions .small-circle i, .registration-widget .form-actions .small-circle i {\n        position: relative;\n        left: 1px; }\n    .login-widget .form-actions .forgot, .registration-widget .form-actions .forgot {\n      display: block;\n      text-align: center;\n      color: white;\n      padding: 15px 0; }\n  .login-widget footer, .registration-widget footer {\n    margin: 0 -17px;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n    overflow: hidden;\n    position: static; }\n  .login-widget .facebook-login, .registration-widget .facebook-login {\n    height: 30px;\n    background: #4e91ce;\n    text-align: center;\n    padding-top: 10px; }\n    .login-widget .facebook-login a, .registration-widget .facebook-login a {\n      color: #ffffff;\n      display: block;\n      text-shadow: none;\n      text-decoration: none; }\n"

/***/ },

/***/ "./src/app/login/login.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"single-widget-container\">\n  <section widget class=\"widget login-widget\">\n    <header class=\"text-xs-center\">\n      <h4>Login to your account</h4>\n    </header>\n    <div class=\"widget-body\">\n\n      <form class=\"no-margin\"\n            #form=\"ngForm\" (submit)=\"login(form.value)\">\n\n        <fieldset class=\"login-form\">\n          <div class=\"form-group\">\n            <label for=\"name\" >Username</label>\n            <div class=\"input-group input-group-lg\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-user\"></i>\n              </span>\n              <input id=\"name\" type=\"text\" class=\"form-control input-lg input-transparent\"\n                     placeholder=\"Your Username\" name=\"name\" ngModel>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\" >Password</label>\n\n            <div class=\"input-group input-group-lg\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-lock\"></i>\n              </span>\n              <input id=\"password\" type=\"password\" class=\"form-control input-lg input-transparent\"\n                     placeholder=\"Your Password\" name=\"password\" ngModel>\n            </div>\n          </div>\n        </fieldset>\n        <div class=\"form-actions\">\n          <button type=\"submit\" class=\"btn btn-lg btn-block btn-danger\">\n            <span class=\"small-circle\"><i class=\"fa fa-caret-right\"></i></span>\n            <small>Sign In</small>\n          </button>\n          <a class=\"forgot\" href=\"#\">Forgot Username or Password?</a>\n        </div>\n      </form>\n    </div>\n    <footer>\n      <div class=\"facebook-login\">\n        <a routerLink=\"/app/dashboard\"><span><i class=\"fa fa-facebook-square fa-lg\"></i> LogIn with Facebook</span></a>\n      </div>\n    </footer>\n  </section>\n</div>\n"

/***/ }

});
//# sourceMappingURL=1.map