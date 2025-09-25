import users from "./data.mjs";

//fungsi menampilkan semua data
const index = () => {
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

//fungsi menambahkan data baru
const store = (user) => {
  users.push(user);
};

//fungsi menghapus data terakhir
const destroy = () => {
  users.pop();
};

export { index, store, destroy };
