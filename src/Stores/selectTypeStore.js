import { observable, action } from "mobx";

export class SelectTypeStore {
  @observable selectType = "Confirmed";
  @observable selectCountry = "World";
  @observable selectTypePie = "";

  @action
  handleChange(value) {
    this.selectType = value;
  }

  @action
  handleCountryChange(value) {
    this.selectCountry = value;
  }

  @action
  handlePieTypeChange(value) {
    this.selectTypePie = value;
  }
}
