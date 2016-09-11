System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent() {
                    this.groups = [
                        { id: 'title', name: 'Titles', items: [
                                { id: 'title-application', name: 'Title application' },
                                { id: 'title-page', name: 'Title page' },
                                { id: 'indication', name: 'Indication' },
                                { id: 'title-blocks', name: 'Title blocks' }
                            ] },
                        { id: 'buttons', name: 'Buttons', items: [
                                { id: 'button', name: 'Button normal' },
                                { id: 'button-normal', name: 'Button abnormal' },
                                { id: 'button-riche', name: 'Button rich' }
                            ] },
                        { id: 'blocks', name: 'Blocks', items: [
                                { id: 'block1', name: 'Block 1' },
                                { id: 'block2', name: 'Block 2' }
                            ] },
                        { id: 'forms', name: 'Forms', items: [
                                { id: 'simple-form', name: 'Simple form' }
                            ] }
                    ];
                    this.menuChange = function (idItem) {
                        console.log(idItem);
                    };
                }
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'ce-menu',
                        templateUrl: 'app/templates/ce-menu.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map