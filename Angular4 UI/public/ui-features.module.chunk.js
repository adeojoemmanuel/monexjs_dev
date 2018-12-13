webpackJsonp(["ui-features.module"],{

/***/ "../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-body>\n    <div class=\"action-groups-header\">\n      Action Groups\n    </div>\n    <nb-actions size=\"medium\">\n      <nb-action icon=\"nb-menu\"></nb-action>\n      <nb-action icon=\"nb-search\"></nb-action>\n      <nb-action icon=\"nb-email\"></nb-action>\n      <nb-action disabled icon=\"nb-notifications\"></nb-action>\n      <nb-action>\n        <nb-user name=\"Han Solo\"></nb-user>\n      </nb-action>\n      <nb-action icon=\"nb-gear\"></nb-action>\n    </nb-actions>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-default) .action-groups-header {\n  -ms-flex-preferred-size: 20%;\n      flex-basis: 20%;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600; }\n\n:host-context(.nb-theme-default) .nb-actions {\n  -ms-flex-preferred-size: 80%;\n      flex-basis: 80%; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-card-body {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    padding: 0.75rem; }\n    :host-context(.nb-theme-default) nb-card-body .action-groups-header {\n      margin: 0 0 0.5rem 0.25rem; }\n  :host-context(.nb-theme-default) nb-action {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-default) nb-action /deep/ .control-icon {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-default) nb-user /deep/ .user-container {\n    font-size: 0.875rem; }\n  :host-context(.nb-theme-default) nb-user /deep/ .user-picture {\n    height: 1.75rem;\n    width: 1.75rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) nb-action {\n    padding: 0 0.375rem; }\n    :host-context(.nb-theme-default) nb-action /deep/ .control-icon {\n      font-size: 1.5rem; }\n  :host-context(.nb-theme-default) nb-user /deep/ .user-container {\n    font-size: 0.75rem; }\n  :host-context(.nb-theme-default) nb-user /deep/ .user-picture {\n    height: 1.5rem;\n    width: 1.5rem; }\n  :host-context(.nb-theme-default) nb-card-body {\n    padding-left: 0;\n    padding-right: 0; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-cosmic) .action-groups-header {\n  -ms-flex-preferred-size: 20%;\n      flex-basis: 20%;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) .nb-actions {\n  -ms-flex-preferred-size: 80%;\n      flex-basis: 80%; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    padding: 0.75rem; }\n    :host-context(.nb-theme-cosmic) nb-card-body .action-groups-header {\n      margin: 0 0 0.5rem 0.25rem; }\n  :host-context(.nb-theme-cosmic) nb-action {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-cosmic) nb-action /deep/ .control-icon {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-container {\n    font-size: 0.875rem; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-picture {\n    height: 1.75rem;\n    width: 1.75rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) nb-action {\n    padding: 0 0.375rem; }\n    :host-context(.nb-theme-cosmic) nb-action /deep/ .control-icon {\n      font-size: 1.5rem; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-container {\n    font-size: 0.75rem; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-picture {\n    height: 1.5rem;\n    width: 1.5rem; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    padding-left: 0;\n    padding-right: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActionGroupsComponent = (function () {
    function ActionGroupsComponent() {
    }
    return ActionGroupsComponent;
}());
ActionGroupsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-action-groups',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.html"),
    })
], ActionGroupsComponent);

//# sourceMappingURL=action-groups.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Block Level Buttons</nb-card-header>\n  <nb-card-body>\n    <div class=\"row block-level-buttons\">\n      <div class=\"col-md-12\">\n        <div class=\"btn-group btn-group-full-width\" role=\"group\">\n          <button type=\"button\" class=\"btn btn-primary btn-group-icon btn-group-divider btn-fixed\">\n            <i class=\"nb-home\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\">Icon Block Button</button>\n        </div>\n        <button type=\"button\" class=\"btn btn-outline-primary btn-block\">Block Button</button>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockLevelButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlockLevelButtonsComponent = (function () {
    function BlockLevelButtonsComponent() {
    }
    return BlockLevelButtonsComponent;
}());
BlockLevelButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-block-level-buttons',
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.html"),
    })
], BlockLevelButtonsComponent);

//# sourceMappingURL=block-level-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Button Groups</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"example-container toggle-types\">\n          <div class=\"container-title\">Toggle Types</div>\n          <div [(ngModel)]=\"radioModel\" ngbRadioGroup\n               class=\"btn-group btn-toggle-group btn-outline-toggle-group btn-group-full-width btn-toggle-radio-group\">\n            <label ngbButtonLabel class=\"btn btn-outline-primary\">\n              <input ngbButton type=\"radio\" value=\"left\"> Left\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-primary\">\n              <input ngbButton type=\"radio\" value=\"middle\"> Middle\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-primary\">\n              <input ngbButton type=\"radio\" value=\"right\"> Right\n            </label>\n          </div>\n          <div class=\"btn-group btn-toggle-group btn-group-full-width\" data-toggle=\"buttons\">\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"checkboxModel.left\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"checkboxModel.left\"> Left\n            </label>\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"checkboxModel.middle\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"checkboxModel.middle\"> Middle\n            </label>\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"checkboxModel.right\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"checkboxModel.right\"> Right\n            </label>\n          </div>\n        </div>\n        <div class=\"example-container toolbars-container\">\n          <div class=\"pagination-container\">\n            <div class=\"container-title\">Pagination</div>\n            <div class=\"btn-group btn-toggle-group btn-outline-toggle-group\" data-toggle=\"buttons\"\n                 [(ngModel)]=\"paginationModel\" ngbRadioGroup>\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\n                <input ngbButton type=\"radio\" [value]=\"1\"> 1\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\n                <input ngbButton type=\"radio\" [value]=\"2\"> 2\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\n                <input ngbButton type=\"radio\" [value]=\"3\"> 3\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\n                <input ngbButton type=\"radio\" [value]=\"4\"> 4\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\n                <input ngbButton type=\"radio\" [value]=\"5\"> 5\n              </label>\n            </div>\n          </div>\n\n          <div class=\"icon-toolbar-container\">\n            <div class=\"container-title\">Icon Toolbar</div>\n            <div class=\"btn-group btn-toggle-group\" data-toggle=\"buttons\">\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.one\">\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.one\"> 1\n              </label>\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.two\">\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.two\"> 2\n              </label>\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.three\">\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.three\"> 3\n              </label>\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.four\">\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.four\"> 4\n              </label>\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.five\">\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.five\"> 5\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div class=\"container-title divided-button-group\">Divided Button Group</div>\n          <div class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width btn-divided-checkbox-group \"\n            data-toggle=\"buttons\">\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.monday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.monday\"> <i\n              class=\"nb-arrow-thin-down\"></i>\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.tuesday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.tuesday\"> <i\n              class=\"nb-arrow-thin-up\"></i>\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.wednesday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.wednesday\"> <i class=\"nb-arrow-thin-left\"></i>\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.thursday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.thursday\"> <i\n              class=\"nb-arrow-thin-right\"></i>\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.friday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.friday\"> <i class=\"nb-arrow-left\"></i>\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.saturday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.saturday\"> <i\n              class=\"nb-arrow-right\"></i>\n            </label>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div class=\"container-title\">Divided Button Group</div>\n          <div class=\"row\">\n            <div [(ngModel)]=\"dividedButtonGroupOne\" ngbRadioGroup\n                 class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width col-md-12\">\n              <label ngbButtonLabel class=\"btn btn-outline-primary\">\n                <input ngbButton type=\"radio\" value=\"left\"> Left\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-primary\">\n                <input ngbButton type=\"radio\" value=\"middle\"> Middle\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-primary\">\n                <input ngbButton type=\"radio\" value=\"right\"> Right\n              </label>\n            </div>\n          </div>\n          <div class=\"btn-group btn-divided-group btn-group-full-width\" data-toggle=\"buttons\">\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"dividedButtonGroupTwo.left\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedButtonGroupTwo.left\"> Left\n            </label>\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"dividedButtonGroupTwo.middle\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedButtonGroupTwo.middle\"> Middle\n            </label>\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"dividedButtonGroupTwo.right\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedButtonGroupTwo.right\"> Right\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .toolbars-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-default) .pagination-container {\n  margin-right: 1rem; }\n  :host-context(.nb-theme-default) .pagination-container .btn-group > .btn {\n    padding-left: 1.125rem;\n    padding-right: 1.125rem; }\n\n:host-context(.nb-theme-default) .icon-toolbar-container .btn-group > .btn {\n  padding-left: 1.125rem;\n  padding-right: 1.125rem; }\n\n:host-context(.nb-theme-default) .toggle-types .btn-toggle-radio-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .divided-button-group .btn-divided-checkbox-group {\n  margin-bottom: 1rem;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .example-container:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-default) .example-container > div:not(:last-child) {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .example-container > .btn-divided-checkbox-group {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  :host-context(.nb-theme-default) .example-container > .btn-divided-checkbox-group > label {\n    -ms-flex-preferred-size: 10%;\n        flex-basis: 10%;\n    margin: 0 0.25rem 0.5rem 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) .btn {\n    padding: 0.75rem 0.7rem; } }\n\n:host-context(.nb-theme-cosmic) .toolbars-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-cosmic) .pagination-container {\n  margin-right: 1rem; }\n  :host-context(.nb-theme-cosmic) .pagination-container .btn-group > .btn {\n    padding-left: 1.125rem;\n    padding-right: 1.125rem; }\n\n:host-context(.nb-theme-cosmic) .icon-toolbar-container .btn-group > .btn {\n  padding-left: 1.125rem;\n  padding-right: 1.125rem; }\n\n:host-context(.nb-theme-cosmic) .toggle-types .btn-toggle-radio-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .divided-button-group .btn-divided-checkbox-group {\n  margin-bottom: 1rem;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .example-container:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) .example-container > div:not(:last-child) {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .example-container > .btn-divided-checkbox-group {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  :host-context(.nb-theme-cosmic) .example-container > .btn-divided-checkbox-group > label {\n    -ms-flex-preferred-size: 10%;\n        flex-basis: 10%;\n    margin: 0 0.25rem 0.5rem 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) .btn {\n    padding: 0.75rem 0.7rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonGroupsComponent = (function () {
    function ButtonGroupsComponent() {
        this.radioModel = 'left';
        this.checkboxModel = {
            left: false,
            middle: false,
            right: false,
        };
        this.dividedCheckboxModel = {
            monday: true,
            tuesday: true,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
        };
        this.paginationModel = 1;
        this.iconToolbarModel = {
            one: false,
            two: false,
            three: true,
            four: false,
            five: false,
        };
        this.dividedButtonGroupOne = 'left';
        this.dividedButtonGroupTwo = {
            left: false,
            middle: false,
            right: false,
        };
    }
    return ButtonGroupsComponent;
}());
ButtonGroupsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-button-groups',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.html"),
    })
], ButtonGroupsComponent);

//# sourceMappingURL=button-groups.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <ngx-hero-buttons></ngx-hero-buttons>\n  </div>\n  <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n    <ngx-shape-buttons></ngx-shape-buttons>\n    <ngx-action-groups></ngx-action-groups>\n    <ngx-labeled-actions-group></ngx-labeled-actions-group>\n\n    <div class=\"row\">\n      <div class=\"col-lg-5\">\n        <ngx-dropdown-buttons></ngx-dropdown-buttons>\n        <ngx-icon-buttons></ngx-icon-buttons>\n      </div>\n      <div class=\"col-lg-7\">\n        <ngx-button-groups></ngx-button-groups>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n    <ngx-size-buttons></ngx-size-buttons>\n    <ngx-default-buttons></ngx-default-buttons>\n    <ngx-block-level-buttons></ngx-block-level-buttons>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) /deep/ .container-title {\n  color: #a4abb3;\n  font-family: Exo;\n  margin-bottom: 0.5rem; }\n\n:host-context(.nb-theme-default) /deep/ .header {\n  font-size: 0.875rem; }\n\n:host-context(.nb-theme-default) /deep/ .subheader {\n  font-size: 0.75rem;\n  font-weight: 300;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) /deep/ .btn-demo {\n  width: 180px; }\n\n:host-context(.nb-theme-default) /deep/ .state-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) /deep/ .state-container:not(:last-child) {\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-default) /deep/ .state-container .state-value {\n    width: 50px;\n    height: 50px;\n    border-radius: 0.375rem; }\n  :host-context(.nb-theme-default) /deep/ .state-container .state-details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-left: 1rem;\n    height: 50px; }\n\n:host-context(.nb-theme-default) /deep/ .example-container {\n  padding-right: 0; }\n\n:host-context(.nb-theme-default) /deep/ .example-container .container-btn {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-default) /deep/ .block-level-buttons .btn-group {\n  margin-bottom: 1rem; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) ngx-default-buttons /deep/ nb-card-header {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: left;\n        -ms-flex-align: left;\n            align-items: left; }\n    :host-context(.nb-theme-default) ngx-default-buttons /deep/ nb-card-header span {\n      margin-bottom: 1rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) /deep/.icon-buttons .icon-button-examples button {\n    margin-right: 1rem; }\n  :host-context(.nb-theme-default) ngx-default-buttons /deep/ nb-card-header {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-bottom: 0.5rem; }\n  :host-context(.nb-theme-default) ngx-block-level-buttons /deep/ .btn-primary {\n    padding: 0.75rem 1rem; } }\n\n:host-context(.nb-theme-cosmic) /deep/ .container-title {\n  color: #a1a1e5;\n  font-family: Exo;\n  margin-bottom: 0.5rem; }\n\n:host-context(.nb-theme-cosmic) /deep/ .header {\n  font-size: 0.875rem; }\n\n:host-context(.nb-theme-cosmic) /deep/ .subheader {\n  font-size: 0.75rem;\n  font-weight: 300;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) /deep/ .btn-demo {\n  width: 180px; }\n\n:host-context(.nb-theme-cosmic) /deep/ .state-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) /deep/ .state-container:not(:last-child) {\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-cosmic) /deep/ .state-container .state-value {\n    width: 50px;\n    height: 50px;\n    border-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) /deep/ .state-container .state-details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-left: 1rem;\n    height: 50px; }\n\n:host-context(.nb-theme-cosmic) /deep/ .example-container {\n  padding-right: 0; }\n\n:host-context(.nb-theme-cosmic) /deep/ .example-container .container-btn {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) /deep/ .block-level-buttons .btn-group {\n  margin-bottom: 1rem; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) ngx-default-buttons /deep/ nb-card-header {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: left;\n        -ms-flex-align: left;\n            align-items: left; }\n    :host-context(.nb-theme-cosmic) ngx-default-buttons /deep/ nb-card-header span {\n      margin-bottom: 1rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) /deep/.icon-buttons .icon-button-examples button {\n    margin-right: 1rem; }\n  :host-context(.nb-theme-cosmic) ngx-default-buttons /deep/ nb-card-header {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-bottom: 0.5rem; }\n  :host-context(.nb-theme-cosmic) ngx-block-level-buttons /deep/ .btn-primary {\n    padding: 0.75rem 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = (function () {
    function ButtonsComponent() {
    }
    return ButtonsComponent;
}());
ButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-buttons',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/buttons.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/buttons.component.html"),
    })
], ButtonsComponent);

//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/buttons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_buttons_default_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_buttons_hero_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shape_buttons_shape_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__size_buttons_size_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__action_groups_action_groups_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dropdown_buttons_dropdown_button_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__block_level_buttons_block_level_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__button_groups_button_groups_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__icon_buttons_icon_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__labeled_actions_group_labeled_actions_group_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var components = [
    __WEBPACK_IMPORTED_MODULE_6__buttons_component__["a" /* ButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_2__default_buttons_default_buttons_component__["a" /* DefaultButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__hero_buttons_hero_buttons_component__["a" /* HeroButtonComponent */],
    __WEBPACK_IMPORTED_MODULE_4__shape_buttons_shape_buttons_component__["a" /* ShapeButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_5__size_buttons_size_buttons_component__["a" /* SizeButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__action_groups_action_groups_component__["a" /* ActionGroupsComponent */],
    __WEBPACK_IMPORTED_MODULE_8__dropdown_buttons_dropdown_button_component__["a" /* DropdownButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_9__block_level_buttons_block_level_buttons_component__["a" /* BlockLevelButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_10__button_groups_button_groups_component__["a" /* ButtonGroupsComponent */],
    __WEBPACK_IMPORTED_MODULE_11__icon_buttons_icon_buttons_component__["a" /* IconButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_12__labeled_actions_group_labeled_actions_group_component__["a" /* LabeledActionsGroupComponent */],
];
var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    return ButtonsModule;
}());
ButtonsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
        ],
        exports: components.slice(),
        declarations: components.slice(),
        providers: [],
    })
], ButtonsModule);

//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    <span>Default Buttons</span>\n    <div class=\"dropdown\" ngbDropdown>\n      <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\n        {{ selectedView.title }}\n      </button>\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\n        <li class=\"dropdown-item\" *ngFor=\"let v of buttonsViews\" (click)=\"this.selectedView = v\">{{ v.title }}</li>\n      </ul>\n    </div>\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"example-container col-md-4\" *ngFor=\"let b of buttons[selectedView.key]\">\n        <div class=\"container-title\">\n          <span>{{ b.containerTitle }}</span>\n        </div>\n        <div class=\"container-btn\">\n          <button class=\"btn {{ b.class }} btn-demo\">{{ b.title }}</button>\n        </div>\n        <div class=\"{{ b.container }}\">\n          <div class=\"state-container\">\n            <div class=\"state-value original\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Default</span>\n              <span class=\"subheader\">{{ b.default }}</span>\n            </div>\n          </div>\n          <div class=\"state-container\">\n            <div class=\"state-value hover\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Hover</span>\n              <span class=\"subheader\">14% white</span>\n            </div>\n          </div>\n          <div class=\"state-container\">\n            <div class=\"state-value active\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Active</span>\n              <span class=\"subheader\">14% black</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) nb-card-header .dropdown {\n    -ms-flex-preferred-size: 30%;\n        flex-basis: 30%;\n    min-width: 220px; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-default) .example-container {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-default) .primary-container .original {\n  background-color: #8a7fff; }\n\n:host-context(.nb-theme-default) .primary-container .hover:hover, :host-context(.nb-theme-default) .primary-container .hover.hover {\n  color: #ffffff;\n  background-color: #9a91ff;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .primary-container .active:active, :host-context(.nb-theme-default) .primary-container .active.active {\n  color: #ffffff;\n  background-color: #776ddb;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .primary-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #8a7fff; }\n\n:host-context(.nb-theme-default) .success-container .original {\n  background-color: #40dc7e; }\n\n:host-context(.nb-theme-default) .success-container .hover:hover, :host-context(.nb-theme-default) .success-container .hover.hover {\n  color: #ffffff;\n  background-color: #5be190;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .success-container .active:active, :host-context(.nb-theme-default) .success-container .active.active {\n  color: #ffffff;\n  background-color: #37bd6c;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .success-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #40dc7e; }\n\n:host-context(.nb-theme-default) .warning-container .original {\n  background-color: #ffa100; }\n\n:host-context(.nb-theme-default) .warning-container .hover:hover, :host-context(.nb-theme-default) .warning-container .hover.hover {\n  color: #ffffff;\n  background-color: #ffae24;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .warning-container .active:active, :host-context(.nb-theme-default) .warning-container .active.active {\n  color: #ffffff;\n  background-color: #db8a00;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .warning-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #ffa100; }\n\n:host-context(.nb-theme-default) .info-container .original {\n  background-color: #4ca6ff; }\n\n:host-context(.nb-theme-default) .info-container .hover:hover, :host-context(.nb-theme-default) .info-container .hover.hover {\n  color: #ffffff;\n  background-color: #65b2ff;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .info-container .active:active, :host-context(.nb-theme-default) .info-container .active.active {\n  color: #ffffff;\n  background-color: #418fdb;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .info-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #4ca6ff; }\n\n:host-context(.nb-theme-default) .danger-container .original {\n  background-color: #ff4c6a; }\n\n:host-context(.nb-theme-default) .danger-container .hover:hover, :host-context(.nb-theme-default) .danger-container .hover.hover {\n  color: #ffffff;\n  background-color: #ff657f;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .danger-container .active:active, :host-context(.nb-theme-default) .danger-container .active.active {\n  color: #ffffff;\n  background-color: #db415b;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .danger-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #ff4c6a; }\n\n:host-context(.nb-theme-default) .secondary-container .original {\n  border: 2px solid #dadfe6; }\n\n:host-context(.nb-theme-default) .secondary-container .hover:hover, :host-context(.nb-theme-default) .secondary-container .hover.hover {\n  color: #ffffff;\n  background-color: #dfe3ea;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .secondary-container .active:active, :host-context(.nb-theme-default) .secondary-container .active.active {\n  color: #ffffff;\n  background-color: #bbc0c6;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .secondary-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #dadfe6; }\n\n:host-context(.nb-theme-cosmic) nb-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) nb-card-header .dropdown {\n    -ms-flex-preferred-size: 30%;\n        flex-basis: 30%;\n    min-width: 220px; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-cosmic) .example-container {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) .primary-container .original {\n  background-color: #7659ff; }\n\n:host-context(.nb-theme-cosmic) .primary-container .hover:hover, :host-context(.nb-theme-cosmic) .primary-container .hover.hover {\n  color: #ffffff;\n  background-color: #8970ff;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .primary-container .active:active, :host-context(.nb-theme-cosmic) .primary-container .active.active {\n  color: #ffffff;\n  background-color: #654ddb;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .primary-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #7659ff; }\n\n:host-context(.nb-theme-cosmic) .success-container .original {\n  background-color: #00d977; }\n\n:host-context(.nb-theme-cosmic) .success-container .hover:hover, :host-context(.nb-theme-cosmic) .success-container .hover.hover {\n  color: #ffffff;\n  background-color: #24de8a;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .success-container .active:active, :host-context(.nb-theme-cosmic) .success-container .active.active {\n  color: #ffffff;\n  background-color: #00bb66;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .success-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #00d977; }\n\n:host-context(.nb-theme-cosmic) .warning-container .original {\n  background-color: #ffa100; }\n\n:host-context(.nb-theme-cosmic) .warning-container .hover:hover, :host-context(.nb-theme-cosmic) .warning-container .hover.hover {\n  color: #ffffff;\n  background-color: #ffae24;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .warning-container .active:active, :host-context(.nb-theme-cosmic) .warning-container .active.active {\n  color: #ffffff;\n  background-color: #db8a00;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .warning-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #ffa100; }\n\n:host-context(.nb-theme-cosmic) .info-container .original {\n  background-color: #0088ff; }\n\n:host-context(.nb-theme-cosmic) .info-container .hover:hover, :host-context(.nb-theme-cosmic) .info-container .hover.hover {\n  color: #ffffff;\n  background-color: #2499ff;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .info-container .active:active, :host-context(.nb-theme-cosmic) .info-container .active.active {\n  color: #ffffff;\n  background-color: #0075db;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .info-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #0088ff; }\n\n:host-context(.nb-theme-cosmic) .danger-container .original {\n  background-color: #ff386a; }\n\n:host-context(.nb-theme-cosmic) .danger-container .hover:hover, :host-context(.nb-theme-cosmic) .danger-container .hover.hover {\n  color: #ffffff;\n  background-color: #ff547f;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .danger-container .active:active, :host-context(.nb-theme-cosmic) .danger-container .active.active {\n  color: #ffffff;\n  background-color: #db305b;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .danger-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #ff386a; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .original {\n  border: 2px solid #7659ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .hover:hover, :host-context(.nb-theme-cosmic) .secondary-container .hover.hover {\n  color: #ffffff;\n  background-color: #8970ff;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .active:active, :host-context(.nb-theme-cosmic) .secondary-container .active.active {\n  color: #ffffff;\n  background-color: #654ddb;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .secondary-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #7659ff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DefaultButtonsComponent = (function () {
    function DefaultButtonsComponent() {
        this.buttonsViews = [{
                title: 'Default Buttons',
                key: 'default',
            }, {
                title: 'Outline Buttons',
                key: 'outline',
            }];
        this.selectedView = this.buttonsViews[0];
        this.buttons = {
            'default': [
                {
                    class: 'btn-primary',
                    container: 'primary-container',
                    containerTitle: 'Primary Button',
                    title: 'Primary',
                    default: '#7659ff',
                }, {
                    class: 'btn-warning',
                    container: 'warning-container',
                    containerTitle: 'Warning Button',
                    title: 'Warning',
                    default: '#ffcb17',
                }, {
                    class: 'btn-success',
                    container: 'success-container',
                    containerTitle: 'Success Button',
                    title: 'Success',
                    default: '#00d977',
                }, {
                    class: 'btn-info',
                    container: 'info-container',
                    containerTitle: 'Info Button',
                    title: 'Info',
                    default: '#0088ff',
                }, {
                    class: 'btn-danger',
                    container: 'danger-container',
                    containerTitle: 'Danger Button',
                    title: 'Danger',
                    default: '#ff386a',
                }, {
                    class: 'btn-secondary',
                    container: 'secondary-container',
                    containerTitle: 'Default Button',
                    title: 'Default',
                    default: '#bdbaff',
                },
            ],
            'outline': [
                {
                    class: 'btn-outline-primary',
                    container: 'primary-container outline',
                    containerTitle: 'Primary Button',
                    title: 'Primary',
                    default: '#7659ff',
                }, {
                    class: 'btn-outline-warning',
                    container: 'warning-container outline',
                    containerTitle: 'Warning Button',
                    title: 'Warning',
                    default: '#ffcb17',
                }, {
                    class: 'btn-outline-success',
                    container: 'success-container outline',
                    containerTitle: 'Success Button',
                    title: 'Success',
                    default: '#00d977',
                }, {
                    class: 'btn-outline-info',
                    container: 'info-container',
                    containerTitle: 'Info Button',
                    title: 'Info',
                    default: '#0088ff',
                }, {
                    class: 'btn-outline-danger',
                    container: 'danger-container outline',
                    containerTitle: 'Danger Button',
                    title: 'Danger',
                    default: '#ff386a',
                }, {
                    class: 'btn-outline-secondary',
                    container: 'secondary-container outline',
                    containerTitle: 'Default Button',
                    title: 'Default',
                    default: '#bdbaff',
                },
            ],
        };
    }
    return DefaultButtonsComponent;
}());
DefaultButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-default-buttons',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.html"),
    })
], DefaultButtonsComponent);

//# sourceMappingURL=default-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Button Dropdowns</nb-card-header>\n  <nb-card-body>\n    <div class=\"dropdown btn-group\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-primary\">Dropdown</button>\n      <button type=\"button\" class=\"btn btn-primary\" ngbDropdownToggle></button>\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\n        <li class=\"dropdown-item\">Icon Button</li>\n        <li class=\"dropdown-item\">Hero Button</li>\n        <li class=\"dropdown-item\">Default</li>\n      </ul>\n    </div>\n    <div class=\"dropdown\" ngbDropdown>\n      <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\n        Dropdown\n      </button>\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\n        <li class=\"dropdown-item\">Icon Button</li>\n        <li class=\"dropdown-item\">Hero Button</li>\n        <li class=\"dropdown-item\">Default</li>\n      </ul>\n    </div>\n    <div class=\"dropdown\" placement=\"top\" ngbDropdown>\n      <button class=\"btn btn-outline-primary\" type=\"button\" ngbDropdownToggle>\n        Dropup\n      </button>\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\n        <li class=\"dropdown-item\">Icon Button</li>\n        <li class=\"dropdown-item\">Hero Button</li>\n        <li class=\"dropdown-item\">Default</li>\n      </ul>\n    </div>\n    <div class=\"dropdown ghost-dropdown\" ngbDropdown>\n      <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\n        Dropdown\n      </button>\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\n        <li class=\"dropdown-item\">Icon Button</li>\n        <li class=\"dropdown-item\">Hero Button</li>\n        <li class=\"dropdown-item\">Default</li>\n      </ul>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) {\n  text-align: center; }\n  :host-context(.nb-theme-default) .dropdown, :host-context(.nb-theme-default) .btn-group {\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-default) nb-card-body {\n    overflow: visible; }\n\n:host-context(.nb-theme-cosmic) {\n  text-align: center; }\n  :host-context(.nb-theme-cosmic) .dropdown, :host-context(.nb-theme-cosmic) .btn-group {\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    overflow: visible; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DropdownButtonsComponent = (function () {
    function DropdownButtonsComponent() {
    }
    return DropdownButtonsComponent;
}());
DropdownButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-dropdown-buttons',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.html"),
    })
], DropdownButtonsComponent);

//# sourceMappingURL=dropdown-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Hero Buttons</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"example-container col-sm-6 col-md-4 col-xl-3 col-xxxl-2\" *ngFor=\"let hb of settings\">\n        <div class=\"container-title\">\n          <span>{{ hb.title }}</span>\n        </div>\n        <div class=\"container-btn\">\n          <button class=\"btn {{ hb.class }} btn-demo\">{{ hb.buttonTitle }}</button>\n        </div>\n        <div class=\"{{ hb.container }}\">\n          <div class=\"state-container\" *ngIf=\"hb[themeName].border\">\n            <div class=\"state-value border\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Border</span>\n              <span class=\"subheader\">{{ hb[themeName].border }}</span>\n            </div>\n          </div>\n          <div class=\"state-container\" *ngIf=\"hb[themeName].gradientLeft\">\n            <div class=\"state-value gradient\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Linear Gradient</span>\n              <span class=\"subheader\">{{ hb[themeName].gradientLeft }}</span>\n              <span class=\"subheader\">{{ hb[themeName].gradientRight }}</span>\n            </div>\n          </div>\n          <div class=\"state-container\">\n            <div class=\"state-value bevel\" [ngClass]=\"{ 'none': !hb[themeName].bevel }\"></div>\n            <div class=\"state-details\" *ngIf=\"hb[themeName].bevel\">\n              <span class=\"header\">Bevel</span>\n              <span class=\"subheader\">0 3px 0 0</span>\n              <span class=\"subheader\">{{ hb[themeName].bevel }}</span>\n            </div>\n            <div class=\"state-details\" *ngIf=\"!hb[themeName].bevel\">\n              <span class=\"header\">No Bevel</span>\n            </div>\n          </div>\n          <div class=\"state-container\">\n            <div class=\"state-value shadow\" [ngClass]=\"{ 'none': !hb[themeName].shadow }\"></div>\n            <div class=\"state-details\" *ngIf=\"hb[themeName].shadow\">\n              <span class=\"header\">Shadow</span>\n              <span class=\"subheader\">0 4px 10px 0</span>\n              <span class=\"subheader\">{{ hb[themeName].shadow }}</span>\n            </div>\n            <div class=\"state-details\" *ngIf=\"!hb[themeName].shadow\">\n              <span class=\"header\">No Shadow</span>\n            </div>\n          </div>\n          <div class=\"state-container\">\n            <div class=\"state-value glow\" [ngClass]=\"{ 'none': !hb[themeName].glow }\"></div>\n            <div class=\"state-details\" *ngIf=\"hb[themeName].glow\">\n              <span class=\"header\">Glow</span>\n              <span class=\"subheader\">0 2px 12px 0</span>\n              <span class=\"subheader\">{{ hb[themeName].glow }}</span>\n            </div>\n            <div class=\"state-details\" *ngIf=\"!hb[themeName].glow\">\n              <span class=\"header\">No Glow</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-default) .none {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  :host-context(.nb-theme-default) .none::before, :host-context(.nb-theme-default) .none::after {\n    position: absolute;\n    content: '';\n    background: #dadfe6; }\n  :host-context(.nb-theme-default) .none::before {\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n  :host-context(.nb-theme-default) .none::after {\n    top: 50%;\n    left: 10%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n\n:host-context(.nb-theme-default) .shadow {\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .primary-container .gradient {\n  background-image: linear-gradient(to right, #b57fff, #8a7fff); }\n\n:host-context(.nb-theme-default) .primary-container .glow {\n  box-shadow: 0 0 0 0 #9f7fff; }\n\n:host-context(.nb-theme-default) .primary-container .bevel {\n  box-shadow: 0 0 0 0 #896ddb; }\n\n:host-context(.nb-theme-default) .warning-container .gradient {\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n\n:host-context(.nb-theme-default) .warning-container .glow {\n  box-shadow: 0 0 0 0 #ffb600; }\n\n:host-context(.nb-theme-default) .warning-container .bevel {\n  box-shadow: 0 0 0 0 #db9d00; }\n\n:host-context(.nb-theme-default) .success-container .gradient {\n  background-image: linear-gradient(to right, #40dcb2, #40dc7e); }\n\n:host-context(.nb-theme-default) .success-container .glow {\n  box-shadow: 0 0 0 0 #40dc98; }\n\n:host-context(.nb-theme-default) .success-container .bevel {\n  box-shadow: 0 0 0 0 #37bd83; }\n\n:host-context(.nb-theme-default) .info-container .gradient {\n  background-image: linear-gradient(to right, #4cc4ff, #4ca6ff); }\n\n:host-context(.nb-theme-default) .info-container .glow {\n  box-shadow: 0 0 0 0 #4cb5ff; }\n\n:host-context(.nb-theme-default) .info-container .bevel {\n  box-shadow: 0 0 0 0 #419cdb; }\n\n:host-context(.nb-theme-default) .danger-container .gradient {\n  background-image: linear-gradient(to right, #ff4ca6, #ff4c6a); }\n\n:host-context(.nb-theme-default) .danger-container .glow {\n  box-shadow: 0 0 0 0 #ff4c88; }\n\n:host-context(.nb-theme-default) .danger-container .bevel {\n  box-shadow: 0 0 0 0 #db4175; }\n\n:host-context(.nb-theme-default) .secondary-container .border {\n  border: 2px solid #dadfe6; }\n\n:host-context(.nb-theme-default) .secondary-container .glow {\n  box-shadow: 0 0 0 0 #dadde6; }\n\n:host-context(.nb-theme-default) .secondary-container .bevel {\n  box-shadow: 0 0 0 0 #bbbec6; }\n\n:host-context(.nb-theme-default) .example-container {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-cosmic) .none {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  :host-context(.nb-theme-cosmic) .none::before, :host-context(.nb-theme-cosmic) .none::after {\n    position: absolute;\n    content: '';\n    background: #342e73; }\n  :host-context(.nb-theme-cosmic) .none::before {\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n  :host-context(.nb-theme-cosmic) .none::after {\n    top: 50%;\n    left: 10%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n\n:host-context(.nb-theme-cosmic) .shadow {\n  box-shadow: 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n\n:host-context(.nb-theme-cosmic) .primary-container .gradient {\n  background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n\n:host-context(.nb-theme-cosmic) .primary-container .glow {\n  box-shadow: 0 2px 8px 0 #9259ff; }\n\n:host-context(.nb-theme-cosmic) .primary-container .bevel {\n  box-shadow: 0 3px 0 0 #7e4ddb; }\n\n:host-context(.nb-theme-cosmic) .warning-container .gradient {\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n\n:host-context(.nb-theme-cosmic) .warning-container .glow {\n  box-shadow: 0 2px 8px 0 #ffb600; }\n\n:host-context(.nb-theme-cosmic) .warning-container .bevel {\n  box-shadow: 0 3px 0 0 #db9d00; }\n\n:host-context(.nb-theme-cosmic) .success-container .gradient {\n  background-image: linear-gradient(to right, #00d9bf, #00d977); }\n\n:host-context(.nb-theme-cosmic) .success-container .glow {\n  box-shadow: 0 2px 8px 0 #00d99b; }\n\n:host-context(.nb-theme-cosmic) .success-container .bevel {\n  box-shadow: 0 3px 0 0 #00bb85; }\n\n:host-context(.nb-theme-cosmic) .info-container .gradient {\n  background-image: linear-gradient(to right, #00b3ff, #0088ff); }\n\n:host-context(.nb-theme-cosmic) .info-container .glow {\n  box-shadow: 0 2px 8px 0 #009dff; }\n\n:host-context(.nb-theme-cosmic) .info-container .bevel {\n  box-shadow: 0 3px 0 0 #0087db; }\n\n:host-context(.nb-theme-cosmic) .danger-container .gradient {\n  background-image: linear-gradient(to right, #ff38ac, #ff386a); }\n\n:host-context(.nb-theme-cosmic) .danger-container .glow {\n  box-shadow: 0 2px 8px 0 #ff388b; }\n\n:host-context(.nb-theme-cosmic) .danger-container .bevel {\n  box-shadow: 0 3px 0 0 #db3078; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .border {\n  border: 2px solid #7659ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .glow {\n  box-shadow: 0 2px 8px 0 #9259ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .bevel {\n  box-shadow: 0 3px 0 0 #7e4ddb; }\n\n:host-context(.nb-theme-cosmic) .example-container {\n  margin-bottom: 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroButtonComponent = (function () {
    function HeroButtonComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.themeName = 'default';
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
        });
    }
    HeroButtonComponent.prototype.init = function (colors) {
        this.settings = [{
                class: 'btn-hero-primary',
                container: 'primary-container',
                title: 'Primary Button',
                buttonTitle: 'Primary',
                default: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            }, {
                class: 'btn-hero-warning',
                container: 'warning-container',
                title: 'Warning Button',
                buttonTitle: 'Warning',
                default: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.warning + ", 5deg)",
                },
            }, {
                class: 'btn-hero-success',
                container: 'success-container',
                title: 'Success Button',
                buttonTitle: 'Success',
                default: {
                    gradientLeft: "adjust-hue(" + colors.success + ", 20deg)",
                    gradientRight: colors.success,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.success + ", 20deg)",
                    gradientRight: colors.success,
                    bevel: "shade(" + colors.success + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.success + ", 10deg)",
                },
            }, {
                class: 'btn-hero-info',
                container: 'info-container',
                title: 'Info Button',
                buttonTitle: 'Info',
                default: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                    bevel: "shade(" + colors.info + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.info + ", -5deg)",
                },
            }, {
                class: 'btn-hero-danger',
                container: 'danger-container',
                title: 'Danger Button',
                buttonTitle: 'Danger',
                default: {
                    gradientLeft: "adjust-hue(" + colors.danger + ", -20deg)",
                    gradientRight: colors.danger,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.danger + ", -20deg)",
                    gradientRight: colors.danger,
                    bevel: "shade(" + colors.danger + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.danger + ", -10deg)",
                },
            }, {
                class: 'btn-hero-secondary',
                container: 'secondary-container',
                title: 'Ghost Button',
                buttonTitle: 'Ghost',
                default: {
                    border: '#dadfe6',
                },
                cosmic: {
                    border: colors.primary,
                    bevel: '#665ebd',
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: 'rgba (146, 141, 255, 1)',
                },
            }];
    };
    HeroButtonComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return HeroButtonComponent;
}());
HeroButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-hero-buttons',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], HeroButtonComponent);

var _a;
//# sourceMappingURL=hero-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Icon buttons</nb-card-header>\n  <nb-card-body>\n    <div class=\"row icon-buttons\">\n      <div class=\"col-md-12\">\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-primary btn-group-icon btn-group-divider\">\n            <i class=\"nb-home\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\">Icon Button</button>\n        </div>\n        <div class=\"btn-with-icon-example\">\n          <button type=\"button\" class=\"btn btn-primary btn-with-icon\">\n            <i class=\"nb-home\"></i>\n            <span>Icon Button</span>\n          </button>\n        </div>\n        <div class=\"icon-button-examples\">\n          <button type=\"button\" class=\"btn btn-outline-primary btn-icon\">\n            <i class=\"nb-layout-centre\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-success btn-icon\">\n            <i class=\"nb-layout-default\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-danger btn-icon\">\n            <i class=\"nb-layout-one-column\"></i>\n          </button>\n        </div>\n        <div class=\"icon-button-examples\">\n          <button type=\"button\" class=\"btn btn-primary btn-icon\">\n            <i class=\"nb-shuffle\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-success btn-icon\">\n            <i class=\"nb-skip-backward-outline\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-danger btn-icon\">\n            <i class=\"nb-skip-forward-outline\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nb-card-body div:not(:last-child) {\n  margin-bottom: 1rem; }\n\n.btn-with-icon-example {\n  width: 100%; }\n  .btn-with-icon-example .btn {\n    width: 100%; }\n\n.btn-group:not(:last-child) {\n  margin-bottom: 1rem; }\n\n.icon-button-examples {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .icon-button-examples button {\n    margin-right: 2rem;\n    min-width: 4rem; }\n\n.icon-button-examples:not(:last-child) {\n  margin-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconButtonsComponent = (function () {
    function IconButtonsComponent() {
    }
    return IconButtonsComponent;
}());
IconButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-icon-buttons',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.html"),
    })
], IconButtonsComponent);

//# sourceMappingURL=icon-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-body>\n    <nb-actions size=\"medium\" fullWidth>\n      <nb-action>\n        <i class=\"nb-pause-outline\"></i><span>Pause</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-list\"></i><span>Logs</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-search\"></i><span>Search</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-gear\"></i><span>Setup</span>\n      </nb-action>\n    </nb-actions>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-actions > nb-action {\n  padding: 0; }\n\n:host-context(.nb-theme-default) nb-action i {\n  color: #a4abb3;\n  font-size: 2.5rem;\n  margin-right: 1rem; }\n\n:host-context(.nb-theme-default) nb-action span {\n  font-family: Exo;\n  font-weight: 600;\n  color: #2a2a2a;\n  text-transform: uppercase; }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-default) nb-actions nb-action {\n    padding: 0 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-card-body {\n    padding: 1rem; }\n  :host-context(.nb-theme-default) nb-action {\n    font-size: 0.75rem; }\n    :host-context(.nb-theme-default) nb-action i {\n      font-size: 2rem;\n      margin-right: 0.5rem; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) nb-action i {\n    font-size: 1.75rem;\n    margin: 0; }\n  :host-context(.nb-theme-default) span {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-actions > nb-action {\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) nb-action i {\n  color: #a1a1e5;\n  font-size: 2.5rem;\n  margin-right: 1rem; }\n\n:host-context(.nb-theme-cosmic) nb-action span {\n  font-family: Exo;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase; }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-cosmic) nb-actions nb-action {\n    padding: 0 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) nb-action {\n    font-size: 0.75rem; }\n    :host-context(.nb-theme-cosmic) nb-action i {\n      font-size: 2rem;\n      margin-right: 0.5rem; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) nb-action i {\n    font-size: 1.75rem;\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) span {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabeledActionsGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LabeledActionsGroupComponent = (function () {
    function LabeledActionsGroupComponent() {
    }
    return LabeledActionsGroupComponent;
}());
LabeledActionsGroupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-labeled-actions-group',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.html"),
    })
], LabeledActionsGroupComponent);

//# sourceMappingURL=labeled-actions-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Button Shapes</nb-card-header>\n  <nb-card-body>\n    <div class=\"shape-container\">\n      <div class=\"container-title\">\n        <span>Rectangle Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>Border radius:</span>\n        <span>4px</span>\n      </div>\n      <div>\n        <button class=\"btn btn-success btn-rectangle btn-demo\">Rectangle</button>\n      </div>\n    </div>\n\n    <div class=\"shape-container\">\n      <div class=\"container-title\">\n        <span>Semi-round Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>Border radius:</span>\n        <span>12px</span>\n      </div>\n      <div>\n        <button class=\"btn btn-success btn-semi-round btn-demo\">Semi-round</button>\n      </div>\n    </div>\n\n    <div class=\"shape-container\">\n      <div class=\"container-title\">\n        <span>Rounded Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>Border radius:</span>\n        <span>round</span>\n      </div>\n      <div>\n        <button class=\"btn btn-success btn-round btn-demo\">Round</button>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  padding: 0 0 29px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .shape-container {\n  margin: 1.25rem 1.25rem 0; }\n\n:host-context(.nb-theme-default) .container-title {\n  margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-default) .subheader {\n  margin-bottom: 1rem;\n  font-size: 0.875rem; }\n  :host-context(.nb-theme-default) .subheader span:nth-child(2) {\n    color: #2a2a2a;\n    font-weight: 600; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding: 0 0 29px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .shape-container {\n  margin: 1.25rem 1.25rem 0; }\n\n:host-context(.nb-theme-cosmic) .container-title {\n  margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .subheader {\n  margin-bottom: 1rem;\n  font-size: 0.875rem; }\n  :host-context(.nb-theme-cosmic) .subheader span:nth-child(2) {\n    color: #ffffff;\n    font-weight: 600; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShapeButtonsComponent = (function () {
    function ShapeButtonsComponent() {
    }
    return ShapeButtonsComponent;
}());
ShapeButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-shape-buttons',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.html"),
    })
], ShapeButtonsComponent);

//# sourceMappingURL=shape-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Button Sizes</nb-card-header>\n\n  <nb-card-body>\n    <div class=\"size-container\">\n      <div class=\"container-title\">\n        <span>Large Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>0.875rem 1.75rem</span>\n      </div>\n      <div>\n        <button class=\"btn btn-primary btn-lg\">Large Button</button>\n      </div>\n    </div>\n    <div class=\"size-container\">\n      <div class=\"container-title\">\n        <span>Medium Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>0.75rem 1.5rem</span>\n      </div>\n      <div>\n        <button class=\"btn btn-primary btn-md\">Medium Button</button>\n      </div>\n    </div>\n    <div class=\"size-container\">\n      <div class=\"container-title\">\n        <span>Small Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>0.675rem 1.5rem</span>\n      </div>\n      <div>\n        <button class=\"btn btn-primary btn-sm\">Small Button</button>\n      </div>\n    </div>\n    <div class=\"size-container\">\n      <div class=\"container-title\">\n        <span>Tiny Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>0.5rem 1.25rem</span>\n      </div>\n      <div>\n        <button class=\"btn btn-primary btn-tn\">Tiny</button>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  padding: 0 1.25rem 1.25rem 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .container-title {\n  margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-default) .size-container {\n  margin: 1.25rem 0 0 1.25rem; }\n\n:host-context(.nb-theme-default) .subheader {\n  margin-bottom: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding: 0 1.25rem 1.25rem 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .container-title {\n  margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .size-container {\n  margin: 1.25rem 0 0 1.25rem; }\n\n:host-context(.nb-theme-cosmic) .subheader {\n  margin-bottom: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #ffffff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizeButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SizeButtonsComponent = (function () {
    function SizeButtonsComponent() {
    }
    return SizeButtonsComponent;
}());
SizeButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-size-buttons',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.html"),
    })
], SizeButtonsComponent);

//# sourceMappingURL=size-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>\n        Grid System\n      </nb-card-header>\n      <nb-card-body>\n        <h5 class=\"grid-h\">Stacked to horizontal</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-8\">\n            <div>.col-md-8</div>\n          </div>\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-6\">\n            <div>.col-md-6</div>\n          </div>\n          <div class=\"col-md-6\">\n            <div>.col-md-6</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Mobile and desktop</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-12 col-md-8\">\n            <div>.col-12 .col-md-8</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>.col-6 .col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-6 col-md-4\">\n            <div>.col-6 .col-md-4</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>col-6 .col-md-4</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>.col-6 .col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-6\">\n            <div>.col-6</div>\n          </div>\n          <div class=\"col-6\">\n            <div>.col-6</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Mobile, tablet, desktop</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-12 col-sm-6 col-md-8\">\n            <div>.col-12 .col-sm-6 .col-md-8</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>.col-6 .col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-6 col-sm-4\">\n            <div>.col-6 .col-sm-4</div>\n          </div>\n          <div class=\"col-6 col-sm-4\">\n            <div>.col-6 .col-sm-4</div>\n          </div>\n          <div class=\"col-6 col-sm-4\">\n            <div>.col-6 .col-sm-4</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Column wrapping</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-9\">\n            <div>.col-9</div>\n          </div>\n          <div class=\"col-4\">\n            <div>.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div>.col-6<br>Subsequent columns continue along the new line.</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Responsive column resets</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3\n              <p>Resize your viewport or check it out on your phone for an example.</p>\n            </div>\n          </div>\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3</div>\n          </div>\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3</div>\n          </div>\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Offsetting columns</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n          <div class=\"col-md-4 offset-md-4\">\n            <div>.col-md-4 .offset-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-3 offset-md-3\">\n            <div>.col-md-3 .offset-md-3</div>\n          </div>\n          <div class=\"col-md-3 offset-md-3\">\n            <div>.col-md-3 .offset-md-3</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div>.col-md-6 .offset-md-3</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Grid options</h5>\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th></th>\n                <th> Extra small devices\n                  <small>Phones (&lt;576px)</small>\n                </th>\n                <th> Small devices\n                  <small>Tablets (≥576px)</small>\n                </th>\n                <th> Medium devices\n                  <small>Desktops (≥768px)</small>\n                </th>\n                <th> Large devices\n                  <small>Desktops (≥992px)</small>\n                </th>\n                <th> Large devices\n                  <small>Desktops (≥1200px)</small>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Grid behavior</th>\n                <td>Horizontal at all times</td>\n                <td colspan=\"4\">Collapsed to start, horizontal above breakpoints</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Container width</th>\n                <td>None (auto)</td>\n                <td>540px</td>\n                <td>720px</td>\n                <td>960px</td>\n                <td>1140px</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Class prefix</th>\n                <td><code>.col-</code></td>\n                <td><code>.col-sm-</code></td>\n                <td><code>.col-md-</code></td>\n                <td><code>.col-lg-</code></td>\n                <td><code>.col-xl-</code></td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\"># of columns</th>\n                <td colspan=\"5\">12</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Gutter width</th>\n                <td colspan=\"5\">1.875rem / 30px (15px on each side of a column)</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Nestable</th>\n                <td colspan=\"5\">Yes</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Offsets</th>\n                <td colspan=\"5\">Yes</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Column ordering</th>\n                <td colspan=\"5\">Yes</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/grid/grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .table-responsive {\n  margin-top: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridComponent = (function () {
    function GridComponent() {
    }
    return GridComponent;
}());
GridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-grid',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/grid/grid.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/grid/grid.component.html"),
    })
], GridComponent);

//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-6\">\n    <nb-card class=\"nb-icons\">\n      <nb-card-header>\n        Nebular\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"icon\" *ngFor=\"let icon of icons.nebular\"><i class=\"{{ icon }}\"></i></div>\n      </nb-card-body>\n      <nb-card-footer>\n        <a href=\"https://www.npmjs.com/package/nebular-icons\" target=\"_blank\">See all Nebular icons</a>\n      </nb-card-footer>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>\n        Font awesome icons\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"icon\" *ngFor=\"let icon of icons.fontAwesome\"><i class=\"fa {{ icon }}\"></i></div>\n      </nb-card-body>\n      <nb-card-footer>\n        <a href=\"http://fortawesome.github.io/Font-Awesome/icons/\" target=\"_blank\">\n          See all Font Awesome icons\n        </a>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-12 col-lg-6\">\n    <nb-card>\n      <nb-card-header>\n        Ionicons\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"icon\" *ngFor=\"let icon of icons.ionicons\"><i class=\"{{ icon }}\"></i></div>\n      </nb-card-body>\n      <nb-card-footer>\n        <a href=\"http://ionicons.com/\" target=\"_blank\">See all ionicons icons</a>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/icons/icons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon {\n  display: inline-block;\n  width: 4rem;\n  padding: 1.25rem 0;\n  text-align: center;\n  font-size: 1.25rem; }\n\n.nb-icons .icon {\n  padding: 0.75rem 0;\n  font-size: 1.75rem; }\n\nnb-card-body {\n  padding: 0; }\n\nnb-card-footer {\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = (function () {
    function IconsComponent() {
        this.icons = {
            nebular: ['nb-alert', 'nb-angle-double-left', 'nb-arrow-down', 'nb-arrow-dropdown', 'nb-arrow-dropleft',
                'nb-arrow-dropright', 'nb-arrow-dropup', 'nb-arrow-left', 'nb-arrow-retweet', 'nb-arrow-right',
                'nb-arrow-thin-down', 'nb-arrow-thin-left', 'nb-arrow-thin-right', 'nb-arrow-thin-up',
                'nb-arrow-up', 'nb-audio', 'nb-bar-chart', 'nb-chekmark', 'nb-chevron-down',
                'nb-chevron-down-outline', 'nb-chevron-left', 'nb-chevron-left-outline', 'nb-chevron-right',
                'nb-chevron-right-outline', 'nb-chevron-up', 'nb-chevron-up-outline', 'nb-close',
                'nb-close-circled', 'nb-cloudy', 'nb-coffee-maker', 'nb-compose', 'nb-edit', 'nb-email',
                'nb-flame-circled', 'nb-gear', 'nb-grid-a', 'nb-grid-a-outline', 'nb-grid-b', 'nb-grid-b-outline',
                'nb-heart', 'nb-home', 'nb-keypad', 'nb-layout-centre', 'nb-layout-default', 'nb-layout-one-column',
                'nb-layout-sidebar-left', 'nb-layout-sidebar-right', 'nb-layout-two-column', 'nb-lightbulb',
                'nb-list', 'nb-location', 'nb-locked', 'nb-loop', 'nb-loop-circled', 'nb-menu', 'nb-notifications',
                'nb-paper-plane', 'nb-partlysunny', 'nb-pause', 'nb-pause-outline', 'nb-person', 'nb-phone',
                'nb-play', 'nb-play-outline', 'nb-plus', 'nb-plus-circled', 'nb-power', 'nb-power-circled',
                'nb-rainy', 'nb-roller-shades', 'nb-search', 'nb-shuffle', 'nb-skip-backward',
                'nb-skip-backward-outline', 'nb-skip-forward', 'nb-skip-forward-outline', 'nb-snowy-circled',
                'nb-square', 'nb-square-outline', 'nb-star', 'nb-sunny', 'nb-sunny-circled', 'nb-tables', 'nb-title',
                'nb-trash', 'nb-volume-high', 'nb-volume-mute'],
            ionicons: [
                'ion-ionic', 'ion-arrow-right-b', 'ion-arrow-down-b', 'ion-arrow-left-b', 'ion-arrow-up-c', 'ion-arrow-right-c',
                'ion-arrow-down-c', 'ion-arrow-left-c', 'ion-arrow-return-right', 'ion-arrow-return-left', 'ion-arrow-swap',
                'ion-arrow-shrink', 'ion-arrow-expand', 'ion-arrow-move', 'ion-arrow-resize', 'ion-chevron-up',
                'ion-chevron-right', 'ion-chevron-down', 'ion-chevron-left', 'ion-navicon-round', 'ion-navicon',
                'ion-drag', 'ion-log-in', 'ion-log-out', 'ion-checkmark-round', 'ion-checkmark', 'ion-checkmark-circled',
                'ion-close-round', 'ion-plus-round', 'ion-minus-round', 'ion-information', 'ion-help',
                'ion-backspace-outline', 'ion-help-buoy', 'ion-asterisk', 'ion-alert', 'ion-alert-circled',
                'ion-refresh', 'ion-loop', 'ion-shuffle', 'ion-home', 'ion-search', 'ion-flag', 'ion-star',
                'ion-heart', 'ion-heart-broken', 'ion-gear-a', 'ion-gear-b', 'ion-toggle-filled', 'ion-toggle',
                'ion-settings', 'ion-wrench', 'ion-hammer', 'ion-edit', 'ion-trash-a', 'ion-trash-b',
                'ion-document', 'ion-document-text', 'ion-clipboard', 'ion-scissors', 'ion-funnel',
                'ion-bookmark', 'ion-email', 'ion-email-unread', 'ion-folder', 'ion-filing', 'ion-archive',
                'ion-reply', 'ion-reply-all', 'ion-forward',
            ],
            fontAwesome: [
                'fa fa-adjust', 'fa fa-anchor', 'fa fa-archive', 'fa fa-area-chart', 'fa fa-arrows', 'fa fa-arrows-h',
                'fa fa-arrows-v', 'fa fa-asterisk', 'fa fa-at', 'fa fa-automobile', 'fa fa-ban', 'fa fa-bank',
                'fa fa-bar-chart', 'fa fa-bar-chart-o', 'fa fa-barcode', 'fa fa-bars', 'fa fa-bed', 'fa fa-beer',
                'fa fa-bell', 'fa fa-bell-o', 'fa fa-bell-slash', 'fa fa-bell-slash-o', 'fa fa-bicycle', 'fa fa-binoculars',
                'fa fa-birthday-cake', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'fa fa-bookmark-o',
                'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'fa fa-building-o', 'fa fa-bullhorn',
            ],
        };
    }
    return IconsComponent;
}());
IconsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-icons',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/icons/icons.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/icons/icons.component.html"),
    })
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/modals/modals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>Modals</nb-card-header>\n      <nb-card-body>\n        <button class=\"btn btn-success\" (click)=\"showLargeModal()\">Large modal</button>\n        <button class=\"btn btn-warning\" (click)=\"showSmallModal()\">Small modal</button>\n        <button class=\"btn btn-primary\" (click)=\"showStaticModal()\">Static modal</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/modals/modals.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin: 0 0.75rem 2rem 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/modals/modals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/modals/modal/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalsComponent = (function () {
    function ModalsComponent(modalService) {
        this.modalService = modalService;
    }
    ModalsComponent.prototype.showLargeModal = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__modal_modal_component__["a" /* ModalComponent */], { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Large Modal';
    };
    ModalsComponent.prototype.showSmallModal = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__modal_modal_component__["a" /* ModalComponent */], { size: 'sm', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Small Modal';
    };
    ModalsComponent.prototype.showStaticModal = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__modal_modal_component__["a" /* ModalComponent */], {
            size: 'sm',
            backdrop: 'static',
            container: 'nb-layout',
        });
        activeModal.componentInstance.modalHeader = 'Static modal';
        activeModal.componentInstance.modalContent = "This is static modal, backdrop click\n                                                    will not close it. Click \u00D7 or confirmation button to close modal.";
    };
    return ModalsComponent;
}());
ModalsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-modals',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/modals/modals.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/modals/modals.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], ModalsComponent);

var _a;
//# sourceMappingURL=modals.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/search-fields/search-fields.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Layout Rotate Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"rotate-layout\" tag=\"rotate-layout\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Modal Zoomin Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"modal-zoomin\" tag=\"modal-zoomin\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Modal Move Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"modal-move\" tag=\"modal-move\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Modal Drop Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"modal-drop\" tag=\"modal-drop\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Modal Half Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"modal-half\" tag=\"modal-half\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Curtain Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"curtain\" tag=\"curtain\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Column Curtain Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"column-curtain\" tag=\"column-curtain\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/search-fields/search-fields.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-search-fields',
        template: __webpack_require__("../../../../../src/app/pages/ui-features/search-fields/search-fields.component.html"),
    })
], SearchComponent);

//# sourceMappingURL=search-fields.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-6\">\n    <nb-card size=\"small\">\n      <nb-tabset>\n        <nb-tab tabTitle=\"Simple Tab #1\">\n          <p>In 1975, the first general purpose home automation network technology, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/X10_(industry_standard)\" title=\"X10 (industry standard)\">X10</a>, was developed. It is a communication protocol for electronic devices. It primarily uses <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Electric_power_transmission\" title=\"Electric power transmission\">electric power transmission</a> wiring for signalling and control, where the signals involve brief <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Radio_frequency\" title=\"Radio frequency\">radio frequency</a> bursts of <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Digital_data\" title=\"Digital data\">digital data</a>, and remains the most widely available.<sup id=\"cite_ref-8\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-8\">[8]</a></sup> By 1978, X10 products included a 16 channel command console, a lamp module, and an appliance module. Soon after came the wall switch module and the first X10 timer.</p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Simple Tab #2\">\n          <span>Content #2</span>\n        </nb-tab>\n        <nb-tab tabTitle=\"Simple Tab #3\">\n          <span>Content #3</span>\n        </nb-tab>\n      </nb-tabset>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6\">\n    <nb-card size=\"small\">\n      <nb-tabset fullWidth>\n        <nb-tab tabTitle=\"Full width tab #1\">\n          <p><b>Home automation</b> or <b>smart home</b><sup id=\"cite_ref-Smart_Home_1-0\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-Smart_Home-1\">[1]</a></sup> (also known as <b>domotics</b><sup id=\"cite_ref-t3_2-0\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-t3-2\">[2]</a></sup>) is <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Building_automation\" title=\"Building automation\">building automation</a> for the home. It involves the control and automation of lighting, heating (such as <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Smart_thermostat\" title=\"Smart thermostat\">smart thermostats</a>), ventilation, air conditioning (<a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/HVAC\" title=\"HVAC\">HVAC</a>), and security, as well as <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Home_appliance\" title=\"Home appliance\">home appliances</a> such as washer/dryers, ovens or refrigerators/freezers. <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Wi-Fi\" title=\"Wi-Fi\">Wi-Fi</a> is often used for remote monitoring and control. Home devices, when remotely monitored and controlled via the Internet, are an important constituent of the <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Internet_of_Things\" class=\"mw-redirect\" title=\"Internet of Things\">Internet of Things</a>. Modern systems generally consist of switches and sensors connected to a central hub sometimes called a \"gateway\" from which the system is controlled with a <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/User_interface\" title=\"User interface\">user interface</a> that is interacted either with a wall-mounted terminal, mobile phone software, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Tablet_computer\" title=\"Tablet computer\">tablet computer</a> or a web interface, often but not always via Internet cloud services.</p>\n          <p>While there are many competing vendors, there are very few worldwide accepted industry standards and the smart home space is heavily fragmented.<sup id=\"cite_ref-3\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-3\">[3]</a></sup> Popular <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Communications_protocol\" title=\"Communications protocol\">communications protocol</a> for products include <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/X10_(industry_standard)\" title=\"X10 (industry standard)\">X10</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Ethernet\" title=\"Ethernet\">Ethernet</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/RS-485\" title=\"RS-485\">RS-485</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/6LoWPAN\" title=\"6LoWPAN\">6LoWPAN</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Bluetooth_low_energy\" class=\"mw-redirect\" title=\"Bluetooth low energy\">Bluetooth LE (BLE)</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/ZigBee\" class=\"mw-redirect\" title=\"ZigBee\">ZigBee</a> and <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Z-Wave\" title=\"Z-Wave\">Z-Wave</a>, or other proprietary protocols all of which are incompatible with each other.<sup id=\"cite_ref-crhomephone_4-0\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-crhomephone-4\">[4]</a></sup> Manufacturers often prevent independent implementations by withholding documentation and by litigation.<sup id=\"cite_ref-5\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-5\">[5]</a></sup></p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Full width tab #2\">\n          <span>Content #2</span>\n        </nb-tab>\n        <nb-tab tabTitle=\"Full width tab #3\">\n          <span>Content #3</span>\n        </nb-tab>\n      </nb-tabset>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6\">\n    <nb-card size=\"small\">\n      <nb-route-tabset [tabs]=\"tabs\"></nb-route-tabset>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/tabs/tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-default) nb-tab {\n  padding: 1.25rem; }\n\n:host-context(.nb-theme-default) /deep/ ngx-tab1, :host-context(.nb-theme-default) /deep/ ngx-tab2 {\n  display: block;\n  padding: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    font-size: 1rem;\n    padding: 0 0.25rem; } }\n\n:host-context(.nb-theme-cosmic) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-cosmic) nb-tab {\n  padding: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) /deep/ ngx-tab1, :host-context(.nb-theme-cosmic) /deep/ ngx-tab2 {\n  display: block;\n  padding: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    font-size: 1rem;\n    padding: 0 0.25rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Tab1Component = (function () {
    function Tab1Component() {
    }
    return Tab1Component;
}());
Tab1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-tab1',
        template: "\n    <p>Early home automation began with labor-saving machines. Self-contained electric or gas powered\n      <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Home_appliances\">home appliances</a>\n      became viable in the 1900s with the introduction of\n      <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Electric_power_distribution\">electric power distribution\n      </a> and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines,\n      dishwashers, and clothes dryers.\n    </p>\n  ",
    })
], Tab1Component);

var Tab2Component = (function () {
    function Tab2Component() {
    }
    return Tab2Component;
}());
Tab2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-tab2',
        template: "\n    <p>Tab 2 works!</p>\n  ",
    })
], Tab2Component);

var TabsComponent = (function () {
    function TabsComponent() {
        this.tabs = [
            {
                title: 'Route tab #1',
                route: '/pages/ui-features/tabs/tab1',
            },
            {
                title: 'Route tab #2',
                route: '/pages/ui-features/tabs/tab2',
            },
        ];
    }
    return TabsComponent;
}());
TabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-tabs',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/tabs/tabs.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/tabs/tabs.component.html"),
    })
], TabsComponent);

//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xxxl-8\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-xxl-7\">\n        <nb-card size=\"medium\">\n          <nb-card-header>\n            Used Fonts\n          </nb-card-header>\n          <nb-card-body>\n            <div class=\"font-row font-secondary\">\n              <div class=\"header\">\n                <div class=\"name bold\">Exo</div>\n\n                <div class=\"variants\">\n                  <span class=\"font-w-bold\">Bold</span>\n                  <span class=\"font-w-regular\">Regular</span>\n                  <span class=\"font-w-light\">Light</span>\n                </div>\n              </div>\n              <p>\n                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\n                there live the blind texts.\n                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\n              </p>\n            </div>\n\n            <div class=\"font-row font-main\">\n              <div class=\"header\">\n                <div class=\"name bold\">Roboto</div>\n\n                <div class=\"variants\">\n                  <span class=\"font-w-bold\">Bold</span>\n                  <span class=\"font-w-regular\">Regular</span>\n                  <span class=\"font-w-light\">Light</span>\n                </div>\n              </div>\n              <p>\n                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\n                there live the blind texts.\n                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\n              </p>\n            </div>\n          </nb-card-body>\n        </nb-card>\n\n        <nb-card size=\"small\">\n          <nb-card-header>\n            Article Example\n          </nb-card-header>\n          <nb-card-body>\n            <h4>So what's About the grammar?</h4>\n            <p class=\"text-indent\">\n              Far far away, behind the word mountains, far from the countries <strong>Vokalia</strong> and <strong>Consonantia</strong>,\n              there live the blind texts.\n              They live in <strong>Bookmarksgrove</strong>.\n            </p>\n            <p class=\"text-indent\">\n              A small <strong>river named Duden</strong> flows by their place and supplies it with the\n              necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly\n              into your mouth.\n              Even the all-powerful Pointing has no control about the blind texts it is an almost\n              unorthographic life One day however a small\n              line of blind text by the name of\n              <a href=\"http://google.com\" target=\"_blank\">Lorem Ipsum</a> decided to leave for\n              the far <strong>World of Grammar</strong>.\n            </p>\n          </nb-card-body>\n        </nb-card>\n      </div>\n      <div class=\"col-md-6 col-xxl-5\">\n        <nb-card size=\"medium\" class=\"headings-card\">\n          <nb-card-header>\n            Headings\n          </nb-card-header>\n          <nb-card-body>\n            <div class=\"header\">\n              <div>\n                <h1>H1. Heading</h1>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 2.5rem (40px)\n              </div>\n            </div>\n            <div class=\"header\">\n              <div>\n                <h2>H2. Heading</h2>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 2rem (32px)\n              </div>\n            </div>\n            <div class=\"header\">\n              <div>\n                <h3>H3. Heading</h3>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 1.75rem (28px)\n              </div>\n            </div>\n            <div class=\"header\">\n              <div>\n                <h4>H4. Heading</h4>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 1.5rem (24px)\n              </div>\n            </div>\n            <div class=\"header\">\n              <div>\n                <h5>H5. Heading</h5>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 1.25rem (20px)\n              </div>\n            </div>\n            <div class=\"header\">\n              <div>\n                <h6>H6. Heading</h6>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 1rem (16px)\n              </div>\n            </div>\n          </nb-card-body>\n        </nb-card>\n\n        <nb-card size=\"small\">\n          <nb-card-header>\n            Blockquotes\n          </nb-card-header>\n          <nb-card-body>\n            <blockquote class=\"blockquote\">\n              <p class=\"mb-0\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.\n            </blockquote>\n            <blockquote class=\"blockquote\">\n              <p class=\"mb-0\">Far far away, behind the word mountains, far from the countries.</p>\n              <footer class=\"blockquote-footer\">Vladimir Lugovsky</footer>\n            </blockquote>\n            <blockquote class=\"blockquote-reverse\">\n              <p class=\"mb-0\">Far far away, behind the word mountains.</p>\n              <footer class=\"blockquote-footer\">Vladimir Lugovsky</footer>\n            </blockquote>\n          </nb-card-body>\n        </nb-card>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6 col-xxxl-4\">\n    <nb-card [size]=\"breakpoint.width >= breakpoints.xxxl ? 'xxlarge' : 'large'\">\n      <nb-card-header>\n        Font Colors\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"colors\">\n          <div class=\"item text-heading\">\n            <div class=\"color bg-heading\"></div>\n            <div>\n              <h5 class=\"text-heading\">Heading Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-body\">\n            <div class=\"color bg-body\"></div>\n            <div>\n              <h5 class=\"text-body\">Body Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-hint\">\n            <div class=\"color bg-hint\"></div>\n            <div>\n              <h5 class=\"text-hint\">Hint Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-link\">\n            <div class=\"color bg-link\"></div>\n            <div>\n              <h5 class=\"text-link\">Link Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-primary\">\n            <div class=\"color bg-primary\"></div>\n            <div>\n              <h5 class=\"text-primary\">Primary Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-success\">\n            <div class=\"color bg-success\"></div>\n            <div>\n              <h5 class=\"text-success\">Success Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-info\">\n            <div class=\"color bg-info\"></div>\n            <div>\n              <h5 class=\"text-info\">Info Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-warning\">\n            <div class=\"color bg-warning\"></div>\n            <div>\n              <h5 class=\"text-warning\">Warning Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-danger\">\n            <div class=\"color bg-danger\"></div>\n            <div>\n              <h5 class=\"text-danger\">Danger Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6 col-xxxl-4\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Alerts\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"alert alert-primary\" role=\"alert\">\n          <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\n        </div>\n        <div class=\"alert alert-hint\" role=\"alert\">\n          <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n        </div>\n        <div class=\"alert alert-success\" role=\"alert\">\n          <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\n        </div>\n        <div class=\"alert alert-info\" role=\"alert\">\n          <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n        </div>\n        <div class=\"alert alert-warning\" role=\"alert\">\n          <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\n        </div>\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6 col-xxxl-4\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Text Types\n      </nb-card-header>\n      <nb-card-body>\n        <h4>Highlighted text</h4>\n        <p class=\"mb-5\">\n          Far far away, behind the word mountains, far from the countries\n          Vokalia and <mark>Consonantia, there live the blind texts.</mark>\n        </p>\n        <h4>Bold Text</h4>\n        <p class=\"mb-5\">\n          Far far away, behind the word mountains, far from the countries\n          Vokalia and <strong>Consonantia, there live the blind texts.</strong>\n        </p>\n        <h4>Link Text</h4>\n        <p class=\"mb-5\">\n          Far far away, behind the word mountains, far from the countries\n          Vokalia and <a href=\"http://google.com\" target=\"_blank\">Consonantia, there live the blind texts.</a>\n        </p>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6 col-xxxl-4\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Lists\n      </nb-card-header>\n      <nb-card-body>\n        <h4>Ordered List</h4>\n        <ol class=\"mb-5\">\n          <li>Far far away, behind the word mountains</li>\n          <li>Far from the countries Vokalia and Consonantia</li>\n          <li>There live the blind texts.</li>\n          <li>Right at the coast of the Semantics.</li>\n          <li>A small river named Duden flows</li>\n        </ol>\n\n        <h4>Unordered List</h4>\n        <ul class=\"mb-5\">\n          <li>Far far away, behind the word mountains</li>\n          <li>Far from the countries Vokalia and Consonantia</li>\n          <li>There live the blind texts.</li>\n          <li>Right at the coast of the Semantics.</li>\n          <li>A small river named Duden flows</li>\n        </ul>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/typography/typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .font-secondary .font-header .name {\n  font-size: 4.5rem;\n  line-height: 4rem;\n  font-weight: 600; }\n\n:host-context(.nb-theme-default) .font-main .font-header .name {\n  font-size: 3rem;\n  font-weight: 600; }\n\n:host-context(.nb-theme-default) .font-row:first-child {\n  margin-bottom: 2rem; }\n\n:host-context(.nb-theme-default) .font-row .header {\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n\n:host-context(.nb-theme-default) .font-row p {\n  margin: 0; }\n\n:host-context(.nb-theme-default) .headings-card nb-card-body {\n  padding: 1rem 1.25rem; }\n\n:host-context(.nb-theme-default) .headings-card .header {\n  padding-bottom: 0.675rem;\n  margin-bottom: 0.675rem; }\n  :host-context(.nb-theme-default) .headings-card .header:last-child {\n    padding-bottom: 0;\n    margin-bottom: 0; }\n\n:host-context(.nb-theme-default) .header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #ebeef2;\n  color: #2a2a2a; }\n  :host-context(.nb-theme-default) .header:last-child {\n    border-bottom: none;\n    padding: 0;\n    margin: 0; }\n  :host-context(.nb-theme-default) .header div:first-child {\n    -webkit-box-flex: 2;\n            flex: 2;\n    -ms-flex: 2 1 auto;\n    line-height: 1;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    :host-context(.nb-theme-default) .header div:first-child h1, :host-context(.nb-theme-default) .header div:first-child h2, :host-context(.nb-theme-default) .header div:first-child h3, :host-context(.nb-theme-default) .header div:first-child h4, :host-context(.nb-theme-default) .header div:first-child h5, :host-context(.nb-theme-default) .header div:first-child h6 {\n      margin-bottom: 0; }\n  :host-context(.nb-theme-default) .header .variants {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -ms-flex: 1 1 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    :host-context(.nb-theme-default) .header .variants span {\n      padding-left: 1rem;\n      font-size: 1.5rem; }\n  :host-context(.nb-theme-default) .header .detail {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    color: #a4abb3; }\n\n:host-context(.nb-theme-default) .colors {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host-context(.nb-theme-default) .colors .item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 1.25rem; }\n    :host-context(.nb-theme-default) .colors .item:last-child {\n      margin-bottom: 0; }\n  :host-context(.nb-theme-default) .colors .color {\n    width: 86px;\n    height: 60px;\n    border-top-right-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    margin-right: 1rem; }\n  :host-context(.nb-theme-default) .colors h1, :host-context(.nb-theme-default) .colors h2, :host-context(.nb-theme-default) .colors h3, :host-context(.nb-theme-default) .colors h4, :host-context(.nb-theme-default) .colors h5, :host-context(.nb-theme-default) .colors h6 {\n    margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-default) .text-link {\n  color: #3dcc6d; }\n\n:host-context(.nb-theme-default) .bg-link {\n  background: #3dcc6d; }\n\n:host-context(.nb-theme-cosmic) .font-secondary .font-header .name {\n  font-size: 4.5rem;\n  line-height: 4rem;\n  font-weight: 600; }\n\n:host-context(.nb-theme-cosmic) .font-main .font-header .name {\n  font-size: 3rem;\n  font-weight: 600; }\n\n:host-context(.nb-theme-cosmic) .font-row:first-child {\n  margin-bottom: 2rem; }\n\n:host-context(.nb-theme-cosmic) .font-row .header {\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n\n:host-context(.nb-theme-cosmic) .font-row p {\n  margin: 0; }\n\n:host-context(.nb-theme-cosmic) .headings-card nb-card-body {\n  padding: 1rem 1.25rem; }\n\n:host-context(.nb-theme-cosmic) .headings-card .header {\n  padding-bottom: 0.675rem;\n  margin-bottom: 0.675rem; }\n  :host-context(.nb-theme-cosmic) .headings-card .header:last-child {\n    padding-bottom: 0;\n    margin-bottom: 0; }\n\n:host-context(.nb-theme-cosmic) .header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #342e73;\n  color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .header:last-child {\n    border-bottom: none;\n    padding: 0;\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header div:first-child {\n    -webkit-box-flex: 2;\n            flex: 2;\n    -ms-flex: 2 1 auto;\n    line-height: 1;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    :host-context(.nb-theme-cosmic) .header div:first-child h1, :host-context(.nb-theme-cosmic) .header div:first-child h2, :host-context(.nb-theme-cosmic) .header div:first-child h3, :host-context(.nb-theme-cosmic) .header div:first-child h4, :host-context(.nb-theme-cosmic) .header div:first-child h5, :host-context(.nb-theme-cosmic) .header div:first-child h6 {\n      margin-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .header .variants {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -ms-flex: 1 1 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    :host-context(.nb-theme-cosmic) .header .variants span {\n      padding-left: 1rem;\n      font-size: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .header .detail {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .colors {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host-context(.nb-theme-cosmic) .colors .item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .colors .item:last-child {\n      margin-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .colors .color {\n    width: 86px;\n    height: 60px;\n    border-top-right-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    margin-right: 1rem; }\n  :host-context(.nb-theme-cosmic) .colors h1, :host-context(.nb-theme-cosmic) .colors h2, :host-context(.nb-theme-cosmic) .colors h3, :host-context(.nb-theme-cosmic) .colors h4, :host-context(.nb-theme-cosmic) .colors h5, :host-context(.nb-theme-cosmic) .colors h6 {\n    margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .text-link {\n  color: #00f9a6; }\n\n:host-context(.nb-theme-cosmic) .bg-link {\n  background: #00f9a6; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypographyComponent = (function () {
    function TypographyComponent(themeService, breakpointService) {
        var _this = this;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = breakpointService.getBreakpointsMap();
        this.themeSubscription = themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    TypographyComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-typography',
        styles: [__webpack_require__("../../../../../src/app/pages/ui-features/typography/typography.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/ui-features/typography/typography.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */]) === "function" && _b || Object])
], TypographyComponent);

var _a, _b;
//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/ui-features-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiFeaturesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_features_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/ui-features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_grid_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons_icons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_modals_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/modals/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_fields_search_fields_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/search-fields/search-fields.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ui_features_component__["a" /* UiFeaturesComponent */],
        children: [{
                path: 'buttons',
                component: __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_component__["a" /* ButtonsComponent */],
            }, {
                path: 'grid',
                component: __WEBPACK_IMPORTED_MODULE_4__grid_grid_component__["a" /* GridComponent */],
            }, {
                path: 'icons',
                component: __WEBPACK_IMPORTED_MODULE_5__icons_icons_component__["a" /* IconsComponent */],
            }, {
                path: 'modals',
                component: __WEBPACK_IMPORTED_MODULE_6__modals_modals_component__["a" /* ModalsComponent */],
            }, {
                path: 'typography',
                component: __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__["a" /* TypographyComponent */],
            }, {
                path: 'search-fields',
                component: __WEBPACK_IMPORTED_MODULE_9__search_fields_search_fields_component__["a" /* SearchComponent */],
            }, {
                path: 'tabs',
                component: __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__["c" /* TabsComponent */],
                children: [{
                        path: '',
                        redirectTo: 'tab1',
                        pathMatch: 'full',
                    }, {
                        path: 'tab1',
                        component: __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__["a" /* Tab1Component */],
                    }, {
                        path: 'tab2',
                        component: __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__["b" /* Tab2Component */],
                    }],
            }],
    }];
var UiFeaturesRoutingModule = (function () {
    function UiFeaturesRoutingModule() {
    }
    return UiFeaturesRoutingModule;
}());
UiFeaturesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], UiFeaturesRoutingModule);

//# sourceMappingURL=ui-features-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/ui-features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiFeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiFeaturesComponent = (function () {
    function UiFeaturesComponent() {
    }
    return UiFeaturesComponent;
}());
UiFeaturesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-ui-features',
        template: "\n    <router-outlet></router-outlet>\n  ",
    })
], UiFeaturesComponent);

//# sourceMappingURL=ui-features.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/ui-features.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiFeaturesModule", function() { return UiFeaturesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_buttons_module__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/buttons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_features_routing_module__ = __webpack_require__("../../../../../src/app/pages/ui-features/ui-features-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_features_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/ui-features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_grid_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_modals_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/modals/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_modal_modal_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/modals/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__typography_typography_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_fields_search_fields_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/search-fields/search-fields.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var components = [
    __WEBPACK_IMPORTED_MODULE_4__ui_features_component__["a" /* UiFeaturesComponent */],
    __WEBPACK_IMPORTED_MODULE_5__grid_grid_component__["a" /* GridComponent */],
    __WEBPACK_IMPORTED_MODULE_6__modals_modals_component__["a" /* ModalsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__["a" /* IconsComponent */],
    __WEBPACK_IMPORTED_MODULE_8__modals_modal_modal_component__["a" /* ModalComponent */],
    __WEBPACK_IMPORTED_MODULE_9__typography_typography_component__["a" /* TypographyComponent */],
    __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_component__["c" /* TabsComponent */],
    __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_component__["a" /* Tab1Component */],
    __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_component__["b" /* Tab2Component */],
    __WEBPACK_IMPORTED_MODULE_11__search_fields_search_fields_component__["a" /* SearchComponent */],
];
var UiFeaturesModule = (function () {
    function UiFeaturesModule() {
    }
    return UiFeaturesModule;
}());
UiFeaturesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_3__ui_features_routing_module__["a" /* UiFeaturesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__buttons_buttons_module__["a" /* ButtonsModule */],
        ],
        declarations: components.slice(),
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__modals_modal_modal_component__["a" /* ModalComponent */],
        ],
    })
], UiFeaturesModule);

//# sourceMappingURL=ui-features.module.js.map

/***/ })

});
//# sourceMappingURL=ui-features.module.chunk.js.map