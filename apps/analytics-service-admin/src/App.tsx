import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BlogAnalyticsList } from "./blogAnalytics/BlogAnalyticsList";
import { BlogAnalyticsCreate } from "./blogAnalytics/BlogAnalyticsCreate";
import { BlogAnalyticsEdit } from "./blogAnalytics/BlogAnalyticsEdit";
import { BlogAnalyticsShow } from "./blogAnalytics/BlogAnalyticsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"analytics-service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BlogAnalytics"
          list={BlogAnalyticsList}
          edit={BlogAnalyticsEdit}
          create={BlogAnalyticsCreate}
          show={BlogAnalyticsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
