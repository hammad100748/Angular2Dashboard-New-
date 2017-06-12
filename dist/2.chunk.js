webpackJsonpac__name_([2],{

/***/ "./src/app/landing/landing.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var Landing = (function () {
    function Landing(route) {
        this.route = route;
    }
    Landing.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector('#' + f);
            if (element) {
                element.scrollIntoView(element);
            }
        });
    };
    Landing.prototype.ngAfterViewInit = function () {
        jQuery('.back-to-top').on('click', function () {
            jQuery('html, body').animate({ scrollTop: 0 }, 'fast');
            return false;
        });
    };
    Landing = __decorate([
        core_1.Component({
            selector: 'landing',
            template: __webpack_require__("./src/app/landing/landing.template.html"),
            styles: [__webpack_require__("./src/app/landing/landing.style.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], Landing);
    return Landing;
    var _a;
}());
exports.Landing = Landing;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/landing/landing.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var landing_component_ts_1 = __webpack_require__("./src/app/landing/landing.component.ts");
exports.routes = [
    { path: '', component: landing_component_ts_1.Landing, pathMatch: 'full' }
];
var LandingModule = (function () {
    function LandingModule() {
    }
    LandingModule.routes = exports.routes;
    LandingModule = __decorate([
        core_1.NgModule({
            declarations: [
                landing_component_ts_1.Landing
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LandingModule);
    return LandingModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LandingModule;


/***/ },

/***/ "./src/app/landing/landing.style.scss":
/***/ function(module, exports) {

module.exports = "/***********************************/\n/**            LANDING            **/\n/***********************************/\n.landing {\n  padding-bottom: 40px; }\n  .landing .page-header {\n    margin-left: 0;\n    margin-right: 0; }\n  .landing .navbar {\n    padding: 0; }\n  .landing .navbar-menu > li > a {\n    line-height: 40px;\n    padding: 0 10px;\n    width: auto;\n    font-size: 1.25rem; }\n  .landing .navbar-buttons {\n    margin-right: 20px; }\n    .landing .navbar-buttons > li {\n      float: left; }\n      .landing .navbar-buttons > li > a {\n        margin: 7px 10px; }\n  .landing .logo {\n    position: static;\n    margin: 0; }\n  .landing .content {\n    padding: 25px 0; }\n  .landing .lead {\n    font-weight: normal; }\n  .landing .btn {\n    font-weight: normal; }\n    .landing .btn + .btn {\n      margin-left: 10px; }\n  .landing .widget p {\n    font-size: 1.1rem; }\n  .landing .widget-about {\n    margin-top: 60px;\n    padding: 20px; }\n    .landing .widget-about h2, .landing .widget-about h4 {\n      margin-top: 0;\n      font-weight: bold; }\n    .landing .widget-about .preview {\n      margin: 40px 0; }\n    .landing .widget-about .btn {\n      color: white; }\n  .landing .img-about {\n    margin-top: 8px; }\n  .landing .features {\n    margin-top: 60px; }\n  .landing .feature {\n    text-align: center; }\n    .landing .feature .icon {\n      display: inline-block;\n      height: 60px;\n      width: 60px;\n      font-size: 40px;\n      line-height: 60px;\n      vertical-align: middle;\n      border-radius: 50%; }\n      .landing .feature .icon > i {\n        color: #ffffff; }\n  .landing .thanks {\n    margin-top: 60px; }\n  .landing .back-to-top {\n    color: #f8f8f8; }\n\n.widget-white {\n  background: #ffffff;\n  color: #666;\n  box-shadow: 0 -1px 1px rgba(103, 103, 103, 0.4), 0 1px 1px rgba(103, 103, 103, 0.4); }\n  .widget-white * {\n    color: #666; }\n\n.carousel-landing {\n  height: 450px;\n  overflow: hidden; }\n  .carousel-landing img {\n    max-width: 100%; }\n  .carousel-landing h1 {\n    font-size: 45px;\n    line-height: 1.1; }\n  .carousel-landing .carousel-item > .row > *:first-child {\n    text-align: right; }\n  .carousel-landing .slide-one-header {\n    margin-top: 80px; }\n  .carousel-landing .slide-two-header {\n    margin-bottom: 40px; }\n  .carousel-landing .slide-three-header {\n    margin-top: 100px;\n    margin-bottom: 20px; }\n  .carousel-landing .btn-version-preview {\n    margin-top: 20px; }\n\n@media (min-width: 576px) and (max-width: 991px) {\n  .carousel-landing .btn-version-preview {\n    display: none; } }\n\n.carousel-fade .carousel-inner > .carousel-item {\n  transition: opacity .2s ease-in-out; }\n\n.carousel-fade .carousel-inner > .next,\n.carousel-fade .carousel-inner > .prev {\n  left: auto; }\n\n.carousel-fade .carousel-inner > .next.left,\n.carousel-fade .carousel-inner > .prev.right {\n  opacity: 1;\n  left: auto; }\n\n.carousel-fade .carousel-inner > .active.left,\n.carousel-fade .carousel-inner > .active.right,\n.carousel-fade .carousel-inner > .next,\n.carousel-fade .carousel-inner > .prev {\n  opacity: 0;\n  left: auto; }\n\n.carousel-control-landing {\n  opacity: 1;\n  width: 2%;\n  text-shadow: 0 0 8px rgba(255, 255, 255, 0.6); }\n  @media (min-width: 768px) {\n    .carousel-control-landing .icon-prev,\n    .carousel-control-landing .icon-next {\n      font-size: 50px; } }\n  .carousel-control-landing.left {\n    background: none; }\n  .carousel-control-landing.right {\n    background: none; }\n\n@media (max-width: 767px) {\n  .landing .container {\n    width: auto; }\n  .landing .logo {\n    width: auto; }\n    .landing .logo small {\n      display: none; }\n  .landing .features + .features {\n    margin-top: 0; }\n  .landing .feature {\n    margin-bottom: 20px; } }\n"

/***/ },

/***/ "./src/app/landing/landing.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"landing\" id=\"landing-top\">\n  <div class=\"container\">\n    <header class=\"page-header\">\n      <div class=\"navbar\">\n        <div class=\"logo float-xs-left\">\n          <h4><a href=\"index.html\">Light <strong>Blue</strong></a> <small>bootstrap 4 template</small></h4>\n        </div>\n        <ul class=\"nav navbar-nav float-xs-right navbar-menu hidden-sm-down\">\n          <li class=\"active\">\n            <a href=\"#\">\n              Home\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/landing']\" fragment=\"about\" (click)=\"onAnchorClick()\">\n              About\n            </a>\n          </li>\n        </ul>\n        <ul class=\"navbar-buttons float-xs-right\">\n          <li>\n            <a href=\"index.html\" class=\"btn btn-sm btn-transparent\">\n              Preview&nbsp;\n              <i class=\"fa fa-arrow-right\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://wrapbootstrap.com/theme/light-blue-responsive-admin-template-WB0T41TX4\"\n               class=\"btn btn-sm btn-transparent\">\n              Download&nbsp;\n              <i class=\"fa fa-download\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </header>\n    <div class=\"content\">\n      <div id=\"carousel-landing\" class=\"carousel slide carousel-landing carousel-fade\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carousel-landing\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carousel-landing\" data-slide-to=\"1\" class=\"\"></li>\n          <li data-target=\"#carousel-landing\" data-slide-to=\"2\" class=\"\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <div class=\"row\">\n              <div class=\"col-xs-6\">\n                <div class=\"animated fadeInLeftBig\">\n                  <h1 class=\"slide-one-header\"><strong>Light Blue</strong> <br>Dashboard Template</h1>\n                  <p class=\"lead hidden-sm-down\">\n                    World <strong>First</strong> Transparent Dashboard\n                  </p>\n                  <p>\n                    <a href=\"index.html\" class=\"btn btn-lg btn-white\">\n                      Preview &nbsp; <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                    <a href=\"https://wrapbootstrap.com/theme/light-blue-responsive-admin-template-WB0T41TX4\"\n                       class=\"btn btn-lg btn-transparent\">\n                      Purchase &nbsp; <i class=\"fa fa-shopping-cart\"></i>\n                    </a>\n                  </p>\n                </div>\n              </div>\n              <div class=\"col-xs-6\">\n                <div class=\"text-xs-center animated fadeInRightBig\">\n                  <img src=\"assets/img/jpeg/light-blue-preview-1.png\" alt=\"Second slide\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <h1 class=\"slide-two-header text-xs-center animated fadeInDown mt-1\">\n              <strong>Transparent</strong> & <strong>White</strong>\n              Versions\n            </h1>\n            <div class=\"row\">\n              <div class=\"col-xs-6\">\n                <div class=\"animated fadeInLeftBig\">\n                  <p>\n                    <a href=\"index.html\">\n                      <img src=\"assets/img/jpeg/light-blue-laptop-transparent.png\" alt=\"\"/>\n                    </a>\n                  </p>\n                  <p class=\"text-xs-center\">\n                    <a href=\"index.html\" class=\"btn btn-transparent btn-lg btn-version-preview\">\n                      Preview &nbsp; <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                  </p>\n                </div>\n              </div>\n              <div class=\"col-xs-6\">\n                <div class=\"animated fadeInRightBig\">\n                  <p>\n                    <a href=\"../white/index.html\">\n                      <img src=\"assets/img/jpeg/light-blue-laptop-white.png\" alt=\"\"/>\n                    </a>\n                  </p>\n                  <p class=\"text-xs-center\">\n                    <a href=\"../white/index.html\" class=\"btn btn-white btn-lg btn-version-preview\">\n                      Preview &nbsp; <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div class=\"row\">\n              <div class=\"col-xs-6\">\n                <div class=\"animated fadeInLeft\">\n                  <h1 class=\"slide-three-header\">\n                    <strong>Fully</strong>\n                    <br>\n                    Responsive\n                  </h1>\n                  <p>\n                    <a href=\"http://www.responsinator.com/?url=demo.flatlogic.com%2F3.0\" class=\"btn btn-white btn-lg\" target=\"_blank\">\n                      Test It\n                    </a>\n                  </p>\n                </div>\n              </div>\n              <div class=\"col-xs-6\">\n                <p class=\"animated fadeInUp\" style=\"margin-top: 20px\">\n                  <img src=\"assets/img/jpeg/light-blue-phone.png\" alt=\"\"/>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <a class=\"left carousel-control carousel-control-landing\" href=\"#carousel-landing\" data-slide=\"prev\">\n          <span class=\"icon-prev\"></span>\n        </a>\n        <a class=\"right carousel-control carousel-control-landing\" href=\"#carousel-landing\" data-slide=\"next\">\n          <span class=\"icon-next\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div id=\"about\" class=\"widget widget-white widget-about\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"offset-md-1 col-md-10\">\n          <h2><strong>About Light Blue</strong></h2>\n          <p>\n            <strong>Light Blue</strong> - is a next generation dashboard template. Flat design and transparency - the\n            design that the world haven't seen before Light Blue.\n          </p>\n          <div class=\"row features\">\n            <div class=\"col-md-4\">\n              <section class=\"feature\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4\">\n                    <p>\n                      <span class=\"icon background-danger\">\n                        <i class=\"fa fa-bold\"></i>\n                      </span>\n                    </p>\n                  </div>\n                  <div class=\"col-xs-8\">\n                    <h4>Bootstrap 4</h4>\n                    <p>\n                      Light Blue comes with built-in Bootstrap 4 support.\n                      Easy to design your next web app.\n                    </p>\n                  </div>\n                </div>\n              </section>\n            </div>\n            <div class=\"col-md-4\">\n              <section class=\"feature\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4\">\n                    <p>\n                      <span class=\"icon background-warning\">\n                        <i class=\"fa fa-magic\"></i>\n                      </span>\n                    </p>\n                  </div>\n                  <div class=\"col-xs-8\">\n                    <h4>Unique design</h4>\n                    <p>\n                      Transparent widgets and gradient background - have you seen something like this\n                      before?\n                    </p>\n                  </div>\n                </div>\n              </section>\n            </div>\n            <div class=\"col-md-4\">\n              <section class=\"feature\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4\">\n                    <p>\n                      <span class=\"icon background-success\">\n                        <i class=\"fa fa-wrench\"></i>\n                      </span>\n                    </p>\n                  </div>\n                  <div class=\"col-xs-8\">\n                    <h4>Developer-friendly</h4>\n                    <p>\n                      Simple, intuitive and easily maintainable code.\n                    </p>\n                  </div>\n                </div>\n              </section>\n            </div>\n          </div>\n          <div class=\"row features\">\n            <div class=\"col-md-4\">\n              <section class=\"feature\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4\">\n                    <p>\n                      <span class=\"icon background-primary\">\n                        <i class=\"fa fa-superscript\"></i>\n                      </span>\n                    </p>\n                  </div>\n                  <div class=\"col-xs-8\">\n                    <h4>White & Transparent</h4>\n                    <p>\n                      Two styles each having two background options.\n                    </p>\n                  </div>\n                </div>\n              </section>\n            </div>\n            <div class=\"col-md-4\">\n              <section class=\"feature\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4\">\n                    <p>\n                      <span class=\"icon background-lime\">\n                        <i class=\"fa fa-check\"></i>\n                      </span>\n                    </p>\n                  </div>\n                  <div class=\"col-xs-8\">\n                    <h4>Web applications</h4>\n                    <p>\n                      LB itself is a web app. Plus there is an Email -\n                      ready-to-use Backbone application.\n                    </p>\n                  </div>\n                </div>\n              </section>\n            </div>\n            <div class=\"col-md-4\">\n              <section class=\"feature\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4\">\n                    <p>\n                      <span class=\"icon background-info\">\n                        <i class=\"fa fa-css3\"></i>\n                      </span>\n                    </p>\n                  </div>\n                  <div class=\"col-xs-8\">\n                    <h4>Sass-powered</h4>\n                    <p>\n                      Variables, mixins, includes - things that\n                      make Light Blue really easy to customize.\n                    </p>\n                  </div>\n                </div>\n              </section>\n            </div>\n          </div>\n        </div>\n      </div>\n      <p class=\"preview text-xs-center\">\n        <a href=\"../white/index.html\" class=\"btn btn-lg btn-danger\">\n          &nbsp; Preview the White Version &nbsp;\n        </a>\n      </p>\n    </div>\n  </div>\n  <h2 class=\"thanks text-xs-center\">Thanks for watching!</h2>\n  <p class=\"lead text-xs-center\"><a href=\"#\" class=\"back-to-top\"> back to top <i class=\"fa fa-angle-up\"></i></a></p>\n</div>\n"

/***/ }

});
//# sourceMappingURL=2.map