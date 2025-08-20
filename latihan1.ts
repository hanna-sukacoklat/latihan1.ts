interface Order {
  id: number
  customer: string
  menu: string
  qty: number
  price: number
}

const orders: Order[] = [
  { id: 1, customer: "Andi", menu: "Nasi Goreng", qty: 2, price: 20000 },
  { id: 2, customer: "Budi", menu: "Mie Ayam", qty: 1, price: 15000 },
  { id: 3, customer: "Citra", menu: "Es Teh", qty: 3, price: 5000 },
  { id: 4, customer: "Andi", menu: "Es Jeruk", qty: 1, price: 8000 },
];

//1. ngitung
let menghitung = orders.map(o => o.qty*o.price)
console.log(menghitung);

//2. array baru
const Order=[
    {nama: "andi", total: 40000},
    {nama: "Budi", total: 15000},
    {nama: "Citra", total: 15000},
    {nama: "Andi", total: 8000},
];

//3. >1
const qtylebihdarisatu = orders.filter(o => o.qty > 1);
console.table(qtylebihdarisatu);