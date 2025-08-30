import { useState } from "react";
import "../../css/EditedProduct.css";
import cancel from "../img/cancel.png";
import save from "../img/save.png";

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
				<img src={save} alt="save" className="edit-product__img" />
			</button>
			<button className="cancel-btn edit-product__btn" onClick={onCancel}>
				<img src={cancel} alt="cancel" className="edit-product__img" />
			</button>
		</div>
	);
};
