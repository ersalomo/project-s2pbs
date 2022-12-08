let besi = document.getElementById('idbesi');
let plastik = document.getElementById('idplastik');
let kaca = document.getElementById('idkaca');
let kertas = document.getElementById('idkertas');
let banyaksampah = document.getElementById('banyaksampah');
let hasil = document.getElementById('hasil');


besi.addEventListener('click', function(){
    //jalankan program untuk tambah
	besi = parseInt(banyaksampah.value) * 25000;
	hasil.value = besi;
});

