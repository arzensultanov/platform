import React from 'react';
import c from 'classnames';
import s from './style.module.scss';

interface messageBubleInterface {
  isMy?: boolean;
  children: React.ReactNode;
}

function MessageBuble({ isMy, children }: messageBubleInterface) {
  return <div className={c(s.root, { [s.my]: isMy })}>{children}</div>;
}

export default MessageBuble;
