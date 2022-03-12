import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { Navbar } from '../components'

const { Header, Content, Footer } = Layout

const SharedLayout = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Navbar />
      </Header>
      <Content>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Cool Movie app O_O ©2021</Footer>
    </Layout>
  )
}

export default SharedLayout
