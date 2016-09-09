import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {MenuComponent} from './menu.component';
import {ItemComponent} from './item.component';
import {Http, HTTP_BINDINGS, HTTP_PROVIDERS} from 'angular2/http'


bootstrap(MenuComponent, [HTTP_PROVIDERS]);
bootstrap(ItemComponent, [HTTP_PROVIDERS]);
bootstrap(AppComponent, [HTTP_PROVIDERS]);
