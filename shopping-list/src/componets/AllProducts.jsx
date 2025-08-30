import { useState } from "react";
import { EditedProduct } from "./EditedProduct";
import "../../css/AllProducts.css";

import del from "../img/delete.png";
import edit from "../img/edit.png";
import done from "../img/done.png";

export const AllProducts = ({ products, setProducts }) => {
	const [editingIndex, setEditingIndex] = useState(null);
	const [editedProduct, setEditedProduct] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);

	const doneProduct = (index) => {
		const updatedProducts = [...products];
		updatedProducts[index].isBought = !updatedProducts[index].isBought;
		setProducts(updatedProducts);
	};

	const deleteProduct = (index) => {
		const updatedProducts = products.filter((_, i) => i !== index);
		setProducts(updatedProducts);
	};

	const editProduct = (index) => {
		setEditingIndex(index);
		setEditedProduct(products[index]);
		setIsDisabled(true);
	};

	const saveEdit = (newValue) => {
		const updated = [...products];
		updated[editingIndex] = newValue;
		setProducts(updated);
		setEditingIndex(null);
		setEditedProduct("");
		setIsDisabled(false);
	};

	const cancelEdit = () => {
		setEditingIndex(null);
		setEditedProduct("");
		setIsDisabled(false);
	};

	return (
		<ol className="all-products">
			{products.map((product, index) => (
				<li className="all-products__li" key={`all-products-element-${index}`}>
					<span className={product.isBought ? "all-products__bought" : ""}>
						{product.name}
					</span>

					<div className="button-container">
						{editingIndex === index ? (
							<EditedProduct
								initialValue={editedProduct}
								onSave={saveEdit}
								onCancel={cancelEdit}
							/>
						) : (
							""
						)}
						<>
							<button
								className="all-products__btn done-btn"
								onClick={() => doneProduct(index)}
								disabled={isDisabled}>
								<img src={done} alt="done" className="done-btn__img" />
							</button>

							<button
								className={`all-products__btn edit-btn ${ isDisabled ? "all-products__btn-disabled" : ""}` }
								onClick={() => editProduct(index)}
								disabled={isDisabled}>
								<img src={edit} alt="edit" className="edit-btn__img" />
							</button>

							<button
								className="all-products__btn delete-btn"
								onClick={() => deleteProduct(index)}
								disabled={isDisabled}>
								<img src={del} alt="delete" className="delete-btn__img" />
							</button>
						</>
					</div>
				</li>
			))}
		</ol>
	);
};

export default AllProducts;
