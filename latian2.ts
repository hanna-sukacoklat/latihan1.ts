interface Book{
    id: number
    judul: string
    kategori:string
    harga: number
    stok: number
}

const books : Book[] = [
    {id: 1, judul: "windah habatusauda", kategori: "horror", harga: 100000000000, stok: 1},
    {id: 2, judul: "windah batubara tol cipularang", kategori: "drama", harga: 150000, stok: 4},
    {id: 3, judul: "windah bocil", kategori: "comedy", harga: 10000, stok: 36}
];

console.log("----------------------------------------------------")

//2. ngitung
let menghitung = books.map(t => t.harga*t.stok)
console.log(menghitung);

console.log("----------------------------------------------------")

//5 nampilin semua judul
function showalltitles(): void {
  books.forEach(b => console.log(b.judul));
}
console.log("Semua Judul Buku:");
showalltitles();

console.log("----------------------------------------------------")

//1. dafta buku sesuai kategori (pake filter)
function byCategory(category: string): Book[] {
  return books.filter(b => b.kategori.toLowerCase() === category.toLowerCase());
}
console.log("By Category (comedy):", byCategory("comedy"));

console.log("----------------------------------------------------")

//4. konfersi ke format ringkas
function toSimpleFormat(): string[] {
  return books.map(b => `${b.judul} — Rp${b.harga} (Stok: ${b.stok})`);
}
console.log("Format Ringkas:", toSimpleFormat());

console.log("----------------------------------------------------")

//3. tambah stok buat penjualan besar 
function addStockMax(): Book {
  let maxBook = books.reduce((max: Book, b: Book) => {
    return b.stok > max.stok ? b : max;
  }, books[0] as Book); 
  maxBook.stok += 10;
  return maxBook;
}

console.log("Buku dengan stok ditambah:", addStockMax());

