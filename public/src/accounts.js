
function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return sortedAccount = accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1: -1)
} 

function getTotalNumberOfBorrows(account, books) {
  let total = [];
  for (let book of books) {
    for (let borrow of book.borrows) {
      if (borrow.id === account.id)
      total++
    }
  }
  return total;
}


function getBooksPossessedByAccount(account, books, authors) {
  const checkedOutBooks = [];
  books.forEach((book) => {
    let borrowedBooks = book.borrows;
    borrowedBooks.forEach((borrows) => {
      if (borrows.id === account.id && borrows.returned === false) {
        checkedOutBooks.push(book);
      }
    });
  });
  let result = checkedOutBooks.map((book) => {
    return {...book, author: findAuthors(book, authors)};
  });
  return result;
}



// helper function

function findAuthors(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
