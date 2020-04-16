import React from 'react';
import { HeaderLeft } from './header/HeaderLeft';
import { HeaderRight } from './header/HeaderRight';

const Header = () => {
        return (
            <div>
                <div className="topbar">
                    
                        <HeaderLeft />
                        <HeaderRight />

                </div>
            </div>
        )
}

export default Header