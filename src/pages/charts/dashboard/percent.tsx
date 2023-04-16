import { Gauge } from '@ant-design/plots';
import React, {useEffect, useState} from "react";

const Percent: React.FC = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:7529//api/sensor/welcome')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    percent: data.percent,
    range: {
      color: 'l(0) 0:#B8E1FF 1:#3D76DD',
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '36px',
          color: '#4B535E',
        },
        formatter: () => data.percent,
      },
      content: {
        style: {
          fontSize: '24px',
          lineHeight: '44px',
          color: '#4B535E',
        },
        formatter: () => '工程总进度',
      },
    },
  };
  // @ts-ignore
  return <Gauge {...config} />;
};

export default Percent
