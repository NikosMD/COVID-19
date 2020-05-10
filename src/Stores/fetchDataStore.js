import { observable, action } from "mobx";
import moment from "moment";

export class FetchDataStore {
  @observable.ref dataOfCountry = [];
  @observable.ref dataOfCountry_allDay = {};
  @observable.ref dataOfCountry_Yesterday = {};
  @observable.ref dataOfGlobal = {};
  @observable.ref dataOfRaion = [];
  @observable isLoaded = false;
  @observable isLoadedGlobal = false;

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
  fetchDataGlobal = () => {
    fetch(`https://api.thevirustracker.com/free-api?global=stats`)
      .then((res) => res.json())
      .then((data) => {
        this.dataOfGlobal = data["results"][0];
        this.isLoadedGlobal = !this.isLoadedGlobal;
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
      });
    this.isLoaded = !this.isLoaded;
  };

  @action
  fetchDataRaion = () => {
    const body = {
      operationName: "SimpleChartDistrictList",
      variables: {},
      query:
        "query SimpleChartDistrictList {\n  simpleChartDistrictList {\n    district\n    district_ru\n    nr_cases\n    nr_recovered\n    nr_monitored\n    nr_deaths\n    __typename\n  }\n}\n",
    };
    fetch(`https://votum.md/graphql`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        this.dataOfRaion = data;
      });
  };
}
