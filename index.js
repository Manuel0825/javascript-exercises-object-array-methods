// =============================================================================
// 1. Calcula el precio total de los items de un objeto productPrices
// cuya propiedad es el nombre del producto y el valor es el precio del producto.
// Usa object.values()
// Ej objeto: { laptop: 800, phone: 600, tablet: 400, headphones: 100 }
// =============================================================================

function getTotalPrice(object) {
  const prices = Object.values(object);
  const totalPrice = prices.reduce((total, price) => total + price, 0);

  return totalPrice;
}

// =============================================================================
// 2. Dado un objeto con nombres de personas como claves y edades como valores,
// calcula la media de edad de las personas. Usa object.values()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// =============================================================================

function getAverageAge(object) {
  const ages = Object.values(object);
  const addAges = ages.reduce((total, age) => total + age, 0);
  const averageAge = addAges / ages.length;
  return averageAge;
}

// =============================================================================
// 3. Crea un array de objetos a partir de un objeto con nombres de personas
// como propiedades y edades como valores. Usa object.keys()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// Ej resultado: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, ...]
// =============================================================================

function getPeopleArray(object) {
  const People = Object.keys(object);
  const peopleObjArr = People.map((name) => ({ name, age: object[name] }));
  return peopleObjArr;
  }
 

// =============================================================================
// 4. Dado un objeto con nombres de frutas como claves y su cantidad como valor,
// filtra las frutas que tienen una cantidad superior a 10 y crea un array de
// objetos con el nombre de la fruta y su cantidad. Usa object.entries().
// Ej objeto: { Apple: 5, Banana: 15, Orange: 8, Grape: 12 }
// Ej resultado: [ { fruit: 'Banana', quantity: 15 }, { fruit: 'Grape', quantity: 12 }]
// =============================================================================

function getAbundantFruits(object) {
  const FruitList = Object.entries(object);
  const abundantFruits = FruitList.filter(
    ([fruit, quantity]) => quantity > 10
  );
  const result = abundantFruits.map(([fruit, quantity]) => ({
    fruit: fruit,
    quantity: quantity,
  }));

  return result;
}

// =============================================================================
// 5. Calcula la suma de todos los caracteres de un objeto, tanto la suma de los
// caracteres de las propiedades como la suma de los caracteres de los valores.
// El resultado debe ser un único numero.
// book: { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', genero: 'Fantasía' }
// =============================================================================

function getCharacterCount(object) {
  const rings = Object.keys(object);
  const anillos  = Object.values(object);

  const ringCharacters = rings.join(''); 
  const anillosCharacters = anillos.join(''); 

  const Characters = ringCharacters + anillosCharacters;
  const characterCount = Characters.length;

  return characterCount;
}


// done