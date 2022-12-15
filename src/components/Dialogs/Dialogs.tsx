import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs(props:any) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/1'}>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Maria</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Bye</div>
            </div>
        </div>

    );
}

export default Dialogs;