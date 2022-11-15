import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
	{
		title: "Men's Nike Blazer Mid Suede",
		prise: 129,
		imgUrl: "img/sneakers/1.jpg",
	},
	{
		title: "Men's Nike Air Max 270",
		prise: 149,
		imgUrl: "img/sneakers/2.jpg",
	},
	{
		title: "Men's Nike Blazer Mid Suede",
		prise: 129,
		imgUrl: "img/sneakers/3.jpg",
	},
	{
		title: "Puma X Aka Boku Future Rider",
		prise: 139,
		imgUrl: "img/sneakers/4.jpg",
	},
]


function App() {
  return (
    <div className="wrapper"> 
		<Drawer />
		<Header />
			<div className="content">
				<div className="allSneakers">
					<h1> All sneakers</h1>
					<div className="search-block">
						<img src="/img/search.svg" alt="Search"/>
						<input placeholder="Search..." />
					</div>
				</div>
				<div className="sneakers">
					{ arr.map((obj) => (
						<Card title={obj.title} prise={obj.prise} imgUrl={obj.imgUrl} />
						))}
				</div>
			</div>
    </div>
  );
}

export default App;
