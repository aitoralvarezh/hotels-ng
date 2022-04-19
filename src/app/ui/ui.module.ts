import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { 
    HeaderComponent,
    SidebarComponent,
    IconLinkComponent
} from "./";

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        IconLinkComponent
    ],
      imports: [
        CommonModule
      ],
      exports: [
        HeaderComponent,
        SidebarComponent
      ],
      providers: [],
      bootstrap: []
})
export class  UiModule { }