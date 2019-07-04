/* Q1 (*)
  Return the number of movies in the "movies" collection without using array.length
*/

const { getDb } = require('./database');


const getMoviesCount = async () => {
  const db = await getDb();
  const collection = db.collection('movies');
  const count = await collection.count();
  return count;
};

/* Q2 (*)
  Return the first movie with imdb rating = 9.2 and year = 1974.
  Also, use mongodb projections to only get title from mongodb as opposed
  to accessing title property from the object
*/
const movieRating = async () => {
  // wip
  const db = await getDb();
  const collection = db.collection('movieDetails');
  const movie = await collection.findOne({ year: 1974, 'imdb.rating': 9 });
  return movie;
};

/* Q3 (*)
  Return the number of movies written by all these people (exactly these people in this order):
  Roberto Orci
  Alex Kurtzman
  Damon Lindelof
  Gene Roddenberry
*/
const writersIntersection = async () => {
  const db = await getDb();
  const collection = db.collection('movieDetails');
  const writers = [
    'Roberto Orci',
    'Alex Kurtzman',
    'Damon Lindelof',
    'Gene Roddenberry',
  ];
  const moviesOfGivenWriters = await collection
    .find({
      writers,
    })
    .count();
  return moviesOfGivenWriters;
};

/* Q4 (*)
  Return the number of movies written by any of the writers in Q3
*/
const writersUnion = async () => {
  const db = await getDb();
  const collection = db.collection('movieDetails');
  const writers = [
    'Roberto Orci',
    'Alex Kurtzman',
    'Damon Lindelof',
    'Gene Roddenberry',
  ];
  const moviesOfGivenWriters = await collection
    .find({
      writers: { $in: writers },
    })
    .count();
  return moviesOfGivenWriters;
};

/* Q5 (*)
  Return the number of movies in which actor is "Jackie Chan"
*/
const actor = async () => {
  const db = await getDb();
  const collection = db.collection('movieDetails');
  const actorName = 'Jackie Chan';
  const jackiesMovies = await collection
    .find({
      actors: actorName,
    })
    .count();
  return jackiesMovies;
};

/* Q6 (*)
  Return the number of movies in which actor "Jackie Chan" is second
  in the array "actors"
*/
const positionalActor = async () => { };

/* Q7 (*)
  Return the first movie with imdb rating greater than or equal to 9.0
  and less than or equal to 9.2
*/
const comparisonOperator = async () => {
  const db = await getDb();
  const collection = db.collection('movieDetails');
  const numberOfMovies = await collection.find({ 'imdb.rating': { $gte: 9.0, $lte: 9.2 } }).count();
  return numberOfMovies;
};

/* Q8 (*)
  Return the number of movies which have an actual rating opposed to
  being "UNRATED" or having no "rated" field at all
*/
const trimUnrated = async () => {
  const db = await getDb();
  const collection = db.collection('movieDetails');
  const numberOfMovies = await collection.find({ 'rate': { $gte: 9.0, $lte: 9.2 } }).count();
  return numberOfMovies;
};

/* Q9 (*)
  Return number of movies in which "tomato" field exists but "tomato.rating" does not
*/
const unratedByTomato = async () => { };

/* Q10 (*)
  Return number of movies with higher imdb rating >= 9.0 OR
  metacritic >= 90
*/
const goodMovies = async () => { };

/* Q11 (*)
  Return number of movies where tomato field exists AND
  is equal to null
*/
const regexSearch = async () => { };

/* Q12 (*)
  Return number of movies where 'Adventure' and 'Action'
  as genres in any order
*/
const arrayAll = async () => { };

/* Q13 (*)
  Return number of movies that were filmed in exactly 4 countries
*/
const fieldArraySize = async () => { };

/* Q14 (*)
  Add a field called "myRating" = 90 to the movie "Iron Man 3" in movieDetails collection
*/
const addField = async () => { };

/* Q15 (*)
  Increment the metacritic rating by 5 for the movie "Gone Girl" with a single query.
  Note: Do not use find() or findOne() to look for the current metacritic rating for "Gone Girl"
*/
const incrementalUpdate = async () => { };

module.exports = {
  getMoviesCount,
  movieRating,
  writersIntersection,
  writersUnion,
  actor,
  comparisonOperator,
};
