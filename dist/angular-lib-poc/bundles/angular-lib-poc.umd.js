(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-lib-poc', ['exports', '@angular/core'], factory) :
    (factory((global['angular-lib-poc'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-lib-poc.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularLibPocService = /** @class */ (function () {
        function AngularLibPocService() {
        }
        AngularLibPocService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularLibPocService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularLibPocService.ngInjectableDef = i0.defineInjectable({ factory: function AngularLibPocService_Factory() { return new AngularLibPocService(); }, token: AngularLibPocService, providedIn: "root" });
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
            { type: i0.Component, args: [{
                        selector: 'lib-angular-lib-poc',
                        template: "\n    <p>\n      angular-lib-poc works!\n    </p>\n  ",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: ['./lib-angular-lib-poc.css']
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
            { type: i0.NgModule, args: [{
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

    exports.AngularLibPocService = AngularLibPocService;
    exports.AngularLibPocComponent = AngularLibPocComponent;
    exports.AngularLibPocModule = AngularLibPocModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-lib-poc.umd.js.map