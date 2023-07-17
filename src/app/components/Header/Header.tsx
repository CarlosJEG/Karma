"use client"
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Style from '../../../style/header.module.scss'
import Logo from '../../../../public/logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={Style.header}>
      <nav className={Style.headerContainer}>
        <div className={Style.headerLogo}>
          <a href="#">
            <Image src={Logo} alt="Logo" />
          </a>
        </div>
        <div className={Style.navbar}>
          <ul className={Style.navbarContainer}>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">PAGES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <div className={Style.navbarIcons}>
            <LocalMallRoundedIcon className={Style.Icon}/>
            <SearchRoundedIcon className={Style.Icon}/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header