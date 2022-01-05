import React from 'react';
import { Button } from 'src/components';
import s from './style.module.scss';

function NewChat() {
  return (
    <Button round type="primary" className={s.root}>
      +
    </Button>
  );
}

export default NewChat;
