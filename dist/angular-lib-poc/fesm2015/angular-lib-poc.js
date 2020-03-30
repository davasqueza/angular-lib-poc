import { CommonModule } from '@angular/common';
import { Injectable, NgModule, Component, ViewEncapsulation, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-lib-poc.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularLibPocService {
    constructor() { }
}
AngularLibPocService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularLibPocService.ctorParameters = () => [];
/** @nocollapse */ AngularLibPocService.ngInjectableDef = defineInjectable({ factory: function AngularLibPocService_Factory() { return new AngularLibPocService(); }, token: AngularLibPocService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-lib-poc.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularLibPocComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AngularLibPocComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-lib-poc',
                template: `
    <p>
      angular-lib-poc works!
    </p>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: [".form-control{background-color:red}"]
            }] }
];
/** @nocollapse */
AngularLibPocComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modulo2/componente2/componente2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Componente2Component {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
Componente2Component.decorators = [
    { type: Component, args: [{
                selector: 'lib-componente2',
                template: "<p>\n  componente2 works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
Componente2Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modulo2/modulo2.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Modulo2Module {
}
Modulo2Module.decorators = [
    { type: NgModule, args: [{
                declarations: [Componente2Component],
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modulo1/componente1/componente1.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Componente1Component {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
Componente1Component.decorators = [
    { type: Component, args: [{
                selector: 'lib-componente1',
                template: "<p>\n  componente1 works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
Componente1Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modulo1/modulo1.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Modulo1Module {
}
Modulo1Module.decorators = [
    { type: NgModule, args: [{
                declarations: [Componente1Component],
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-lib-poc.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularLibPocModule {
}
AngularLibPocModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AngularLibPocComponent],
                imports: [
                    Modulo1Module,
                    Modulo2Module,
                ],
                exports: [AngularLibPocComponent]
            },] }
];

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

export { AngularLibPocService, AngularLibPocComponent, AngularLibPocModule, Componente1Component as ɵb, Modulo1Module as ɵa, Componente2Component as ɵd, Modulo2Module as ɵc };

//# sourceMappingURL=angular-lib-poc.js.map