import { Container } from 'brandi';
import React from 'react';

import { ContainerContext } from './ContainerContext';
import { useContainer } from './useContainer';

export const ContainerProvider: React.FunctionComponent<{
  children?: React.ReactNode;
  container: Container;
  isolated?: boolean;
}> = ({ children, container, isolated = false }) => {
  const parentContainer = useContainer(false);
  const clonedContainer = React.useMemo(() => container.clone(), [container]);

  if (!isolated) clonedContainer.extend(parentContainer);

  return (
    <ContainerContext.Provider value={clonedContainer}>
      {children}
    </ContainerContext.Provider>
  );
};
