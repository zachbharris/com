import Head from 'next/head'

// styles
import styles from 'styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Zach Harris</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Zach Harris</h1>
			<span>Software Engineer in St. Louis</span>
		</div>
	)
}
