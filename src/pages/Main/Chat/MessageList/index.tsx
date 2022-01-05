import React from 'react';
import c from 'classnames';
import s from './style.module.scss';
import MessageBuble from '../MessageBuble';

const messages = [
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
  {
    isMy: false,
    message: 'ssjdkaaaaaaaaajkdssjdksjkdssjdksjkdssjdksjkdssjdksjkdssjdksjkd',
  },
  {
    isMy: true,
    message: 'ssjdksjkd',
  },
];

function MessageList() {
  return (
    <div className={s.root}>
      {messages.map((item) => (
        <div key={item.message} className={c(s.buble, { [s.my]: item.isMy })}>
          <MessageBuble isMy={item.isMy}>ssjdksjkd</MessageBuble>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
