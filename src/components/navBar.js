import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colours from "../style/colours";

var spin = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

const NavBar = () => (
	<header
		css={css`
			background-color: ${colours.secondary};
			padding: 15px;
			margin-bottom: 25px;
		`}
	>
		<Link to="/">Adopt me!</Link>
		<span
			css={css`
				font-size: 60px;
				display: inline-block;
				&:hover {
					animation: 1s ${spin} linear infinite;
					cursor: pointer;
				}
			`}
			role="img"
			aria-label="logo"
		>
			🦮
		</span>
	</header>
);

export default NavBar;
