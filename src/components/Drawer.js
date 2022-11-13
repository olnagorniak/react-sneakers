function Drawer (){
	return (
		<div style={{display: 'none'}} className="bigShadow">
			<div className="drawer">
				<h2>Basket <img className="removeBnt" width={32} height={32} src="/img/btn-delete.svg" alt="delete" /></h2>
				<div className="items">
					<div className="basketInto">
						<img width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
						<div className="basketIntoPrise">
							<p>Men's Nike Blazer Mid Suede Sneakers </p>
							<span> 129 $</span>
						</div>
						<img className="removeBnt" width={32} height={32} src="/img/btn-delete.svg" alt="delete" />
					</div>
					<div className="basketInto">
						<img width={70} height={70} src="/img/sneakers/2.jpg" alt="sneakers" />
						<div className="basketIntoPrise">
							<p>Men's Nike Air Max 270 Sneakers </p>
							<span> 149 $</span>
						</div>
						<img className="removeBnt" width={32} height={32} src="/img/btn-delete.svg" alt="delete" />
					</div>
				</div>
				<div className="totalPrise">
					<ul>
						<li className="total">
							<span>Total cost</span>
							<div></div>
							<b>278 $</b>
						</li>
						<li className="total">
							<span>Tax</span>
							<div></div>
							<b>13 $</b>
						</li>
					</ul>
					<button className="greenButton">Ordering <img src="/img/arrow.svg" alt="arrow"/> </button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;