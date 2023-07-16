import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IHousingLocation } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  housingLocationList: IHousingLocation[] = [];
  filteredLocationList: IHousingLocation[] = [];

  constructor(private houseingService: HousingService) {}

  ngOnInit(): void {
    this.getHousings();
    this.fillterHousings();
  }

  getHousings(): IHousingLocation[] {
    const housingList = this.houseingService.getAllHousingLocations();
    this.housingLocationList = housingList;

    return housingList;
  }

  fillterHousings(): void {
    this.filteredLocationList = this.getHousings();
  }

  filterResult(value: string): void {
    if (!value) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(value.toLowerCase())
    );

    console.log(this.filteredLocationList);
  }
}
