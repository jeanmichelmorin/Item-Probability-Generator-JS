// Application starts here
main();

/**
 * 
 * @param {An array [of item(s)] to iterate through} pArrayOfItems 
 * @returns 1 element randomly gotten from the passed array.
 */
function getRandomElement(pArrayOfItems) {
	return pArrayOfItems[getRandomInt(0, pArrayOfItems.length-1)];
}

function fillArray(pArrayStartItems, pArrayToFill) {
	pArrayStartItems.forEach(item => {
		fillArrayOfItems(item, pArrayToFill);
	});
}

/**
 * 
 * @param {*} pItem 
 */
function fillArrayOfItems(pItem, pArrayToFill) {
	if (pItem.getRarity > 0) {
		for (let index = 0; index < pItem.getRarity; index++) {
			pArrayToFill.push(pItem);
		}
	}
}

/** 
 * Used to parkour @var arrayOfItems in the boundaries of @param pMin and @param pMax.
 * @returns a number between @param pMin inclusively and @param pMax inclusively.
 */
function getRandomInt(pMin, pMax) {
	if (pMin >= pMax) return pMin;
	pMin = Math.ceil(pMin);
	pMax = Math.floor(pMax);
	return Math.floor(Math.random() * (pMax+1 - pMin)) + pMin;
}

/**
 * Run @param n amount of tests to see if it works.
 * @returns an array in the console.
 */
function testRun(n, pArrayStartItems, pArrayFilled, shouldMixArrayEverytime = false) {

	//let tempArray = new Array(global_arrayOfAvailableItems.length + 1).fill(0); // + 1 because we want to handle the posibility of "null" value OR a value that we did not think about.

	let itemsMap = new Map();
	pArrayStartItems.forEach(element => {
		itemsMap.set(element, 0);
	});
	itemsMap.set("Others", 0); // Handles null or unintended objects/values.

	for (let index = 0; index < n; index++) {
		if(shouldMixArrayEverytime) {
			shuffle(pArrayFilled);
			if(index < 10) { // Assuming theres 100000 runs, theres no need to console.log this 100000 times. 10 should be just fine.
				console.log(JSON.stringify(pArrayFilled));
			}
		}
		let randomItem = getRandomElement(pArrayFilled);
		let tempIndex = pArrayStartItems.indexOf(randomItem);
		if(tempIndex > -1) {
			itemsMap.set(randomItem, itemsMap.get(randomItem) + 1);
		} else {
			itemsMap.set("Others", itemsMap.get("Others") + 1);
		}
	}
	console.log("On " + n + " runs, here are the results:")
	console.log(itemsMap);
	console.log("Here are the probabilities: ")
	let total = 0;
	pArrayStartItems.forEach((e)=>{
		total += e.getRarity/pArrayFilled.length; 
		console.log(e.getName + " : " + e.getRarity/pArrayFilled.length + " (" + e.getRarity + " / " + pArrayFilled.length + ")");
	});
	console.log("validation of probabilities - should be 1 -> " + (total).toPrecision(12)); // If it doesn't add up, it is most likely Floating Point Precision.
	if(!shouldMixArrayEverytime) {
		console.log(pArrayFilled);
	}
}

/**
 * Shuffles the array for true randomness of probabilities.
 * // TODO: Very heavy, takes a while to load depending on how many items are in the array.
 * @param {*} array 
 * @returns 
 */
function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
  
	// While there remain elements to shuffle...
	while (currentIndex != 0) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
  
	return array;
  }

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