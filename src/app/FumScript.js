import Script from "next/script";
const FumsScript = () => {
	return (
		// <script
		// 	src="http://cdn.scripture.api.bible/fums/fumsv2.min.js"
		// 	integrity="1U6Q5HNn2sv4WQApQqkJo1rwImVwKJXPcFT5XYsQwgGA7+mQB18GzW0h0JEQnRSd%"
		// 	crossOrigin="anonymous"
		// ></script>
				<Script
					// integrity="1U6Q5HNn2sv4WQApQqkJo1rwImVwKJXPcFT5XYsQwgGA7+mQB18GzW0h0JEQnRSd%"
					// crossOrigin="anonymous"
					src="http://cdn.scripture.api.bible/fums/fumsv2.min.js"
					onLoad={() => {
						console.log("Script Loaded Succesffuly")
					}}
					onError={() => {
						console.log("Error loading Script")
					}}
					strategy="beforeInteractive"
				/>
	);
};

export default FumsScript;
