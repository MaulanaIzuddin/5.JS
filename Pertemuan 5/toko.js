//daftar produk
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Keyboard", harga: 300000 },
  { id: 4, nama: "Mouse", harga: 150000 },
  { id: 5, nama: "Monitor", harga: 2000000 }
];

//nama fungsi bebas
const eventHandler = () => {
  console.log("Tampilkan Produk");
};

//menambahkan produk
function tambahProduk(id, nama, harga) {
  produkList = [...produkList, { id, nama, harga }];
  console.log(`Produk baru berhasil ditambahkan`);
  console.log("-------------------------------------------");
}

//menghapus produk
function hapusProduk(...id) {
  produkList = produkList.filter(p => !id.includes(p.id));
  console.log(`Produk dengan ID ${id} berhasil dihapus`);
  console.log("-------------------------------------------");
}

//menampilkan produk
function tampilkanProduk() {
  console.log("Daftar Produk :");
  for (let { id, nama, harga } of produkList) {
    console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
  }
  console.log("-------------------------------------------");
}

//eksekusi
tampilkanProduk();
tambahProduk(6, "Tablet", 7000000);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();
