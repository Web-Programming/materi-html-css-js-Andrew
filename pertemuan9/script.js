//fungsi unutuk memuat data dari session storage dan menampilkannya
function displayGuests(){
    const guestListUI = document.getElementById('guestList');
    guestListUI.innerHTML = ''; //reset tampilan list

    //mengambil data dari session storage, jika kosong buat array baru
    let guests=JSON.parse(sessionStorage.getItem('guests'))||[];

    guests.forEach((guests) => {
        let li = document.createElement('li');
        li.textContent = guests;
        guestListUI.appendChild(li);
    });
}

//fungsi untuk menambah data
function addGuest(){
    const input = document.getElementById('guestInput');
    const guestName= input.value;
    if(guestName === ''){
        alert('Nama tidak boleh kosong!');
        return;
    }
    // Ambil data lama
    let guests = JSON.parse(sessionStorage.getItem('guests')) ||[];

    //tambah data baru ke array
    guests.push(guestName);

    //simpan kembali  ke storage dalam bentuk string
    sessionStorage.setItem('guests', JSON.stringify(guests));
    
    //bersihkan input dan perbarui tampilan
    input.value='';
    displayGuests();
}
//fungsi untuk menghapus semua data
function clearList(){
    if(confirm('Hapus semua data tamu di sesi ini?')){
        sessionStorage.removeItem('guests');
        displayGuests();
    }
}

//jalankan fungsi display saat halaman pertama kali dimuat
window.onload = displayGuests;