import { observable, action } from "mobx";
import moment from "moment";

export class SelectDateStore {
  @observable
  from = undefined;
  @observable
  to = undefined;

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
