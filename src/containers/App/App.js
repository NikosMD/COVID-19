import React, { Fragment, useEffect } from "react";
import { observer } from "mobx-react";
import { useStores } from "Hooks/useHooks";
import Loader from "react-loader-spinner";
import MenuApp from "components/Menu";
import AnotherGridLayout from "containers/Grid";
import "./App.scss";

const App = () => {
  const { fetchDataStore } = useStores();

  useEffect(() => {
    fetchDataStore.fetchData();
    fetchDataStore.fetchDataGlobal();
    fetchDataStore.fetchDataRaion();
  }, []);

  return (
    <Fragment>
      <MenuApp />
      {!fetchDataStore.isLoaded ? (
        <Loader
          className="loader"
          type="Grid"
          color="#2a7aa7"
          height={100}
          width={100}
        />
      ) : (
        <AnotherGridLayout />
      )}
    </Fragment>
  );
};

export default observer(App);
