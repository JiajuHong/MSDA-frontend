import {PageContainer, ProCard, StatisticCard} from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import React, {useEffect, useState} from 'react';
import Page from "@/pages/charts/dashboard";
import LocationTypeBar from "@/pages/charts/dashboard/LocationTypeBar";

const { Statistic } = StatisticCard;

const Welcome : React.FC = () => {
  const [responsive, setResponsive] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:7529/api/sensor/welcome')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  if (!Object.keys(data).length) {
    return null;
  }
  return (
    <PageContainer>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard
          title="数据概览"
          // 获取当前日期, yyyy-mm-dd
          extra={new Date().toLocaleDateString()}
          split={responsive ? 'horizontal' : 'vertical'}
          headerBordered
          bordered
        >
          <ProCard split="horizontal">
            <ProCard split="horizontal">
              <ProCard split="vertical">
                <StatisticCard
                  statistic={{
                    title: '全部传感器',
                    value: data.total,
                    description: <Statistic title="较本月平均流量" value="8.04%" trend="down" />,
                  }}
                />
                <StatisticCard
                  statistic={{
                    title: '故障传感器',
                    value: data.error,
                    description: <Statistic title="月同比" value="8.04%" trend="up" />,
                  }}
                />
              </ProCard>
              <ProCard split="vertical">
                <StatisticCard
                  statistic={{
                    title: '进行中项目',
                    value: data.processing,
                    suffix: '个',
                  }}
                />
                <StatisticCard
                  statistic={{
                    title: '项目总数',
                    value: data.project_total,
                    suffix: '个',
                  }}
                />
              </ProCard>
            </ProCard>
            <StatisticCard
              title="传感器汇总"
              chart={
                <Page />
              }
            />
          </ProCard>
          <ProCard split="horizontal">
            <StatisticCard
              title="各个地点的传感器"
              chart={
                <LocationTypeBar />
              }
            />
          </ProCard>


        </ProCard>
      </RcResizeObserver>
    </PageContainer>
  );
};

export default Welcome;
