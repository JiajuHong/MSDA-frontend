import React, {useEffect, useState} from 'react';
import {Area} from '@ant-design/plots';

const Humi_history: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:7529/api/charts/history/humidity')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'date',
    yField: 'humidity',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${v} %RH`,
      },
    },
    slider: {
      start: 0.1,
      end: 0.9,
    },
  };

  return <Area {...config} />;
};
export default Humi_history
