const kotaList = [
    "Banyuwangi",
    "Jakarta",
    "Surabaya",
    "Bandung",
    "Medan",
    "Semarang",
    "Makassar"
];

function loadKotaOptions() {
    const kotaAsalSelect = $("#kotaAsal");
    const kotaTujuanSelect = $("#kotaTujuan");

    kotaList.forEach(kota => {
        kotaAsalSelect.append(new Option(kota, kota));
        kotaTujuanSelect.append(new Option(kota, kota));
    });
}

function submitForm() {
    const data = {
        kotaAsal: $("#kotaAsal").val(),
        kotaTujuan: $("#kotaTujuan").val(),
        berat: $("#berat").val()
    };

    $.ajax({
        url: 'proses_form.php',
        type: 'POST',
        data: data,
        success: function(response) {
            $("#responseMessage").html(response);
        },
        error: function(xhr, status, error) {
            $("#responseMessage").html("Terjadi kesalahan: " + error);
        }
    });
}
