//membuat class pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
  }

  getInfo() {
    return `Nama: ${this.nama}, Nomor: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa ? this.kendaraanDisewa : "Belum sewa"}`;
  }
}

//membuat class sistem transportasi
class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanPelanggan() {
    console.log("Daftar Pelanggan yang Sedang Menyewa");
    this.daftarPelanggan.forEach((p, i) => {
      if (p.kendaraanDisewa) {
        console.log(`${i + 1}. ${p.getInfo()}`);
      }
    });
  }
}

//cetak hasil
const sistem = new SistemTransportasi();

const pelanggan1 = new Pelanggan("Andre", "08123456789");
const pelanggan2 = new Pelanggan("Ayu", "0812345678");
const pelanggan3 = new Pelanggan("Agus", "081234567");
const pelanggan4 = new Pelanggan("Munir", "08123456");

pelanggan1.sewaKendaraan("Mobil");
pelanggan2.sewaKendaraan("Motor");
pelanggan3.sewaKendaraan("Becak");

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

sistem.tampilkanPelanggan();