import React, { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(props: ButtonProps) {
	const { children, ...rest } = props

	return <button {...rest}>{children}</button>
}

export default Button
