import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Components
import { HelloWorld } from './hello-world/hello-world.component';
import { HelloWorldCliComponent } from './hello-world-cli/hello-world-cli.component';
import { BucleForComponent } from './bucle-for/bucle-for.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { UserItemComponent } from './child-component/user-item/user-item.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { EventsComponent } from './events/events.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

// Services
import { DataService } from './services/data.service';
import { InterfaceComponent } from './services/interface/interface.component';
import { RouterComponent } from './router/router.component';
import { Services } from '@angular/core/src/view';

const appRoutes: Routes = [
  {path: '', component: HelloWorld},
  {path: 'service', component: InterfaceComponent}
];

@NgModule({
  declarations: [ // define what components belong to this module
    AppComponent,
    HelloWorld,
    HelloWorldCliComponent,
    BucleForComponent,
    ChildComponentComponent,
    UserItemComponent,
    TypescriptComponent,
    EventsComponent,
    DataBindingComponent,
    InterfaceComponent,
    RouterComponent
  ],
  imports: [ // declare what dependecies your project needs
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService], // allows dependecy injection. Make a Service available in the whole project
  bootstrap: [AppComponent] // declare what is the top level component
})
export class AppModule { }
