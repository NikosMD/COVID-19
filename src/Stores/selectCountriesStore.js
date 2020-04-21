import { observable, action } from "mobx";

export class SelectCountriesStore {
  @observable
  selectCountries = [];

  @action
  handleChange(value) {
    this.selectCountries = value;
  }

  @action
  addDefaultSelections(value) {
    this.selectCountries = value;
  }
}
