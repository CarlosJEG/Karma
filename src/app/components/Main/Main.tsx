'use client'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Style from '../../../style/main.module.scss'
import BgImage from '../../../../public/main.jpg'
import ShoesImage from '../../../../public/shoes.png'
import Image from 'next/image'

const Main = () => {
  return (
    <div className={Style.main}>
      <Image 
        style={{
          zIndex: -1,
          position: 'absolute',
          width: '100%',
          height: 773,
        }}
        src={BgImage} 
        quality={100} 
        
        alt='main'/>

      <div className={Style.mainContainer}>
        <div className={Style.mainContent}>
          <h1>Nike New<br/>Collection!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et
					  dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation.</p>
          <div className={Style.mainBtn}>
            <AddCircleRoundedIcon className={Style.Btn}/>
            <p className={Style.BtnAdd}>ADD TO BAG</p>
          </div>
        </div>
        <div className={Style.mainImg}>
          <Image src={ShoesImage} alt='Shoes'/>
        </div>
      </div>
    </div>
  )
}

export default Main