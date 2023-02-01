import React, { useEffect } from 'react';
import Router from './router/index';
import { useSelector } from 'react-redux';
// import { useNetworkState } from "react-use";
import Layout from './layout';
import UserLayout from './Dashboard/UserLayout';
import UserRouter from './Dashboard/Router';
import { useLocation } from 'react-router-dom';
import LandingPage from './landing page';
import PreDefinedTemplates from './templates';
import NotFound from './utils/notFound';
function App() {
  const login = ['/login', '/signup', '/accountverification', '/forgotpassword']
  const dashboard = ['/dashboard', '/postlisting', '/propertymanagement', '/customprofilebuilder', '/profilesettings', '/companysettings', '/agents']
  const templates = ['/template1', '/template2', '/template3', '/template4', '/template5', '/template6', '/selecttemplate', '/selecttemplate/billing']
  const notFound = ['/notfound']

  const location = useLocation();
  console.log(location.pathname);

  if (login.includes(location.pathname)) {
    return (
      <Layout>
        <Router />
      </Layout>
    );
  }
  else if (dashboard.includes(location.pathname)) {
    return (
      <UserLayout>
        <UserRouter />
      </UserLayout>
    );
  }
  else if (templates.includes(location.pathname)) {
    return (
      <PreDefinedTemplates>
      </PreDefinedTemplates>
    );
  }
  else if (notFound.includes(location.pathname)) {
    return (
      <NotFound />);
  }
  else {
    return (
      <LandingPage>
      </LandingPage>
    );
  }
}

export default App;
