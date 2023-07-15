import { Component, OnInit, inject } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import HousingLocation from 'src/app/interfaces/housingLocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  houseingService: HousingService = inject(HousingService);

  constructor() {}

  ngOnInit(): void {
    this.getHousings();
  }

  getHousings(): void {
    this.housingLocationList = this.houseingService.getAllHousingLocations();
  }
}
