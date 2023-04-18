import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const Humi_realtime: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:7529/api/charts/realtime/humidity')
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
export default Humi_realtime
