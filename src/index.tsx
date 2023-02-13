import React from "react";
import ReactDom from "react-dom";
import { Router } from "@/common/router";

import "./index.less";

ReactDom.render(<Router />, document.getElementById("app"));
