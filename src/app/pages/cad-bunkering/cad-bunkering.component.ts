import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AnimateOnScrollDirective } from "../../shared/directives/animate-on-scroll.directive";

@Component({
  selector: 'app-cad-bunkering',
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './cad-bunkering.component.html',
  styleUrl: './cad-bunkering.component.css'
})
export class CadBunkeringComponent {

}
