import { useState } from "react";
import "../../../css/EditedProduct.css";

export const EditedProduct = ({ initialValue, onSave, onCancel }) => {
	const [value, setValue] = useState(initialValue);
	return (
		<div className="edit-product">
			<input
				type="text"
				className="edit-product__input"
				value={value.name}
				onChange={(e) => setValue({ ...value, name: e.target.value })}
			/>
			<button
				className="save-btn edit-product__btn"
				onClick={() => onSave(value)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 5911 5917"
					className="edit-product__img">
					<path
						fill="currentColor"
						d="M0 535l0 4852c0,253 273,530 542,530h443v-1663c0-200 32-384 175-527 142-141 326-175 527-175h2537c468 0 702 232 702 702v1663h431c287 0 554-267 554-554v-4015c0-90-236-292-305-360l-837-838c-194-193-132-145-631-145v1491c0 322-158 480-480 480h-1404c-323 0-481-158-481-480v-1491h-1243c-252 0-530 278-530 530z"
					/>
					<path
						fill="currentColor"
						d="M1379 4106v1811h3153v-1786c0-105-80-185-185-185h-2808c-71 0-160 90-160 160z"
					/>
					<polygon
						fill="currentColor"
						points="2167,1582 3744,1582 3744,5 2167,5"
					/>
				</svg>
			</button>
			<button className="cancel-btn edit-product__btn" onClick={onCancel}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 12877 12877"
					className="edit-product__img">
					<path
						fill="currentColor"
						d="M0 1559c0,295 12,554 232,799 55,61 73,94 126,151 417,451 1224,1224 1686,1685 160,161 2149,2121 2232,2245 -86,127 -3089,3101 -3352,3364 -267,267 -439,415 -679,704 -144,174 -225,386 -245,603v217c19,200 88,396 208,563 106,147 632,674 780,779 168,122 358,190 551,208h218c273,-26 540,-148 752,-358 196,-193 371,-371 566,-566l2791 -2792c140,-139 435,-468 573,-559 215,144 3418,3442 4067,4030 245,222 508,245 812,245 443,0 743,-353 975,-584 438,-439 584,-549 584,-1176 0,-299 -203,-593 -358,-749 -406,-410 -3823,-3789 -3917,-3929 86,-130 3521,-3535 3905,-3917 315,-314 370,-547 370,-963 0,-442 -353,-743 -584,-974 -427,-427 -550,-585 -1176,-585 -175,0 -314,66 -428,125 -292,152 -655,568 -886,799 -263,263 -3233,3263 -3364,3352 -130,-87 -3535,-3522 -3917,-3905 -216,-217 -487,-344 -765,-371h-221c-191,19 -380,87 -548,208 -154,110 -270,244 -403,377 -231,231 -585,532 -585,974z"
					/>
				</svg>
			</button>
		</div>
	);
};
