let formNama = document.querySelector("#form-nama")
let formRole = document.querySelector("#form-role")
let formAvailability = document.querySelector("#form-availability")
let formUsia = document.querySelector("#form-usia")
let formLokasi = document.querySelector("#form-lokasi")
let formPengalaman = document.querySelector("#form-pengalaman")
let formEmail = document.querySelector("#form-email")
let btnSubmit = document.querySelector("#btn-submit")


document.addEventListener("DOMContentLoaded", () => {
    // mengisi nilai default form berdasarkan data yang ada di local storage
    formNama.value = localStorage.getItem('nama');
    formRole.value = localStorage.getItem('role');
    formAvailability.value = localStorage.getItem('availability');
    formUsia.value = localStorage.getItem('usia');
    formLokasi.value = localStorage.getItem('lokasi');
    formPengalaman.value = localStorage.getItem('pengalaman');
    formEmail.value = localStorage.getItem('email');
});

btnSubmit.addEventListener("click", () => {
    localStorage.setItem('nama', formNama.value)
    localStorage.setItem('role', formRole.value)
    localStorage.setItem('availability', formAvailability.value)
    localStorage.setItem('usia', formUsia.value);
    localStorage.setItem('lokasi', formLokasi.value)
    localStorage.setItem('pengalaman', formPengalaman.value)
    localStorage.setItem('email', formEmail.value)
    
    window.location.href = "section_profil.html"
})