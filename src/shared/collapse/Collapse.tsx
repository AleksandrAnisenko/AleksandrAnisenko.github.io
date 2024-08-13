import React, { FC, useLayoutEffect, useState } from 'react';
import cl from './Collapse.module.scss';

export type collapseProps = {
  children: React.ReactNode;
  visible: boolean;
};

export const Collapse: FC<collapseProps> = ({ children, visible }) => {
  const [visibilityState, setVisibilityState] = useState(visible);
  const [isChildeExist, setIsChildeExist] = useState(null);

  useLayoutEffect(() => {
    if (visible) {
      setVisibilityState(true);
      setIsChildeExist(true);
    } else {
      setVisibilityState(false);
    }
  }, [visible]);
  const handleTransitionEnd = () => {
    if (!visible) {
      setIsChildeExist(false);
    }
  };

  return (
    <div className={cl.root}>
      <div style={{ overflow: 'hidden' }}>
        <div className={`${cl.wrapper} ${visibilityState ? cl.opened : null}`} onTransitionEnd={handleTransitionEnd}>
          {isChildeExist && children}
        </div>
      </div>
    </div>
  );
};
