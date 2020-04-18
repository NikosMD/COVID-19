import React, { Fragment } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import "./App.scss";
import MenuApp from "components/Menu";
import AnotherGridLayout from "components/Grid";

@observer
class App extends React.Component {
  @observable dataOfCountry = [];
  @observable isLoaded = false;

  componentDidMount = () => {
    fetch("https://api.covid19api.com/dayone/country/Moldova")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.dataOfCountry = data;
      });
  };

  render() {
    console.log(this.dataOfCountry);
    return (
      <Fragment>
        <MenuApp></MenuApp>
        <AnotherGridLayout></AnotherGridLayout>
      </Fragment>
    );
  }
}

export default App;
