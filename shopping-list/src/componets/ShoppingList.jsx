import { useState } from "react";
import plus from "../img/plus.png";
import "../../css/ShoppingList.css";

export const ShoppingList = ({ setProducts }) => {
	const [newProduct, setNewProduct] = useState("");

	const handleInputChange = (event) => {
		setNewProduct(event.target.value);
	};

	const addProduct = () => {
		if (newProduct.trim() == "") {
			return;
		}

		const newProductObj = {
			name: newProduct,
			isBought: false,
		}

		setProducts((p) => [...p, newProductObj]);
		setNewProduct("");
	};

	return (
		<>
			<div className="add-product">
				<input
					type="text"
					className="add-product__input"
					placeholder="Add product"
					value={newProduct}
					onChange={handleInputChange}
				/>
				<button className="add-product__btn" onClick={addProduct}>
					<img src={plus} alt="Add" className="plus-img" />
				</button>
			</div>
		</>
	);
};

export default ShoppingList;
