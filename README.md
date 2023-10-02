![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)

![GitHub](https://img.shields.io/github/license/ktortolini/trainer-regex?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/ktortolini/trainer-regex?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/ktortolini/trainer-regex?color=green&style=flat-square)

# Coding Trainer Regex

This gist has an educational excerpt of code I made while completing the [Coding Trainer](https://github.com/ktortolini/coding-trainer) educational tool. Since there were multiple JavaScript files that needed to access the same value, the solution was devised with a regular expression. While using JavaScript, in order to read the values in a string for the characters per minute (cpm/CPM), a regular expression was used to search for patterns in the given string and return the CPM.

## _Summary_

Within the [Coding Trainer](https://github.com/ktortolini/coding-trainer) educational tool, users may type lines of code to determine and improve their typing speed. The typing speed is calculated as a CPM value and the result is then added on the screen by using `textContent()` on an element with an id of `#score`. Additional metrics like the total correct characters and total incorrect characters are also shown on the screen. After the CPM is shown (and retrieved as a string) a regular expression searches for the CPM value with the following code:

```js
// this is an example of the string that is retrieved
let cpmString = 'CPM 450 | Correct 45 | Incorrect 23';

// this is the regular expression to search for the cpm
let regularExpression = new RegExp('[^0-9]*([0-9]+)', '');

// finds a match in the cpm string
let cpmMatch = cpmString.match(regularExpression)
    ? cpmString.match(regularExpression)[1]
	: 0;
```

This code demonstrates the most efficient regular expression that I was able to devise to retrieve the CPM value generated on the `trainer.html` page for use in the high-score table on the `index.html` page. Please feel free to check out the [Coding Trainer](https://my-coding-trainer-project-cbcb611cb5b8.herokuapp.com/) educational tool to see the high-score table and the effectiveness of the above regular expression.

## _Table of Contents_

- [YouTube Video](#youtube-video)
- [Character Class](#character-class)
- [Bracket Expressions](#bracket-expressions)
- [Kleene Operators](#kleene-operators)
- [Grouping Constructs](#grouping-constructs)

## _YouTube Video_

There is a brief tutorial video available on [YouTube](https://youtu.be/Apl2mlE5oMg) that summarizes the content within this readme file. Please feel free to like and subscribe.

## _Character Class_

First, the value sought after is numerical so the `match()` method should recognize numerical characters. Searching for a specific **class** (or type) of character is possible with a [Character Class](https://regexone.com/lesson/letters_and_digits). This is achieved with `0-9`.

## _Bracket Expressions_

Second, the value sought after is numerical, but backtracking should be avoided, so the `match()` method should acknowledge both non-numerical and numerical characters. Searching for characters that are **not** a numerical number is possible with a [Bracket Expression](https://regexone.com/lesson/excluding_characters). This is achieved with `[^0-9]`. Then, using the same technique it is possible to search for characters that are exclusively numerical. This is achieved with `[0-9]`.

## _Kleene Operators_

Third, the value sought after is preceded by an arbitrary length of non-numerical characters so the `match()` method should retrieve all preceding non-numerical characters. Searching for **zero or more** preceding non-numerical characters is possible with a [Kleene Star](https://regexone.com/lesson/kleene_operators). This is achieved with `[^0-9]*`.

## _Grouping Constructs_

Fifth, the value sought after needs to be distinguished apart from every acknowledged character, so the `match()` method should create a group for the sought after value. Organizing the value into a **group** of characters is possible with a [Grouping Construct](https://regexone.com/lesson/capturing_groups). This is achieved with `([0-9]+)`.

## _Credits_

The EDX readme file icon on the top was made by [Ileriayo](https://github.com/Ileriayo) with a link provided below: https://github.com/Ileriayo/markdown-badges#badges.

While making this tutorial I made use of a great online resource by [RegexOne](https://regexone.com/), most notably the Kleene Operator page found here: https://regexone.com/lesson/kleene_operators.

## _Author_

Contact the author [ktortolini](https://github.com/ktortolini) via email ✉ <a>ktortolini@smu.edu</a>.