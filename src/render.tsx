import React, { isValidElement, cloneElement } from "react";

import DefaultResizer, { ResizerProps } from "./Resizer";

export const renderResizer = (
  children?: React.ReactNode,
  props?: ResizerProps
) => {
  if (isValidElement(children)) {
    return cloneElement(children, props);
  }

  if (children) {
    return children;
  }

  return <DefaultResizer />;
};
