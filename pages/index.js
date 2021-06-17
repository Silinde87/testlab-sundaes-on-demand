import Head from 'next/head';
import styles from './index.module.css';

const Home = () => (
	<div className={styles.container} style={{backgroundColor: "teal", color: "ivory"}}>
		<Head>
			<title>Create Next App</title>
			<link rel="icon" href="/favicon.ico" />
			<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
			<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
			<script
				src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
				crossorigin
			></script>
			<script>var Alert = ReactBootstrap.Alert;</script>
		</Head>
		
	</div>
);

export default Home;
