// 1
// document.querySelectorAll("h1").style.color = "blue";

// //2
// let a = "i love";
// let v = "java script";

// document.write( a + " " + v );



let Title = "Elzero" , pargrapgh = "Elzero Web School" , date = "25/10";

// declear the card ariable
let card = `
    <div class="card">
        <h3>Hello ${Title}</h3>
        <p>${pargrapgh}</p>
        <span>${date}</span>
    </div>
`;

// Print
document.write(card.repeat(4));
