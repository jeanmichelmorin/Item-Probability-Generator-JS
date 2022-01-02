class Item {
    constructor(name, rarity) {
      this.name = name;
      this.rarity = rarity;
    }

	get getName() {
		return this.name;
	}
	set setName(value) {
		this.name = value;
	}

	get getRarity() {
		return this.rarity;
	}
	set setRarity(value) {
		this.rarity = value;
	}

    toString() {
        return this.getName;
    }

}