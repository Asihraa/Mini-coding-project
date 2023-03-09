const imageSlider = document.getElementById("image-slider");
let randomNumber = Math.ceil(Math.random() * 5);

// Setiap 3 detik gambar ganti

setInterval(() => {
    imageSlider.setAttribute('src', 'assets/image-slider/image' + randomNumber + '.jpg');
    randomNumber = Math.ceil(Math.random() * 5);
}, 3000);