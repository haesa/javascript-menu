class Coach {
  #name;
  #dislikeFoods;
  #recommendedFoods;
  constructor(name) {
    this.#name = name;
    this.#dislikeFoods = [];
    this.#recommendedFoods = [];
  }

  get name() {
    return this.#name;
  }

  get dislikeFoods() {
    return this.#dislikeFoods;
  }

  get recommendedFoods() {
    return this.#recommendedFoods;
  }

  pushDislikeMenu(menu) {
    this.dislikeFoods.push(menu);
  }

  pushRecommendedMenu(menu) {
    this.recommendedFoods.push(menu);
  }

  isValidMenu(pickedMenu) {
    return (
      this.dislikeFoods.includes(pickedMenu) ||
      this.recommendedFoods.includes(pickedMenu)
    );
  }
}

module.exports = Coach;
