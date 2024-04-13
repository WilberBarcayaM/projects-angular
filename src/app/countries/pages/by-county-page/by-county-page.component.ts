import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-county-page',
  templateUrl: './by-county-page.component.html',
  styles: ``
})
export class ByCountyPageComponent implements OnInit {


  public countries: Country[] = [];

  public initialValue: string = '';


  constructor(private countryService: CountryService){

  }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  searchByCountry( term:string ): void{

    this.countryService.searchCountry(term)
    .subscribe(countries => {
      this.countries = countries;
    });
  }
}
