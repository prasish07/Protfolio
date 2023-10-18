import styles, { layout } from "../style";
import { CV, prasish } from "../assets";

const Aboutme = () => {
	return (
		<div className={`${styles.flexStart} ${styles.paddingX}`}>
			<div className={styles.boxWidth}>
				<div
					className={`${layout.sectionReverse} sm:justify-start justify-center sm:items-start items-center mb-10`}
				>
					<div className="flex flex-1  flex-col justify-center">
						<h2
							className={`font-poppins font-semibold sm:text-[40px] vss:text-[30px] text-[22px] mb-3`}
						>
							About me
						</h2>
						<p className={`${styles.paragraph} max-w-[750px] text-justify`}>
							I am a Computer Science student at Herald College in Kathmandu,
							Nepal, deeply passionate about software and web development. My
							focus has been on gaining practical experience and enhancing my
							skills in these domains.
							<br />
							<br /> I have developed intermediate-level proficiency in Node.js,
							enabling me to build server-side applications. Additionally, I
							have explored React.js, a popular JavaScript library for creating
							dynamic web interfaces, through hands-on projects.
							<br />
							<br /> What sets me apart is my dedication to self-projects, which
							have enriched my theoretical knowledge and provided invaluable
							practical experience. These projects have honed my critical
							thinking and problem-solving skills.
							<br />
							<br /> I am committed to continually expanding my skill set,
							staying updated on the latest advancements in software and web
							development, and exploring new technologies. My ultimate goal is
							to pursue a fulfilling career in this field, contributing my
							expertise to innovative teams, and making a positive impact in the
							technology industry. With my passion, dedication, and solid
							foundation in Node.js and React.js, I am confident in my ability
							to excel and make significant contributions to the world of
							technology.
						</p>

						<div className="mt-4">
							<a
								href={CV}
								target="_blank"
								className="btn flex justify-center items-center"
								rel="noreferrer"
							>
								<span>Download CV</span>
							</a>
						</div>
					</div>
					<img
						src={prasish}
						alt="my image"
						className="sm:w-[40%] h-[60%] w-[70%] rounded-full mt-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default Aboutme;
