import React from 'react';
import { Input, Button } from 'src/components';
import s from './style.module.scss';

function Header() {
  return (
    <footer className={s.root}>
      <Input placeholder="Введите сообщение" className={s.input} />
      <Button type="primary">Отправить</Button>
    </footer>
  );
}

export default Header;
