// @ts-nocheck
import {Home, Setting} from '@/pages'
import {RouteConfig} from 'react-router-config'
import {NotFound} from "@/component";

// TODO: 因为时间有限，如果需要在侧边菜单栏显示，还需要再改一下 Menu.tsx
const routesConfig: RouteConfig [] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/setting',
    exact: true,
    component: Setting,
    routes: [
      // {
      //   path: '/',
      //   exact: false,
      //   component: loadable(() => import('@/pages/hybird'))
      // }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routesConfig
