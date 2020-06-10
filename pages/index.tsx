import Head from "next/head";
import React from "react";
import fetch from "cross-fetch";

export const Layout = (props: {
	pageTitle: string;
	pageSubTitle: string;
	children: any;
}) => (
	<div className="container">
		<Head>
			<title>{props.pageTitle}</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main>
			<h1 className="title">{props.pageTitle}</h1>
			<h2>{props.pageSubTitle}</h2>

			{props.children}
		</main>

		<footer>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by <img src="/vercel.svg" alt="Vercel Logo" />
			</a>
		</footer>

		<style jsx global>{`
			html,
			body {
				padding: 0;
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
					Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}

			* {
				box-sizing: border-box;
			}
			.container {
				min-height: 100vh;
				padding: 0 0.5rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			main {
				padding: 5rem 0;
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			footer {
				width: 100%;
				height: 100px;
				border-top: 1px solid #eaeaea;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			footer img {
				margin-left: 0.5rem;
			}

			footer a {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			a {
				color: inherit;
				text-decoration: none;
			}

			.title a {
				color: #0070f3;
				text-decoration: none;
			}

			.title a:hover,
			.title a:focus,
			.title a:active {
				text-decoration: underline;
			}

			.title {
				margin: 0;
				line-height: 1.15;
				font-size: 4rem;
			}

			.title,
			.description {
				text-align: center;
			}

			.description {
				line-height: 1.5;
				font-size: 1.5rem;
			}

			code {
				background: #fafafa;
				border-radius: 5px;
				padding: 0.75rem;
				font-size: 1.1rem;
				font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
					DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
			}

			.grid {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;

				max-width: 800px;
				margin-top: 3rem;
			}

			.card {
				margin: 1rem;
				flex-basis: 45%;
				padding: 1.5rem;
				text-align: left;
				color: inherit;
				text-decoration: none;
				border: 1px solid #eaeaea;
				border-radius: 10px;
				transition: color 0.15s ease, border-color 0.15s ease;
			}

			.full {
				flex-basis: 100%;
			}

			.card:hover,
			.card:focus,
			.card:active {
				color: #0070f3;
				border-color: #0070f3;
			}

			.card h3 {
				margin: 0 0 1rem 0;
				font-size: 1.5rem;
			}

			.card p {
				margin: 0;
				font-size: 1.25rem;
				line-height: 1.5;
			}

			@media (max-width: 600px) {
				.grid {
					width: 100%;
					flex-direction: column;
				}
			}
		`}</style>
	</div>
);
const Home = () => {
	React.useEffect(() => {
		fetch("/api/hi")
			.then((r) => r.json())
			.then((r) => console.log(r));
	});
	return (
		<Layout pageTitle={"Pretend API"} pageSubTitle={"Documentation"}>
			<div className="grid">
				<a href="https://nextjs.org/docs" className="card">
					<h3>Next.js Documentation</h3>
					<p>This site was built with Next.js </p>
				</a>

				<a href="/docs/repeaters" className="card">
					<h3>Repeater Routes</h3>
					<p>
						These routes respond back with the body/ query of request in the
						body of response
					</p>
				</a>

				<a href="/docs/errors" className="card">
					<h3>Error Routes</h3>
					<p>Routes that always make errors</p>
				</a>

				<a href="/docs/deployment" className="card">
					<h3>Deployment</h3>
					<p>App Is Deployed with Vercel.</p>
				</a>
			</div>
		</Layout>
	);
};

export default Home;
