# Item-Probability-Generator

## How To

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
