import Image from 'next/image'
import styles from '../page.module.css'
import Link from "next/link";

export default function Test() {
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

			<div className={styles.grid}>
				<Link href={`/`} className={styles.card}>
					<h3>Home &rarr;</h3>
					<p>Goto Homepage</p>
				</Link>
			</div>
		</main>
	)
}
