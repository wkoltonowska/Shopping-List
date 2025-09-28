import { useState } from "react";
import ShoppingList from "./componets/ShoppingList";
import AllProducts from "./componets/AllProducts";
import "../../css/App.css";

import vegetables from "./img/vegetables.png";
import carrotandapple from "./img/carrotandapple.png";

function App() {
	const [products, setProducts] = useState([]);

	return (
		<div className="wrapper">
			<div className="header">
				<h1 className="header__title">Shopping List</h1>
				<ShoppingList setProducts={setProducts} />
			</div>
			<div className="content">
				<AllProducts products={products} setProducts={setProducts} />
			</div>
			<div className="main-img__container">
				<img
					src={carrotandapple}
					alt="Carrot and apple"
					className="main-img__element main-img__element-left"
				/>
				<img
					src={vegetables}
					alt="Tomato, garlic,cabbage and zucchini"
					className="main-img__element main-img__element-right"
				/>
			</div>
		</div>
	);
}

export default App;
