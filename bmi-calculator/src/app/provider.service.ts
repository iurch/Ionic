import { Injectable } from '@angular/core';
import { BMI } from 'src/models/bmi.model';

@Injectable()
export class ProviderService {
  
  constructor() {}

  calculateBMI(height: number, weight: number) {
    const _BMI  = weight / height / height;

    return {bmi: _BMI.toFixed(2), classification: this.classifyBMI(_BMI), } as BMI;
  }

  private classifyBMI( _BMI: number) {
    if (_BMI < 18.5) {
      return 'UnderWeight';
    } else if (_BMI > 18.5 && _BMI < 24.9) {
      return 'Normal Weight';
    } else if (_BMI > 25 && _BMI < 29.9) {
      return 'Overweight';
    } else if (_BMI > 30 && _BMI < 34.9) {
      return 'Class 1 Obesity';
    } else if (_BMI > 35 && _BMI < 39.9) {
      return 'Class 2 Obesity';
    } else if (_BMI > 40) {
      return 'Class 3 Obesity';
    }
  }
}
