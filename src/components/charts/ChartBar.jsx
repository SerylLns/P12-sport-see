import React, { useEffect } from 'react';
import { BarChart } from 'recharts';
import { getUserActivity } from '../../services/apiRequest';


const ChartBar = ({ userId }) => {
  useEffect(() => {
    getUserActivity(12).then(res => console.log(res));
  }, [])
  return (
    <BarChart width={730} height={250}>

    </BarChart>
      
  );
};

export default ChartBar;