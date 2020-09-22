import React from "react";

export const removeNullChildren = (children?: React.ReactNode) =>
  React.Children.toArray(children).filter(c => c);
