import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from "../../shared/directives/animate-on-scroll.directive";

@Component({
  selector: 'app-cad-shipbroker',
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './cad-shipbroker.component.html',
  styleUrl: './cad-shipbroker.component.css'
})
export class CadShipbrokerComponent {

}
