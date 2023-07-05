// // Define the BaobabTree class
// class BaobabTree {
//     constructor() {
//       this.fruits = [];
//     }
  
//     addFruit(fruit) {
//       this.fruits.push(fruit);
//     }
  
//     predictNextFruit() {
//       const nextFruitIndex = this.fruits.length % this.fruits.length;
//       const nextFruit = this.fruits[nextFruitIndex];
  
//       return nextFruit;
//     }
  
//     recordConsumedFruitEffect(fruit) {
//       console.log(`Effect of consuming ${fruit.name}: ${fruit.power}`);
//     }
//   }
  
//   // Usage example
//   const baobabTree = new BaobabTree();
//   baobabTree.addFruit({ name: 'Fruit A', power: 'Power A' });
//   baobabTree.addFruit({ name: 'Fruit B', power: 'Power B' });
  
//   const nextFruit = baobabTree.predictNextFruit();
//   console.log(`Next season's fruit: ${nextFruit.name}`);
//   console.log(`Power: ${nextFruit.power}`);
  
//   baobabTree.recordConsumedFruitEffect(baobabTree.fruits[0]);
  

// Define the BaobabTree class
// class BaobabTree {
//   constructor() {
//     this.fruits = [];
//     this.currentSeason = 0; // Initialize the current season index
//   }

//   addFruit(name, power) {
//     this.fruits.push({ name, power });
//   }

//   predictNextFruit() {
//     let nextFruit;
//     if (this.currentSeason === this.fruits.length - 1) {
//       nextFruit = this.fruits[0];
//       this.currentSeason = 0;
//     } else {
//       nextFruit = this.fruits[this.currentSeason + 1];
//       this.currentSeason += 1;
//     }

//     return nextFruit;
//   }

//   recordConsumedFruitEffect(fruit) {
//     console.log(`Effect of consuming ${fruit.name}: ${fruit.power}`);
//   }
// }

// // Usage example
// const baobabTree = new BaobabTree();
// baobabTree.addFruit('Fruit A', 'Power A');
// baobabTree.addFruit('Fruit B', 'Power B');

// const nextFruit = baobabTree.predictNextFruit();
// console.log(`Next season's fruit: ${nextFruit.name}`);
// console.log(`Power: ${nextFruit.power}`);

// baobabTree.recordConsumedFruitEffect(baobabTree.fruits[0]);


// Define the BaobabTree class
class BaobabTree {
    constructor(fruits,currentSeason) {
      this.fruits = [];
      this.currentSeason = 0; // Initialize the current season index
    }
  
    addFruit(name, power) {
      this.fruits.push({ name, power });
    }
    predictNextFruit() {
        if (this.currentSeason === this.fruits ) {
          return this.fruits();
        } else {
          this.currentSeason += 1;
          return this.fruits[this.currentSeason];
        }
    }
    
  
    recordConsumedFruitEffect(fruit) {
      console.log(`Effect of consuming ${fruit.name}: ${fruit.power}`);
    }
  }
  
  // Usage example
  const baobabTree = new BaobabTree();
  baobabTree.addFruit('Orange', 'fights diseases');
  baobabTree.addFruit('Bananas', 'adds vitamins to the body');
  baobabTree.addFruit('Fruit C', 'Power C');
  baobabTree.addFruit('Fruit D', 'Power D');
  
  const nextFruit = baobabTree.predictNextFruit();
  console.log(`Next season's fruit: ${nextFruit.name}`);
  console.log(`Power: ${nextFruit.power}`);
  
  baobabTree.recordConsumedFruitEffect(baobabTree.fruits[0]);
  
