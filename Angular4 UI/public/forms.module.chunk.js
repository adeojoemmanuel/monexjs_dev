webpackJsonp(["forms.module"],{

/***/ "../../../../../src/app/pages/forms/form-inputs/form-inputs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Default Inputs</nb-card-header>\n      <nb-card-body>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Project\" class=\"form-control\"/>\n        </div>\n        <div class=\"row full-name-inputs\">\n          <div class=\"col-sm-6 input-group\">\n            <input type=\"text\" placeholder=\"Nick\" class=\"form-control\"/>\n          </div>\n          <div class=\"col-sm-6 input-group\">\n            <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\"/>\n          </div>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\"/>\n        </div>\n        <div class=\"input-group has-person-icon\">\n          <input type=\"text\" placeholder=\"With Icon\" class=\"form-control\"/>\n        </div>\n        <div class=\"input-group input-group-rounded\">\n          <input type=\"text\" placeholder=\"Rounded border\" class=\"form-control\"/>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Project\" class=\"form-control\"/>\n          <small class=\"form-text\">A block of help text that breaks into a new line and may extend beyond one line.\n          </small>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Disabled input\" class=\"form-control\" disabled/>\n        </div>\n        <div class=\"input-group\">\n          <textarea rows=\"5\" placeholder=\"Text Area\" class=\"form-control\"></textarea>\n        </div>\n        <div class=\"input-group input-group-sm\">\n          <input type=\"text\" placeholder=\"Small Input\" class=\"form-control\"/>\n        </div>\n        <div class=\"input-group input-group-lg\">\n          <input type=\"text\" placeholder=\"Large Input\" class=\"form-control\"/>\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Input Groups</nb-card-header>\n      <nb-card-body>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon success\">@</span>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\"/>\n        </div>\n        <div class=\"input-group mail-btn-group\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-primary btn-icon\">\n              <i class=\"ion-ios-email-outline\"></i>\n            </button>\n          </span>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-primary\">\n              @example.com\n            </button>\n          </span>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-danger\">\n              Search\n            </button>\n          </span>\n        </div>\n        <div class=\"input-group\">\n          <div class=\"dropdown input-group-btn\" ngbDropdown>\n            <button type=\"button\" class=\"btn btn-success dropdown-toggle\" ngbDropdownToggle>\n              Action\n            </button>\n            <ul class=\"dropdown-menu\" ngbDropdownMenu>\n              <li class=\"dropdown-item\">Action</li>\n              <li class=\"dropdown-item\">Another action</li>\n              <li class=\"dropdown-item\">Something else here</li>\n              <div role=\"separator\" class=\"dropdown-divider\"></div>\n              <li class=\"dropdown-item\">Separated link</li>\n            </ul>\n          </div>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Selects</nb-card-header>\n      <nb-card-body>\n        <div class=\"form-group\">\n          <label>Simple Select</label>\n          <select class=\"form-control\">\n            <option>Minsk</option>\n            <option>Gomel</option>\n            <option>Brest</option>\n            <option>Grodno</option>\n            <option>Mogilev</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Multiple Select</label>\n          <select multiple class=\"form-control\">\n            <option>Item 1</option>\n            <option>Item 2</option>\n            <option>Item 3</option>\n            <option>Item 4</option>\n            <option>Item 5</option>\n          </select>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Input Styles</nb-card-header>\n      <nb-card-body>\n        <div class=\"input-group input-group-border-only\">\n          <input type=\"text\" placeholder=\"Border Only\" class=\"form-control\"/>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Default Input\" class=\"form-control\">\n        </div>\n        <div class=\"input-group input-group-fill-only\">\n          <input type=\"text\" placeholder=\"Fill Only\" class=\"form-control\">\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Validation States</nb-card-header>\n      <nb-card-body>\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Input with Success\" class=\"form-control form-control-success\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Input with Warning\" class=\"form-control form-control-warning\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Input with Danger\" class=\"form-control form-control-danger\">\n        </div>\n        <div class=\"form-group validation-checkboxes row\">\n          <nb-checkbox status=\"success\" class=\"col-sm-4\">Checkbox with Success</nb-checkbox>\n          <nb-checkbox status=\"warning\" class=\"col-sm-4\">Checkbox with Warning</nb-checkbox>\n          <nb-checkbox status=\"danger\" class=\"col-sm-4\">Checkbox with Danger</nb-checkbox>\n        </div>\n        <div class=\"form-group has-success\">\n          <input type=\"text\" placeholder=\"Input with Success Icon\" class=\"form-control form-control-success\">\n        </div>\n        <div class=\"form-group has-warning\">\n          <input type=\"text\" placeholder=\"Input with Warning Icon\" class=\"form-control form-control-warning\">\n        </div>\n        <div class=\"form-group has-danger\">\n          <input type=\"text\" placeholder=\"Input with Danger Icon\" class=\"form-control form-control-danger\">\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Checkboxes & Radios</nb-card-header>\n      <nb-card-body>\n        <div class=\"row demo-checkboxes-radio\">\n          <div class=\"demo-checkboxes col-sm-4\">\n            <nb-checkbox>Checkbox 1</nb-checkbox>\n            <nb-checkbox [value]=\"true\">Checkbox 2</nb-checkbox>\n            <label class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">Bootstrap Checkbox</span>\n            </label>\n          </div>\n          <div class=\"demo-radio col-sm-4\">\n            <label class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">Radio 1</span>\n            </label>\n            <label class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\" checked>\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">Radio 2</span>\n            </label>\n            <label class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">Radio 3</span>\n            </label>\n          </div>\n          <div class=\"demo-disabled-checkbox-radio col-sm-4\">\n            <nb-checkbox disabled>Disabled Checkbox</nb-checkbox>\n            <label class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" disabled>\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">Disabled Radio</span>\n            </label>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-body class=\"demo-rating\">\n        <span class=\"rating-header\">Rating</span>\n        <div>\n          <ngb-rating [(rate)]=\"starRate\" max=5>\n            <ng-template let-fill=\"fill\">\n              <span class=\"star fill\" [class.filled]=\"fill === 100\">\n                <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\n                <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\n              </span>\n            </ng-template>\n          </ngb-rating>\n          <span class=\"current-rate\">{{ starRate }}</span>\n        </div>\n        <div>\n          <ngb-rating [(rate)]=\"heartRate\" max=5>\n            <ng-template let-fill=\"fill\">\n              <span class=\"star fill\" [class.filled]=\"fill === 100\">\n                <i class=\"ion-ios-heart\" *ngIf=\"fill === 100\"></i>\n                <i class=\"ion-ios-heart-outline\" *ngIf=\"fill !== 100\"></i>\n              </span>\n            </ng-template>\n          </ngb-rating>\n          <span class=\"current-rate\">{{ heartRate }}</span>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-inputs/form-inputs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #40dc7e; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-inputs/form-inputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormInputsComponent = (function () {
    function FormInputsComponent() {
        this.starRate = 2;
        this.heartRate = 4;
    }
    return FormInputsComponent;
}());
FormInputsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-form-inputs',
        styles: [__webpack_require__("../../../../../src/app/pages/forms/form-inputs/form-inputs.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/forms/form-inputs/form-inputs.component.html"),
    })
], FormInputsComponent);

//# sourceMappingURL=form-inputs.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-layouts/form-layouts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card class=\"inline-form-card\">\n      <nb-card-header>Inline form</nb-card-header>\n      <nb-card-body>\n        <form class=\"form-inline\">\n          <input type=\"text\" class=\"form-control full-width\" placeholder=\"Jane Doe\">\n          <div class=\"input-group full-width\">\n            <div class=\"input-group-addon\">@</div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n          </div>\n          <nb-checkbox>Remember me</nb-checkbox>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>Using the Grid</nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"form-group row\">\n            <label for=\"inputEmail1\" class=\"col-sm-3 col-form-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail1\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword2\" class=\"col-sm-3 col-form-label\">Password</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3\">Radios</label>\n            <div class=\"col-sm-9\">\n              <div class=\"form-check\">\n                <label class=\"custom-control custom-radio\">\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\" checked>\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">Option one is this and that&mdash;be sure to include why it's great</span>\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"custom-control custom-radio\">\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\">\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">Option two can be something else and selecting it will deselect option one</span>\n                </label>\n              </div>\n              <div class=\"form-check disabled\">\n                <label class=\"custom-control custom-radio\">\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\" disabled>\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">Option three is disabled</span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"offset-sm-3 col-sm-9\">\n              <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Form without labels</nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Send</button>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>Basic form</nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n          </div>\n          <div class=\"form-group\">\n            <nb-checkbox>Check me out</nb-checkbox>\n          </div>\n          <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\n        </form>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Block form</nb-card-header>\n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputFirstName\">First Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputLastName\">Last Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputEmail\">Email</label>\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputWebsite\">Website</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputWebsite\" placeholder=\"Website\">\n            </div>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>Horizontal form</nb-card-header>\n      <nb-card-body>\n        <form class=\"form-horizontal\">\n          <div class=\"form-group row\">\n            <label for=\"inputEmail3\" class=\"col-sm-3 form-control-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword3\" class=\"col-sm-3 form-control-label\">Password</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div class=\"checkbox\">\n                <nb-checkbox>Remember me</nb-checkbox>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"offset-sm-3 col-sm-9\">\n              <button type=\"submit\" class=\"btn btn-warning\">Sign in</button>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-layouts/form-layouts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forms/form-layouts/form-layouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayoutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormLayoutsComponent = (function () {
    function FormLayoutsComponent() {
    }
    return FormLayoutsComponent;
}());
FormLayoutsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-form-layouts',
        styles: [__webpack_require__("../../../../../src/app/pages/forms/form-layouts/form-layouts.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/forms/form-layouts/form-layouts.component.html"),
    })
], FormLayoutsComponent);

//# sourceMappingURL=form-layouts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/forms-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_component__ = __webpack_require__("../../../../../src/app/pages/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_inputs_form_inputs_component__ = __webpack_require__("../../../../../src/app/pages/forms/form-inputs/form-inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_layouts_form_layouts_component__ = __webpack_require__("../../../../../src/app/pages/forms/form-layouts/form-layouts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormsComponent */],
        children: [{
                path: 'inputs',
                component: __WEBPACK_IMPORTED_MODULE_3__form_inputs_form_inputs_component__["a" /* FormInputsComponent */],
            }, {
                path: 'layouts',
                component: __WEBPACK_IMPORTED_MODULE_4__form_layouts_form_layouts_component__["a" /* FormLayoutsComponent */],
            }],
    }];
var FormsRoutingModule = (function () {
    function FormsRoutingModule() {
    }
    return FormsRoutingModule;
}());
FormsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
        ],
    })
], FormsRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__form_inputs_form_inputs_component__["a" /* FormInputsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__form_layouts_form_layouts_component__["a" /* FormLayoutsComponent */],
];
//# sourceMappingURL=forms-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormsComponent = (function () {
    function FormsComponent() {
    }
    return FormsComponent;
}());
FormsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-form-elements',
        template: "\n    <router-outlet></router-outlet>\n  ",
    })
], FormsComponent);

//# sourceMappingURL=forms.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_routing_module__ = __webpack_require__("../../../../../src/app/pages/forms/forms-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_2__forms_routing_module__["a" /* FormsRoutingModule */],
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_2__forms_routing_module__["b" /* routedComponents */].slice(),
    })
], FormsModule);

//# sourceMappingURL=forms.module.js.map

/***/ })

});
//# sourceMappingURL=forms.module.chunk.js.map