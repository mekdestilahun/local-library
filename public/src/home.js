
function getTotalBooksCount(books) {
  // return the length of array
  return books.length;
  }
  
function getTotalAccountsCount(accounts) {
 return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    if(book.borrows[0].returned === false) acc++;
    return acc;
  }, 0)
}

function getMostCommonGenres(books) {
const commonGenres  = [];
for(let book of books) {
  let genreIndex = commonGenres.find((genre) => genre.name == book.genre)
    if (genreIndex) {
      genreIndex.count++
    } else {
      commonGenres.push({name: book.genre, count: 1}); 
    }
}
return topFiveList(commonGenres);
}


function getMostPopularBooks(books) {
  let result = books.map((book) => ({name: book.title, count: book.borrows.length}));
  return topFiveList(result);
}


function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let popularAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
      if(book.authorId === author.id) {
        popularAuthor.count += book.borrows.length
      }
    })
    result.push(popularAuthor)
  })
  return topFiveList(result)
}


topFiveList = books => {
  books.sort((bookA, bookB) => bookB.count - bookA.count);
  return books.slice(0, 5);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
