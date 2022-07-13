import React, { StrictMode } from "react";
import { render } from "react-dom";
import Providers from "./providers";

render(
	<StrictMode>
		<Providers />
	</StrictMode>,
	document.querySelector("#root")
);
