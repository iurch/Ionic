import { Component, OnInit } from '@angular/core';

import { ProviderService  } from '../provider.service';
import { BMI } from 'src/models/bmi.model';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BMIPage implements OnInit {

    height: number;
    weight: number;
    BMI: BMI;

  constructor(private bmiService: ProviderService) { }

  ngOnInit() {
  }

  calculateBmi(){
    this.BMI = this.bmiService.calculateBMI(this.height,this.weight);

  }

}
