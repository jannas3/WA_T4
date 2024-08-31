const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Array com os caminhos das imagens
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Loop para criar as miniaturas
for (let i = 0; i < imageFiles.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageFiles[i]}`);
    newImage.setAttribute('alt', `Imagem ${i + 1}`);
    thumbBar.appendChild(newImage);

    // Adiciona um manipulador de eventos para exibir a imagem ao ser clicada
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', this.getAttribute('src'));
    });
}

// Manipulador de clique para o botão de escurecimento/clairecimento
btn.addEventListener('click', function() {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
