import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/plots';

const Temp_history: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:7529/api/charts/history/temperature')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data: data,
    padding: 'auto',
    xField: 'date',
    yField: 'temperature',
    seriesField: 'name',
    xAxis: {
      type: 'time',
    },
    smooth: true,
    slider: {
      start: 0.1,
      end: 0.9,
    },
  };

  // @ts-ignore
  return <Line {...config} />;
};

export default Temp_history
