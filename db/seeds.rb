Reader.destroy_all
r1 = Reader.create!(name: 'Singh')
r2 = Reader.create!(name: 'Adam')
r3 = Reader.create!(name: 'Pope')
r4 = Reader.create!(name: 'Julia')
r5 = Reader.create!(name: 'Sharon')
Book.destroy_all
b1 = Book.create!(name: "The Story of My Life", author: "Michael Adams", genre: "Biography")
b2 = Book.create!(name: "The Funny Snail", author: "Johnny Apple Sead", genre: "Humor")
b3 = Book.create!(name: "King of Kahlua", author: "Fifi Mono", genre: "Mystery")
b4 = Book.create!(name: "How to Work Properly", author: "James Whatt", genre: "Self-help")
b5 = Book.create!(name: "Precious Puppies", author: "Dr. Gibraltar", genre: "Non-fiction")
b6 = Book.create!(name: "The Life of Pie", author: "Joey Donald", genre: "Science")

r1.books << b1
r1.books << b2
r1.books << b5
r2.books << b1
r2.books << b3
r2.books << b4
r2.books << b6
r2.books << b2
r2.books << b1
