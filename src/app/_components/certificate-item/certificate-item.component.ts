import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-item',
  imports: [SecondaryButtonComponent],
  templateUrl: './certificate-item.component.html',
  styleUrl: './certificate-item.component.css'
})
export class CertificateItemComponent {
  constructor(private router: Router) {}
  id: string = '5'

  certificateRedirect() {
    this.router.navigate(['/certificados', this.id])
  }
}
