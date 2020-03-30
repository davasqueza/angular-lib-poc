import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

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
  `
            }] }
];
/** @nocollapse */
AngularLibPocComponent.ctorParameters = () => [];

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
                imports: [],
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

export { AngularLibPocService, AngularLibPocComponent, AngularLibPocModule };

//# sourceMappingURL=angular-lib-poc.js.map