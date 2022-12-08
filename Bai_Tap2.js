let array = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];

const a = array.filter(array => array.gender === 'male')
const b = array.filter(array => array.gender === 'female')
// const a1 = a.reduce((total, amount, array) => {
//     total += amount.poin;
//     return total / array.length
// })
let sum = 0
for (let i = 0; i < a.length; i++) {
    sum += a[i].poin
}
let tb = sum / a.length

let sum1 = 0
for (let i = 0; i < b.length; i++) {
    sum1 += b[i].poin
}
let v = sum1 / b.length
console.log(`So Hoc Sinh Nam : ${a.length}`)
console.log(`Diem Trung Binh Cua Nam: ${tb}`)
console.log(`So Hoc Sinh Nu: ${b.length}`)
console.log(`Diem Trung Binh Nu: ${v}`)
