import { Injectable } from '@angular/core';
import HousingLocation from '../interfaces/housingLocation';
import housings from '../mocks/housings';

@Injectable({ providedIn: 'root' })
export class HousingService {
  constructor() {}

  getAllHousingLocations(): HousingLocation[] {
    return housings;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return housings.find((housingLocation) => housingLocation.id === id);
  }
}
