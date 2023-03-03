import { Card, Col, Row, Progress } from 'antd';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

const WorkbenchPage = () => {
  const data = [
    {
      title: '任务一',
      progress: 50,
      status: 'processing',
      description: '这是任务一的描述',
    },
    {
      title: '任务二',
      progress: 100,
      status: 'success',
      description: '这是任务二的描述',
    },
    {
      title: '任务三',
      progress: 25,
      status: 'warning',
      description: '这是任务三的描述',
    },
  ];

  return (
    <div>
      <Card title="任务进度" bordered={false} style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          {data.map((item, index) => (
            <Col span={8} key={index}>
              <Card bordered={false}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                  <UserOutlined style={{ fontSize: 24, marginRight: 8 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 500 }}>{item.title}</div>
                    <div>{item.description}</div>
                  </div>
                </div>
                <Progress percent={item.progress} status={item.status} />
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
      <Card title="日程安排" bordered={false}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <CalendarOutlined style={{ fontSize: 24, marginRight: 8 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 500 }}>3月份工作日历</div>
          </div>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}
        >
          这里可以放置一个日历组件
        </div>
      </Card>
    </div>
  );
};

export default WorkbenchPage;
