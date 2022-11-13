function Header () {
	return (
		<header>
		<div className="headerLeft">
			<img width={40} height={40} src="/img/logo.png" />
			<div className="headerInfo">
				<h3> REACT SNEAKERS</h3>
				<p>The best sneaker store</p>
			</div>
		</div>
		<ul className="headerRight">
			<li >
				<img width={22} height={22} src="/img/box.svg" />
				<span> 130 $ </span>
			</li>
			<li>
			<img width={18} height={18} src="/img/favorite.svg" />
			</li>
			<li>
			<img width={22} height={22} src="/img/user.svg" />
			</li>
		</ul>
	 </header>
	);
}

export default Header;