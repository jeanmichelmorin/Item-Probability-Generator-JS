# Item-Probability-Generator

## The Context
A big factor of fun in many games is randomness. Nothing sparks you more joy than getting an extremely rare item. 
But how can we rig the Math.random() functionality in a way where some items are more likely to be dropped than others? 
This is what this project is all about. Hopefully my little script can help you.

## The Experiment
First, I needed to find a way to trick the Math.random() function.

There's no way to trick it by itself... but what if you had multiple instances of that same item? What if they were in an array?

Instead of getting a 0 (for a Bronze Knife) OR getting a 1 (for a Silver Knife), what if we had 8 instances of a Bronze Knife and 2 instances of a Silver Knife?

So for a total of 10 possibilities, my Math.random() could hit between 0 to 9, which then makes it more likely to hit a Bronze Knife (8 instances) rather than a Silver Knife (2 instances).

Because Javascript's Math.random() is [pseudo-random](https://medium.com/@amy.cen/how-random-is-math-random-4bc195d74498Medium), it would be advantageous to shuffle the array after everytime we pick. So even if the randomness is slighty biased, 2 randomness factors makes it even more random.

## How To Use My Script

Firstly, import my 2 scripts into your `index.html`, in respective order:
```
<script type="text/javascript" src="item.js"></script>
<script type="text/javascript" src="probability.js"></script>
<!-- THEN YOUR OWN SCRIPTS UNDER -->
```

### Step 1: We create our array of objects (using our Item object in item.js).

```
const arrayOfAvailableItems = [
		new Item("Bronze Knife", 5000), 
		new Item("Silver Knife", 3000),
		new Item("Golden Knife", 1600), 
		new Item("Diamond Knife", 3),
		new Item("Ruby Knife", 1)
	];
```


### Step 2: We create an empty array.
We will insert our items into it, based on their probability (amount of times we want it to appear).

```
let arrayOfItems = [];
```


### Step 3: Now fill the empty array with the items we have from the array of objects we just made.

```
fillArray(arrayOfAvailableItems, arrayOfItems);
```


### Step 4 (OPTIONAL): You can also mix the array if you want to make sure it's as random as possible.
(WARNING: Can take a long time depending on the amount of items).

```
shuffle(arrayOfItems);
```


### Step 5: To pick a random element from the array:
We will use a console.log() to output the result in this case

```
console.log(getRandomElement(arrayOfItems));
```


### Step 6 (OPTIONAL): If you want to do multiple test runs easily:
This will output the result in the console
```
testRun(10000, arrayOfAvailableItems, arrayOfItems, false);
```
10000 = Amount of times the test will run.

arrayOfAvailableItems = the array of possible items.

arrayOfItems = the array we will insert the items into, based on their probabilities.

false = Won't be mixed everytime after 1 item is picked (set to true if you want to mix the array after every pick)

![image](https://user-images.githubusercontent.com/44597109/147869489-32529f14-b8d2-4b4a-bdac-b0e9afbe3716.png)




# Here's all the steps above regrouped into 1 function, if you want to use it on your side.
```
/**
 * Manages the logical order of code execution.
 */
function main() {
	const arrayOfAvailableItems = [
		new Item("Bronze Knife", 5000), 
		new Item("Silver Knife", 3000),
		new Item("Golden Knife", 1600), 
		new Item("Diamond Knife", 3),
		new Item("Ruby Knife", 1)
	];
	let arrayOfItems = [];

	// How to use :
	fillArray(arrayOfAvailableItems, arrayOfItems);
	shuffle(arrayOfItems);
	console.log(getRandomElement(arrayOfItems));

	// ... or to perform test runs.
	testRun(10000, arrayOfAvailableItems, arrayOfItems, false);
}
```
