import React from 'react';
import { Input, ButtonGroup, Button } from 'src/components';
import NewChat from './NewChat';
import ChatsList from './ChatsList';
import s from './style.module.scss';

function Sidebar() {
  return (
    <div className={s.root}>
      <Input placeholder="Поиск" />
      <ButtonGroup className={s.item}>
        <Button>Активные</Button>
        <Button>Архив</Button>
        <Button>Все</Button>
      </ButtonGroup>
      <ChatsList />
      <NewChat />
    </div>
  );
}

export default Sidebar;
