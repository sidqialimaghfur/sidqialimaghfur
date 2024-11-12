<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $kotaAsal = $_POST['kotaAsal'];
    $kotaTujuan = $_POST['kotaTujuan'];
    $berat = $_POST['berat'];

    echo "Data berhasil diterima: Kota Asal = $kotaAsal, Kota Tujuan = $kotaTujuan, Berat Barang = $berat kg";
} else {
    echo "Hanya metode POST yang diizinkan.";
}
?>
