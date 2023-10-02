function perMinute() {
	// adds a string with various keyboarding scores
	let cpmString = 'CPM 450 | Correct 45 | Incorrect 23';
	// adds a regular expression to search for the wpm
	let regularExpression = new RegExp('[^0-9]*([0-9]+)', '');

	// finds a match in the cpm string
	if (cpmString.match(regularExpression)) {
		// adds the value of cpm using match() method
		let cpmMatch = cpmString.match(regularExpression)
			? cpmString.match(regularExpression)[1]
			: 0; // value is zero if match() returns falsy

		// logs the value from match() method
		console.log(`let cpmMatch = ${cpmMatch}`);

		return cpmMatch;
	} else {
		// this is for debugging purposes
		console.log(`!cpmString.match(${regularExpression})`);
		// returns a default value
		return 0;
	}
}

// todo: shows the log
perMinute();

// todo: shows the returned value
// console.log(`perMinute() = ${perMinute()}`);
