// Mendapatkan elemen canvas dari HTML

var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

// Mengatur properti gaya bunga

var flowerStyle = {

    radius: 10,

    petalColor: "#FF0000",

    centerColor: "#FFC0CB"

};

// Menentukan posisi awal bunga

var positionX = canvas.width / 2;

var positionY = canvas.height / 2;

// Fungsi untuk menggambar bunga

function drawFlower(x, y) {

    // Menggambar kelopak bunga

    context.beginPath();

    context.arc(x, y, flowerStyle.radius, 0, 2 * Math.PI, false);

    context.fillStyle = flowerStyle.petalColor;

    context.fill();

    // Menggambar pusat bunga

    context.beginPath();

    context.arc(x, y, flowerStyle.radius / 2, 0, 2 * Math.PI, false);

    context.fillStyle = flowerStyle.centerColor;

    context.fill();

}

// Fungsi untuk mengupdate animasi

function updateAnimation() {

    // Membersihkan canvas

    context.clearRect(0, 0, canvas.width, canvas.height);

    // Menggambar bunga pada posisi saat ini

    drawFlower(positionX, positionY);

    // Mengupdate posisi bunga

    positionX += 1;

    positionY += Math.sin(positionX * 0.05) * 2;

    // Mengulang animasi

    requestAnimationFrame(updateAnimation);

}

// Memulai animasi

updateAnimation();

