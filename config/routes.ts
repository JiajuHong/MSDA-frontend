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
    access: 'canRoot',
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
    name: '数据分析',
    icon: 'bar-chart',
    access: 'canRoot',
    routes: [
      {
        path: '/chart/temperature',
        name: '温度传感器',
        component: './charts/temperature',
      },
      {
        path: '/chart/humidity',
        name: '湿度传感器',
        component: './charts/humidity',
      },
      {
        path: '/chart/pressure',
        name: '压力传感器',
        component: './charts/pressure',
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
        name: '用户管理',
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
    name: '组内传感器',
    icon: 'mac-command',
    path: '/group-sensor',
    component: './MyGroupSensors',
  },
  {
    component: './404',
  },
];
