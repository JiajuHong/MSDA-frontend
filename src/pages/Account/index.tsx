import { Card, Typography, Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

const { Title, Text } = Typography;

const Index = () => {
  return (
    <PageContainer>
      <Card bordered={false}>
        <Title level={3}>个人资料</Title>
        <Divider />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: 24 }}>
            <img
              src="https://avatars.githubusercontent.com/u/8186664?v=4"
              alt="Avatar"
              style={{ width: 100, height: 100, borderRadius: '50%' }}
            />
          </div>
          <div>
            <Text strong>用户名：</Text>
            <Text>admin</Text>
            <br />
            <Text strong>邮箱：</Text>
            <Text>admin@example.com</Text>
            <br />
            <Text strong>联系电话：</Text>
            <Text>13888888888</Text>
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Index;
