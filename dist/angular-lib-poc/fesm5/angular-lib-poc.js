import { Injectable, Component, ViewEncapsulation, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-lib-poc.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularLibPocService = /** @class */ (function () {
    function AngularLibPocService() {
    }
    AngularLibPocService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularLibPocService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularLibPocService.ngInjectableDef = defineInjectable({ factory: function AngularLibPocService_Factory() { return new AngularLibPocService(); }, token: AngularLibPocService, providedIn: "root" });
    return AngularLibPocService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-lib-poc.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularLibPocComponent = /** @class */ (function () {
    function AngularLibPocComponent() {
    }
    /**
     * @return {?}
     */
    AngularLibPocComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AngularLibPocComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-angular-lib-poc',
                    template: "\n    <p>\n      angular-lib-poc works!\n    </p>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".form-control{background-color:red}"]
                }] }
    ];
    /** @nocollapse */
    AngularLibPocComponent.ctorParameters = function () { return []; };
    return AngularLibPocComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-lib-poc.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularLibPocModule = /** @class */ (function () {
    function AngularLibPocModule() {
    }
    AngularLibPocModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AngularLibPocComponent],
                    imports: [],
                    exports: [AngularLibPocComponent]
                },] }
    ];
    return AngularLibPocModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-lib-poc.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularLibPocService, AngularLibPocComponent, AngularLibPocModule };

//# sourceMappingURL=angular-lib-poc.js.map