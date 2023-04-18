import {PageContainer, ProCard} from '@ant-design/pro-components';
import Pressure_history from "@/pages/charts/pressure/Pressure_history";
import Pressure_realtime from "@/pages/charts/pressure/Pressure_realtime";

export default () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      header={{
        title: '湿度传感器数据分析',
        ghost: true,
      }}
    >
      <div>
        <ProCard
          tabs={{
            tabPosition: 'top',
          }}
        >
          <ProCard.TabPane key="tab1" tab="实时数据">
            <Pressure_realtime />
          </ProCard.TabPane>
          <ProCard.TabPane key="tab2" tab="历史数据">
            <Pressure_history />
          </ProCard.TabPane>
        </ProCard>
      </div>
    </PageContainer>
  </div>
);
