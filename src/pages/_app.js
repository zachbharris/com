import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={{ background: '#2B2A2D', foreground: '#FAFAFA' }}>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
