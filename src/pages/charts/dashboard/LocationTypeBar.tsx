import React, { useState, useEffect } from 'react';

// @ts-ignore
import { Radar } from '@ant-design/plots';

const LocationTypeRadar: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:7529/api/sensor/list/LocationTypeRadar')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'location',
    yField: 'count',
    seriesField: 'type',
    meta: {
      count: {
        alias: '数量',
        min: 0,
        max: 8,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            lineDash: null,
          },
        },
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启面积
    area: {},
    // 开启辅助点
    point: {
      size: 2,
    },
  };

  // @ts-ignore
  return <Radar {...config} />;
};

export default LocationTypeRadar;
