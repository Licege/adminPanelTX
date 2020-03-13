import React from 'react';
import preloader from "../../../static/img/preloader.svg";

let Preloader = () => {
    return <div  style={ { backgroundColor: 'white' } }>
        <img src={preloader} />
    </div>
};

export default Preloader;