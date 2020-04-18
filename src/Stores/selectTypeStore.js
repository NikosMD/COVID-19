import { observable, action } from "mobx";

export class SelectTypeStore {

  @observable
  selectType = "";

  @action
  handleChange(value) {
    console.log(value)
    this.selectType = value;
  }

  // @action
  // clear() {
  //   this.allItems = [];
  // }

  // @action
  // setNewItemName(value) {
  //   this.newItemName = value;
  // }
}
