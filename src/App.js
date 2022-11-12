
function App() {
  return (
    <div className="wrapper"> 
	 <header>
		<div className="headerLeft">
			<img width={40} height={40} src="/img/logo.png" />
			<div className="headerInfo">
				<h3> REACT SNEAKERS</h3>
				<p>The best sneaker store</p>
			</div>
		</div>
		<ul className="headerRight">
			<li>
				<img width={18} height={18} src="/img/box.svg" />
				<span> 130 $ </span>
			</li>
			<li>
			<img width={18} height={18} src="/img/user.svg" />
			</li>
		</ul>
	 </header>
	<div className="content">
		<h1> All sneakers</h1>
		<div className="sneakers">
			<div className="card">
				<img width={133} height={112} src="/img/sneakers/1.jpg"/>
				<p>Men's Nike Blazer Mid Suede Sneakers </p>
				<div className="priseButton">
					<div className="prise">
						<span>Prise:</span>
						<p> 129 $</p>
					</div>  
					<button className="button">
						<img width={11} height={15}  src="/img/plus.svg" />
					</button>
				</div>
			</div>
			<div className="card">
				<img width={133} height={112} src="/img/sneakers/2.jpg"/>
				<p>Men's Nike Air Max 270 Sneakers </p>
				<div className="priseButton">
					<div className="prise">
						<span>Prise:</span>
						<p> 149 $</p>
					</div>  
					<button className="button">
						<img width={11} height={15}  src="/img/plus.svg" />
					</button>
				</div>
			</div>
			<div className="card">
				<img width={133} height={112} src="/img/sneakers/3.jpg"/>
				<p>Men's Nike Blazer Mid Suede Sneakers </p>
				<div className="priseButton">
					<div className="prise">
						<span>Prise:</span>
						<p> 129 $</p>
					</div>  
					<button className="button">
						<img width={11} height={15}  src="/img/plus.svg" />
					</button>
				</div>
			</div>
			<div className="card">
				<img width={133} height={112} src="/img/sneakers/4.jpg"/>
				<p>Puma X Aka Boku Future Rider Sneakers </p>
				<div className="priseButton">
					<div className="prise">
						<span>Prise:</span>
						<p> 139 $</p>
					</div>  
					<button className="button">
						<img width={11} height={15}  src="/img/plus.svg" />
					</button>
				</div>
			</div>
		</div>
	</div>
    </div>
  );
}

export default App;
