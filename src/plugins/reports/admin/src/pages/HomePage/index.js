/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
//import pluginId from '../../pluginId';
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout

} from "@strapi/design-system/Layout";
import { EmptyStateLayout } from "@Strapi/design-system/EmptyStateLayout";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";

//import {strapi} from '@strapi/strapi';

//import axios from 'axios';
//const pool = require('./db');
//import instance from '../../utils/axiosInstance';
//import pool from './db';


const HomePage = () => {

  const [reportData,setReportData] = React.useState([]);

  React.useEffect(async () => {
  // let  headers = {
  //     //Authorization: `Bearer ${auth.getToken()}`,
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   }

    //let result = await instance.get("http://192.168.1.66:3000/report",headers);

    //console.log(result);

   // strapi.connections.default.raw('SELECT * FROM "Messaggi";')
   //await strapi.db.query('api::resident-pay.resident-pay');
   //strapi.db.query('user')

    // let result = null;

    // result = await axios.get("http://localhost:3000/report");


    // console.log(result);

    // alert(result);

    //axios.get("http://localhost:1337/api/catalog-amenidades")
    // axios.get("http://localhost:3000/report")
    // .then(({ data }) => alert(data))
    // .catch((error) => alert(error))

    

  },[])

  return (
   
    <Layout>
    <BaseHeaderLayout
      title="Reportes"
      subtitle="Reporte que muestra los pagos por residencial"
      as="h2"
    />

    <ContentLayout>

        {/* <iframe src="http://localhost:3001/report" style={{ width : '100%', height: '800px' }}></iframe> */}

        <iframe src="https://prod-report-pays-app.herokuapp.com/" style={{ width : '100%', height: '800px' }}></iframe>



        {/* https://prod-report-pays-app.herokuapp.com/ */}


    </ContentLayout>


  </Layout>
   
   
   
  
  );
};

export default memo(HomePage);
