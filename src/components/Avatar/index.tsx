import React from 'react';
import c from 'classnames';
import s from './style.module.scss';

interface avatarInterface {
  name: string;
  src?: string;
  round?: boolean;
}

function Avatar({ name, src, round }: avatarInterface) {
  const firstCharacterFromName = name.charAt(0).toUpperCase();
  return (
    <div className={c(s.root, { [s.round]: round })}>
      {src ? <img src={src} alt={name} /> : firstCharacterFromName}
    </div>
  );
}

export default React.memo(Avatar);
