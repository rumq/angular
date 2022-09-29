import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-select-pipe',
  templateUrl: './i18n-select-pipe.component.html',
  styleUrls: ['./i18n-select-pipe.component.css']
})
export class I18nSelectPipeComponent {

  birthCountry: string;
  workCountry:  string;
  holsCountry:  string;
  
  countryMapping = {
    'UK': 'United Kingdom', 
    'NO': 'Norway',
    'FR': 'France',
    '??': 'Other'
  };

  constructor() {
    this.birthCountry = 'UK';
    this.workCountry  = 'NO';
    this.holsCountry  = '??';
  }
}
