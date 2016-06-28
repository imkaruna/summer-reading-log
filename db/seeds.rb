Book.destroy_all
b1 = Book.create!(name: "The Story of My Life", author: "Michael Adams", genre: "Biography")
b2 = Book.create!(name: "The Funny Snail", author: "Johnny Apple Sead", genre: "Humor")
b3 = Book.create!(name: "King of Kahlua", author: "Fifi Mono", genre: "Mystery")
b4 = Book.create!(name: "How to Work Properly", author: "James Whatt", genre: "Self-help")
b5 = Book.create!(name: "Precious Puppies", author: "Dr. Gibraltar", genre: "Non-fiction")
b6 = Book.create!(name: "The Life of Pie", author: "Joey Donald", genre: "Science")

User.first.books << b1
