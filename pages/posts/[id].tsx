import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import Button from "../../components/Button";
import PostInfo from "../../components/PostInfo";
import { IPost } from "../../types";
export const getStaticPaths: GetStaticPaths = async () => { //для генерации статических страниц
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	const data: IPost[] = await res.json()
	const paths = data.map(({ id }) => ({ params: { id: id.toString() } }))
	return {
		paths,
		fallback: false, // если ошибка выдаст 404
	}
}
export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	const post = await res.json()
	if (!post) {
		return {
			notFound: true
		}
	}
	return {
		props: {
			post
		},
	}
}
interface IPostProps {
	post: IPost
}
const Post: FC<IPostProps> = ({ post }) => {
	const router: NextRouter = useRouter()

	return <>
		<Head>
			<title>Post Page</title>
		</Head>
		<PostInfo post={post} />
		<Button clickHandler={router.back} />

	</>
}
export default Post;