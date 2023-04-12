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
    path: '/sensors',
    name: '传感器管理',
    icon: 'table',
    access: 'canRoot',
    component: './Sensors',
  },
  {
    path: '/admin/sensors',
    name: '传感器管理',
    icon: 'table',
    access: 'canAdmin',
    component: './Sensors',
  },
  {
    path: '/structures',
    name: '结构物管理',
    icon: 'table',
    access: 'canRoot',
    component: './Structure',
  },
  {
    path: '/chart',
    name: '图表',
    icon: 'table',
    access: 'canRoot',
    routes: [
      {
        path: '/chart/location-type',
        name: '传感器汇总',
        icon: 'smile',
        component: './charts/location-type',
      }
    ]
  },
  {
    name: '人员管理',
    icon: 'user',
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
