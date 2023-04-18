import React, {useEffect, useState} from 'react';
import {Pie} from '@ant-design/charts';

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
    appendPadding: 10,
    data: data.data.pie,
    angleField: 'count',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '传感器汇总',
      },
    },
  };
  // @ts-ignore
  return <Pie {...config} />;
};

export default Page;
