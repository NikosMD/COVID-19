import { observable, action } from "mobx";

export class FetchDataStore {
  @observable.ref dataOfCountry = [];
  @observable.ref dataOfCountry_allDay = {};
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

  @action
  fetchData_allDay = ({countrys, status, from = new Date(), to = new Date()}) => {
    this.isLoaded = !this.isLoaded;
    this.dataOfCountry_allDay = this.fetchDate({countrys, status, from, to})
    this.isLoaded = !this.isLoaded;
  };

  fetchDate = ({countrys, status, from, to})=>{
    const dataAll = {};
    countrys.forEach(country=>{
      fetch(`https://api.covid19api.com/country/${country.toLowerCase()}/status/${status.toLowerCase()}/live?from=${from}&to=${to}`)
      .then((res) => res.json())
      .then((data) => {
       dataAll[country] = data.reduce((acc, cv) => {
          return { ...acc, [cv.Date]: cv };
        }, {});
      });
    })
    return dataAll
  }
}
