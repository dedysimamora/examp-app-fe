import React from "react";
import BasicLayout from "../component/basicLayout";

const Dashboard = () => {
  return (
     <div style={{height:'100%', width:'100%'}}> 
       <h1 style={{textAlign:'middle'}}>
         Chart
       </h1>
     </div>
  );
};

Dashboard.getLayout = function getLayout(page) {
  return <BasicLayout>{page}</BasicLayout>;
};



export default Dashboard;
