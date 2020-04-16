import React from 'react'
import DeliveryTable from "./DeliveryTable";

const Delivery = ({orders, detail}) => {
    console.log(orders)
    return (
            <div>
                <div className='page-header'>
                    <div className='page-header-title'>
                        Заказы
                    </div>
                </div>
                <div className='page-container'>
                    <div>Фильтры</div>
                    <div>
                        <DeliveryTable orders={orders} detail={detail}/>
                    </div>
                </div>
            </div>
    )
}

export default Delivery;