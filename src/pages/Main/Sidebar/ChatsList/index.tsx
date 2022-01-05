import React from 'react';
import ChatsListItem from '../ChatsListItem';
import s from './style.module.scss';

function ChatsList() {
  const message = (
    <div className={s.item}>
      <ChatsListItem />
    </div>
  );
  const messages = Array(40).fill(message);
  return <div className={s.root}>{messages}</div>;
}

export default ChatsList;
