import React from 'react';
import { Avatar } from 'src/components';
import s from './style.module.scss';

function Header() {
  return (
    <head className={s.root}>
      <Avatar name="Arsen" />
      <div className={s.userInformation}>
        <p className={s.name}>Arsen</p>
        <div className={s.indicators}>
          <div className={s.indicator} />
          <span className={s.indicatorMessage}>Online</span>
        </div>
      </div>
    </head>
  );
}

export default Header;
