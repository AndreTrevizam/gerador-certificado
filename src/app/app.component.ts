import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './_components/secondary-button/secondary-button.component';
import { CertificateItemComponent } from './_components/certificate-item/certificate-item.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent, CertificateItemComponent, BaseUiComponent, CertificatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
}
