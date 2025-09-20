const readline = require("readline");

//deklarasi
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

//tampilkan produk
function tampilkanProduk() {
  console.log("\nDaftar Produk Toko");
  if (produkToko.length === 0) {
    console.log("Belum ada produk.");
  } else {
    produkToko.forEach(p => {
      console.log(`ID: ${p.id}, Nama: ${p.nama}, Harga: Rp${p.harga.toLocaleString("id-ID")}, Stok: ${p.stok}`);
    });
  }
}

//tambah produk
function tambahProduk(nama, harga, stok) {
  let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
  produkToko.push({ id: idBaru, nama, harga, stok });
  console.log(`Produk "${nama}" Berhasil ditambahkan.`);
}

//hapus produk
function hapusProduk(id) {
  let index = produkToko.findIndex(p => p.id === id);
  if (index !== -1) {
    let terhapus = produkToko.splice(index, 1);
    console.log(`Produk "${terhapus[0].nama}" Berhasil dihapus.`);
  } else {
    console.log(`Produk dengan ID ${id} Tidak ditemukan.`);
  }
}

//input user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//fungsi menu
function menu() {
  console.log(`
MENU TOKO
1. Tambah Produk
2. Hapus Produk
3. Lihat Produk
4. Keluar
  `);

  rl.question("Pilih menu (1-4): ", (jawaban) => {
    switch (jawaban) {
      case "1":
        rl.question("Nama produk: ", (nama) => {
          rl.question("Harga produk: ", (harga) => {
            rl.question("Stok produk: ", (stok) => {
              tambahProduk(nama, parseInt(harga), parseInt(stok));
              menu();
            });
          });
        });
        break;

      case "2":
        rl.question("Masukkan ID produk yang akan dihapus: ", (id) => {
          hapusProduk(parseInt(id));
          menu();
        });
        break;

      case "3":
        tampilkanProduk();
        menu();
        break;

      case "4":
        console.log("Program Selesai");
        rl.close();
        break;

      default:
        console.log("Tidak ada pilihannya");
        menu();
        break;
    }
  });
}

//menu pertama
menu();
