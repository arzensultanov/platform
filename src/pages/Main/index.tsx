import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import s from './style.module.scss';

function Main() {
  return (
    <div className={s.root}>
      <div className={s.sideBarWrap}>
        <Sidebar />
      </div>
      <div className={s.contentWrap}>
        <Content />
      </div>
    </div>
  );
}

export default Main;
