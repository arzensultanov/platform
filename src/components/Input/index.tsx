import React from 'react';
import c from 'classnames';
import s from './style.module.scss';

interface inputInterface {
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  className?: string;
  [inputProps: string]: any;
}

function Input({
  leftChildren,
  rightChildren,
  className,
  ...inputProps
}: inputInterface) {
  return (
    <div tabIndex={-1} className={c(s.root, className)}>
      {leftChildren}
      <input {...inputProps} className={s.input} />
      {rightChildren}
    </div>
  );
}

export default Input;
