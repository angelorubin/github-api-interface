import React, { StrictMode } from "react";
import { render } from "react-dom";
import GithubProvider from "./providers";

render(
	<StrictMode>
		<GithubProvider />
	</StrictMode>,
	document.querySelector("#root")
);
