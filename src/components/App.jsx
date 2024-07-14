import React, { useRef } from "react";

function App() {
	const ref = useRef();

	const data = [
		{
			label: "first data",
			style: {
				width: "100%",
				height: "500px",
				backgroundColor: "red",
			},
		},
		{
			label: "second data",
			style: {
				width: "100%",
				height: "500px",
				backgroundColor: "orange",
			},
		},
		{
			label: "third data",
			style: {
				width: "100%",
				height: "500px",
				backgroundColor: "green",
			},
		},
		{
			label: "fourth data",
			style: {
				width: "100%",
				height: "500px",
				backgroundColor: "yellow",
			},
		},
		{
			label: "fifth data",
			style: {
				width: "100%",
				height: "500px",
				backgroundColor: "blue",
			},
		},
	];

	function handleClick() {
		let pos = ref.current.getBoundingClientRect().top;

		window.scrollTo({
			top: pos,
			behavior: "smooth",
		});
	}

	return (
		<div className="app-container">
			<h1>Scroll to a particular section</h1>
			<button onClick={handleClick}>Click to scroll</button>
			{data.map((dataItem, index) => (
				<div ref={index === 3 ? ref : null} style={dataItem.style}>
					<h2>{dataItem.label}</h2>
				</div>
			))}
		</div>
	);
}

export default App;
