'use client'
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import Style from '../../../style/services.module.scss'

const Services = () => {
  return (
    <div className={Style.services}>
      <div className={Style.servicesContainer}>
        <div className={Style.servicesCard}>
          <LocalShippingRoundedIcon className={Style.Icon}/>
          <p className={Style.bold}>Free Delivery</p>
          <p className={Style.normal}>Free Shipping on all order</p>
        </div>
        <div className={Style.servicesCard}>
          <AutorenewRoundedIcon className={Style.Icon}/>
          <p className={Style.bold}>Return Policy</p>
          <p className={Style.normal}>Free Shipping on all order</p>
        </div>
        <div className={Style.servicesCard}>
          <HeadsetMicRoundedIcon className={Style.Icon}/>
          <p className={Style.bold}>24/7 Support</p>
          <p className={Style.normal}>Free Shipping on all order</p>
        </div>
        <div className={Style.servicesCard}>
          <StorageRoundedIcon className={Style.Icon}/>
          <p className={Style.bold}>Secure Payment</p>
          <p className={Style.normal}>Free Shipping on all order</p>
        </div>
      </div>
    </div>
  )
}

export default Services