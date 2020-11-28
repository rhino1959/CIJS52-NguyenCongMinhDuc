class Book {
    id; //là duy nhất, ko đưa vào constructor 
    //dùng thư viện tự sinh id 
    //thư viện add vào head cua html
    name;
    price;
    publishedDate;
    constructor (name,price,publishedDate){
    this.name=name;
    this.price=price;
    this.publishedDate=publishedDate
    this.id=uuid.v4()
    }

    //{name: "aa", price:120, publishedDate: "2020/11/28"}
    update(data){
        for (let key in data) { //tạo biến key 
            if (this[key] != undefined && key != id){ 
                this[key] = data[key]
            }
        }
    }
}
class ComicBook extends Book {
    funny;
    pageNumber;
    constructor (name,price,publishedDate,funny,pageNumber){
        super (name,price,publishedDate)
        this.funny=funny;
        this.pageNumber=pageNumber;
    }    
}
class TextBook extends Book {
    subject;
    grade;
    constructor (name,price,publishedDate,subject,grade){
        super(name,price,publishedDate);
        this.subject=subject;
        this.grade=grade;
    }
}
class ScienceBook extends Book {
    major;
    constructor (name,price,publishedDate,major){
        super (name,price,publishedDate);
        this.major=major;
    }
}
class BookShelf {
    name;
    owner;
    dateModified;
    books;
        constructor (name,owner,dateModified){
            this.name=name;
            this.owner=owner;
            this.dateModified=dateModified;
            this.books = [];
        }

    addBook (_book) {//truyền tham số
        if (_book instanceof Book) {
            this.books.push(_book);
        }
    }
}   
