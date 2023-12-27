import React, { useState } from "react";

const Results = ({ emoji }) => {
	const [copySuccess, setCopySuccess] = useState("");

	const copyToClipboard = async (copyMe) => {
		try {
			await navigator.clipboard.writeText(copyMe);
			setCopySuccess(console.log(copyMe + "Copied!"));
		} catch (err) {
			setCopySuccess(console.log("Failed to copy!"));
		}
	};

	return (
		<li className="emoji">
			<button
				value={emoji.symbol}
				onClick={(e) => copyToClipboard(e.target.value)}>
				{emoji.symbol} {emoji.title}
			</button>
		</li>
	);
};

export default Results;
