function perMinute() {

	// adds a string with various keyboarding scores
	let wpmString = 'CPM 450 | Correct 45 | Incorrect 23';
	// adds a regular expression to search for the wpm
	let regularExpression = new RegExp('[^0-9]*([0-9]+)', '');

	// finds a match in the wpm string
	if (wpmString.match(regularExpression)) {

		// adds the value of wpm using match() method
		let wpmMatch = wpmString.match(regularExpression)
			? wpmString.match(regularExpression)[1]
			: 0; // value is zero if match() returns falsy

		// logs the value from match() method
		console.log(`let wpmMatch = ${wpmMatch}`);

		return wpmMatch;

	} else {

		// this is for debugging purposes
		console.log(`!wpmString.match(${regularExpression})`);
		// returns a default value
		return 0;

	}
	
}

// todo: shows the log
perMinute();

// todo: shows the returned value
// console.log(`perMinute() = ${perMinute()}`);
