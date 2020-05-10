import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import Map from "components/Map";
import DropdownType from "components/Dropdown";
import Table from "components/Table";
import { useStores } from "Hooks/useHooks";
import { observer } from "mobx-react";
import moment from "moment";
import { GET_DEFAULT_VALUE } from "constants/constans.js";

const MapRow = () => {
  const { fetchDataStore, selectTypeStore } = useStores();
  const options = [{ key: "world", text: "World", value: "World" }];

  const [tempData, setTempData] = useState([]);

  const yesterday = moment().subtract(2, "days").format("YYYY-MM-DD");
  const before_yesterday = moment().subtract(3, "days").format("YYYY-MM-DD");


  useEffect(() => {
    if (selectTypeStore.selectCountry === "World") {
      setTempData(fetchDataStore.dataOfGlobal);
    } else {
      if (fetchDataStore.isLoaded && fetchDataStore.isLoadedGlobal) {
      }
      setTempData(fetchDataStore.dataOfCountry_Yesterday);
    }
  }, [
    selectTypeStore.selectCountry,
    fetchDataStore.dataOfCountry_Yesterday,
    fetchDataStore.dataOfGlobal,
  ]);

  if (fetchDataStore.isLoaded && fetchDataStore.isLoadedGlobal) {
    fetchDataStore.dataOfCountry.Countries.forEach((Country) => {
      options.push({
        key: Country.CountryCode,
        text: Country.Country,
        value: Country.Country,
      });
    });

    const defaultOptions = GET_DEFAULT_VALUE(options);

    const handleValueChange = (value) => {
      selectTypeStore.handleCountryChange(value);

      fetchDataStore.fetchData_Table({
        country: value,
        from: before_yesterday,
        to: yesterday,
      });
    };

    return (
      <Grid.Row columns={2}>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <p>
            <Map options={options} />
          </p>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <p>Please, select country</p>
          <DropdownType
            type={options}
            select={selectTypeStore}
            onValueChange={handleValueChange}
            default={defaultOptions}
          />
          <Table
            header_1="Country"
            header_2="Confirmed"
            header_3="24 Hours"
            header_4="Deaths"
            header_5="24 Hours"
            header_6="%"
            cell_1={selectTypeStore.selectCountry}
            cell_2={
              selectTypeStore.selectCountry === "World"
                ? tempData.total_cases
                : tempData[1] && tempData[1].Confirmed
            }
            cell_3={
              selectTypeStore.selectCountry === "World"
                ? tempData.total_new_cases_today
                : tempData[1] && tempData[1].Confirmed - tempData[0].Confirmed
            }
            cell_4={
              selectTypeStore.selectCountry === "World"
                ? tempData.total_deaths
                : tempData[1] && tempData[1].Deaths
            }
            cell_5={
              selectTypeStore.selectCountry === "World"
                ? tempData.total_new_deaths_today
                : tempData[1] && tempData[1].Confirmed - tempData[0].Deaths
            }
            cell_6={
              selectTypeStore.selectCountry === "World"
                ? ((tempData.total_deaths * 100) / tempData.total_cases).toFixed(1)
                : tempData[1] &&
                  ((tempData[1].Deaths * 100) / tempData[1].Confirmed).toFixed(
                    1
                  )
            }
          />
          <Table
            header_1="Recovered"
            header_2="24 Hours"
            header_3="%"
            header_4="Infected"
            header_5="%"
            header_6="Date"
            cell_1={
              selectTypeStore.selectCountry === "World"
                ? tempData.total_recovered
                : tempData[1] && tempData[1].Recovered
            }
            cell_2={
              selectTypeStore.selectCountry === "World"
                ? tempData.total_active_cases -
                  (tempData.total_cases -
                    tempData.total_recovered -
                    tempData.total_deaths -
                    tempData.total_new_cases_today -
                    tempData.total_new_deaths_today)
                : tempData[1] && tempData[1].Recovered - tempData[0].Recovered
            }
            cell_3={
              selectTypeStore.selectCountry === "World"
                ? ((tempData.total_recovered * 100) / tempData.total_cases).toFixed(1)
                : tempData[1] &&
                  ((tempData[1].Recovered * 100) / tempData[1].Confirmed).toFixed(1)
            }
            cell_4={
              selectTypeStore.selectCountry === "World"
                ? tempData.total_active_cases
                : tempData[1] &&
                  tempData[1].Confirmed -
                    (tempData[1].Recovered + tempData[1].Deaths)
            }
            cell_5={
              selectTypeStore.selectCountry === "World"
                ? ((tempData.total_active_cases * 100) / tempData.total_cases).toFixed(1)
                : tempData[1] &&
                  (((tempData[1].Confirmed -
                    tempData[1].Recovered +
                    tempData[1].Deaths) *
                    100) /
                    tempData[1].Confirmed).toFixed(1)
            }
            cell_6={moment().format("YYYY-MM-DD")}
          />
        </Grid.Column>
      </Grid.Row>
    );
  }
};
export default observer(MapRow);
