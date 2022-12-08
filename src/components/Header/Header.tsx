import React from 'react';
import s from './Header.module.css'
type PropsType = {

}
function Header(props: PropsType) {
    return (
        <header className={s.header}>
            <img alt='logo'
                 src='https://lay-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr'
            />
        </header>
    );
}

export default Header;