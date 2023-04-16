import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const Infrared_history: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:7529/api/charts/history/infrared')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data: data,
    xField: 'date',
    yField: 'distance',
    seriesField: 'name',
    slider: {
      start: 0.1,
      end: 0.9,
    },
  };

  return <Area {...config} />;
};
export default Infrared_history
