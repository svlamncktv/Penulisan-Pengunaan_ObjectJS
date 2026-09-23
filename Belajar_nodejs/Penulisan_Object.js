//Nama : Sevila Manci Oktavia
//Kelas : XI-PPLG
const data_siswa = {
    name: ["Sevila Manci Oktavia", "Zayne Li Shen"],
    age: [16, 17],
    status: ["Student", "student"],
    hobby: ["Bermain game", "Membaca buku"],
    StudentData: {
        school: "SMK PRAKARYA INTERNASIONAL",
        grade: 11,
        major: "PPLG",
    }
};

console.log("Perkenalkan saya", data_siswa.name[0], "Ini rekan saya", data_siswa.name[1]);
console.log("Kami adalah siswa siswi", data_siswa.StudentData.school );
console.log("Kita adalah siswa siswi kelas", data_siswa.StudentData.grade, "dan jurusan kami adalah", data_siswa.StudentData.major);
console.log("Kami berusia sekitar", data_siswa.age[0], "tahun hingga", data_siswa.age[1], "tahun");
console.log("Hobi kami adalah", data_siswa.hobby[0], "dan", data_siswa.hobby[1]);
