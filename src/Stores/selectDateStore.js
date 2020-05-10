import { observable, action } from "mobx";
import moment from "moment";

let dataAgo = new Date

dataAgo.setMonth(dataAgo.getMonth()-1)

export class SelectDateStore {
  @observable
  from = dataAgo;
  @observable
  to = new Date;

  @action
  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), "months") < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  @action
  handleFromChange(from) {
    this.from = from;
  }

  @action
  handleToChange(to) {
    this.to = to;
  }
}
