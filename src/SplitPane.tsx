import React, { cloneElement } from "react";

import { removeNullChildren } from "./utils";
import { renderResizer } from "./render";
import Pane from "./Pane";
import styles from "./index.less";

export type Size = string | number;

export interface SplitPaneProps {
  allowResize?: boolean;
  className?: string;
  primary?: "first" | "second";
  minSize?: Size;
  maxSize?: Size;
  defaultSize?: Size;
  size?: Size;
  direction?: "vertical" | "horizontal";
  onDragStarted?: () => void;
  onDragFinished?: (newSize: number) => void;
  onChange?: (newSize: number) => void;
  onResizerClick?: (event: MouseEvent) => void;
  onResizerDoubleClick?: (event: MouseEvent) => void;
  style?: React.CSSProperties;
  resizerStyle?: React.CSSProperties;
  paneStyle?: React.CSSProperties;
  pane1Style?: React.CSSProperties;
  pane2Style?: React.CSSProperties;
  resizerClassName?: string;
  step?: number;
  children?: React.ReactNode;
  Resizer?: React.ReactNode;
}

export default (props: SplitPaneProps) => {
  const { children, Resizer } = props;

  const [child1, child2] = removeNullChildren(children);

  console.log(child1, child2);

  console.log(React.isValidElement(Resizer));
  return (
    <div className={styles.wrapper}>
      <Pane children={child1} />
      {renderResizer(Resizer, {})}
      <Pane children={child2} />
    </div>
  );
};
