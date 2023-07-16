import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IHousingLocation } from 'src/app/interfaces/';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'detail',
  templateUrl: './housing-detail.component.html',
  styleUrls: ['./housing-detail.component.scss'],
})
export class HousingDetailComponent implements OnInit {
  id: number;
  housingLocation: IHousingLocation | undefined;

  applyForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private rote: ActivatedRoute,
    private housingService: HousingService
  ) {
    this.id = Number(this.rote.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getHousing();
  }

  getHousing(): void {
    this.housingService
      .getHousingLocationById(this.id)
      .subscribe((housingDetail) => (this.housingLocation = housingDetail));
  }

  submitApplication(): void {
    this.housingService.submitApplication({
      email: this.applyForm.value.email ?? '',
      firstName: this.applyForm.value.firstName ?? '',
      lastName: this.applyForm.value.lastName ?? '',
    });
  }
}
