import Head from 'next/head'

// components
import Button from '../components/Button'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Zach Harris</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Button isExtended>Test</Button>
			<Button isExtended isSmall>
				Test Extended
			</Button>
			<Button isSpacebar />
		</div>
	)
}
