import { UserOutlined } from '@ant-design/icons';

export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/Login',
      },
      {
        name: '注册',
        path: '/user/register',
        component: './user/Register',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '人员管理',
    icon: 'table',
    path: '/personnel',
    access: 'canRoot',
    routes: [
      {
        path: '/personnel/user',
        name: '用户管理',
        icon: 'smile',
        component: './Personnel/User',
      },
      {
        path: '/personnel/group',
        name: '工作组管理',
        icon: 'smile',
        component: './Personnel/Group',
      }
    ]
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '工作台',
    icon: 'smile',
    path: '/dashboardworkplace',
    component: './DashboardWorkplace',
  },
  {
    name: '个人中心',
    icon: 'user',
    path: '/account/center',
    component: './Account',
  },
  {
    component: './404',
  },
];
