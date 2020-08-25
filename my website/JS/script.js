function bukutamu() {
    var nama = document.getElementById("Nama").value;
    var email = document.getElementById("Email").value;
    var komentar = document.getElementById("komentar").value;
    var simpan = document.getElementById("simpan").value;
    if (nama == "") {
        alert("isi nama dulu");

        // kalau nama telah di isi maka perintah di abaikan 
    } else if (email == "") {
        alert("email harus diisi");
    }
    else if (komentar == "") {
        alert("komentar harus diisi");
    }

    else {

        console.log(nama);
        document.getElementById("list").innerHTML
            = `<table>
            <tr>
            <td>Nama</td>
            <td>:</td>
            <td> ` + nama + `</td></tr>
            
            <tr>
            <td>Email</td>
            <td>:</td>
            <td> ` + email + `</td></tr>

            <tr>
            <td>komentar</td>
            <td>:</td>
            <td> ` + komentar + `</td>
            </tr>
            </table>`

        // ` + komentar + ` untuk mengambil var komentar maka hasilnya sesuai dengan
        // dengan yang di isi di komentar

    }



    // coding di atas adalah jika nama kosong maka alert 'nama harus diisi'
    //namun jika diisi maka alert nama yang telah diisi
}
