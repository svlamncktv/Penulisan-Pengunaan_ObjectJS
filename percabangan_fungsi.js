function pplg(siswa){
    console.log("Hallo ", siswa);
}
pplg("Alvin");
pplg("Agung");
pplg("Defrico");

function tambah(angka1, angka2){
    return angka1 + angka2;
}
const hasil = tambah(90, 100);
console.log("Hasil jumlah=", hasil);
const nilai_siswa = 80;
function lulus(nilai_siswa){
    if(nilai_siswa >= 75){
        console.log("Selamat anda lulus");
    }else{
        console.log("Maaf anda belum lulus");
    }
}
lulus(80);