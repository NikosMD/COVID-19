import React, { Fragment, useEffect } from "react";
import { observer } from "mobx-react";
import { useStores } from "Hooks/useHooks";
import "./App.scss";
import MenuApp from "components/Menu";
import AnotherGridLayout from "components/Grid";

const App = () => {
  useEffect(() => {
    fetchDataStore.fetchData();
  }, []);
  const { fetchDataStore } = useStores();

  return (
    <Fragment>
      <MenuApp></MenuApp>
      <AnotherGridLayout></AnotherGridLayout>
    </Fragment>
  );
};

export default observer(App);
