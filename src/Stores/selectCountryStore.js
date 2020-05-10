import { observable, action } from "mobx";

export class SelectCountryStore {
  @observable
  selectCountry = "";

  @action
  handleChange(value) {
    this.selectCountry = value;
  }
}
