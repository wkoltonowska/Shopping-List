import { useState } from "react";
import "../../../css/ShoppingList.css";

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
		};

		setProducts((p) => [...p, newProductObj]);
		setNewProduct("");
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			addProduct();
		}
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
					onKeyDown={handleKeyDown}
				/>
				<button className="add-product__btn" onClick={addProduct}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 4660 4660"
						className="plus-img"
						fill="currentColor">
						<path
							d="M3057 4451l0 -1392 1392 0c71,-1 104,-21 142,-57 36,-35 66,-74 67,-142 7,-320 -3,-685 0,-1015 0,-84 -7,-115 -48,-161 -80,-92 -158,-87 -320,-87 -146,0 -261,10 -398,10 -275,0 -550,0 -826,0 0,-174 14,-1331 -12,-1439 -16,-67 -73,-128 -136,-153 -70,-27 -464,-9 -577,-9 -119,0 -483,-16 -573,4 -75,16 -130,73 -153,136 -25,72 -10,198 -10,287 0,388 0,776 0,1164 -174,0 -1331,-14 -1439,12 -65,16 -133,77 -156,144 -14,43 -12,1113 -2,1152 51,194 278,164 423,164 392,0 783,0 1174,0 0,271 0,543 0,815 0,137 -10,252 -10,398 0,161 -3,379 228,378l1025 0c74,0 109,-25 147,-62 38,-39 61,-73 62,-147z"
							className="plus-img"
							fill="currentColor"
						/>
						<path
							d="M3057 4451c1,-2 2,-9 3,-7 0,1 2,-6 2,-7l4 -1368 1303 0c10,0 31,1 40,0 22,-2 -2,1 18,-2 21,-5 10,-1 22,-8l-1392 0 0 1392z"
							className="plus-img"
							fill="currentColor"
						/>
					</svg>
				</button>
			</div>
		</>
	);
};

export default ShoppingList;
