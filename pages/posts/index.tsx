import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import Heading from "../../components/Heading";
import { IPost } from "../../types";

export const getStaticProps: GetStaticProps = async (context) => {

	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts: IPost[] = await res.json()
	if (!posts) {
		return {
			notFound: true
		}
	}
	return {
		props: {
			posts
		},
	}
}
interface IPostProps {
	posts: IPost[]
}
const Posts: FC<IPostProps> = ({ posts }) => {
	return <>
		<Head>
			<title>Posts Page</title>
		</Head>
		<Heading text='Posts list'></Heading>
		<ul className="w-1/4 mx-auto mt-3">
			{
				posts && posts.map(({ id, title }) => (
					<li key={id}>
						<Link href={`/posts/${id}`}>
							<strong>{title}</strong>
						</Link>

					</li>
				))
			}
		</ul>
	</>
}
export default Posts;