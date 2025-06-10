import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { CertificateItemComponent } from '../../_components/certificate-item/certificate-item.component';

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButtonComponent, CertificateItemComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

}
