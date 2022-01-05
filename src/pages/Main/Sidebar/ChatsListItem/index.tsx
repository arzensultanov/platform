import React from 'react';
import { Avatar } from 'src/components';
import s from './style.module.scss';

function ChatsListItem() {
  return (
    <div className={s.root}>
      <Avatar name="Arsen" />
      <div className={s.content}>
        <div className={s.header}>
          <div>Arsen Sultanov</div>
          <div className={s.time}>23:11</div>
        </div>
        <div className={s.footer}>
          <div className={s.message}>
            <div className={s.messageText}>
              lollollollollollollollollollollollollollollollollollollol
            </div>
          </div>
          <div className={s.messageCount}>5+</div>
        </div>
      </div>
    </div>
  );
}

export default ChatsListItem;
