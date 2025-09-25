import { index, store, destroy } from "./controller.mjs";

const main = () => {
  console.log("Data Awal");
  index();   //data awal

  //tambah dua data
  store({ nama: 'Data 11', umur: 30, alamat: 'Jl. Data 11', email: 'data11@mail.com' });
  store({ nama: 'Data 12', umur: 31, alamat: 'Jl. Data 12', email: 'data12@mail.com' });
  
  //data setelah ditambah
  console.log("\nData Setelah Ditambah");
  index();

  destroy(); //hapus data terakhir

  //data setelah dihapus
  console.log("\nData Setelah Dihapus");
  index();   
};

main();
