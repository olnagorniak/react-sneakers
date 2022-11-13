 function Card() {
	return (
		<div className="card">
			<div className="favorite">
				<img src="/img/favorite.svg" alt="Unlike" />
			</div>
			<img width={133} height={112} src="/img/sneakers/1.jpg"/>
			<p>Men's Nike Blazer Mid Suede Sneakers </p>
			<div className="priseButton">
				<div className="prise">
					<span>Prise:</span>
					<p> 129 $</p>
				</div>  
				<div>
					<img src="/img/btn-plus.svg" />
				</div>
				
			</div>
		</div>
		);
 }

 export default Card;
