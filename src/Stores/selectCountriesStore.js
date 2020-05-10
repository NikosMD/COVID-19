import { observable, action } from "mobx";

export class SelectCountriesStore {
  @observable.ref
  selectCountries = [];

  @observable.ref
  selectDistrictsMoldova = [];

  @action
  handleChange(value) {
    this.selectCountries = value;

  }

  @action
  addDefaultSelections(value) {
    this.selectCountries = value;
  }

  @action
  handleChangeDistricts(value) {
    this.selectDistrictsMoldova = value;
  }

  @action
  addDefaultSelectionsDistricts(value) {
    this.selectDistrictsMoldova = value;
  }
}
