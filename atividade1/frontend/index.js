const apiUrl = "http://localhost:5000";

// GET
// Seleciona os elementos do index.html
const playlistTableBody = document.getElementById("playlist-table-body");
const listarPlaylist = document.getElementById("listar-playlist");
// Adiciona ação de clique no botão
listarPlaylist.addEventListener("click", (e) => {
  // Faz requisição para api, na rota playlist, como não há parâmetro, é `GET`.
  // O fetch retorna uma `Promise` (estudar isso), mas é basicamente um retorno assincrôno.
  // Por isso, você utiliza o .then para passar a função de callback a ser executada quando o valor finalmente chegar do servidor.
  // Há alternativas ao .then, estudar `await` e `async`.
  fetch(`${apiUrl}/playlist`).then((res) => {
    // O conteúdo da requisição também retorna uma `Promise`.
    res.text().then((body) => {
      // JSON.parse converte a string JSON que veio da requisição para um objeto do JS.
      const bodyObj = JSON.parse(body);
      // Estudar as função de array `forEach`, `map`, `filter` e `reduce`.
      // Serão extremamente úteis para webdev.
      playlistTableBody.innerHTML = bodyObj
        .map((obj) => `<tr><td>${obj.musica}</td><td>${obj.artista}</td></tr>`)
        .join("");
    });
  });
});

// POST
const addSongForm = document.getElementById("add-song-form");
const addSongFormStatus = document.getElementById("add-song-form-status");
// Neste caso, estamos adicionando um evento que observa a ação de `submit` do `form`.
addSongForm.addEventListener("submit", (e) => {
  // Estudar porque utilizar o `e.preventDefault()`
  e.preventDefault();

  // Converte os valor do `form` em um objeto JS.
  const formData = new FormData(e.target);
  const formDataObj = {};
  formData.forEach((value, key) => {
    formDataObj[key] = value;
  });

  // Define o método da requisição, os `headers` definem o conteúdo da requição entre outras informação, estudar a utilizada dos `headers`.
  // Body é o conteúdo da requisição.
  // `JSON.stringify` converte o objeto JS para uma string JSON.
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataObj),
  };
  fetch(`${apiUrl}/playlist`, postOptions).then((res) => {
    res.text().then((body) => {
      const bodyObj = JSON.parse(body);
      if ("success" in bodyObj) {
        addSongFormStatus.textContent = bodyObj.success;
        setTimeout(() => {
          addSongFormStatus.textContent = "";
        }, 3000);
      }
    });
  });
});
