import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  title: 'SDA平台',
  pwa: false,
  logo: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/13837/kyk4c0h1hla.jpg',
  headerHeight: 48,
  splitMenus: false,
};

export default Settings;
