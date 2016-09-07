System.register(['angular2/core'], function(exports_1) {
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
    var ItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ItemComponent = (function () {
                function ItemComponent() {
                    this.info = {
                        id: 'bouton',
                        name: 'Bouton',
                        shortDescription: 'Displays collapsible content panels for presenting information in a limited amount of space.',
                        description: "<p>Les boutons d'actions d\u00E9clenchent un traitement qui engage la responsabilit\u00E9 de l'utilisateur. Ils ne doivent jamais servir comme moyen de navigation mais uniquement pour d\u00E9clencher un traitement (sauf le bouton Retour).</p>\n\t\t\t\t<p>Pour savoir combiner les boutons correctement, consultez les cin\u00E9matiques.</p>\n\t\t\t\t<p>Se reporter au r\u00E9f\u00E9rentiel d'accessibilit\u00E9 des pages web du groupe pour trouver toutes les r\u00E8gles et bonnes pratiques en termes d'accessibilit\u00E9 \u00E0 mettre en \u0153uvre pour permettre aux personnes pr\u00E9sentant un handicap visuel, moteur ou cognitif d'utiliser une application.</p>\n\t\t\t\t<p>Si vous avez besoin d'un autre bouton que ceux ci-dessous, contactez ACM Organisation ou EIDP Ergonomie des normes intranet/internet.</p>\n\t\t\t\t<div class=\"alert alert-success\" role=\"alert\">Well done! You successfully read this important alert message.</div>\n\t\t\t\t<div class=\"alert alert-info\" role=\"alert\">Heads up! This alert needs your attention, but it's not super important.</div>\n\t\t\t\t<div class=\"alert alert-warning\" role=\"alert\">Warning! Better check yourself, you're not looking too good.</div>\n\t\t\t\t<div class=\"alert alert-danger\" role=\"alert\">Oh snap! Change a few things up and try submitting again.</div>",
                        example: "<iframe style=\"width:100%;height:400px;border:0;background:#EFEFEF;margin-top:5px;\"></iframe>",
                        codes: [
                            {
                                id: 'devBooster',
                                label: 'Code DevBooster',
                                language: 'markup',
                                code: "&lt;?xml version=&quot;1.0&quot;?&gt;\n&lt;response value=&quot;ok&quot; xml:lang=&quot;en&quot;&gt;\n  &lt;text&gt;Ok&lt;/text&gt;\n  &lt;comment html_allowed=&quot;true&quot;/&gt;\n  &lt;ns1:description&gt;&lt;![CDATA[\n  CDATA is &lt;not&gt; magical.\n  ]]&gt;&lt;/ns1:description&gt;\n  &lt;a&gt;&lt;/a&gt; &lt;a/&gt;\n&lt;/response&gt;"
                            },
                            {
                                id: 'html',
                                label: 'HTML',
                                language: 'markup',
                                code: "&lt;!DOCTYPE html&gt;\n&lt;title&gt;Title&lt;/title&gt;\n\n&lt;style&gt;body {width: 500px;}&lt;/style&gt;\n\n&lt;script type=&quot;application/javascript&quot;&gt;\n  function $init() {return true;}\n&lt;/script&gt;\n\n&lt;body&gt;\n  &lt;p checked class=&quot;title&quot; id=&#39;title&#39;&gt;Title&lt;/p&gt;\n  &lt;!-- here goes the rest of the page --&gt;\n&lt;/body&gt;"
                            },
                            {
                                id: 'css',
                                label: 'CSS',
                                language: 'css',
                                code: "input {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}"
                            },
                            {
                                id: 'js',
                                label: 'JavaScript',
                                language: 'js',
                                code: "System.register(['angular2/platform/browser', './app.component'], function(exports_1) {\n    var browser_1, app_component_1;\n    return {\n        setters:[\n            function (browser_1_1) {\n                browser_1 = browser_1_1;\n            },\n            function (app_component_1_1) {\n                app_component_1 = app_component_1_1;\n            }],\n        execute: function() {\n            browser_1.bootstrap(app_component_1.AppComponent);\n        }\n    }\n});"
                            }
                        ],
                        versions: [
                            { id: 'ajouter', label: 'Ajouter' },
                            { id: 'ok', label: 'OK' },
                            { id: 'cancel', label: 'Cancel' },
                            { id: 'confirmer', label: 'Confirmer' }
                        ],
                        extraLinks: [
                            { label: 'Bloc boutons', link: '#' },
                            { label: 'Reference Mozilla', link: 'www.mozilla.org' },
                            { label: 'Reference HTML', link: 'html://www.w3c.org' },
                        ]
                    };
                }
                ItemComponent = __decorate([
                    core_1.Component({
                        selector: 'ce-item',
                        templateUrl: 'app/templates/ce-item.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ItemComponent);
                return ItemComponent;
            })();
            exports_1("ItemComponent", ItemComponent);
        }
    }
});
//# sourceMappingURL=item.component.js.map