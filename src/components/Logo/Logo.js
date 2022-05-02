import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';
import Icon from './Icon.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
                  <Tilty className="Tilty br2 shadow-2" options={{ max : 55 }} style={{height: 150, width: 150}}>
                     <img alt='Icon' src={Icon} />
                  </Tilty>
        </div>
    );
}

export default Logo;