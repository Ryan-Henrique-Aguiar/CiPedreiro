import { Component, Input, input } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-default-login-layout',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './default-login-layout.html',
  styleUrl: './default-login-layout.css',
})
export class DefaultLoginLayout {
  @Input() title:string="";
  @Input() primaryBtnText: string="";
  @Input()secundaryBtnText: string="";
}
