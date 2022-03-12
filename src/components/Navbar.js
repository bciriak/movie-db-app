import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'

const Navbar = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">
        <NavLink to="/">Search</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="favorite-movies">My Favorites</NavLink>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
