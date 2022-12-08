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

const a1 = a.reduce((x, y) =>
        (x + y.poin)
    , 0)
const a2 = a1 / a.length

const b1 = b.reduce((z, y) =>
        (z + y.poin)
    , 0)
const b2 = b1 / b.length

console.log(`So Hoc Sinh Nam : ${a.length}`)
console.log(`Diem Trung Binh Cua Nam: ${a2}`)
console.log(`So Hoc Sinh Nu: ${b.length}`)
console.log(`Diem Trung Binh Nu: ${b2}`)

