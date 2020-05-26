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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-app-background basic-container\">\r\n  <div style=\"background-color: whitesmoke; text-align: center;  box-shadow: 10px 10px 5px grey\">\r\n    <h2 class=\"mat-h2\">CRUD Model Builder</h2>\r\n\r\n    <nav class=\"navbar navbar-default\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"listDomains\">Domain-List</a>\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link\" routerLink=\"listEntities\">Domain</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n  <div style=\"box-shadow: 10px 10px 5px grey\">\r\n    <router-outlet></router-outlet>\r\n    <br>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/domains/display-domain.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/domains/display-domain.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"domain\">\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n            <div class=\"panel-title\">{{domain.id}}\n                <button style=\"margin-left: 3px\" [ngStyle]=\"{'background-color':'transparent', 'color':'white'}\"\n                    mat-mini-fab (click)=\"openDialogChangeDomainId()\">\n                    <mat-icon>create</mat-icon>\n                </button>\n                <button style=\"float: right;\" [ngStyle]=\"{'background-color':'transparent', 'color':'white'}\"\n                    mat-mini-fab (click)=\"back()\">\n                    <mat-icon>arrow_back</mat-icon>\n                </button>\n            </div>\n        </div>\n\n        <mat-tab-group>\n            <mat-tab label=\"Entities\">\n\n                <div class=\"panel-body\">\n\n                    <app-create-entity [domainTid]=\"domain.tid\" (notify)=\"onNotifyEntity($event)\"></app-create-entity>\n\n                    <div class=\"panel panel-primary\" *ngIf=\"entityDataSource\">\n                        <table cdk-table [dataSource]=\"entityDataSource\" class=\"table table-striped\">\n\n                            <!-- ID Column -->\n                            <ng-container cdkColumnDef=\"id\">\n                                <th cdk-header-cell *cdkHeaderCellDef> ID </th>\n                                <td cdk-cell *cdkCellDef=\"let element\"> {{element.id}} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"actions\">\n                                <th mat-header-cell *matHeaderCellDef> Actions </th>\n                                <td mat-cell *matCellDef=\"let element\">\n\n                                    <button mat-raised-button color=\"warn\" (click)=\"deleteEntity(element.tid)\">\n                                        <mat-icon>delete</mat-icon>\n                                    </button>\n                                    <button mat-raised-button color=\"accent\" style=\"margin-left: 10px\"\n                                        (click)=\"redirectToEntityDetails(element.tid)\">\n                                        <mat-icon>launch</mat-icon>\n                                    </button>\n                                </td>\n                            </ng-container>\n\n                            <tr cdk-header-row *cdkHeaderRowDef=\"entityDisplayedColumns\"></tr>\n                            <tr cdk-row *cdkRowDef=\"let row; columns: entityDisplayedColumns;\"></tr>\n                        </table>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"Enums\">\n                <div class=\"panel-body\">\n\n                    <app-create-enum [domainTid]=\"domain.tid\" (notify)=\"onNotifyEnum($event)\"></app-create-enum>\n\n                    <div class=\"panel panel-primary\" *ngIf=\"enumDataSource\">\n                        <table cdk-table [dataSource]=\"enumDataSource\" class=\"table table-striped\">\n\n                            <!-- ID Column -->\n                            <ng-container cdkColumnDef=\"id\">\n                                <th cdk-header-cell *cdkHeaderCellDef> ID </th>\n                                <td cdk-cell *cdkCellDef=\"let element\"> {{element.id}} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"actions\">\n                                <th mat-header-cell *matHeaderCellDef> Actions </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <button mat-raised-button color=\"warn\" (click)=\"deleteEnum(element.tid)\">\n                                        <mat-icon>delete</mat-icon>\n                                    </button>\n                                    <button mat-raised-button color=\"accent\" style=\"margin-left: 10px\"\n                                        (click)=\"redirectToEnumDetails(element.tid)\">\n                                        <mat-icon>launch</mat-icon>\n                                    </button>\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"delete\">\n                                <th mat-header-cell *matHeaderCellDef> Delete </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <button mat-raised-button color=\"warn\" (click)=\"deleteEnum(element.tid)\">\n                                        Delete\n                                    </button>\n                                </td>\n                            </ng-container>\n\n                            <tr cdk-header-row *cdkHeaderRowDef=\"enumDisplayedColumns\"></tr>\n                            <tr cdk-row *cdkRowDef=\"let row; columns: enumDisplayedColumns;\"></tr>\n                        </table>\n                    </div>\n\n                </div>\n\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/domains/edit-domain-id-dialog.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/domains/edit-domain-id-dialog.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title> change  domain-id </h2>\r\n\r\n\r\n<mat-dialog-content [formGroup]=\"form\">\r\n\r\n  <mat-form-field>\r\n\r\n    <input required matInput placeholder=\"domain-id\" formControlName=\"id\">\r\n\r\n  </mat-form-field>\r\n  </mat-dialog-content>\r\n\r\n  \r\n<div mat-dialog-actions>\r\n  <button  class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\r\n  <button class=\"mat-raised-button mat-primary\" [disabled]=\"form.invalid\"  (click)=\"save()\">Save</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/domains/list-domains.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/domains/list-domains.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>List of domain models</h2>\n\n<form #domainForm=\"ngForm\" (ngSubmit)=\"saveDomain()\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Create Domain</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"form-group\" [class.has-error]=\"id.invalid && id.touched\">\n        <label class=\"control-label\" for=\"id\">Id</label>\n        <input required id=\"id\" name=\"id\" [(ngModel)]=\"newDomain.id\" type=\"text\" class=\"form-control\" #id=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"id.invalid && id.touched\">Id is required</span>\n      </div>\n\n    </div>\n    <div class=\"panel-footer\">\n      <button mat-raised-button color=\"primary\" [disabled]=\"domainForm.invalid\">Add Domain</button>\n    </div>\n\n  </div>\n\n</form>\n\n<div class=\"panel panel-primary half\">\n  <table cdk-table [dataSource]=\"dataSource\" class=\"table table-striped\">\n\n    <!-- ID Column -->\n    <ng-container cdkColumnDef=\"id\">\n      <th cdk-header-cell *cdkHeaderCellDef> ID </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef> Actions </th>\n      <td mat-cell *matCellDef=\"let element\">\n\n        <button (click)=\"redirectToDelete(element.tid)\" mat-raised-button color=\"warn\">\n          <mat-icon>delete</mat-icon>\n        </button>\n        <button (click)=\"redirectToDetails(element.tid)\" mat-raised-button color=\"accent\" style=\"margin-left: 10px\">\n          <mat-icon>launch</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/create-entity.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/create-entity.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #entityForm=\"ngForm\" (ngSubmit)=\"saveEntity()\">\r\n<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">Create Entity</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"form-group\" [class.has-error]=\"id.invalid && id.touched\">\r\n            <label class=\"control-label\" for=\"id\">Id</label>\r\n            <input required id=\"id\" name=\"id\" [(ngModel)]=\"domainEntityModel.id\" type=\"text\"\r\n                class=\"form-control\" #id=\"ngModel\">\r\n            <span class=\"help-block\" *ngIf=\"id.invalid && id.touched\">Id is required</span>\r\n        </div>        \r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <button type=\"submit\" mat-raised-button color = \"primary\" [disabled]=\"entityForm.invalid\">Save</button>\r\n    </div>\r\n    \r\n</div>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/create-field.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/create-field.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"form\">\r\n    <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n            <div class=\"panel-title\" style=\"height: 30px;\" *ngIf=\"entity\">\r\n                Create Entity Field of Entity {{entity.id}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"panel-body\">\r\n            <mat-dialog-content [formGroup]=\"form\">\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Id\" formControlName=\"id\" #id>\r\n                </mat-form-field>\r\n\r\n                <mat-checkbox style=\"margin-left: 10px\" formControlName=\"identifier\">Identifier</mat-checkbox>\r\n                <mat-checkbox style=\"margin-left: 10px\" formControlName=\"optional\" *ngIf=\"isOptionalFieldVisible()\">Optional</mat-checkbox>\r\n                <mat-checkbox style=\"margin-left: 10px\" *ngIf=\"isMultipleFieldVisible()\" formControlName=\"multiple\">Multiple</mat-checkbox>\r\n\r\n                <br>\r\n\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Select Type\" formControlName=\"type\">\r\n                        <mat-option *ngFor=\"let fieldType of fieldTypes\" [value]=\"fieldType[0]\">\r\n                            {{fieldType[0]}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n\r\n                <br>\r\n\r\n                <mat-form-field *ngIf=\"isCardinalityFieldVisible()\">\r\n                    <mat-select placeholder=\"Select Cardinality\" formControlName=\"cardinality\">\r\n                        <mat-option *ngFor=\"let fieldCardinality of fieldCardinalities\" [value]=\"fieldCardinality[0]\">\r\n                            {{fieldCardinality[0]}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n                <br>\r\n\r\n                <mat-form-field *ngIf=\"isReferenceFieldVisible()\">\r\n                    <mat-select placeholder=\"Select Reference\" formControlName=\"referenceId\">\r\n                        <mat-option *ngFor=\"let fieldReference of getReferences()\" [value]=\"fieldReference.id\">\r\n                            {{fieldReference.id}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n            </mat-dialog-content>\r\n\r\n\r\n            <mat-dialog-actions>\r\n                <button class=\"mat-raised-button\" (click)=\"back()\">Cancel</button>\r\n                <button type=\"submit\" class=\"mat-raised-button mat-primary\" [disabled]=\"form.invalid\"\r\n                    (click)=\"saveEntity()\">Save</button>\r\n            </mat-dialog-actions>\r\n            <br>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/display-entity.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/display-entity.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"entity\">\r\n  <div class=\"panel panel-primary\" *ngIf=\"domain\">\r\n    <div class=\"panel-heading\">\r\n      <div class=\"panel-title\">Domain {{domain.id}} - Entity {{entity.id}}\r\n        <button style=\"margin-left: 3px\" [ngStyle]=\"{'background-color':'transparent', 'color':'white'}\" mat-mini-fab\r\n          (click)=\"openDialogChangeEntityId()\">\r\n          <mat-icon>create</mat-icon>\r\n        </button>\r\n        <button style=\"float: right;\" [ngStyle]=\"{'background-color':'transparent', 'color':'white'}\" mat-mini-fab\r\n          (click)=\"back()\">\r\n          <mat-icon>arrow_back</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n    <button mat-raised-button color=\"primary\" type=\"button\" class=\"btn btn-info\" (click)=\"addField();\"\r\n      style=\"margin-left: 12px;  margin-top: 10px;\">Add Field</button>\r\n\r\n    <div class=\"panel-body\">\r\n\r\n      <div class=\"panel panel-primary\" *ngIf=\"dataSource\">\r\n        <table cdk-table [dataSource]=\"dataSource\" class=\"table table-striped\">\r\n\r\n          <ng-container cdkColumnDef=\"id\">\r\n            <th cdk-header-cell *cdkHeaderCellDef> ID </th>\r\n            <td cdk-cell *cdkCellDef=\"let element\"> {{element.id}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"identifier\">\r\n            <th mat-header-cell *cdkHeaderCellDef> identifier </th>\r\n            <td mat-cell *cdkCellDef=\"let element\"> {{element.identifier}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"type\">\r\n            <th mat-header-cell *cdkHeaderCellDef> type </th>\r\n            <td mat-cell *cdkCellDef=\"let element\"> {{element.type}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"cardinality\">\r\n            <th mat-header-cell *cdkHeaderCellDef> cardinality </th>\r\n            <td mat-cell *cdkCellDef=\"let element\"> {{element.cardinality}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"optional\">\r\n            <th mat-header-cell *cdkHeaderCellDef> optional </th>\r\n            <td mat-cell *cdkCellDef=\"let element\"> {{element.optional}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"referenceId\">\r\n            <th mat-header-cell *cdkHeaderCellDef> referenceId </th>\r\n            <td mat-cell *cdkCellDef=\"let element\"> {{element.referenceId}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <button mat-raised-button color=\"warn\" (click)=\"deleteField(element.tid)\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n              <button mat-raised-button color=\"accent\" style=\"margin-left: 10px\" (click)=\"redirectToField(element.tid)\">\r\n                <mat-icon>launch</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/display-field.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/display-field.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"field\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n        <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">{{field.id}}</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4\">Field-ID</div>\r\n                <div class=\"col-xs-8\">{{field.id}}</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4\">Type</div>\r\n                <div class=\"col-xs-8\">{{field.type}}</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4\">Cardinality</div>\r\n                <div class=\"col-xs-8\">{{field.cardinality}}</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4\">Optional</div>\r\n                <div class=\"col-xs-8\">{{field.optional}}</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4\">Identifier</div>\r\n                <div class=\"col-xs-8\">{{field.identifier}}</div>\r\n            </div>            \r\n            <div class=\"row\"  *ngIf=\"model\">\r\n                <div class=\"col-xs-4\">Reference-ID</div>\r\n                <div class=\"col-xs-8\"><a routerLink=\"/displayEntity/{{model.id}}/{{field.referenceId}}\">{{field.referenceId}}</a></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/edit-entity-id-dialog.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/edit-entity-id-dialog.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title> change  entity-id </h2>\r\n\r\n\r\n<mat-dialog-content [formGroup]=\"form\">\r\n\r\n  <mat-form-field>\r\n\r\n    <input required matInput placeholder=\"entity-id\" formControlName=\"id\">\r\n\r\n  </mat-form-field>\r\n  </mat-dialog-content>\r\n\r\n  \r\n<div mat-dialog-actions>\r\n  <button  class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\r\n  <button class=\"mat-raised-button mat-primary\" [disabled]=\"form.invalid\" (click)=\"save()\">Save</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/list-entities.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/list-entities.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"form-group\">\r\n        <label for=\"domain\" class=\"domain-label\">\r\n            Select Domain\r\n        </label>\r\n        <select id=\"domain\" name=\"domain\" [(ngModel)]=\"domainTid\" required class=\"form-control\" style = \"font-weight:bold; height:40px; font-size: 16px\">\r\n            <option *ngFor=\"let domain of domainList\" [value]=\"domain.tid\">{{domain.id}}</option>\r\n        </select>\r\n    </div>\r\n\r\n<div *ngIf=\"domainTid\">\r\n\r\n    <app-display-domain [domainTid] = \"domainTid\"  (notify)=\"onNotify($event)\"></app-display-domain>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/enum/create-enum.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enum/create-enum.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form #enumForm=\"ngForm\" (ngSubmit)=\"saveEnum()\">\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Create Enum</h3>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"form-group\" [class.has-error]=\"id.invalid && id.touched\">\n                <label class=\"control-label\" for=\"id\">Id</label>\n                <input required id=\"id\" name=\"id\" [(ngModel)]=\"domainEnumModel.id\" type=\"text\" class=\"form-control\"\n                    #id=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"id.invalid && id.touched\">Id is required</span>\n            </div>\n        </div>\n        <div class=\"panel-footer\">\n            <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"enumForm.invalid\">Save</button>\n        </div>\n\n    </div>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/enum/display-enum.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enum/display-enum.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"enum\">\r\n  <div class=\"panel panel-primary\" *ngIf=\"domain\">\r\n    <div class=\"panel-heading\">\r\n      <div class=\"panel-title\">Domain {{domain.id}} - Enum {{enum.id}}\r\n        <button style=\"margin-left: 3px\" [ngStyle]=\"{'background-color':'transparent', 'color':'white'}\" mat-mini-fab\r\n          (click)=\"openDialog()\">\r\n          <mat-icon>create</mat-icon>\r\n        </button>\r\n        <button style=\"float: right\" [ngStyle]=\"{'background-color':'transparent', 'color':'white'}\"\r\n        mat-mini-fab (click)=\"back()\">\r\n        <mat-icon>arrow_back</mat-icon>\r\n    </button>        \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n      <form #enumValueForm=\"ngForm\" (ngSubmit)=\"addValue()\">\r\n        <div class=\"panel panel-primary\">\r\n          <div class=\"panel-body\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"id\">Value</label>\r\n              <input required id=\"id\" name=\"id\" [(ngModel)]=\"newEnumValue\" type=\"text\" class=\"form-control\"\r\n                #id=\"ngModel\">\r\n            </div>\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <button type=\"submit\" [disabled]=\"enumValueForm.invalid\" mat-raised-button color=\"primary\"> Add\r\n              Value</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"panel-body\">\r\n\r\n      <div class=\"panel panel-primary\" *ngIf=\"dataSource\">\r\n        <table cdk-table [dataSource]=\"dataSource\" class=\"table table-striped\">\r\n\r\n          <ng-container cdkColumnDef=\"id\">\r\n            <th cdk-header-cell *cdkHeaderCellDef> Value </th>\r\n            <td cdk-cell *cdkCellDef=\"let element\"> {{element}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <button mat-raised-button color=\"warn\" (click)=\"deleteValue(element)\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n\r\n\r\n        <div class=\"panel-footer\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"saveEnum()\"> Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/enum/edit-enum-id-dialog.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enum/edit-enum-id-dialog.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Change  enum-id </h2>\r\n\r\n\r\n<mat-dialog-content [formGroup]=\"form\">\r\n\r\n  <mat-form-field>\r\n\r\n    <input required matInput placeholder=\"enum-id\" formControlName=\"id\">\r\n\r\n  </mat-form-field>\r\n  </mat-dialog-content>\r\n\r\n  \r\n<div mat-dialog-actions>\r\n  <button  class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\r\n  <button class=\"mat-raised-button mat-primary\" [disabled]=\"form.invalid\"  (click)=\"save()\">Save</button>\r\n</div>");

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
        this.title = 'DomainStruct';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _entities_list_entities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/list-entities.component */ "./src/app/entities/list-entities.component.ts");
/* harmony import */ var _entities_create_entity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entities/create-entity.component */ "./src/app/entities/create-entity.component.ts");
/* harmony import */ var _entities_create_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entities/create-field.component */ "./src/app/entities/create-field.component.ts");
/* harmony import */ var _entities_entity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entities/entity.service */ "./src/app/entities/entity.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _entities_display_entity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entities/display-entity.component */ "./src/app/entities/display-entity.component.ts");
/* harmony import */ var _entities_display_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entities/display-field.component */ "./src/app/entities/display-field.component.ts");
/* harmony import */ var _domains_list_domains_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./domains/list-domains.component */ "./src/app/domains/list-domains.component.ts");
/* harmony import */ var _domains_display_domain_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./domains/display-domain.component */ "./src/app/domains/display-domain.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _enum_create_enum_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./enum/create-enum.component */ "./src/app/enum/create-enum.component.ts");
/* harmony import */ var _enum_enum_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./enum/enum.service */ "./src/app/enum/enum.service.ts");
/* harmony import */ var _enum_display_enum_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./enum/display-enum.component */ "./src/app/enum/display-enum.component.ts");




















const appRoutes = [
    { path: 'listDomains', component: _domains_list_domains_component__WEBPACK_IMPORTED_MODULE_13__["ListDomainsComponent"] },
    { path: 'listEntities', component: _entities_list_entities_component__WEBPACK_IMPORTED_MODULE_6__["ListEntitiesComponent"] },
    { path: 'listEntities/:domainTid', component: _entities_list_entities_component__WEBPACK_IMPORTED_MODULE_6__["ListEntitiesComponent"] },
    { path: 'listEnums/:domainTid', component: _entities_list_entities_component__WEBPACK_IMPORTED_MODULE_6__["ListEntitiesComponent"] },
    { path: 'displayEntity/:domainTid/:entityTid', component: _entities_display_entity_component__WEBPACK_IMPORTED_MODULE_11__["DisplayEntityComponent"] },
    { path: 'displayEnum/:domainTid/:enumTid', component: _enum_display_enum_component__WEBPACK_IMPORTED_MODULE_19__["DisplayEnumComponent"] },
    { path: 'createEntity/:domainTid', component: _entities_create_entity_component__WEBPACK_IMPORTED_MODULE_7__["CreateEntityComponent"] },
    { path: 'createField/:domainTid/:entityTid', component: _entities_create_field_component__WEBPACK_IMPORTED_MODULE_8__["CreateFieldComponent"] },
    { path: 'displayField/:domainTid/:entityTid/:fieldTid', component: _entities_create_field_component__WEBPACK_IMPORTED_MODULE_8__["CreateFieldComponent"] },
    { path: '', redirectTo: '/listDomains', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _entities_list_entities_component__WEBPACK_IMPORTED_MODULE_6__["ListEntitiesComponent"],
            _entities_create_entity_component__WEBPACK_IMPORTED_MODULE_7__["CreateEntityComponent"],
            _entities_create_field_component__WEBPACK_IMPORTED_MODULE_8__["CreateFieldComponent"],
            _entities_display_entity_component__WEBPACK_IMPORTED_MODULE_11__["DisplayEntityComponent"],
            _enum_display_enum_component__WEBPACK_IMPORTED_MODULE_19__["DisplayEnumComponent"],
            _entities_display_field_component__WEBPACK_IMPORTED_MODULE_12__["DisplayFieldComponent"],
            _domains_list_domains_component__WEBPACK_IMPORTED_MODULE_13__["ListDomainsComponent"],
            _domains_display_domain_component__WEBPACK_IMPORTED_MODULE_14__["DisplayDomainComponent"],
            _entities_display_entity_component__WEBPACK_IMPORTED_MODULE_11__["EditEntityIdDialog"],
            _enum_display_enum_component__WEBPACK_IMPORTED_MODULE_19__["EditEnumIdDialog"],
            _domains_display_domain_component__WEBPACK_IMPORTED_MODULE_14__["EditDomainIdDialog"],
            _enum_create_enum_component__WEBPACK_IMPORTED_MODULE_17__["CreateEnumComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_16__["DemoMaterialModule"]
        ],
        entryComponents: [
            _entities_display_entity_component__WEBPACK_IMPORTED_MODULE_11__["EditEntityIdDialog"],
            _enum_display_enum_component__WEBPACK_IMPORTED_MODULE_19__["EditEnumIdDialog"],
            _domains_display_domain_component__WEBPACK_IMPORTED_MODULE_14__["EditDomainIdDialog"]
        ],
        providers: [
            _entities_entity_service__WEBPACK_IMPORTED_MODULE_9__["EntityService"],
            _enum_enum_service__WEBPACK_IMPORTED_MODULE_18__["EnumService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/domains/display-domain.component.css":
/*!******************************************************!*\
  !*** ./src/app/domains/display-domain.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbWFpbnMvZGlzcGxheS1kb21haW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/domains/display-domain.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/domains/display-domain.component.ts ***!
  \*****************************************************/
/*! exports provided: DisplayDomainComponent, EditDomainIdDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDomainComponent", function() { return DisplayDomainComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDomainIdDialog", function() { return EditDomainIdDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entities_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/entity.service */ "./src/app/entities/entity.service.ts");
/* harmony import */ var _domain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain.service */ "./src/app/domains/domain.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _enum_enum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enum/enum.service */ "./src/app/enum/enum.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let DisplayDomainComponent = class DisplayDomainComponent {
    constructor(route, router, domainService, entityService, enumService, dialog) {
        this.route = route;
        this.router = router;
        this.domainService = domainService;
        this.entityService = entityService;
        this.enumService = enumService;
        this.dialog = dialog;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.entityDisplayedColumns = ['id', 'actions'];
        this.enumDisplayedColumns = ['id', 'actions'];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            if (this.domainTid == null) {
                this.domainTid = +params.get('domainTid');
            }
            this.domainService.getDomain(this.domainTid).subscribe((response) => {
                this.domain = response;
                this.entityDataSource = this.domain.entities;
                console.log(JSON.stringify(this.domain.enums));
                this.enumDataSource = this.domain.enums;
            });
        });
    }
    ngOnChanges() {
        this.ngOnInit();
    }
    onNotifyEntity(entityTid) {
        this.redirectToEntityDetails(entityTid);
    }
    onNotifyEnum(enumTid) {
        this.redirectToEnumDetails(enumTid);
    }
    addEntity() {
        this.router.navigate(["createEntity", this.domainTid]);
    }
    deleteEntity(entityTid) {
        this.entityService.deleteEntity(this.domainTid, entityTid).subscribe(data => {
            console.log("data after Post: " + data);
            this.domain = null;
            this.ngOnInit();
        });
    }
    deleteEnum(enumTid) {
        this.enumService.deleteEnum(this.domainTid, enumTid).subscribe(data => {
            console.log("data after Post: " + data);
            this.domain = null;
            this.ngOnInit();
        });
    }
    redirectToEntityDetails(entityTid) {
        this.router.navigate(["displayEntity", this.domainTid, entityTid]);
    }
    redirectToEnumDetails(enumTid) {
        console.log("redirectToEnumDetails enum: " + enumTid);
        this.router.navigate(["displayEnum", this.domainTid, enumTid]);
    }
    back() {
        this.router.navigate(["listDomains"]);
    }
    openDialogChangeDomainId() {
        this.newDomainId = this.domain.id;
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: this.newDomainId };
        /*  dialogRef = this.dialog.open(EditDomainIdDialog, {
           width: '250px',
           data: { id: this.newDomainId }
         });*/
        const dialogRef = this.dialog.open(EditDomainIdDialog, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            if (result == null || result == undefined) {
                return;
            }
            this.domain.id = result.id;
            this.domainService.updateDomain(this.domain).subscribe(data => {
                console.log("data after change Entity: " + data);
                this.ngOnInit();
                this.notify.emit(this.domain.tid);
            });
        });
    }
};
DisplayDomainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _domain_service__WEBPACK_IMPORTED_MODULE_4__["DomainService"] },
    { type: _entities_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] },
    { type: _enum_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DisplayDomainComponent.prototype, "domainTid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DisplayDomainComponent.prototype, "notify", void 0);
DisplayDomainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-domain',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-domain.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/domains/display-domain.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-domain.component.css */ "./src/app/domains/display-domain.component.css")).default]
    })
], DisplayDomainComponent);

let EditDomainIdDialog = class EditDomainIdDialog {
    constructor(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = this.fb.group({
            id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    save() {
        console.log("close");
        this.dialogRef.close(this.form.value);
    }
    close() {
        this.dialogRef.close();
    }
};
EditDomainIdDialog.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
EditDomainIdDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-domain-id-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-domain-id-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/domains/edit-domain-id-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], EditDomainIdDialog);



/***/ }),

/***/ "./src/app/domains/domain.service.ts":
/*!*******************************************!*\
  !*** ./src/app/domains/domain.service.ts ***!
  \*******************************************/
/*! exports provided: DomainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainService", function() { return DomainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DomainService = class DomainService {
    constructor(http) {
        this.http = http;
    }
    getDomains() {
        let obs = this.http.get('https://crud-app-builder.herokuapp.com/tmodels/');
        return obs;
    }
    getDomain(domainTid) {
        let obs = this.http.get('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid);
        return obs;
    }
    addDomain(domainModel) {
        let obs = this.http.post('https://crud-app-builder.herokuapp.com/tmodels/', domainModel);
        return obs;
    }
    updateDomain(domainModel) {
        console.log(JSON.stringify(domainModel));
        let obs = this.http.put('https://crud-app-builder.herokuapp.com/tmodels/' + domainModel.tid, domainModel);
        return obs;
    }
    deleteDomain(domainTid) {
        console.log("delete Domain " + domainTid);
        let obs = this.http.delete('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid);
        return obs;
    }
    getEntityById(domainModel, entityId) {
        return domainModel.entities.find(e => e.id == entityId);
    }
    getEntityByTid(domainModel, entityTid) {
        return domainModel.entities.find(e => e.tid == entityTid);
    }
};
DomainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DomainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DomainService);



/***/ }),

/***/ "./src/app/domains/list-domains.component.css":
/*!****************************************************!*\
  !*** ./src/app/domains/list-domains.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 95%;\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  th {\r\n    text-align: left;\r\n  }\r\n  \r\n  .half {\r\n    width: 50%;   \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9tYWlucy9saXN0LWRvbWFpbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9kb21haW5zL2xpc3QtZG9tYWlucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmhhbGYge1xyXG4gICAgd2lkdGg6IDUwJTsgICBcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/domains/list-domains.component.ts":
/*!***************************************************!*\
  !*** ./src/app/domains/list-domains.component.ts ***!
  \***************************************************/
/*! exports provided: ListDomainsComponent, DomainListDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDomainsComponent", function() { return ListDomainsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainListDataSource", function() { return DomainListDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _domain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain.service */ "./src/app/domains/domain.service.ts");





let ListDomainsComponent = class ListDomainsComponent {
    constructor(router, domainService) {
        this.router = router;
        this.domainService = domainService;
        this.displayedColumns = ['id', 'actions'];
        this.dataSource = new DomainListDataSource(this.router, this.domainService);
        this.redirectToDetails = (tid) => {
            this.router.navigate(["listEntities", tid]);
        };
        this.redirectToDelete = (tid) => {
            this.domainService.deleteDomain(tid).subscribe(data => {
                console.log("data after Delete: " + data);
                this.ngOnInit();
            });
        };
    }
    ngOnInit() {
        this.newDomain = {
            tid: null,
            id: null,
            entities: null,
            enums: null
        };
        this.dataSource = new DomainListDataSource(this.router, this.domainService);
    }
    saveDomain() {
        console.log(this.newDomain);
        this.domainService.addDomain(this.newDomain).subscribe(data => {
            this.router.navigate(["listEntities", data.tid]);
        });
    }
};
ListDomainsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _domain_service__WEBPACK_IMPORTED_MODULE_4__["DomainService"] }
];
ListDomainsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-list-domains',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-domains.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/domains/list-domains.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-domains.component.css */ "./src/app/domains/list-domains.component.css")).default]
    })
], ListDomainsComponent);

class DomainListDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(router, domainService) {
        super();
        this.router = router;
        this.domainService = domainService;
        this.data = (this.domainService.getDomains());
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}


/***/ }),

/***/ "./src/app/entities/create-entity.component.css":
/*!******************************************************!*\
  !*** ./src/app/entities/create-entity.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWF0ZS1lbnRpdHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entities/create-entity.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/entities/create-entity.component.ts ***!
  \*****************************************************/
/*! exports provided: CreateEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEntityComponent", function() { return CreateEntityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity.service */ "./src/app/entities/entity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CreateEntityComponent = class CreateEntityComponent {
    constructor(route, router, _entityService) {
        this.route = route;
        this.router = router;
        this._entityService = _entityService;
        this.domainTid = null;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.domainEntityModel = {
            tid: null,
            id: null,
            fields: null
        };
    }
    ngOnInit() {
        if (this.domainTid == null) {
            this.route.paramMap.subscribe(params => {
                this.domainTid = params.get('domainTid') == null ? null : +params.get('domainTid');
            });
        }
    }
    saveEntity() {
        console.log(this.domainEntityModel);
        this._entityService.addEntity(this.domainTid, this.domainEntityModel).subscribe(data => {
            this.domainEntityModel = data;
            this.router.navigate(["listEntities", this.domainTid]);
            this.notify.emit(this.domainEntityModel.tid);
        });
    }
};
CreateEntityComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateEntityComponent.prototype, "domainTid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreateEntityComponent.prototype, "notify", void 0);
CreateEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-entity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-entity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/create-entity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-entity.component.css */ "./src/app/entities/create-entity.component.css")).default]
    })
], CreateEntityComponent);



/***/ }),

/***/ "./src/app/entities/create-field.component.css":
/*!*****************************************************!*\
  !*** ./src/app/entities/create-field.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWF0ZS1maWVsZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/entities/create-field.component.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/create-field.component.ts ***!
  \****************************************************/
/*! exports provided: CreateFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFieldComponent", function() { return CreateFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _domains_domain_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domains/domain.service */ "./src/app/domains/domain.service.ts");
/* harmony import */ var _model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/field.cardinality.model */ "./src/app/model/field.cardinality.model.ts");
/* harmony import */ var _model_field_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/field.model */ "./src/app/model/field.model.ts");
/* harmony import */ var _model_field_type_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/field.type.model */ "./src/app/model/field.type.model.ts");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entity.service */ "./src/app/entities/entity.service.ts");










let CreateFieldComponent = class CreateFieldComponent {
    constructor(fb, route, router, domainService, entityService, dialogRef, data) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.domainService = domainService;
        this.entityService = entityService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fieldTypes = Object.entries(_model_field_type_model__WEBPACK_IMPORTED_MODULE_8__["FieldType"]);
        this.fieldCardinalities = Object.entries(_model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_6__["FieldCardinality"]);
        this.fieldTid = null;
        this.fieldId = null;
        this.fieldOptional = null;
        this.fieldIdentifier = null;
        this.fieldType = null;
        this.fieldMultiple = null;
        this.fieldCardinality = null;
        this.fieldReferenceId = null;
        this.fieldNew = null;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var domainTid;
            if (!this.data.enityTid) {
                this.entityTid = params.get('entityTid') == null ? null : +params.get('entityTid');
                this.fieldTid = params.get('fieldTid') == null ? null : +params.get('fieldTid');
                domainTid = +params.get('domainTid');
            }
            else {
                this.entityTid = this.data.enityTid;
                this.fieldTid = this.data.fieldTid;
                domainTid = this.data.domainTid;
            }
            this.fieldNew = this.fieldTid == null;
            this.domainService.getDomain(domainTid).subscribe((response) => {
                this.domain = response;
                this.entity = this.domainService.getEntityByTid(this.domain, this.entityTid);
                if (!this.fieldNew) {
                    const field = this.entityService.getField(this.entity, this.fieldTid);
                    this.fieldId = field.id;
                    this.fieldOptional = field.optional;
                    this.fieldIdentifier = field.identifier;
                    this.fieldType = field.type;
                    if (field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_8__["FieldType"].ENTITY || field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_8__["FieldType"].ENUM) {
                        this.fieldReferenceId = field.referenceId;
                    }
                    if (field.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_8__["FieldType"].ENTITY) {
                        this.fieldCardinality = field.cardinality;
                    }
                    else {
                        this.fieldMultiple = field.cardinality == _model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_6__["FieldCardinality"].ONE_TO_MANY;
                    }
                }
                this.form = this.fb.group({
                    id: [this.fieldId],
                    optional: [this.fieldOptional],
                    identifier: [this.fieldIdentifier],
                    type: [this.fieldType],
                    multiple: [this.fieldMultiple],
                    cardinality: [this.fieldCardinality],
                    referenceId: [this.fieldReferenceId]
                });
            });
        });
    }
    getReferences() {
        if (this.isOfEntityType()) {
            return this.domain.entities;
        }
        else if (this.isOfEnumType()) {
            return this.domain.enums;
        }
    }
    isOptionalFieldVisible() {
        return !this.form.get("identifier").value;
    }
    isCardinalityFieldVisible() {
        return this.isOfEntityType();
    }
    isReferenceFieldVisible() {
        return this.isOfEntityType() || this.isOfEnumType();
    }
    isMultipleFieldVisible() {
        return !this.isOfEntityType();
    }
    isOfEntityType() {
        return this.form.get("type").value == "ENTITY";
    }
    isOfEnumType() {
        return this.form.get("type").value == "ENUM";
    }
    saveEntity() {
        const domainEntityFieldModel = new _model_field_model__WEBPACK_IMPORTED_MODULE_7__["DomainEntityFieldModel"]();
        console.log("(this.fieldId-- " + JSON.stringify(this.form.value));
        console.log("(this.fieldId-- " + JSON.stringify(this.form.value.id));
        domainEntityFieldModel.tid = this.fieldTid;
        domainEntityFieldModel.id = this.form.value.id;
        domainEntityFieldModel.identifier = this.form.value.identifier;
        domainEntityFieldModel.optional = this.form.value.optional;
        domainEntityFieldModel.type = this.form.value.type;
        if (this.form.value.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_8__["FieldType"].ENTITY) {
            domainEntityFieldModel.cardinality = this.form.value.cardinality;
            domainEntityFieldModel.referenceId = this.form.value.referenceId;
        }
        else if (this.form.value.type == _model_field_type_model__WEBPACK_IMPORTED_MODULE_8__["FieldType"].ENUM) {
            domainEntityFieldModel.referenceId = this.form.value.referenceId;
        }
        if (this.form.value.type != _model_field_type_model__WEBPACK_IMPORTED_MODULE_8__["FieldType"].ENTITY) {
            domainEntityFieldModel.cardinality = this.form.value.multiple ? _model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_6__["FieldCardinality"][_model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_6__["FieldCardinality"].ONE_TO_MANY] : _model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_6__["FieldCardinality"][_model_field_cardinality_model__WEBPACK_IMPORTED_MODULE_6__["FieldCardinality"].ONE_TO_ONE];
        }
        if (this.fieldNew) {
            this.entityService.addField(this.domain.tid, this.entityTid, domainEntityFieldModel).subscribe(data => {
                console.log("data after Post: " + data.tid);
                this.leave();
            });
        }
        else {
            this.entityService.updateField(this.domain.tid, this.entityTid, domainEntityFieldModel).subscribe(data => {
                console.log("data after Put: " + data.tid);
                this.leave();
            });
        }
    }
    leave() {
        if (this.data) {
            this.dialogRef.close();
        }
        else {
            this.router.navigate(["displayEntity", this.domain.tid, this.entityTid]);
        }
    }
    back() {
        this.leave();
    }
};
CreateFieldComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _domains_domain_service__WEBPACK_IMPORTED_MODULE_5__["DomainService"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_9__["EntityService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
CreateFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-field',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-field.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/create-field.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-field.component.css */ "./src/app/entities/create-field.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], CreateFieldComponent);



/***/ }),

/***/ "./src/app/entities/display-entity.component.css":
/*!*******************************************************!*\
  !*** ./src/app/entities/display-entity.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2Rpc3BsYXktZW50aXR5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/entities/display-entity.component.ts":
/*!******************************************************!*\
  !*** ./src/app/entities/display-entity.component.ts ***!
  \******************************************************/
/*! exports provided: DisplayEntityComponent, EditEntityIdDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayEntityComponent", function() { return DisplayEntityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntityIdDialog", function() { return EditEntityIdDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity.service */ "./src/app/entities/entity.service.ts");
/* harmony import */ var _domains_domain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domains/domain.service */ "./src/app/domains/domain.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _create_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-field.component */ "./src/app/entities/create-field.component.ts");









let DisplayEntityComponent = class DisplayEntityComponent {
    constructor(route, router, domainService, entityService, dialog) {
        this.route = route;
        this.router = router;
        this.domainService = domainService;
        this.entityService = entityService;
        this.dialog = dialog;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // , <!-- 
        this.displayedColumns = ['id', 'identifier', 'type', 'cardinality', 'optional', 'referenceId', 'actions'];
    }
    ngOnInit() {
        if (this.entity != null) {
            return;
        }
        this.route.paramMap.subscribe(params => {
            const domainTid = +params.get('domainTid');
            const entityTid = +params.get('entityTid');
            this.domainService.getDomain(domainTid).subscribe((response) => {
                this.domain = response;
            });
            this.entityService.getEntity(domainTid, entityTid).subscribe((response) => {
                this.entity = response;
                this.dataSource = this.entity.fields;
            });
        });
    }
    addField() {
        console.log("add Field " + this.domain.tid, this.entity.tid);
        //this.router.navigate(["createField", this.domain.tid, this.entity.tid]);
        this.redirectToField(null);
    }
    deleteField(fieldTid) {
        this.entityService.deleteField(this.domain.tid, this.entity.tid, fieldTid).subscribe(data => {
            console.log("data after Delete: " + data);
            this.entity = null;
            this.ngOnInit();
        });
    }
    redirectToField(fieldTid) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '700px';
        dialogConfig.data = {
            domainTid: this.domain.tid,
            enityTid: this.entity.tid,
            fieldTid: fieldTid
        };
        const dialogRef = this.dialog.open(_create_field_component__WEBPACK_IMPORTED_MODULE_7__["CreateFieldComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            this.entity = null;
            this.ngOnInit();
        });
    }
    onNotify() {
        this.entityService.getEntity(this.domain.tid, this.entity.tid).subscribe(data => {
            this.entity = data;
        });
    }
    back() {
        this.router.navigate(["listEntities", this.domain.tid]);
    }
    openDialogChangeEntityId() {
        this.newEntityId = this.entity.id;
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: this.newEntityId,
            domainTid: this.domain.tid,
            entity: this.entity
        };
        /*  dialogRef = this.dialog.open(EditDomainIdDialog, {
           width: '250px',
           data: { id: this.newDomainId }
         });*/
        const dialogRef = this.dialog.open(EditEntityIdDialog, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            if (result == null || result == undefined) {
                return;
            }
        });
    }
};
DisplayEntityComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _domains_domain_service__WEBPACK_IMPORTED_MODULE_4__["DomainService"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DisplayEntityComponent.prototype, "domain", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DisplayEntityComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DisplayEntityComponent.prototype, "notify", void 0);
DisplayEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-entity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-entity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/display-entity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-entity.component.css */ "./src/app/entities/display-entity.component.css")).default]
    })
], DisplayEntityComponent);

let EditEntityIdDialog = class EditEntityIdDialog {
    constructor(entityService, fb, dialogRef, data) {
        this.entityService = entityService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = this.fb.group({
            id: [data.entity.id, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    save() {
        this.data.entity.id = this.form.value.id;
        this.entityService.updateEntity(this.data.domainTid, this.data.entity).subscribe(data => {
            console.log("data after change Entity: " + JSON.stringify(data));
            this.ngOnInit();
            this.dialogRef.close(this.form.value);
        });
    }
    close() {
        this.dialogRef.close();
    }
};
EditEntityIdDialog.ctorParameters = () => [
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
EditEntityIdDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-entity-id-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-entity-id-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/edit-entity-id-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], EditEntityIdDialog);



/***/ }),

/***/ "./src/app/entities/display-field.component.css":
/*!******************************************************!*\
  !*** ./src/app/entities/display-field.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2Rpc3BsYXktZmllbGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entities/display-field.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/entities/display-field.component.ts ***!
  \*****************************************************/
/*! exports provided: DisplayFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayFieldComponent", function() { return DisplayFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity.service */ "./src/app/entities/entity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _domains_domain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domains/domain.service */ "./src/app/domains/domain.service.ts");






let DisplayFieldComponent = class DisplayFieldComponent {
    constructor(route, domainService, entityService) {
        this.route = route;
        this.domainService = domainService;
        this.entityService = entityService;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.entity != null) {
            return;
        }
        this.route.paramMap.subscribe(params => {
            const domainTid = params.get('domainTid') == null ? null : +params.get('domainTid');
            const entityTid = params.get('entityTid') == null ? null : +params.get('entityTid');
            const fieldTid = params.get('fieldTid') == null ? null : +params.get('fieldTid');
            this.domainService.getDomain(domainTid).subscribe((response) => {
                this.model = response;
            });
            this.entityService.getEntity(domainTid, entityTid).subscribe((response) => {
                this.entity = response;
                this.field = this.entityService.getField(response, fieldTid);
            });
            this.entity;
        });
    }
};
DisplayFieldComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _domains_domain_service__WEBPACK_IMPORTED_MODULE_4__["DomainService"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DisplayFieldComponent.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DisplayFieldComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DisplayFieldComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DisplayFieldComponent.prototype, "notify", void 0);
DisplayFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-field',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-field.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/display-field.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-field.component.css */ "./src/app/entities/display-field.component.css")).default]
    })
], DisplayFieldComponent);



/***/ }),

/***/ "./src/app/entities/entity.service.ts":
/*!********************************************!*\
  !*** ./src/app/entities/entity.service.ts ***!
  \********************************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let EntityService = class EntityService {
    constructor(http) {
        this.http = http;
    }
    getEntity(domainTid, entityTid) {
        let obs = this.http.get('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/entities/' + entityTid);
        return obs;
    }
    addEntity(domainTid, domainEntityModel) {
        let obs = this.http.post('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/entities', domainEntityModel);
        return obs;
    }
    updateEntity(domainTid, domainEntityModel) {
        console.log(JSON.stringify(domainEntityModel));
        let obs = this.http.put('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/entities/' + domainEntityModel.tid, domainEntityModel);
        return obs;
    }
    deleteEntity(domainTid, entityTid) {
        console.log("delete Entity " + entityTid);
        let obs = this.http.delete('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/entities/' + entityTid);
        return obs;
    }
    addField(domainTid, entityTid, domainEntityFieldModel) {
        console.log(JSON.stringify(domainEntityFieldModel));
        let obs = this.http.post('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/entities/' + entityTid, domainEntityFieldModel);
        return obs;
    }
    updateField(domainTid, entityTid, domainEntityFieldModel) {
        console.log(JSON.stringify(domainEntityFieldModel));
        let obs = this.http.put('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/entities/' + entityTid + '/fields/' + domainEntityFieldModel.tid, domainEntityFieldModel);
        return obs;
    }
    deleteField(domainTid, entityTid, fieldTid) {
        console.log("delete Field " + entityTid + "/" + fieldTid);
        let obs = this.http.delete('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/entities/' + entityTid + "/fields/" + fieldTid);
        return obs;
    }
    getField(entity, fieldTid) {
        return entity.fields.find(p => p.tid == fieldTid);
    }
};
EntityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EntityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], EntityService);



/***/ }),

/***/ "./src/app/entities/list-entities.component.css":
/*!******************************************************!*\
  !*** ./src/app/entities/list-entities.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2xpc3QtZW50aXRpZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entities/list-entities.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/entities/list-entities.component.ts ***!
  \*****************************************************/
/*! exports provided: ListEntitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEntitiesComponent", function() { return ListEntitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity.service */ "./src/app/entities/entity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _domains_domain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domains/domain.service */ "./src/app/domains/domain.service.ts");





let ListEntitiesComponent = class ListEntitiesComponent {
    constructor(route, router, domainService, entityService) {
        this.route = route;
        this.router = router;
        this.domainService = domainService;
        this.entityService = entityService;
    }
    ngOnInit() {
        this.loadDomainList();
        this.route.paramMap.subscribe(params => {
            this.domainTid = params.get('domainTid') == null ? null : +params.get('domainTid');
        });
    }
    loadDomainList() {
        this.domainService.getDomains().subscribe((response) => {
            this.domainList = response;
            ;
        });
    }
    addEntity(modelTid) {
        console.log("add Entity " + modelTid);
        this.router.navigate(["createEntity", modelTid]);
    }
    onNotify(domainTid) {
        this.domainTid = domainTid;
        this.loadDomainList();
    }
};
ListEntitiesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _domains_domain_service__WEBPACK_IMPORTED_MODULE_4__["DomainService"] },
    { type: _entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }
];
ListEntitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-entities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/list-entities.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-entities.component.css */ "./src/app/entities/list-entities.component.css")).default]
    })
], ListEntitiesComponent);



/***/ }),

/***/ "./src/app/enum/create-enum.component.css":
/*!************************************************!*\
  !*** ./src/app/enum/create-enum.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudW0vY3JlYXRlLWVudW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/enum/create-enum.component.ts":
/*!***********************************************!*\
  !*** ./src/app/enum/create-enum.component.ts ***!
  \***********************************************/
/*! exports provided: CreateEnumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEnumComponent", function() { return CreateEnumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _enum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enum.service */ "./src/app/enum/enum.service.ts");




let CreateEnumComponent = class CreateEnumComponent {
    constructor(route, router, enumService) {
        this.route = route;
        this.router = router;
        this.enumService = enumService;
        this.domainTid = null;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.domainEnumModel = {
            tid: null,
            id: null,
            enumInstances: null
        };
    }
    ngOnInit() {
        if (this.domainTid == null) {
            this.route.paramMap.subscribe(params => {
                this.domainTid = params.get('domainTid') == null ? null : +params.get('domainTid');
            });
        }
    }
    saveEnum() {
        this.enumService.addEnum(this.domainTid, this.domainEnumModel).subscribe(data => {
            this.domainEnumModel = data;
            this.router.navigate(["listEnums", this.domainTid]);
            this.notify.emit(this.domainEnumModel.tid);
        });
    }
};
CreateEnumComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateEnumComponent.prototype, "domainTid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreateEnumComponent.prototype, "notify", void 0);
CreateEnumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-enum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-enum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/enum/create-enum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-enum.component.css */ "./src/app/enum/create-enum.component.css")).default]
    })
], CreateEnumComponent);



/***/ }),

/***/ "./src/app/enum/display-enum.component.css":
/*!*************************************************!*\
  !*** ./src/app/enum/display-enum.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudW0vZGlzcGxheS1lbnVtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/enum/display-enum.component.ts":
/*!************************************************!*\
  !*** ./src/app/enum/display-enum.component.ts ***!
  \************************************************/
/*! exports provided: DisplayEnumComponent, EditEnumIdDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayEnumComponent", function() { return DisplayEnumComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEnumIdDialog", function() { return EditEnumIdDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _domains_domain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domains/domain.service */ "./src/app/domains/domain.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _enum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enum.service */ "./src/app/enum/enum.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let DisplayEnumComponent = class DisplayEnumComponent {
    constructor(route, router, domainService, enumService, dialog) {
        this.route = route;
        this.router = router;
        this.domainService = domainService;
        this.enumService = enumService;
        this.dialog = dialog;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newEnumValue = null;
        this.newEnumId = null;
        this.displayedColumns = ['id', 'actions'];
    }
    ngOnInit() {
        if (this.enum != null) {
            return;
        }
        this.route.paramMap.subscribe(params => {
            const domainTid = +params.get('domainTid');
            const enumTid = +params.get('enumTid');
            this.domainService.getDomain(domainTid).subscribe((response) => {
                this.domain = response;
            });
            this.enumService.getEnum(domainTid, enumTid).subscribe((response) => {
                this.enum = response;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
                this.dataSource.data = this.enum.enumInstances;
                console.log(JSON.stringify(this.domain));
            });
        });
    }
    addValue() {
        console.log(this.newEnumValue);
        const index = this.enum.enumInstances.indexOf(this.newEnumValue);
        if (index < 0) {
            this.enum.enumInstances.push(this.newEnumValue);
            console.log(JSON.stringify(this.enum.enumInstances));
            this.dataSource.data = this.enum.enumInstances;
        }
        this.newEnumValue = "";
    }
    deleteValue(value) {
        console.log(value);
        const index = this.enum.enumInstances.indexOf(value);
        if (index > -1) {
            this.enum.enumInstances.splice(index, 1);
            this.dataSource.data = this.enum.enumInstances;
        }
    }
    onNotify() {
        this.enumService.getEnum(this.domain.tid, this.enum.tid).subscribe(data => {
            this.enum = data;
        });
    }
    saveEnum() {
        console.log(JSON.stringify(this.enum));
        this.enumService.updateEnum(this.domain.tid, this.enum).subscribe(data => {
            this.enum = data;
            this.notify.emit(this.enum.tid);
            this.router.navigate(["listEnums", this.domain.tid]);
        });
    }
    back() {
        this.router.navigate(["listEnums", this.domain.tid]);
    }
    openDialog() {
        this.newEnumId = this.enum.id;
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: this.newEnumId };
        /*  dialogRef = this.dialog.open(EditDomainIdDialog, {
           width: '250px',
           data: { id: this.newDomainId }
         });*/
        const dialogRef = this.dialog.open(EditEnumIdDialog, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            this.enum.id = result.id;
            this.enumService.updateEnum(this.domain.tid, this.enum).subscribe(data => {
                this.ngOnInit();
            });
        });
    }
};
DisplayEnumComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _domains_domain_service__WEBPACK_IMPORTED_MODULE_3__["DomainService"] },
    { type: _enum_service__WEBPACK_IMPORTED_MODULE_5__["EnumService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DisplayEnumComponent.prototype, "domain", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DisplayEnumComponent.prototype, "enum", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DisplayEnumComponent.prototype, "notify", void 0);
DisplayEnumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-enum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-enum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/enum/display-enum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-enum.component.css */ "./src/app/enum/display-enum.component.css")).default]
    })
], DisplayEnumComponent);

let EditEnumIdDialog = class EditEnumIdDialog {
    constructor(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.id = data.id;
        this.form = this.fb.group({
            id: [data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    save() {
        console.log("close");
        this.dialogRef.close(this.form.value);
    }
    close() {
        this.dialogRef.close();
    }
};
EditEnumIdDialog.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
EditEnumIdDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-enum-id-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-enum-id-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/enum/edit-enum-id-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], EditEnumIdDialog);



/***/ }),

/***/ "./src/app/enum/enum.service.ts":
/*!**************************************!*\
  !*** ./src/app/enum/enum.service.ts ***!
  \**************************************/
/*! exports provided: EnumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumService", function() { return EnumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EnumService = class EnumService {
    constructor(http) {
        this.http = http;
    }
    getEnum(domainTid, enumTid) {
        let obs = this.http.get('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/enums/' + enumTid);
        return obs;
    }
    addEnum(domainTid, domainEnumModel) {
        if (!domainEnumModel.enumInstances) {
            domainEnumModel.enumInstances = [];
        }
        let obs = this.http.post('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/enums', domainEnumModel);
        return obs;
    }
    updateEnum(domainTid, domainEnumModel) {
        let obs = this.http.put('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/enums/' + domainEnumModel.tid, domainEnumModel);
        return obs;
    }
    deleteEnum(domainTid, enumTid) {
        console.log("delete Enum " + enumTid);
        let obs = this.http.delete('https://crud-app-builder.herokuapp.com/tmodels/' + domainTid + '/enums/' + enumTid);
        return obs;
    }
};
EnumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EnumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EnumService);



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

/***/ "./src/app/model/field.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/field.model.ts ***!
  \**************************************/
/*! exports provided: DomainEntityFieldModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainEntityFieldModel", function() { return DomainEntityFieldModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DomainEntityFieldModel {
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

module.exports = __webpack_require__(/*! C:\projekte\domainbuilder\client\domainstruct\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map