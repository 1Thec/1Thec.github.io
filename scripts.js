// Dados dos Trabalhos dos Alunos (substitua pelas informações reais)
const trabalhos = [
    {
        imagem: "imagens/trabalho1.jpg",
        descricao: "Este é o trabalho de João sobre o meio ambiente."
    },
    {
        imagem: "imagens/trabalho2.jpg",
        descricao: "Desenho criativo de Maria sobre a biodiversidade."
    },
    {
        imagem: "imagens/trabalho3.jpg",
        descricao: "Pintura de Carlos representando a preservação dos oceanos."
    }
];

// Função para exibir os trabalhos na galeria
function displayGallery() {
    const gallery = document.getElementById('gallery');

    trabalhos.forEach(trabalho => {
        // Cria o container do trabalho
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        // Cria a imagem
        const img = document.createElement('img');
        img.src = trabalho.imagem;
        img.alt = "Imagem do trabalho";

        // Cria a descrição
        const desc = document.createElement('p');
        desc.classList.add('description');
        desc.textContent = trabalho.descricao;

        // Adiciona a imagem e a descrição ao container do trabalho
        galleryItem.appendChild(img);
        galleryItem.appendChild(desc);

        // Adiciona o trabalho à galeria
        gallery.appendChild(galleryItem);
    });
}

// Chama a função para exibir a galeria
displayGallery();
