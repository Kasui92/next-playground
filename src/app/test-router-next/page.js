'use client'

import styles from '../page.module.css'
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function TestRouter() {
	const router = useRouter();

	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		const getRandomPokemon = async () => {
			const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118');
			const data = await response.json();
			return data.results[Math.floor(Math.random() * data.results.length)];
		}

		getRandomPokemon()
			.catch(() => router.push('/'))
			.then(pokemon => setPokemon(pokemon.name));
	}, [
		router
	]);

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<div>
					This is a Test Router Page [Next NProgress Bar]
				</div>
			</div>

			<div className={styles.center}>
				<h1 style={{textTransform: 'uppercase'}}>{pokemon}</h1>
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
