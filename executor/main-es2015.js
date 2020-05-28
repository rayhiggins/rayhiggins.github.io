(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-entity-instance/create-entity-instance.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-entity-instance/create-entity-instance.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"initialized\">\r\n\r\n    <h3>{{entityModel.id}}</h3>\r\n\r\n    <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n            <h4 class=\"panel-title\">{{entityModel.id}}</h4>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n\r\n            <mat-dialog-content [formGroup]=\"form\">\r\n                <div class=\"form-group\">\r\n                    <div *ngFor=\"let field of entityModel.fields\">\r\n                        <!--         <label class=\"control-label\" [for]=\"field.id\">{{field.id}}</label>\r\n\r\n              <div *ngFor=\"let value of getFieldValues(field.id).values\"> -->\r\n\r\n                        <div *ngIf=\"isText(field)\">\r\n\r\n                            <mat-form-field>\r\n                                <input matInput [placeholder]=\"field.id\" [formControlName]=\"field.id\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div *ngIf=\"isNumber(field)\">\r\n                            <mat-form-field>\r\n                                <input type=\"number\" matInput [placeholder]=\"field.id\" [formControlName]=\"field.id\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div *ngIf=\"isDate(field)\">\r\n                            <mat-form-field>\r\n                                <input type=\"date\" matInput [placeholder]=\"field.id\" [formControlName]=\"field.id\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div *ngIf=\"isBoolean(field)\">\r\n                            <mat-form-field>\r\n                                <mat-select [placeholder]=\"field.id\" [formControlName]=\"field.id\">\r\n                                    <mat-option value=\"true\">\r\n                                        true\r\n                                    </mat-option>\r\n                                    <mat-option value=\"false\">\r\n                                        false\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                            <!--                            <mat-checkbox style=\"margin-left: 10px\" [formControlName]=\"field.id\">{{field.id}}\r\n                            </mat-checkbox>-->\r\n                        </div>\r\n                        <div *ngIf=\"isEnum(field) || isEntity(field)\">\r\n                            <mat-form-field>\r\n                                <mat-select [placeholder]=\"field.id\" [formControlName]=\"field.id\">\r\n                                    <mat-option *ngFor=\"let referenceValue of getReferenceValues(field.id)\"\r\n                                        [value]=\"referenceValue\">\r\n                                        {{referenceValue}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-dialog-content>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <button class=\"mat-raised-button\" (click)=\"back()\">Cancel</button>\r\n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"form.invalid\"\r\n            (click)=\"saveEntity()\">Save</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/domain-instance/domain-instance.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/domain-instance/domain-instance.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"entityModel\">\n  <div style=\"background-color: rgb(186, 221, 231); text-align: center;  box-shadow: 10px 10px 5px grey;\">\n    <h2 class=\"mat-h2\">{{domainInstance.id}}</h2>\n    <nav class=\"navbar navbar-default\" style=\"background-color:rgb(186, 221, 231)\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item\" *ngFor=\"let entityInstances of domainInstance.listOfEntityInstances\">\n          <a class=\"nav-link\" [routerLink]=\"[]\"\n            (click)=\"displayEntity(entityInstances.modelId)\">{{entityInstances.modelId}}</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n\n  <div style=\"box-shadow: 10px 10px 5px grey\">\n\n    <div *ngIf=\"currentEntityInstances\">\n\n      <div class=\"panel panel-primary\" *ngIf=\"entityModel\">\n\n        <div class=\"panel-heading\">\n          <div class=\"panel-title\">\n            List of {{currentEntityInstances.modelId}} \n          </div>\n        </div>\n\n        <div class=\"panel-body\">\n          <button (click)=\"newEntityInstance()\" mat-raised-button color=\"primary\" style=\"margin-left: 10px\">Add</button>\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th *ngFor=\"let field of entityModel.fields\">{{field.id}}</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let entityInstance of currentEntityInstances.entityInstanceList\">\n                <td *ngFor=\"let fieldInstances of entityInstance.listOfFieldInstances\">\n                  {{fieldInstances.fieldInstanceList[0].value}}</td>\n                <td>\n                  <button (click)=\"deleteEntityInstance(entityInstance.tid)\" mat-raised-button\n                    color=\"warn\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                  <button (click)=\"updateEntityInstance(entityInstance.tid)\" mat-raised-button color=\"accent\"\n                    style=\"margin-left: 10px\">\n                    <mat-icon>launch</mat-icon>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/domain-instances/domain-instances.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/domain-instances/domain-instances.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n        <div class=\"panel-title\">{{domainModelId}}: Domain-Instances </div>\n    </div>\n    <div class=\"panel-body\">\n        <form #domainInstanceForm=\"ngForm\" (ngSubmit)=\"saveDomainInstance(domainInstanceForm)\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-body\">\n                    <div class=\"form-group\" [class.has-error]=\"id.invalid && id.touched\">\n                        <label class=\"control-label\" for=\"id\">Id</label>\n                        <input required id=\"id\" name=\"id\" [(ngModel)]=\"newDomainInstance\" type=\"text\"\n                            class=\"form-control\" #id=\"ngModel\">\n                        <span class=\"help-block\" *ngIf=\"id.invalid && id.touched\">Id is required</span>\n                    </div>\n                </div>\n                <div class=\"panel-footer\">\n                    <button mat-raised-button color = \"primary\" [disabled]=\"domainInstanceForm.invalid\">Add Domain Instance</button>\n                </div>\n\n            </div>\n\n        </form>\n    </div>\n\n    <div class=\"panel-body\">\n        <div class=\"panel panel-promary\" *ngIf=\"dataSource\">\n            <div class=\"panel-heading\">\n                <table cdk-table [dataSource]=\"dataSource\" class=\"table table-striped\">\n\n                    <!-- ID Column -->\n                    <ng-container cdkColumnDef=\"id\">\n                        <th cdk-header-cell *cdkHeaderCellDef> ID </th>\n                        <td cdk-cell *cdkCellDef=\"let element\"> {{element}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"details\">\n                        <th mat-header-cell *matHeaderCellDef> Details </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <button mat-raised-button color=\"accent\" (click)=\"displayDomainInstance(element)\">\n                                Details\n                            </button>\n                        </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"delete\">\n                        <th mat-header-cell *matHeaderCellDef> Delete </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <button mat-raised-button color=\"warn\" (click)=\"deleteDomainInstance(element)\">\n                                Delete\n                            </button>\n                        </td>\n                    </ng-container>\n\n                    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/domain-select/domain-select.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/domain-select/domain-select.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>List of domain models</h2>\r\n\r\n<div class=\"panel panel-primary half\" *ngIf=\"dataSource\">\r\n  <table cdk-table [dataSource]=\"dataSource\" class=\"table table-striped\">\r\n\r\n    <!-- ID Column -->\r\n    <ng-container cdkColumnDef=\"id\">\r\n      <th cdk-header-cell *cdkHeaderCellDef> ID </th>\r\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.id}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"details\">\r\n      <th mat-header-cell *matHeaderCellDef> Details </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-raised-button  color = \"accent\" (click)=\"redirectToDetails(element.id)\">\r\n         Details\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-field/edit-field.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-field/edit-field.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label class=\"control-label\" [for]=\"field.id\">{{field.id}}</label>\n<input [id]=\"field.id\" [name]=\"name\" type=\"text\" [(ngModel)]=\"value\" [value]= \"value\"\nclass=\"form-control\"/>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entity-instance/entity-instance.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entity-instance/entity-instance.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"entityInstance\">\n    <div class=\"panel panel-primary\">\n\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">{{entityInstance.id}}</h3>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"row\" *ngFor=\"let fieldInstances of entityInstance.listOfFieldInstances\">\n\n                <div class=\"col-xs-4\">{{fieldInstances.modelId}}</div>\n\n                <div class=\"col-xs-8\">\n\n                    <div *ngFor=\"let value of fieldInstances.fieldInstanceList\">\n                        {{value.value}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _domain_select_domain_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain-select/domain-select.component */ "./src/app/domain-select/domain-select.component.ts");
/* harmony import */ var _domain_instances_domain_instances_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain-instances/domain-instances.component */ "./src/app/domain-instances/domain-instances.component.ts");
/* harmony import */ var _domain_instance_domain_instance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domain-instance/domain-instance.component */ "./src/app/domain-instance/domain-instance.component.ts");






const routes = [
    { path: 'domainSelect', component: _domain_select_domain_select_component__WEBPACK_IMPORTED_MODULE_3__["DomainSelectComponent"] },
    { path: 'domainInstances/:domainId', component: _domain_instances_domain_instances_component__WEBPACK_IMPORTED_MODULE_4__["DomainInstancesComponent"] },
    { path: 'domainInstance/:domainId/:domainInstanceId', component: _domain_instance_domain_instance_component__WEBPACK_IMPORTED_MODULE_5__["DomainInstanceComponent"] },
    { path: '', redirectTo: '/domainSelect', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'DomainStructExecutor';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _create_entity_instance_create_entity_instance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-entity-instance/create-entity-instance.component */ "./src/app/create-entity-instance/create-entity-instance.component.ts");
/* harmony import */ var _domain_instance_domain_instance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./domain-instance/domain-instance.component */ "./src/app/domain-instance/domain-instance.component.ts");
/* harmony import */ var _domain_instances_domain_instances_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./domain-instances/domain-instances.component */ "./src/app/domain-instances/domain-instances.component.ts");
/* harmony import */ var _domain_select_domain_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./domain-select/domain-select.component */ "./src/app/domain-select/domain-select.component.ts");
/* harmony import */ var _edit_field_edit_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-field/edit-field.component */ "./src/app/edit-field/edit-field.component.ts");
/* harmony import */ var _entity_instance_entity_instance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./entity-instance/entity-instance.component */ "./src/app/entity-instance/entity-instance.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _domain_select_domain_select_component__WEBPACK_IMPORTED_MODULE_11__["DomainSelectComponent"],
            _domain_instances_domain_instances_component__WEBPACK_IMPORTED_MODULE_10__["DomainInstancesComponent"],
            _domain_instance_domain_instance_component__WEBPACK_IMPORTED_MODULE_9__["DomainInstanceComponent"],
            _create_entity_instance_create_entity_instance_component__WEBPACK_IMPORTED_MODULE_8__["CreateEntityInstanceComponent"],
            _entity_instance_entity_instance_component__WEBPACK_IMPORTED_MODULE_13__["EntityInstanceComponent"],
            _edit_field_edit_field_component__WEBPACK_IMPORTED_MODULE_12__["EditFieldComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_14__["DemoMaterialModule"]
        ], entryComponents: [
            _create_entity_instance_create_entity_instance_component__WEBPACK_IMPORTED_MODULE_8__["CreateEntityInstanceComponent"]
        ],
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => _edit_field_edit_field_component__WEBPACK_IMPORTED_MODULE_12__["EditFieldComponent"]),
                multi: true
            },
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DATA"], useValue: {} },
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogRef"], useValue: {} }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppSettings {
}
AppSettings.CRUD_APP_ENDPOINT = 'https://crud-app-builder.herokuapp.com'; //'http://localhost:8080/';


/***/ }),

/***/ "./src/app/create-entity-instance/create-entity-instance.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/create-entity-instance/create-entity-instance.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1lbnRpdHktaW5zdGFuY2UvY3JlYXRlLWVudGl0eS1pbnN0YW5jZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/create-entity-instance/create-entity-instance.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/create-entity-instance/create-entity-instance.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateEntityInstanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEntityInstanceComponent", function() { return CreateEntityInstanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_entity_entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/entity.entry */ "./src/app/model/entity.entry.ts");
/* harmony import */ var _model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/field.cardinality.model */ "./src/app/model/field.cardinality.model.ts");
/* harmony import */ var _model_field_entry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/field.entry */ "./src/app/model/field.entry.ts");
/* harmony import */ var _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/field.type.model */ "./src/app/model/field.type.model.ts");
/* harmony import */ var _services_domain_instance_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/domain.instance.service */ "./src/app/services/domain.instance.service.ts");
/* harmony import */ var _services_domain_model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/domain.model.service */ "./src/app/services/domain.model.service.ts");
/* harmony import */ var _services_entry_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/entry.service */ "./src/app/services/entry.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");












let CreateEntityInstanceComponent = class CreateEntityInstanceComponent {
    constructor(fb, route, domainService, domainInstanceService, entryService, dialogRef, data) {
        this.fb = fb;
        this.route = route;
        this.domainService = domainService;
        this.domainInstanceService = domainInstanceService;
        this.entryService = entryService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fieldMap = new Map();
        this.referenceValuesMap = new Map();
        this.initialized = false;
    }
    ngOnInit() {
        {
            if (this.data) {
                this.domainModel = this.data.domainModel;
                this.domainInstanceId = this.data.domainInstanceId;
                this.entityInstance = this.data.entityInstance;
                this.entityModel = this.data.entityModel;
            }
            const group = {};
            this.entityModel.fields.forEach(field => {
                this.updateFormControls(field, group);
            });
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](group);
            this.initialized = true;
        }
    }
    updateFormControls(field, group) {
        var value;
        if (this.entityInstance) {
            const fieldInstances = this.domainInstanceService.getFieldInstances(this.entityInstance, field.id);
            if (fieldInstances.fieldInstanceList[0]) {
                value = fieldInstances.fieldInstanceList[0].value;
            }
            else {
                value = "";
            }
        }
        else {
            value = "";
        }
        group[field.id] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](value);
        if (field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__["FieldType"].ENUM) {
            const referenceEnum = this.domainService.getEnum(this.domainModel, field.referenceId);
            this.referenceValuesMap.set(field.id, referenceEnum.enumInstances);
        }
        else if (field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__["FieldType"].ENTITY) {
            const referenceEntity = this.domainService.getEntity(this.domainModel, field.referenceId);
            this.entryService.readEntityInstances(this.domainModel.id, this.domainInstanceId, referenceEntity.id).subscribe(entries => {
                const referenceValues = entries.map(e => e.instanceId);
                this.referenceValuesMap.set(field.id, referenceValues);
            });
        }
    }
    getReferenceValues(fieldId) {
        return this.referenceValuesMap.get(fieldId);
    }
    updateValues(field) {
        const values = this.createValues(field);
        var fieldValues = new FieldValues();
        fieldValues.values = values;
        fieldValues.field = field;
        this.updateReferenceValues(fieldValues, field);
        this.fieldMap.set(field.id, fieldValues);
    }
    updateReferenceValues(fieldValues, field) {
        if (field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__["FieldType"].ENTITY) {
            const referenceEntity = this.domainService.getEntity(this.domainModel, field.referenceId);
            this.entryService.readEntityInstances(this.domainModel.id, this.domainInstanceId, referenceEntity.id).subscribe(entries => {
                fieldValues.referenceValues = entries.map(e => e.instanceId);
            });
        }
        else if (field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__["FieldType"].ENUM) {
            const referenceEnum = this.domainService.getEnum(this.domainModel, field.referenceId);
            fieldValues.referenceValues = referenceEnum.enumInstances;
        }
        else {
            fieldValues.referenceValues = [];
        }
    }
    createValues(field) {
        var values;
        if (this.entityInstance) {
            const fieldInstances = this.domainInstanceService.getFieldInstances(this.entityInstance, field.id);
            var pos = 0;
            values = fieldInstances.fieldInstanceList.map(i => {
                const value = new Value(pos++);
                value.value = i.value;
                return value;
            });
        }
        else {
            values = [new Value(0)];
        }
        console.log(field.id + " " + JSON.stringify(values));
        return values;
    }
    ngOnChanges() {
        // create header using child_id
        this.ngOnInit();
    }
    saveEntity() {
        const entityEntry = new _model_entity_entry__WEBPACK_IMPORTED_MODULE_4__["EntityEntry"]();
        if (this.entityInstance) {
            entityEntry.id = this.entityInstance.tid;
        }
        entityEntry.modelTid = this.entityModel.tid;
        entityEntry.fieldEntries = [];
        const identifierField = this.domainService.getIdentifierField(this.entityModel);
        this.fieldMap.forEach((fieldValues, key) => {
            fieldValues.values.forEach(v => {
                const fieldEntry = new _model_field_entry__WEBPACK_IMPORTED_MODULE_6__["FieldEntry"]();
                fieldEntry.modelId = key;
                fieldEntry.value = v.value;
                if (key == identifierField.id) {
                    entityEntry.instanceId = v.value;
                }
                entityEntry.fieldEntries.push(fieldEntry);
            });
        });
        this.entityModel.fields.forEach(field => {
            const fieldEntry = new _model_field_entry__WEBPACK_IMPORTED_MODULE_6__["FieldEntry"]();
            fieldEntry.modelId = field.id;
            fieldEntry.value = this.form.value[fieldEntry.modelId];
            if (field.identifier) {
                entityEntry.instanceId = fieldEntry.value;
            }
            entityEntry.fieldEntries.push(fieldEntry);
        });
        if (this.entityInstance != null) {
            console.log("this.entityInstance.tid; " + entityEntry.id);
            this.entryService.updateEntityEntry(this.domainModel.tid, this.domainInstanceId, entityEntry).subscribe(data => {
                this.notify.emit();
            });
        }
        else {
            this.entryService.addNewEntityEntry(this.domainModel.tid, this.domainInstanceId, entityEntry).subscribe(data => {
                this.notify.emit();
            });
        }
        if (this.data) {
            if (this.data) {
                this.dialogRef.close(true);
            }
        }
    }
    back() {
        if (this.data) {
            this.dialogRef.close(false);
        }
    }
    isText(field) {
        return field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__["FieldType"].TEXT;
    }
    isNumber(field) {
        return field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__["FieldType"].NUMBER;
    }
    isDate(field) {
        return field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__["FieldType"].DATE;
    }
    isBoolean(field) {
        return field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__["FieldType"].BOOLEAN;
    }
    isEnum(field) {
        return field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__["FieldType"].ENUM;
    }
    isEntity(field) {
        return field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_7__["FieldType"].ENTITY;
    }
};
CreateEntityInstanceComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_domain_model_service__WEBPACK_IMPORTED_MODULE_9__["DomainModelService"] },
    { type: _services_domain_instance_service__WEBPACK_IMPORTED_MODULE_8__["DomainInstanceService"] },
    { type: _services_entry_service__WEBPACK_IMPORTED_MODULE_10__["EntryService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateEntityInstanceComponent.prototype, "domainModel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateEntityInstanceComponent.prototype, "domainInstanceId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateEntityInstanceComponent.prototype, "entityModel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateEntityInstanceComponent.prototype, "entityInstance", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreateEntityInstanceComponent.prototype, "notify", void 0);
CreateEntityInstanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-entity-instance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-entity-instance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-entity-instance/create-entity-instance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-entity-instance.component.css */ "./src/app/create-entity-instance/create-entity-instance.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"]))
], CreateEntityInstanceComponent);

class FieldValues {
    constructor() {
        this.values = [new Value(0)];
        this.referenceValues = [];
    }
    isRequired() {
        return !this.field.optional;
    }
    getValue(i) {
        console.log("getValue()" + i + ">>" + JSON.stringify(this.values));
        if (this.values == undefined || this.values[i] == undefined) {
            const value = new Value(i);
            console.log("i: " + i);
            console.log("this.referenceValues: " + this.referenceValues);
            this.values[i] = value;
            console.log("this.values[i]: " + this.values[i]);
            return value;
        }
        const value = this.values[i];
        console.log("VALUE: " + value);
        return value;
    }
    addValue() {
        this.values.push(new Value(this.values.length));
    }
    isSingleValue() {
        const singleValue = this.field.cardinality == _model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_5__["FieldCardinality"].ONE_TO_ONE || this.field.cardinality == _model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_5__["FieldCardinality"].MANY_TO_ONE;
        return singleValue;
    }
}
class Value {
    constructor(position) {
        this.position = position;
    }
}


/***/ }),

/***/ "./src/app/domain-instance/domain-instance.component.css":
/*!***************************************************************!*\
  !*** ./src/app/domain-instance/domain-instance.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.sticky {\r\n    position: -webkit-sticky;\r\n    position: fixed;\r\n    top: 0;\r\n    background-color: yellow;\r\n    padding: 50px;\r\n    font-size: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9tYWluLWluc3RhbmNlL2RvbWFpbi1pbnN0YW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixNQUFNO0lBQ04sd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZG9tYWluLWluc3RhbmNlL2RvbWFpbi1pbnN0YW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/domain-instance/domain-instance.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/domain-instance/domain-instance.component.ts ***!
  \**************************************************************/
/*! exports provided: DomainInstanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainInstanceComponent", function() { return DomainInstanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_domain_instance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/domain.instance.service */ "./src/app/services/domain.instance.service.ts");
/* harmony import */ var _services_entry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/entry.service */ "./src/app/services/entry.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _create_entity_instance_create_entity_instance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create-entity-instance/create-entity-instance.component */ "./src/app/create-entity-instance/create-entity-instance.component.ts");
/* harmony import */ var _services_domain_model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/domain.model.service */ "./src/app/services/domain.model.service.ts");








let DomainInstanceComponent = class DomainInstanceComponent {
    constructor(router, route, domainInstanceService, entryService, domainModelService, dialog) {
        this.router = router;
        this.route = route;
        this.domainInstanceService = domainInstanceService;
        this.entryService = entryService;
        this.domainModelService = domainModelService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const domainModelId = params.get('domainId');
            const domainInstanceId = params.get('domainInstanceId');
            console.log(">>>>++++" + domainModelId + " " + domainInstanceId);
            this.domainInstanceService.getDomainInstance(domainModelId, domainInstanceId).subscribe((response) => {
                console.log("response" + JSON.stringify(response));
                this.domainInstance = response;
                if (this.selectedEntityModelId == undefined) {
                    const entityInstances = this.domainInstance.listOfEntityInstances;
                    if (this.currentEntityInstances == null && entityInstances != null && entityInstances.length > 0) {
                        this.currentEntityInstances = entityInstances[0];
                        this.selectedEntityModelId = this.currentEntityInstances.modelId;
                    }
                }
                this.updateCurrentEntityInstances();
                this.domainModelService.getDomain(domainModelId).subscribe((response) => {
                    this.domainModel = response;
                    console.log("read entityModel: " + this.domainModel + "/" + this.selectedEntityModelId);
                    this.entityModel = this.domainModelService.getEntity(this.domainModel, this.selectedEntityModelId);
                    console.log("entityModel: " + this.entityModel);
                });
            });
        });
    }
    displayEntity(modelId) {
        this.selectedEntityModelId = modelId;
        this.ngOnInit();
    }
    updateCurrentEntityInstances() {
        this.currentEntityInstances = this.domainInstance.listOfEntityInstances.filter(e => e.modelId == this.selectedEntityModelId)[0];
    }
    newEntityInstance() {
        this.displayEntityInstance(null);
    }
    updateEntityInstance(entityInstanceTid) {
        this.displayEntityInstance(entityInstanceTid);
    }
    displayEntityInstance(entityInstanceTid) {
        if (entityInstanceTid) {
            this.selectedEntityInstance = this.currentEntityInstances.entityInstanceList.filter(e => e.tid == entityInstanceTid)[0];
        }
        else {
            this.selectedEntityInstance = null;
        }
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '400px';
        dialogConfig.data = {
            domainModel: this.domainModel,
            domainInstanceId: this.domainInstance.id,
            entityModel: this.entityModel,
            entityInstance: this.selectedEntityInstance
        };
        const dialogRef = this.dialog.open(_create_entity_instance_create_entity_instance_component__WEBPACK_IMPORTED_MODULE_6__["CreateEntityInstanceComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.reload();
            }
        });
    }
    deleteEntityInstance(entityInstanceTid) {
        this.entryService.deleteEntityInstance(this.domainInstance.modelId, this.domainInstance.id, this.currentEntityInstances.modelId, entityInstanceTid).subscribe((response) => {
            this.reload();
        });
    }
    onNotify() {
        this.reload();
    }
    reload() {
        console.log("reload");
        this.currentEntityInstances = null;
        this.selectedEntityInstance = null;
        this.ngOnInit();
    }
};
DomainInstanceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_domain_instance_service__WEBPACK_IMPORTED_MODULE_3__["DomainInstanceService"] },
    { type: _services_entry_service__WEBPACK_IMPORTED_MODULE_4__["EntryService"] },
    { type: _services_domain_model_service__WEBPACK_IMPORTED_MODULE_7__["DomainModelService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
DomainInstanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-domain-instance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./domain-instance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/domain-instance/domain-instance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./domain-instance.component.css */ "./src/app/domain-instance/domain-instance.component.css")).default]
    })
], DomainInstanceComponent);



/***/ }),

/***/ "./src/app/domain-instances/domain-instances.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/domain-instances/domain-instances.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n    background-color: cornflowerblue;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9tYWluLWluc3RhbmNlcy9kb21haW4taW5zdGFuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2RvbWFpbi1pbnN0YW5jZXMvZG9tYWluLWluc3RhbmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/domain-instances/domain-instances.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/domain-instances/domain-instances.component.ts ***!
  \****************************************************************/
/*! exports provided: DomainInstancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainInstancesComponent", function() { return DomainInstancesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_domain_instance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/domain.instance.service */ "./src/app/services/domain.instance.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





let DomainInstancesComponent = class DomainInstancesComponent {
    constructor(route, router, domainInstanceService) {
        this.route = route;
        this.router = router;
        this.domainInstanceService = domainInstanceService;
        this.displayedColumns = ['id', 'delete', 'details'];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.domainModelId = params.get('domainId');
            console.log("read instances of " + this.domainModelId);
            this.domainInstanceService.getDomainInstanceIds(this.domainModelId).subscribe((response) => {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
                this.dataSource.data = response;
            });
        });
    }
    saveDomainInstance() {
        console.log(this.newDomainInstance);
        this.domainInstanceService.addDomainInstance(this.domainModelId, this.newDomainInstance).subscribe(data => {
            console.log("data after Post: " + data);
            this.ngOnInit();
        });
    }
    deleteDomainInstance(domainInstanceId) {
        this.domainInstanceService.deleteDomainInstance(this.domainModelId, domainInstanceId).subscribe(data => {
            console.log("data after Delete: " + data);
            this.ngOnInit();
        });
    }
    displayDomainInstance(domainInstanceId) {
        console.log("displayDomainInstance: " + domainInstanceId);
        this.router.navigate(["domainInstance", this.domainModelId, domainInstanceId]);
    }
};
DomainInstancesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_domain_instance_service__WEBPACK_IMPORTED_MODULE_3__["DomainInstanceService"] }
];
DomainInstancesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-domain-instances',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./domain-instances.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/domain-instances/domain-instances.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./domain-instances.component.css */ "./src/app/domain-instances/domain-instances.component.css")).default]
    })
], DomainInstancesComponent);



/***/ }),

/***/ "./src/app/domain-select/domain-select.component.css":
/*!***********************************************************!*\
  !*** ./src/app/domain-select/domain-select.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbWFpbi1zZWxlY3QvZG9tYWluLXNlbGVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/domain-select/domain-select.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/domain-select/domain-select.component.ts ***!
  \**********************************************************/
/*! exports provided: DomainSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainSelectComponent", function() { return DomainSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_domain_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/domain.model.service */ "./src/app/services/domain.model.service.ts");




let DomainSelectComponent = class DomainSelectComponent {
    constructor(router, _domainService) {
        this.router = router;
        this._domainService = _domainService;
        this.displayedColumns = ['id', 'details'];
        this.redirectToDetails = (id) => {
            this.router.navigate(["domainInstances", id]);
        };
    }
    ngOnInit() {
        this._domainService.getDomains().subscribe((response) => {
            this.domains = response;
            console.log("Domain-List: " + this.domains);
            this.dataSource = this.domains;
        });
    }
};
DomainSelectComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_domain_model_service__WEBPACK_IMPORTED_MODULE_3__["DomainModelService"] }
];
DomainSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-domain-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./domain-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/domain-select/domain-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./domain-select.component.css */ "./src/app/domain-select/domain-select.component.css")).default]
    })
], DomainSelectComponent);



/***/ }),

/***/ "./src/app/edit-field/edit-field.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-field/edit-field.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZmllbGQvZWRpdC1maWVsZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit-field/edit-field.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-field/edit-field.component.ts ***!
  \****************************************************/
/*! exports provided: EditFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFieldComponent", function() { return EditFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditFieldComponent = class EditFieldComponent {
    constructor() {
        this.inputModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
    }
    get value() {
        console.log("  get value() ");
        return this.val;
    }
    set value(val) {
        console.log("  set value() " + val);
        this.val = val;
        this.onChange(val);
        this.onTouched();
    }
    // We implement this method to keep a reference to the onChange
    // callback function passed by the forms API
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // We implement this method to keep a reference to the onTouched
    //callback function passed by the forms API
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // This is a basic setter that the forms API is going to use
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditFieldComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditFieldComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value')
], EditFieldComponent.prototype, "val", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditFieldComponent.prototype, "inputModelChange", void 0);
EditFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-field',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-field.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-field/edit-field.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-field.component.css */ "./src/app/edit-field/edit-field.component.css")).default]
    })
], EditFieldComponent);



/***/ }),

/***/ "./src/app/entity-instance/entity-instance.component.css":
/*!***************************************************************!*\
  !*** ./src/app/entity-instance/entity-instance.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0eS1pbnN0YW5jZS9lbnRpdHktaW5zdGFuY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entity-instance/entity-instance.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/entity-instance/entity-instance.component.ts ***!
  \**************************************************************/
/*! exports provided: EntityInstanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityInstanceComponent", function() { return EntityInstanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EntityInstanceComponent = class EntityInstanceComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EntityInstanceComponent.prototype, "entityInstance", void 0);
EntityInstanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entity-instance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entity-instance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entity-instance/entity-instance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./entity-instance.component.css */ "./src/app/entity-instance/entity-instance.component.css")).default]
    })
], EntityInstanceComponent);



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let DemoMaterialModule = class DemoMaterialModule {
};
DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], DemoMaterialModule);

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/model/domain.instance.ts":
/*!******************************************!*\
  !*** ./src/app/model/domain.instance.ts ***!
  \******************************************/
/*! exports provided: DomainInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainInstance", function() { return DomainInstance; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DomainInstance {
}


/***/ }),

/***/ "./src/app/model/entity.entry.ts":
/*!***************************************!*\
  !*** ./src/app/model/entity.entry.ts ***!
  \***************************************/
/*! exports provided: EntityEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityEntry", function() { return EntityEntry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EntityEntry {
}


/***/ }),

/***/ "./src/app/model/field.cardinality.model.ts":
/*!**************************************************!*\
  !*** ./src/app/model/field.cardinality.model.ts ***!
  \**************************************************/
/*! exports provided: FieldCardinality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldCardinality", function() { return FieldCardinality; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FieldCardinality;
(function (FieldCardinality) {
    FieldCardinality["ONE_TO_ONE"] = "ONE_TO_ONE";
    FieldCardinality["ONE_TO_MANY"] = "ONE_TO_MANY";
    FieldCardinality["MANY_TO_ONE"] = "MANY_TO_ONE";
    FieldCardinality["MANY_TO_MANY"] = "MANY_TO_MANY";
})(FieldCardinality || (FieldCardinality = {}));


/***/ }),

/***/ "./src/app/model/field.entry.ts":
/*!**************************************!*\
  !*** ./src/app/model/field.entry.ts ***!
  \**************************************/
/*! exports provided: FieldEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldEntry", function() { return FieldEntry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FieldEntry {
}


/***/ }),

/***/ "./src/app/model/field.type.model.ts":
/*!*******************************************!*\
  !*** ./src/app/model/field.type.model.ts ***!
  \*******************************************/
/*! exports provided: FieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldType", function() { return FieldType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FieldType;
(function (FieldType) {
    FieldType["TEXT"] = "TEXT";
    FieldType["NUMBER"] = "NUMBER";
    FieldType["DATE"] = "DATE";
    FieldType["BOOLEAN"] = "BOOLEAN";
    FieldType["ENTITY"] = "ENTITY";
    FieldType["ENUM"] = "ENUM";
})(FieldType || (FieldType = {}));


/***/ }),

/***/ "./src/app/services/domain.instance.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/domain.instance.service.ts ***!
  \*****************************************************/
/*! exports provided: DomainInstanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainInstanceService", function() { return DomainInstanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _model_domain_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/domain.instance */ "./src/app/model/domain.instance.ts");






let DomainInstanceService = class DomainInstanceService {
    constructor(http) {
        this.http = http;
    }
    addDomainInstance(domainId, domainInstanceId) {
        var domainInstance;
        domainInstance = new _model_domain_instance__WEBPACK_IMPORTED_MODULE_5__["DomainInstance"];
        domainInstance.id = domainInstanceId;
        let obs = this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/instance/' + domainId, domainInstance);
        return obs;
    }
    getDomainInstanceIds(domainId) {
        let obs = this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/instance/instanceIds/' + domainId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.result));
        return obs;
    }
    getDomainInstance(domainId, domainInstanceId) {
        let obs = this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/structure/' + domainId + '/' + domainInstanceId);
        return obs;
    }
    deleteDomainInstance(domainId, domainInstanceId) {
        let obs = this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/instance/' + domainId + '/' + domainInstanceId);
        return obs;
    }
    getFieldInstances(entityInstance, fieldId) {
        const foundFieldInstances = entityInstance.listOfFieldInstances.filter(f => fieldId == f.modelId);
        return foundFieldInstances.length > 0 ? foundFieldInstances[0] : null;
    }
};
DomainInstanceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DomainInstanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DomainInstanceService);



/***/ }),

/***/ "./src/app/services/domain.model.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/domain.model.service.ts ***!
  \**************************************************/
/*! exports provided: DomainModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainModelService", function() { return DomainModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/field.cardinality.model */ "./src/app/model/field.cardinality.model.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");





let DomainModelService = class DomainModelService {
    constructor(http) {
        this.http = http;
    }
    getDomains() {
        let obs = this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/models/');
        return obs;
    }
    getDomain(domainId) {
        let obs = this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/models/' + domainId);
        return obs;
    }
    getEntity(domainModel, entityModelId) {
        const foundEntities = domainModel.entities.filter(e => entityModelId == e.id);
        return foundEntities.length > 0 ? foundEntities[0] : null;
    }
    getEnum(domainModel, enumModelId) {
        const foundEntities = domainModel.enums.filter(e => enumModelId == e.id);
        return foundEntities.length > 0 ? foundEntities[0] : null;
    }
    getField(entityModel, fieldModelId) {
        const foundFields = entityModel.fields.filter(f => fieldModelId == f.id);
        return foundFields.length > 0 ? foundFields[0] : null;
    }
    getIdentifierField(entityModel) {
        return entityModel.fields.filter(f => f.identifier)[0];
    }
    singleValue(field) {
        return field.cardinality == _model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_3__["FieldCardinality"].ONE_TO_ONE || field.cardinality == _model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_3__["FieldCardinality"].MANY_TO_ONE;
    }
};
DomainModelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DomainModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DomainModelService);



/***/ }),

/***/ "./src/app/services/entry.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/entry.service.ts ***!
  \*******************************************/
/*! exports provided: EntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryService", function() { return EntryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");





let EntryService = class EntryService {
    constructor(http) {
        this.http = http;
    }
    addNewEntityEntry(domainTid, domainInstanceId, entityEntry) {
        let obs = this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/entries/' + domainTid + "/" + domainInstanceId, entityEntry);
        return obs;
    }
    updateEntityEntry(domainTid, domainInstanceId, entityEntry) {
        let obs = this.http.put(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/entries/' + domainTid + "/" + domainInstanceId + "/" + entityEntry.modelTid + "/" + entityEntry.id, entityEntry);
        return obs;
    }
    getDomainInstanceIds(domainId) {
        let obs = this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/instance/instanceIds/' + domainId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.result));
        return obs;
    }
    getDomainInstance(domainId, domainInstanceId) {
        let obs = this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/structure/' + domainId + '/' + domainInstanceId);
        return obs;
    }
    deleteDomainInstance(domainModelId, domainInstanceId) {
        let obs = this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/instance/' + domainModelId + '/' + domainInstanceId);
        return obs;
    }
    deleteEntityInstance(domainModelId, domainInstanceId, entityModelId, entityInstanceTid) {
        console.log("delete>>> " + _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/instance/' + domainModelId + '/' + domainInstanceId + '/' + entityModelId + '/' + entityInstanceTid);
        let obs = this.http.delete(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/instance/' + domainModelId + '/' + domainInstanceId + '/' + entityModelId + '/' + entityInstanceTid);
        return obs;
    }
    readEntityInstances(domainModelId, domainInstanceId, entityModelId) {
        let obs = this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].CRUD_APP_ENDPOINT + '/entries/' + domainModelId + '/' + domainInstanceId + '/' + entityModelId);
        return obs;
    }
};
EntryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EntryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EntryService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projekte\domainbuilder\client\domainstructexecutor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map