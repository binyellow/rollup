import React, { ButtonHTMLAttributes } from "react";
import { storiesOf } from "@storybook/react";

import Test from "./Test";

storiesOf("Basic", module).add("Basic Horizontal", () => <Test />);
