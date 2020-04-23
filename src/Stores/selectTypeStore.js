import { observable, action } from "mobx";

export class SelectTypeStore {
  @observable selectType = "";
  @observable selectCountry = "";

  @action
  handleChange(value) {
    this.selectType = value;
  }

  @action
  handleCountryChange(value) {
    this.selectCountry = value;
  }
}
