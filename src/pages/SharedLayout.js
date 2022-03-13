import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { ToastContainer } from 'react-toastify'
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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer style={{ textAlign: 'center' }}>Cool Movie app O_O ©2021</Footer>
    </Layout>
  )
}

export default SharedLayout
