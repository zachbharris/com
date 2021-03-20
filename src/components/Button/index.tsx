import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isExtended?: boolean
	isSmall?: boolean
	isSpacebar?: boolean
}

function Button(props: ButtonProps) {
	const { children, isExtended, isSmall, isSpacebar, ...rest } = props

	return (
		<button {...rest}>
			<span>{children}</span>
		</button>
	)
}

const StyledButton = styled(Button)`
	display: inline-flex;

	${({ isSpacebar }) => {
		if (isSpacebar)
			return `
				width: 100%;

				> span {
					width: 100%;
				}
			`
	}}

	position: relative;
	background-color: ${props => props.theme.background};
	border-radius: 0.25rem;
	font-family: inherit;
	cursor: pointer;
	padding-bottom: 1rem;

	${({ isSmall }) => {
		if (isSmall) {
			return `
					min-height: 2.25rem;
					min-width: 2.25rem;
				`
		} else {
			return `
					min-height: 2.75rem;
					min-width: 2.75rem;
				`
		}
	}}

	transition: all ease-in-out 0.1s;

	/* remove extra styles */
	border: unset;
	outline: unset;

	> span {
		display: flex;
		background-color: ${props => props.theme.foreground};
		border-radius: 4px;
		padding: 0.25rem;
		font-family: inherit;
		font-size: 1rem;
		font-weight: 800;
		text-transform: uppercase;

		${({ isSmall }) => {
			if (isSmall) {
				return `
					height: 1.5rem;
					min-width: 1.5rem;
				`
			} else {
				return `
					height: 2rem;
					min-width: 2rem;
				`
			}
		}}

		${props =>
			props.isExtended
				? `
			padding-right: 32px;
		`
				: null}
	}

	/* &:hover {
		padding-bottom: 1.125rem;
	}

	&:active {
		padding-bottom: 0.875rem;
	} */
`

export default StyledButton
