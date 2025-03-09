const images = [
    'https://www.shutterstock.com/image-photo/beautiful-nature-wallpaper-600w-1148410709.jpg',
    'https://www.shutterstock.com/image-photo/nature-full-hd-wallpaper-tree-260nw-2434104341.jpg',
    'https://c4.wallpaperflare.com/wallpaper/180/757/252/computer-desktop-full-screen-nature-pics-1920x1200-wallpaper-preview.jpg'
];

let currentIndex = 0;
const sliderImage = document.getElementById('sliderImage');

function updateImage() {
    sliderImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Initialize the first image
updateImage();
