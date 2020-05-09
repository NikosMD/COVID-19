import { observable, action } from "mobx";
import moment from "moment";

export class FetchDataStore {
  @observable.ref dataOfCountry = [];
  @observable.ref dataOfCountry_allDay = {};
  @observable.ref dataOfCountry_Yesterday = {};
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
  fetchData_allDay = ({
    countrys,
    status,
    from = new Date(),
    to = new Date(),
  }) => {
    this.isLoaded = false;
    this.fetchDate({ countrys, status, from, to });
  };

  fetchDate = ({ countrys, status, from, to }) => {
    countrys.forEach((country) => {
      fetch(
        `https://api.covid19api.com/country/${country.toLowerCase()}/status/${status.toLowerCase()}/live?from=${from}&to=${to}`
      )
        .then((res) => res.json())
        .then((data) => {
          const currentCountryDate = data.reduce((acc, cv) => {
            return { ...acc, [moment(cv.Date).format("YYYY-MM-DD")]: cv.Cases };
          }, {});
          this.dataOfCountry_allDay = {
            ...this.dataOfCountry_allDay,
            [country]: currentCountryDate,
          };
        });
    });
    this.isLoaded = !this.isLoaded;
  };

  @action
  fetchData_Table = ({ country, from = new Date(), to = new Date() }) => {
    this.isLoaded = false;
    this.fetchDateTable({ country, from, to });
  };

  fetchDateTable = ({ country, from, to }) => {
    fetch(
      `https://api.covid19api.com/country/${country.toLowerCase()}?from=${from}&to=${to}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.dataOfCountry_Yesterday = data;
        console.log("qqqqq", data, from, to);
      });
    this.isLoaded = !this.isLoaded;
  };
}
