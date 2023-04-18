import { PageContainer, ProCard } from '@ant-design/pro-components';
import Temp_history from '@/pages/charts/temperature/history';
import Temp_realtime from '@/pages/charts/temperature/realtime';

export default () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      header={{
        title: '温度传感器数据分析',
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
            <Temp_realtime />
          </ProCard.TabPane>
          <ProCard.TabPane key="tab2" tab="历史数据">
            <Temp_history />
          </ProCard.TabPane>
        </ProCard>
      </div>
    </PageContainer>
  </div>
);
