let body = document.querySelector("body")
let btnEdit = document.querySelector("#btn-edit")

let nama = document.querySelector("#nama")
let role = document.querySelector("#role")
let availability = document.querySelector("#availability")
let usia = document.querySelector("#usia")
let lokasi = document.querySelector("#lokasi")
let pengalaman = document.querySelector("#pengalaman")
let email = document.querySelector("#email")

document.addEventListener("DOMContentLoaded", () => {
    //mengecek apakah local storage ada isinya atau tidak
    //untuk menangani saat pertama kali load agar tidak kosong data pada tampilan
    if(localStorage.length > 0) {
        //mengisi data profil sekarang berdasarkan data yang ada di local storage
        nama.innerText = localStorage.getItem('nama');
        role.innerText = localStorage.getItem('role');
        availability.innerText = localStorage.getItem('availability');
        usia.innerText = localStorage.getItem('usia');
        lokasi.innerText = localStorage.getItem('lokasi');
        pengalaman.innerText = localStorage.getItem('pengalaman');
        email.innerText = localStorage.getItem('email');
    }
});

btnEdit.addEventListener("click", () => {
    //mengirim data sekarang ke local storage
    localStorage.setItem('nama', nama.innerText)
    localStorage.setItem('role', role.innerText)
    localStorage.setItem('availability', availability.innerText)
    localStorage.setItem('usia', usia.innerText);
    localStorage.setItem('lokasi', lokasi.innerText)
    localStorage.setItem('pengalaman', pengalaman.innerText)
    localStorage.setItem('email', email.innerText)
    
    window.location.href = "section_form.html"
})
