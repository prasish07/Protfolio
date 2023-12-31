import styles, { layout } from "../style";
import Button from "./Button";

const CardLayout = ({
	id,
	category,
	title,
	description,
	image,
	github_link,
	live_website,
}) => {
	return (
		<div className="flex flex-col sm:w-[80%] w-full justify-center">
			<div
				className={`flex ${layout.sectionReverse} rounded-[24px] bg-white sm:h-[524px] md:items-stretch items-center sm: h-auto sm:justify-between mb-10 shadow-2xl`}
			>
				<div className="flex flex-col justify-center mb:items-start items-center text-center sm:ml-[40px] sm:mr-[60px] m-[15px]">
					<h2 className="font-poppins font-semibold text-[25px] mb-6 sm:text-start text-center">
						{title}
					</h2>
					<p className={`${styles.paragraph} max-w-[470px] mb-5 text-justify`}>
						{description}
					</p>

					{category === "Node" ? (
						<a href={github_link} target="_blank" rel="noreferrer">
							<Button
								styles="mt-4 bg-blue-400 w-full sm:w-[170px] h-[50px] flex justify-center items-center"
								text="Source code"
							/>
						</a>
					) : (
						<div className="flex sm:flex-row flex-col">
							{" "}
							<a href={live_website} target="_blank" rel="noreferrer">
								<Button
									styles="mt-4 bg-green-400 w-full sm:w-[170px] h-[50px] flex justify-center items-center mb-2 sm:mb-0 sm:mr-4"
									text="Live site"
								/>
							</a>
							<a href={github_link} target="_blank" rel="noreferrer">
								<Button
									styles="mt-4 bg-blue-400 w-full sm:w-[170px] h-[50px] flex justify-center items-center"
									text="Source code"
								/>
							</a>
						</div>
					)}
				</div>
				<img
					src={image}
					alt="my photo"
					className="sm:w-[47%]  object-cover flex rounded-[20px] md:rounded-none md:rounded-tr-[24px] md:rounded-br-[24px] sm:mt-[80px] md:mt-[0px]"
				/>
			</div>
		</div>
	);
};

export default CardLayout;
