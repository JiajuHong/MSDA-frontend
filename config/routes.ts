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
    path: '/dashboard',
    name: '仪表盘',
    icon: 'dashboard',
    component: './Welcome',
  },
  {
    name: '项目管理',
    icon: 'audit',
    path: '/project',
    routes: [
      {
        path: '/project/info',
        name: '项目信息管理',
        component: './Projects/info'
      },
      {
        path: '/project/member',
        name: '项目成员管理',
        component: './Projects/member'
      },
    ]
  },
  {
    path: '/sensors',
    name: '传感器管理',
    icon: 'deployment-unit',
    access: 'canRoot',
    component: './Sensors',
  },
  {
    path: '/structures',
    name: '结构物管理',
    icon: 'gold',
    access: 'canRoot',
    component: './Structure',
  },
  {
    path: '/chart',
    name: '图表',
    icon: 'bar-chart',
    access: 'canRoot',
    routes: [
      {
        path: '/chart/temperature',
        name: '温度传感器',
        component: './charts/temperature',
      },
      {
        path: '/chart/infrared',
        name: '红外传感器',
        component: './charts/infrared',
      },
    ],
  },
  {
    name: '组织架构管理',
    icon: 'apartment',
    path: '/personnel',
    access: 'canRoot',
    routes: [
      {
        path: '/personnel/user',
        name: '人员管理',
        icon: 'user',
        component: './Personnel/User',
      },
      {
        path: '/personnel/group',
        name: '工作组管理',
        icon: 'team',
        component: './Personnel/Group',
      },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard',
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
