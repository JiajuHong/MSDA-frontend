import React, { useEffect, useState } from 'react';
import { Rose } from '@ant-design/charts';

const Page: React.FC = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:7529/api/sensor/list/locationType')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  if (!Object.keys(data).length) {
    return null;
  }
  const config = {
    data: data.data.rose,
    isStack: true,
    xField: 'type',
    yField: 'count',
    seriesField: 'location',
    radius: 0.9,
    label: {
      offset: -15,
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Rose {...config} />;
};

export default Page;
