import { Component } from '@angular/core';
import { BaseUiComponent } from '../../_components/base-ui/base-ui.component';
import { NavbarComponent } from '../../_components/navbar/navbar.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";

@Component({
  selector: 'app-certificate-form',
  imports: [BaseUiComponent, NavbarComponent, SecondaryButtonComponent, PrimaryButtonComponent],
  templateUrl: './certificate-form.component.html',
  styleUrl: './certificate-form.component.css'
})
export class CertificateFormComponent {

}
