import React, { useEffect, useState } from "react";
import emojis from "../json/emojis.json";
import Results from "./Results";

const Search = () => {
	const [searchInput, setSearchInput] = useState("");
	console.log(searchInput);

	return (
		<div>
			<div className="search">
				<input
					type="text"
					placeholder="🔎 search..."
					onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
				/>
			</div>
			<div className="results">
				<p>Click on an emoji to copy it</p>
				<ul className="emojis">
					{emojis
						.filter((emoji) => emoji.keywords.includes(searchInput))
						.map((emoji, index) => (
							<Results
								key={index}
								emoji={emoji}
							/>
						))}
				</ul>
			</div>
		</div>
	);
};

export default Search;
