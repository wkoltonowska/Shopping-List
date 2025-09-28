import { useState } from "react";
import { EditedProduct } from "./EditedProduct";
import "../../../css/AllProducts.css";

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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="117.68mm"
									height="83.6795mm"
									viewBox="0 0 9967 7087"
									className="done-btn__img">
									<path
										fill="currentColor"
										d="M3543 5217c-85,-57 -224,-214 -307,-297 -108,-108 -203,-203 -311,-311l-1246 -1246c-351,-351 -414,-482 -920,-482 -372,0 -759,388 -759,759 0,313 35,475 277,716 430,426 2297,2344 2573,2528 384,256 949,275 1339,31 274,-171 954,-894 1208,-1148l4322 -4321c148,-147 234,-342 248,-544l0 -123c-7,-105 -34,-209 -81,-308 -19,-39 -43,-84 -72,-123l-195 -195c-175,-130 -339,-153 -548,-153 -369,0 -626,325 -822,521l-4706 4696z"
									/>
								</svg>
							</button>

							<button
								className={`all-products__btn edit-btn ${
									isDisabled ? "all-products__btn-disabled" : ""
								}`}
								onClick={() => editProduct(index)}
								disabled={isDisabled}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 14483 14482"
									className="edit-btn__img">
									<path
										fill="currentColor"
										d="M4190 11111c315,0 548,-37 821,-60 292,-25 546,-40 843,-71 760,-79 848,-97 1289,-538 314,-315 5333,-5369 5489,-5474l-3111 -3127c-97,143 -1845,1861 -2016,2032l-3040 3040c-1118,1119 -817,835 -977,2078 -33,259 -74,641 -86,923 -18,423 -92,489 119,826 127,203 348,371 669,371z"
									/>
									<path
										fill="currentColor"
										d="M0 3960l0 7876c0,1529 1116,2646 2646,2646l7813 0c1077,0 1943,-485 2415,-1428 138,-276 263,-633 263,-1029l0 -3970c0,-628 -893,-736 -1024,-109 -48,230 -19,3374 -16,3953 2,370 -65,563 -199,809 -201,367 -694,734 -1250,734l-8159 0c-793,0 -1450,-697 -1450,-1480l0 -8097c0,-813 680,-1485 1480,-1481l3964 -6c712,-99 551,-1033 7,-1033l-4033 0c-391,0 -747,120 -1008,252 -866,436 -1449,1236 -1449,2363z"
									/>
									<path
										fill="currentColor"
										d="M10238 1156l3080 3095c124,-85 671,-640 764,-763 110,-144 201,-287 275,-482 287,-757 60,-1505 -441,-2000 -337,-333 -604,-679 -1085,-868 -829,-326 -1546,-45 -2112,522 -135,134 -388,358 -481,496z"
									/>
								</svg>
							</button>

							<button
								className="all-products__btn delete-btn"
								onClick={() => deleteProduct(index)}
								disabled={isDisabled}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 36033 40997"
									className="delete-btn__img">
									<path
										fill="currentColor"
										d="M7927 40997l20178 0c1524,0 3001,-1345 3297,-3110 133,-794 226,-3106 353,-3970 198,-1348 343,-4477 502,-5984l653 -7915c41,-1319 287,-2693 320,-4004 32,-1295 320,-2697 320,-4003l-31068 0c0,1577 594,6060 641,7927l653 7995c174,1647 282,4337 490,5915 224,1706 106,4380 938,5548 306,431 607,786 1095,1067 415,240 1020,534 1628,534z"
									/>
									<path
										fill="currentColor"
										d="M9609 3203l0 1601 -7447 0c-1032,0 -2162,1130 -2162,2162l0 481c0,1032 1130,2162 2162,2162l31709 0c1032,0 2162,-1130 2162,-2162l0 -481c0,-1032 -1130,-2162 -2162,-2162l-7447 0c0,-1409 149,-2580 -1037,-3767 -498,-497 -1507,-1037 -2166,-1037l-10409 0c-343,0 -959,243 -1230,372 -1080,515 -1973,1835 -1973,2831z"
									/>
								</svg>
							</button>
						</>
					</div>
				</li>
			))}
		</ol>
	);
};

export default AllProducts;
