// Get your shorts on - this is an array workout!
// ## Array Cardio

// Some initial data we can work with:
// Take some time to analyze the data structure
// Do each objects have the exact same data?
const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
    categories: ["man", "physicist"]
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
    categories: ["man", "mathematician"]
  },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
    categories: ["woman", "physicist"]
  },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
    categories: ["woman", "physicist"]
  },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
    categories: ["woman", "physicist"]
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
    categories: ["woman", "inventor"]
  }
];

//console.log(inventors);

// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
// Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler

const result1 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year <= 1600);
console.log(result1);

// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
// Expected output: an array containing only one inventor: Isaac Newton

const result2 = inventors.filter(inventor => {
  return inventor.categories && inventor.categories.includes("mathematician");
});

console.log(result2);


// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
// Expected output: an array containing only one inventor: Albert Einstein

const result3 = inventors.filter(inventor => {
  return (
    inventor.categories &&
    inventor.categories.includes("physicist") &&
    inventor.categories.includes("man")
  );
});

console.log(result3);


// Array.prototype.map()
// 4. Give us an array filled with the inventors first and last names
// Expected output:
// ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]

const result4 = inventors.map(inventor => {
  const { first, last } = inventor;
  return { first, last };
});

console.log(result4);


// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// Expected output:
// eg: ["albert1879@inventor.com", "isaac1643@inventor.com", "galileo1564@inventor.com", "marie1867@inventor.com", "johannes1571@inventor.com", "nicolaus1473@inventor.com", "max1858@inventor.com", "katherine1898@inventor.com", "ada1815@inventor.com", "sarah e.1855@inventor.com", …]
const result5 = inventors.map(inventor => {
  const { first, year } = inventor;
  const email = `${first.toLowerCase()}${year}@inventor.com`;
  return email;
});
console.log(result5);

// Array.prototype.sort()
// 6. Sort the inventors by birthdate, youngest to oldest (eg: the one whose birth year is closer to us on top)
// Expected output: an array of inventors going from "Katherine Blodgett" -> to "Nicolaus Copernicus"
const result6 = inventors.slice().sort((a, b) => a.year - b.year);
console.log(result6);

// Array.prototype.reduce()
// 7. How many years did all the inventors live all together?
const result7 = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(result7);

// Array.prototype.sort()
// 8. Sort the inventors by years lived
const result8 = inventors.slice().sort((a, b) => {
  const lifespanA = a.passed - a.year;
  const lifespanB = b.passed - b.year;
  return lifespanA - lifespanB;
});

console.log(result8);

// Array.prototype.filter()
// 9. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevardsInParis = [
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone"
];

const result9 = boulevardsInParis.filter(boulevard => boulevard.includes('de'));
console.log(result9);
// Array.prototype.sort()
// 10. Sort the people alphabetically by last name

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank"
];

people.sort((a, b) => {
  const lastNameA = a.split(', ')[0]; // Extracting last name from format "Last Name, First Name"
  const lastNameB = b.split(', ')[0];

  return lastNameA.localeCompare(lastNameB); // Using localeCompare for alphabetical sorting
});
console.log(people);

// Array.prototype.reduce()
// 11. Sum up the instances of each of these vehicles
// (eg: how many times each vehicle appears in the array)

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "skateboard"
];

const vehicleCount = data.reduce((count, vehicle) => {
  count[vehicle] = (count[vehicle] || 0) + 1;
  return count;
}, {});
console.log(vehicleCount);

// Array.prototype.some()
// 12. Is at least one person 18 years old?

const family = [
  { name: "Lily", year: 2009 },
  { name: "Leah", year: 2011 },
  { name: "Liv", year: 2000 },
  { name: "Lydia", year: 2015 }
];

const currentYear = new Date().getFullYear(); 

const isSomeone18OrOlder = family.some(person => {
  return currentYear - person.year >= 18;
});

console.log(isSomeone18OrOlder);
// Array.prototype.every
// 13. Do all names of the family members start with the letter L?
const allNamesStartWithL = family.every(person => {
  return person.name.charAt(0).toLowerCase() === 'l';
});

console.log(allNamesStartWithL);