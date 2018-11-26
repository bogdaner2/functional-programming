const { flatten, flow, map, zip, head ,chunk,filter} = _;
const table = [
    [
        { id: 0, row: 0, column: 0, position: 1 },
        { id: 1, row: 1, column: 0, position: 2 },
        { id: 2, row: 2, column: 0, position: 3 }
    ],
    [
        { id: 3, row: 0, column: 1, position: 4 },
        { id: 4, row: 1, column: 1, position: 5 },
        { id: 5, row: 2, column: 1, position: 6 }
    ],
    [
        { id: 6, row: 0, column: 2, position: 7 },
        { id: 7, row: 1, column: 2, position: 8 },
        { id: 8, row: 2, column: 2, position: 9 }
    ]
]

const outputHTMLMatrix = (matrix) => {
    console.log(matrix);
    const length = matrix.length;

    let table= "<table border='1'>";

    transposeMatrix(matrix)
        .forEach((arr) => {
            table += `<tr>`
            arr.forEach(item => table += `<td>id:${item.id}</td>`);
            table += `</tr>`
    });

    table+="</table>";
    table+="<br />"

    document.write(table);
}

const transposeMatrix = matrix => zip(...matrix);

const insert = (n, arr, ...ins) => [...arr.slice(0, n), ...ins, ...arr.slice(n)];

const calculateNewPosition = (matrix,size) =>
    matrix.map((x , indexX) =>
        x.map((y , indexY) => Object.assign({},y,{column : indexX, row : indexY, position : (indexX * size + indexY + 1)}))
    )

const rearrangeMatrix = (table) => (column, row, item) => {
    flow([])('');
    const size = table.length;
    const flattenArr = flatten(table);
    const array = insertItem(flattenArr, item, column * size + row);
    const matrix = chunk(array,size);
    const matrixWithNewPositions = calculateNewPosition(matrix,size);
    return matrixWithNewPositions;
}

const insertItem = (arr,item,position) => {
    const newArr = filter(arr, x => x !== item);
    return insert(position, newArr, item);
}

const executeTask_2 = (table) =>  {
    const newColumn = 2;
    const newRow = 2;
    const item = table[0][0];

    outputHTMLMatrix(table);

    const res = rearrangeMatrix(table)(newColumn,newRow,item);

    outputHTMLMatrix(res);
}
