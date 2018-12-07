const { Map , List } = Immutable;

const books = List([
        { id : 0,
            title : 'Book' ,
            author : 'someone',
            publishingHouse : 'Somewhere',
            date : '2000-03-25',
            tags : ['interesting','small','with pictures'],
            isRead : false },
        { id : 1,
            title : 'Book1' ,
            author : 'someone',
            publishingHouse : 'Somewhere',
            date : '1300-07-25',
            tags : ['history','ancient'],
            isRead : false },
        { id : 2,
            title : 'Book' ,
            author : 'someone',
            publishingHouse : 'Somewhere',
            date : '1950-11-25',
            tags : [],
            isRead : true }]);

const create = (item,coll) => coll.concat([{...item , id : generateId(coll)}]);
const read = (id,coll) => filterByPred(x => x.id === id)(coll);
const readAll = (coll) => coll; //done
const remove = (id,coll) => coll.delete(coll.findIndex(x => x.id == id));
const generateId = (coll) => coll.last({id : -1}).id + 1; //done
const update = (id,item,list) => list.set(list.findIndex(x => x.id == id),{...item, id : id});
const markAsRead = (id,list) => list.set(list.findIndex(x => x.id == id),{...list.find(x => x.id == id), isRead : true});
const filterByPred = (pred) => (items) => items.filter(pred); //done
const filterByAlreadyRead = (items) => filterByPred(x => x.isRead === true)(items);
const printBooksCollection = (list) => {
    document.getElementById("main").innerHTML = '';
    let table= "<table border='1'>";

    table += `<tr>

    <td>Id</td>
    <td>Title</td>
    <td>Author</td>
    <td>Publishing House</td>
    <td>Date</td>
    <td>Tags</td>
    <td>Is read</td>
    
              </tr>`

    list.forEach(x => {
        table += `<tr>`
        let tags = x.tags && x.tags.length !== 0 ? x.tags.reduce((a,c) => a + `<br />` + c) : `No tags`;
        table += `<td>${x.id}</td>`
        table += `<td>${x.title}</td>`
        table += `<td>${x.author}</td>`
        table += `<td>${x.publishingHouse}</td>`
        table += `<td>${x.date}</td>`
        table += `<td>${tags}</td>`
        table += `<td>${x.isRead}</td>`
    })
    table += `</tr>`

    document.getElementById("main").innerHTML = table;
}