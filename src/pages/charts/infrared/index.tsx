import { PageContainer, ProCard } from '@ant-design/pro-components';
import Temp_realtime from '@/pages/charts/temperature/realtime';
import Infrared_history from '@/pages/charts/infrared/history';
import Infrared_realtime from "@/pages/charts/infrared/realtime";

export default () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      header={{
        title: '红外传感器数据分析',
        ghost: true,
      }}
    >
      <div>
        <ProCard
          tabs={{
            tabPosition: 'top',
          }}
        >
          <ProCard.TabPane key="tab1" tab="实时数据(cm)">
            <Infrared_realtime />
          </ProCard.TabPane>
          <ProCard.TabPane key="tab2" tab="历史数据(cm)">
            <Infrared_history />
          </ProCard.TabPane>
        </ProCard>
      </div>
    </PageContainer>
  </div>
);
