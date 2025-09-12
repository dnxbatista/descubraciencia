// Exemplo de pesquisa (simulação)
document.querySelector(".search-box input").addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    alert("Pesquisando por: " + e.target.value);
  }
});
