import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
// import * as am5 from '@amcharts/amcharts5';

@Component({
  selector: 'app-myteamwork',
  templateUrl: './myteamwork.component.html',
  styleUrls: ['./myteamwork.component.css'],
})
export class MyteamworkComponent implements OnInit {
  constructor(private service: ServiceService) {
    this.service.headerNav({ module: 'Mymenu', links: 'Myteam' });
  }

  ngOnInit(): void {}

}
