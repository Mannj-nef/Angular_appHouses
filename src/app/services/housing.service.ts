import { Injectable } from '@angular/core';
import HousingLocation from '../interfaces/housingLocation';
import housings from '../mocks/housings';
import { Observable, of } from 'rxjs';
import { IHousingReservation } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class HousingService {
  constructor() {}

  getAllHousingLocations(): HousingLocation[] {
    return housings;
  }

  getHousingLocationById(id: number): Observable<HousingLocation | undefined> {
    const housingDetail = housings.find(
      (housingLocation) => housingLocation.id === id
    );

    return of(housingDetail);
  }

  submitApplication({ firstName, lastName, email }: IHousingReservation) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
