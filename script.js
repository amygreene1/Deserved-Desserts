function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}
  window.onload = function () {

    const images = [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800",
        "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800",
        "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?q=80&w=800"
    ];

    let index = 0;

    function changeImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }

        document.getElementById("carousel-image").src = images[index];
    }

    setInterval(changeImage, 3000);
};