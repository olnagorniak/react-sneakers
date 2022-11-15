 function Card(props) {
	return (
		<div className="card">
			<div className="favorite">
				<img src="/img/favorite.svg" alt="Unlike" />
			</div>
			<img width={133} height={112} src = {props.imgUrl} alt="Sneakers"/>
			<p>{props.title}</p>
			<div className="priseButton">
				<div className="prise">
					<span>Prise:</span>
					<p> {props.prise} $</p>
				</div>  
				<div>
					<img src="/img/btn-plus.svg" />
				</div>
				
			</div>
		</div>
		);
}

export default Card;
