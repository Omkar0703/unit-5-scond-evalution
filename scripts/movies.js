// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let wallet = document.getElementById("wallet");

let ab = localStorage.getItem("amount");
wallet.innerText = ab;

let imgurl = "https://image.tmdb.org/t/p/original";
async function call() {

  try {
    let o = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=ccf98bfe6b413ca8ad16f609021ad3a2"
    );


    let data = await o.json();
    let o1 = data.results;
    console.log(data.results);


    let movies = document.getElementById("movies");
    o1.forEach(function (el) {
      console.log(el);
      let { poster_path, title } = el;


      movies.innerHTML += ` <div id="par">
          <img src=${imgurl + poster_path} alt="" />
          <h1>${title}</h1>
             <button>Book Now</button>
          </div>`;
          
      
    });
  } catch (err) {
    console.log(err);
  }
}

call();
