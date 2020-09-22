import React from "react";

export interface PaneProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default (props: PaneProps) => {
  const { children } = props;
  return <div>{children}</div>;
};
