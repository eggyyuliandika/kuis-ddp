const prompt = require("prompt-sync")();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
  {
    q: "Yang merupakan member JKT 48?",
    o: ["Jokowi", "Freya", "Nadin Amizah", "Igun Mama Takut"],
    a: 1,
  },
  {
    q: "Nama kakak Upin dan Ipin adalah...",
    o: ["Kak Rose", "Kak Jeane", "Monkey D. Luffy", "Igun Mama Takut"],
    a: 0,
  },
  {
    q: "Nama ayah luffy adalah...",
    o: ["Monky D. Dragon", "Monky D. Grap", "Ivan Gunawan", "Crocodile"],
    a: 0,
  },
  {
    q: "Nasi Padang berasal dari...",
    o: ["Bali", "Maluku", "Padang", "Sulawesi"],
    a: 2,
  },
  {
    q: "Siapa nama Navigator di Mugiwara Crew...",
    o: ["Nami", "Robin", "Zoro", "Chopper"],
    a: 0,
  },
  // Tambahkan 3 soal lainnya
];

let nama = prompt("Input nama: ");

// Loop untuk setiap soal
for (let i = 0; i < soal.length; i++) {
  console.log("\nSoal " + (i + 1) + ": " + soal[i].q);

  // Menampilkan pilihan jawaban
  for (let j = 0; j < soal[i].o.length; j++) {
    console.log(j + 1 + ". " + soal[i].o[j]);
  }

  // Menerima jawaban dari pengguna
  let jawaban = prompt("Masukkan nomor pilihan jawaban Anda: ");

  // Memeriksa jawaban
  if (jawaban == soal[i].a + 1) {
    console.log("Jawaban Anda benar!");
    score += point_per_soal;
    jawaban_benar++;
  } else {
    console.log(
      "Jawaban Anda salah. Jawaban yang benar adalah: " + soal[i].o[soal[i].a]
    );
    jawaban_salah++;
  }
}

// Lengkapi code program yang belum selesai

console.log("Kuis selesai");
console.log("\n");
console.log("Statistic Kuis");
console.log("Nama\t\t:", nama);
console.log("Score\t\t:", score);
console.log("Jawaban benar\t:", jawaban_benar);
console.log("Jawaban salah\t:", jawaban_salah);
