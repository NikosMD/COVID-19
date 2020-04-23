import { observable, action } from "mobx";

export class SelectTypeStore {
  @observable
  selectType = "";

  @action
  handleChange(value) {
    console.log(this.selectType);
    this.selectType = value;
  }
}
