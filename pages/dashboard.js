import React from "react";
import { getUserProfile } from "../service/backendApi";
import BasicLayout from "../component/basicLayout";
import Link from "next/link";

const Dashboard = ({ userData }) => {
  // console.log(userData, "<<<<<<<userData FE");
  return (
     <div style={{height:'100%', width:'100%'}}> 
       <h1 style={{textAlign:'middle'}}>
         Dashboard
       </h1>
     </div>
  
  );
};

Dashboard.getLayout = function getLayout(page) {
  return <BasicLayout>{page}</BasicLayout>;
};

export async function getServerSideProps(context) {
  let { Authorization } = context?.req?.cookies;
  if (!Authorization) {
    return { props: {} };
  }
  let fetchData = await getUserProfile(Authorization);

  let userData = fetchData.data.data;
  return { props: { userData } };
}

export default Dashboard;
