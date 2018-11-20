const initial = [
    { name: 'TV', price: 300, date: '2018-10-10' },
    { name: 'laptop', price: 600, date: '2018-10-12' },
    { name: 'PC', price: 800, date: '2018-09-05' },
    { name: 'owen', price: 300 },
    { name: 'Camera', price: 500, date: '2018-03-03' },
    { name: 'Fridge', price: 1000, date: '2018-12-11' },
    { name: 'table', price: 150, date: '2018-12-10' },
    { name: 'Sofa', price: 400, date: '2018-12-08' },
    { name: 'chair', date: '2018-09-10' },
    { name: 'Window', price: 300, date: '2018-05-05' }
];
const print = (list) => _.map(list,x => console.log(x));
const findIncorrectValues = (list,pred) => {
    const result = _.partition(list,pred)
    return {correctValues : result[0],incorrectValues : result[1]}
}
const inUpperCase = (list) =>
    list.map(x => Object.assign({},x,{name : _.upperFirst(x.name)}));
const addDollarSignToPrice = (list) =>
    list.map(x => Object.assign({},x,{price : `$${x.price}`}))
const sortByDate = (list) =>
    [...list].sort((a,b)=> {return new Date(a.date) - new Date(b.date)});
const createMatrix = (list) =>
     list.map(x => [x.date, `${x.name}-${x.price}`])


const outputHTMLTable = (matrix) => {
    let table= "<table border='1'>";
    const headers = matrix.map(x => x[0]);
    const values = matrix.map(x => x[1]);

    table += `<tr>`
    headers.forEach(x => table += `<td>${x}</td>`);
    table += `</tr>`

    table += `<tr>`
    values.forEach(x => table += `<td>${x}</td>`);
    table += `</tr>`

    table+="</table>";

    document.write(table);
}

const outputHTMLItems = (...args) => {
    args.forEach(x => document.write(JSON.stringify(x)));
}



