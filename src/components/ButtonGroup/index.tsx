import React, { Children, useState } from 'react';
import c from 'classnames';
import s from './style.module.scss';

interface buttonGroupInterface {
  children?: React.ReactNode;
  className?: string;
}

type activeButtonIndex = number;

function ButtonGroup({ children, className }: buttonGroupInterface) {
  const [activeButtonIndex, setActiveButtonIndex] =
    useState<activeButtonIndex>(0);

  function onClick(
    activeButtonIndex: activeButtonIndex,
    buttonOnClickHandler: () => unknown,
  ) {
    setActiveButtonIndex(activeButtonIndex);
    buttonOnClickHandler && buttonOnClickHandler();
  }

  return (
    <div className={c(s.root, className)}>
      {Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <child.type
              {...child.props}
              key={child.props.key || index}
              type={activeButtonIndex === index ? 'primary' : 'default'}
              onClick={() => onClick(index, child.props.onClick)}
            >
              {child.props.children}
            </child.type>
          );
        }
        return null;
      })}
    </div>
  );
}

export default ButtonGroup;
