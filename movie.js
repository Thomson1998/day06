// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie {
    constructor(title, studio, rating){
      this.title = title
      this.studio = studio
      this.rating = rating
    } 
 }
 
 let movie1 = new movie('inception', 'warner bros', 'PG13')
 let movie2 = new movie('jumanji', 'interscope', 'PG')
 
 console.log(movie1, movie2)
 
 // output
 // movie1 - movie {title: 'inception', studio: 'warner bros', rating: 'PG13'}
 // movie2 - movie {title: 'jumanji', studio: 'interscope', rating: 'PG'}
 
 // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 
 class movie {
     constructor(title, studio, rating=PG){
       this.title = title
       this.studio = studio
       this.rating = rating
     } 
  }
  
  let movie1 = new movie('inception', 'warner bros', 'PG13')
  let movie2 = new movie('jumanji', 'interscope', 'PG')
  
  console.log(movie1, movie2)
 
 //  output
 // movie1 - movie {title: 'inception', studio: 'warner bros', rating: 'PG13'}
 // movie2 - movie {title: 'jumanji', studio: 'interscope', rating: 'PG'}
 
 // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
 
 class movie {
     constructor(title, studio, rating){
       this.title = title
       this.studio = studio
       this.rating = rating
     }
 }
 
 let movie3 = new movie('Casino Royale', 'Eon Productions', 'PG13')
 
 console.log(movie3)
 
 //  output
 // movie {title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}