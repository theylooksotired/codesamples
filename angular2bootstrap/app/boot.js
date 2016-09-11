System.register(['angular2/platform/browser', './app.component', './menu.component', './item.component', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, menu_component_1, item_component_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(menu_component_1.MenuComponent, [http_1.HTTP_PROVIDERS]);
            browser_1.bootstrap(item_component_1.ItemComponent, [http_1.HTTP_PROVIDERS]);
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map