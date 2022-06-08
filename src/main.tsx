import '@/assets/global.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './routes'
import {Menu} from "@/layouts/Menu/Menu";

// Shopify polaris 组件
import {AppProvider, Frame} from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';

// Shopify polaris 组件的翻译文件
import enTranslations from '@shopify/polaris/locales/en.json';
import {Link, TopBar} from "@/component";

// 导入 i18n 配置文件
import '@/i18n/config';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*使用 linkComponent 属性的目的是替换为 react-router-dom 的 NotFound 组件实现无刷新跳转页面 */}
      <AppProvider i18n={enTranslations} linkComponent={Link}>
        {/*侧边菜单栏*/}
        <Frame navigation={<Menu/>} topBar={<TopBar/>}>
          <div style={{padding: '32px'}}>
            {/*路由渲染*/}
            {renderRoutes(routes)}
          </div>
        </Frame>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


