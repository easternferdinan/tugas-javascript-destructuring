
// Destructuring array

const manufacturer = ["Mercedes-Benz", "Ferrari", "Ford", "Honda"];

const [german,  italy, usa, japan] = manufacturer;
console.log("--- Destructuring array ---")
console.log(german, italy, usa, japan);


// Destructuring object, default value & alias

const manufacturerData = {
    mercedes: {
        origin: "Germany",
        founded: 1926,
        founder: "Karl Benz"
    },
    ferrari: {
        origin: "Italy",
        founded: 1947,
        founder: "Enzo Ferrari"
    },
    ford: {
        origin: "USA",
        founded: 1903,
        founder: "Henry Ford"
    },
    honda: {
        origin: "Japan",
        founded: 1948,
        founder: "Soichiro Honda"
    }
};

const {
    ferrari, 
    ferrari:{founder}, 
    ferrari:{founded: tahunBerdiri}, 
    ferrari:{title= "Racing Legend"}
} = manufacturerData;

console.log("--- Destructuring object, default value & alias ---")
console.log(ferrari, founder, tahunBerdiri, title);


// Destructuring object untuk parameter function

function printData({ferrari: {founder}, ferrari: {founded}, ferrari: {origin}}){
    console.log("--- Destructuring object untuk parameter function ---")
    console.log(founder, founded, origin)
}

printData(manufacturerData);