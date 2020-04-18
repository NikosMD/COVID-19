import React, { Fragment } from "react";
import { observable, toJS, isObservableObject } from "mobx";
import { observer } from "mobx-react";
import "./App.scss";
import MenuApp from "components/Menu";
import AnotherGridLayout from "components/Grid";

@observer
class App extends React.Component {
  @observable.ref dataOfCountry = [];
  @observable isLoaded = false;

  componentDidMount = () => {
    fetch("https://api.covid19api.com/dayone/country/Moldova")
      .then((res) => res.json())
      .then((data) => {
        this.dataOfCountry = data;
        console.log(this.dataOfCountry);
      });
  };

  render() {
    return (
      <Fragment>
        <MenuApp></MenuApp>
        <AnotherGridLayout></AnotherGridLayout>
      </Fragment>
    );
  }
}

export default App;
