import { observable, action } from "mobx";

export class FetchDataStore {
  @observable.ref
  dataOfCountry = [];
  @observable isLoaded = false;

  @action
  fetchData = () => {
    fetch(`https://api.covid19api.com/summary`)
      .then((res) => res.json())
      .then((data) => {
        this.dataOfCountry = data;
        this.isLoaded = !this.isLoaded;
      });
  };
}
