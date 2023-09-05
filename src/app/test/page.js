import Image from 'next/image'
import styles from '../page.module.css'
import Link from "next/link";
import Container from "@/components/Container";

export default async function Test() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<div>
					This is a Test Page
				</div>
			</div>

			<div className={styles.center}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div>

			<Container>
				<Container.Header>
					HEADER
				</Container.Header>
				CONTAINER
			</Container>

			<div className={styles.grid}>
				<Link href={`/`} className={styles.card}>
					<h3>Home &rarr;</h3>
					<p>Goto Homepage</p>
				</Link>
			</div>
		</main>
	)
}
