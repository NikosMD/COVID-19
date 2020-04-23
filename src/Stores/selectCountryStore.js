import { observable, action } from "mobx";

export class SelectCountryStore {
  @observable
  selectCountry = "";

  @action
  handleChange(value) {
    console.log(this.selectCountry);
    this.selectCountry = value;
  }
}
