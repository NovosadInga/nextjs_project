import { FC } from "react";

interface IButtonProps {
	clickHandler: () => void
}

const Button: FC<IButtonProps> = ({ clickHandler }) => {
	return <button className="
	py-2 px-4 block mt-3
	mx-auto border border-cyan-dark
	text-cyan-dark text-center"
		type="button"
		onClick={() => clickHandler()}>Back</button>

}
export default Button;