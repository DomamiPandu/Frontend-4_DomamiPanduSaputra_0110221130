//Membuat Variable
//Nilai const tidak bisa berubah
const name = "Domami"
const major = "informatics"
const age = 20
console.log(name, major, age);


const ages = 20 //nummber
const isMarried = false; //boolean
let nd; //undefind

console.log(typeof ages);


//literals
const nama = "domami"
const hasil = `nama saya:  ${nama}`;
console.log(nama);


//conditional
// Jika nilai > 90: A
// jika nilai > 80: B
// jika nilai > 70: C
// Selain itu D

if (nilai > 90) {
    console.log("A")
}
else if (nilai > 80) {
    console.log("B")
}
if (nilai > 70) {
    console.log("C")
} else {
    console.log("D")
}

// looping
// Tampilkan 1 sampai 10
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// function-declaration
// membuat fungsi hitung umur
//Tahun sekarng - tahun lahir

function hitungUmur(tahunLahir) {
    const umur = 2023 - tahunLahir;
    return umur;
}


console.log(hitungUmur(2003));

// lebih simple
const umurDomami = hitungUmur(2003);

// Functtion-expression
const hitungUmur = (tahunLahir) => {
    const umur = 2023 - tahunLahir;
    return umur;
};

//Hanya satu baris sekalian return
const hitungUmur = (tahunLahir) => 2023 - tahunLahir

//Nilai default
const hitungUmur = (tahunLahir) => 2023 - tahunLahir


//Array
//Menyimpan banyak nilai hewan
const animals = ["burung", "ikan", "belut"];
console.log(animals[2]);

//Pakai manual looping array
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

//object
//Berikut merupakan cara membuat object
const pandu = {
    nama: "Pandu",
    umur: 20,
    jenisKelamin: "Pria",
};

console.log(pandu.name);

//Loops Object
//untuk mengulang suatu object menggunakan siku
for (label in pandu) {
    console.log(label);
    console.log(pandu[label]);
}