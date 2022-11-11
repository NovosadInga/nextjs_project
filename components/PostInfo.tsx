import { FC } from "react";
import { IPost } from "../types";
import Heading from "./Heading";
interface IPostInfoProps {
	post: IPost
}
const PostInfo: FC<IPostInfoProps> = ({ post }) => {
	const { title, body, id } = post
	return <div className="mt-3 text-center">
		<Heading text={`Post${id}`} />
		<div>
			<strong>{title}</strong>
			{body}
		</div>
	</div>
}
export default PostInfo;