import {Component} from 'angular2/core';
import {SidenavsComponent} from './sidenavs/sidenav.component';

@Component({
    selector: 'my-app', 
    template: `<h2>Hola Mundo</h2>
    <sidenavs></sidenavs>
    `,
    directives : [SidenavsComponent]
})
export class AppComponent {}