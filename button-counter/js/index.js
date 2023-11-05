// Mengambil elemen dengan id 'counter' dan menyimpannya dalam variabel 'counter'
let counter = document.getElementById('counter');

// Mengambil elemen dengan id 'plus' dan menyimpannya dalam variabel 'add'
let add = document.getElementById('plus');

// Mengambil elemen dengan id 'minus' dan menyimpannya dalam variabel 'min'
let min = document.getElementById('minus');

// Inisialisasi variabel 'conta' dengan nilai awal 0
conta = 0;

// Menambahkan event listener untuk menginkrementasi 'conta' dan mengupdate teks dalam 'counter'
add.addEventListener('click', () => {
    // Increment 'conta' dengan 1
    conta = conta + 1;
    // Memperbarui teks dalam elemen 'counter' dengan nilai yang baru
    counter.textContent = conta;
});

// Menambahkan event listener untuk mengurangkan 'conta' dan mengupdate teks dalam 'counter'
min.addEventListener('click', () => {
    // Memeriksa apakah 'conta' lebih dari 0 sebelum menguranginya
    if (conta > 0) {
        // Mengurangkan 'conta' dengan 1
        conta = conta - 1;
        // Memperbarui teks dalam elemen 'counter' dengan nilai yang baru
        counter.textContent = conta;
    } else {
        // Menampilkan pesan "Tidak bisa minus" jika 'conta' sudah 0
        alert("Tidak bisa angka dibawah 0");
    }
});
//bisa dirubah sesuai kebutuhan