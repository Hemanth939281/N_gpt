// import axios from 'axios';

// const API_KEY = '5ebf9019';
// const BASE_URL = 'http://www.omdbapi.com/';

// export const fetchMoviesByGenre = async (genre, limit) => {
//   try {
//     const results = [];
//     let page = 1;

//     while (results.length < limit) {
//       const response = await axios.get(BASE_URL, {
//         params: {
//           apikey: API_KEY,
//           s: genre,
//           page, // Fetch the current page
//         },
//       });

//       const movies = response.data.Search;

//       if (!movies) break; // Stop if there are no more movies

//       results.push(...movies); // Add movies to the results array
//       page++;

//       // Break the loop if the desired limit is reached or there are no more movies
//       if (results.length >= limit || movies.length < 10) break;
//     }

//     console.log(results.slice(0, limit)); // Return only the required number of movies
//     return results.slice(0, limit); // Ensure results length doesn't exceed the limit
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Example Usage: Fetch 15 movies of the "action" genre
// fetchMoviesByGenre('action', 200);
