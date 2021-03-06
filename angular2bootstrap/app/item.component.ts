import {Component} from 'angular2/core';

@Component({
	selector: 'ce-item',
	templateUrl: 'app/templates/ce-item.html'
})

export class ItemComponent {

	public info = {
		id: 'button',
		name: 'Button',
		shortDescription: 'Displays collapsible content panels for presenting information in a limited amount of space.',
		description: `<p>Displays collapsible content panels for presenting information in a limited amount of space.</p>
				<div class="alert alert-success" role="alert">Well done! You successfully read this important alert message.</div>
				<div class="alert alert-info" role="alert">Heads up! This alert needs your attention, but it's not super important.</div>
				<div class="alert alert-warning" role="alert">Warning! Better check yourself, you're not looking too good.</div>
				<div class="alert alert-danger" role="alert">Oh snap! Change a few things up and try submitting again.</div>`,
		example: `<iframe style="width:100%;height:400px;border:0;background:#EFEFEF;margin-top:5px;"></iframe>`,
		codes: [
			{
				id: 'xaml',
				label: 'XAML',
				language: 'markup',
				code: `&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;response value=&quot;ok&quot; xml:lang=&quot;en&quot;&gt;
  &lt;text&gt;Ok&lt;/text&gt;
  &lt;comment html_allowed=&quot;true&quot;/&gt;
  &lt;ns1:description&gt;&lt;![CDATA[
  CDATA is &lt;not&gt; magical.
  ]]&gt;&lt;/ns1:description&gt;
  &lt;a&gt;&lt;/a&gt; &lt;a/&gt;
&lt;/response&gt;`
			},
			{
				id: 'html',
				label: 'HTML',
				language: 'markup',
				code: `&lt;!DOCTYPE html&gt;
&lt;title&gt;Title&lt;/title&gt;

&lt;style&gt;body {width: 500px;}&lt;/style&gt;

&lt;script type=&quot;application/javascript&quot;&gt;
  function $init() {return true;}
&lt;/script&gt;

&lt;body&gt;
  &lt;p checked class=&quot;title&quot; id=&#39;title&#39;&gt;Title&lt;/p&gt;
  &lt;!-- here goes the rest of the page --&gt;
&lt;/body&gt;`
			},
			{
				id: 'css',
				label: 'CSS',
				language: 'css',
				code: `input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}`
			},
			{
				id: 'js',
				label: 'JavaScript',
				language: 'js',
				code: `System.register(['angular2/platform/browser', './app.component'], function(exports_1) {
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});`
			}
		],
		versions: [
			{ id: 'add', label: 'Add' },
			{ id: 'ok', label: 'OK' },
			{ id: 'cancel', label: 'Cancel' },
			{ id: 'confirm', label: 'Confirm' }
		],
		extraLinks: [
			{ label: 'Blocks', link: '#' },
			{ label: 'Mozilla', link: 'www.mozilla.org' },
			{ label: 'HTML', link: 'html://www.w3c.org' },
		]
	};

}