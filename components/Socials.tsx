import Head from "next/head";
import { FC } from "react";
import { ISocial } from "../types";
interface ISocialsProps {
	socials: ISocial[]
}
const Socials: FC<ISocialsProps> = ({ socials }) => {
	if (!socials) {
		return null;
	}
	return <>
		<ul className='flex justify-center mt-5'>
			{
				socials && socials.map(({ id, icon, path }) => {
					return <li key={id} className='px-3'>
						<a href={path} target="_blank" rel="noreferrer">
							<i className={`fa-brands fa-${icon} text-4xl text-cyan-dark hover:text-сyan`}></i>
						</a>
					</li>
				})
			}
		</ul>
	</>
}
export default Socials;