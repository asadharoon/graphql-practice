// resolvers functions..

const resolvers = {
  events: () => {
    //get events
    return ["Event 1", "Event 2", "Event 3"];
  },
  createEvent: (args) => {
    //add event
    let a = { name: args.name };
    return a;
  },
  books: () => {
    return [
      {
        title: "MAD",
        _id: "abc123",
        pages: 10,
        Author: { _id: "def456", name: "Asad", date: "2/12/2020" },
      },
    ];
  },
  authors: () => {
    return [{ _id: "def456", name: "Asad", date: "2/12/2020" }];
  },
  createAuthor: (args) => {
    const { name, date, _id } = args.author;
    return { _id, name, date };
  },
  createBook: (args) => {
    const { _id, title, pages, Author } = args.book;
    const arr = [
      { _id: "def456", name: "Asad", date: "2/12/2020" },
      { _id: "def457", name: "Asad", date: "2/12/2020" },
    ];
    console.log("args.book is", args.book);
    console.log();
    return {
      _id,
      title,
      pages,
      Author: { ...arr.filter((a) => a._id == Author)[0] },
      //   Author:
    };
  },
};
module.exports = { resolvers };
