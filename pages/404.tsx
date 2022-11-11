
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { FC, useEffect } from "react";
import Heading from "../components/Heading";
const NotFound: FC = () => {
	const router: NextRouter = useRouter()
	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 3000)
	}, [router]);
	return <>
		<Head>
			<title>Not Faund Page</title>
		</Head>
		<Heading text='404'></Heading>
		<p className="text-center">Something is going wrong...</p>
	</>
}
export default NotFound;