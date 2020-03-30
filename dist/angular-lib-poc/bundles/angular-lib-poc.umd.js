(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-lib-poc', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['angular-lib-poc'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,i0) { 'use strict';

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
                        styles: [".form-control{background-color:red}"]
                    }] }
        ];
        /** @nocollapse */
        AngularLibPocComponent.ctorParameters = function () { return []; };
        return AngularLibPocComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modulo2/componente2/componente2.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Componente2Component = /** @class */ (function () {
        function Componente2Component() {
        }
        /**
         * @return {?}
         */
        Componente2Component.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        Componente2Component.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-componente2',
                        template: "<p>\n  componente2 works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        Componente2Component.ctorParameters = function () { return []; };
        return Componente2Component;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modulo2/modulo2.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Modulo2Module = /** @class */ (function () {
        function Modulo2Module() {
        }
        Modulo2Module.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [Componente2Component],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return Modulo2Module;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modulo1/componente1/componente1.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Componente1Component = /** @class */ (function () {
        function Componente1Component() {
        }
        /**
         * @return {?}
         */
        Componente1Component.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        Componente1Component.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-componente1',
                        template: "<p>\n  componente1 works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        Componente1Component.ctorParameters = function () { return []; };
        return Componente1Component;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modulo1/modulo1.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Modulo1Module = /** @class */ (function () {
        function Modulo1Module() {
        }
        Modulo1Module.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [Componente1Component],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return Modulo1Module;
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
                        imports: [
                            Modulo1Module,
                            Modulo2Module,
                        ],
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
    exports.ɵb = Componente1Component;
    exports.ɵa = Modulo1Module;
    exports.ɵd = Componente2Component;
    exports.ɵc = Modulo2Module;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-lib-poc.umd.js.map