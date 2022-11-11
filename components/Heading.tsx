import { FC } from "react";

interface IHeadingProps {
	tag?: any,
	text: string
}
const Heading: FC<IHeadingProps> = ({ tag, text }) => {
	const Tag = tag || 'h1'
	return <Tag className="text-cyan-dark text-center text-6xl font-semibold ">{text}</Tag>
}
export default Heading;