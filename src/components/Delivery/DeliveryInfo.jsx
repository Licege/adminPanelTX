import React from 'react'
import {deliveryHD} from '../../plagins/hardData';
import PhoneIcon from '@material-ui/icons/PhoneAndroidRounded';
import MailIcon from '@material-ui/icons/MailOutline';
import AccountIcon from '@material-ui/icons/AccountCircle';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ShippingIcon from '@material-ui/icons/LocalShipping';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';
import UpdateIcon from '@material-ui/icons/Update';

const DeliveryInfo = ({order}) => {
    console.log(order);
    return (
        order ? <div className='delivery_info'>
            <div className='delivery_info-block'>
                <div className='card delivery_info-block-card'>
                    <div className='delivery_info-block-card-title'><MenuBookIcon/>Информация о заказе</div>
                    <div className='delivery_info-block-card-item'>
                        <ShippingIcon/>{deliveryHD.deliveryType[order.delivery_type]}
                    </div>
                    <div className='delivery_info-block-card-item'>
                        <UpdateIcon />{deliveryHD.status[order.status]}
                    </div>
                    <div className='delivery_info-block-card-item'>
                        <CreditCardIcon/>{deliveryHD.paymentType[order.payment_type]}
                    </div>
                    <div className='delivery_info-block-card-item'>
                        <WalletIcon />{deliveryHD.paymentStatuses[order.payment_status]}
                    </div>
                </div>
                <div className='card delivery_info-block-card'>
                    <div className='delivery_info-block-card-title'><PersonIcon/>Информация о покупателе</div>
                    <div className='delivery_info-block-card-item'><AccountIcon/>{order.surname}</div>
                    <div className='delivery_info-block-card-item'><MailIcon/>{order.email}</div>
                    <div className='delivery_info-block-card-item'><PhoneIcon/>{order.phone}</div>
                    <div className='delivery_info-block-card-item'>
                        <VerifiedUserIcon/>{order.userId ? 'Сделать ссылку на пользователя' : 'Не зарегистрирован'}
                    </div>
                </div>
            </div>
            <div className='delivery_info-detail'>

            </div>
            <div></div>
        </div> : null
    )
}

export default DeliveryInfo;