let task = [{
    id:1234,work:"i lern js"
},
{
    id:23456,work:"i lern java"
},
{
    id:34567,work:"i lern c++"
}
];

const remvId = 1234;

const updatedTask = task.filter(item => item.id !==remvId);

console.log(updatedTask);