import React, {useEffect, useState} from 'react';
import {Line} from '@ant-design/plots';

const Pressure_history: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:7529/api/charts/history/pressure')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'time',
    yField: 'pressure',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${v} N`,
      },
    },
    slider: {
      start: 0.1,
      end: 0.9,
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  // @ts-ignore
  return <Line {...config} />;
};
export default Pressure_history
