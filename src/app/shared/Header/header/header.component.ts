import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  header: { links: string; module: string } = {
    links: '',
    module: '',
  };
  constructor(private serverService: ServiceService) {
    this.serverService.headerSubject.subscribe((data: any) => {
      this.header = data;
    });
  }


}
