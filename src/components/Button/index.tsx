import React from 'react';
import c from 'classnames';
import s from './style.module.scss';

interface buttoninterface {
  round?: boolean;
  type?: 'text' | 'primary' | 'default';
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => unknown;
}

function Button({
  round = false,
  type = 'default',
  className,
  children,
  onClick,
}: buttoninterface) {
  return (
    <button
      className={c(s.default, s[type], { [s.round]: round }, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
