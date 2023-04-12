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
  title: 'MSDA平台',
  pwa: false,
  logo: 'https://tuchuang-1310600455.cos.ap-nanjing.myqcloud.com/jiaju/202303201447121.webp',
  headerHeight: 48,
  splitMenus: false,
};

export default Settings;
