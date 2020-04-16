import React from 'react'

export const HeaderLeft = (props) => {
    return(
        <div className="topbar-left">
            <a href="/" className="logo">
                <span>
                <img src="../assets/images/codeoku.png" alt="logo-small" className="logo-sm" />
                </span>
                <span>
                <img src="../assets/images/codeo.png" alt="logo-large" className="logo-lg" style={{height: '65px'}} />
                </span>
            </a>
        </div>
    )
}
