var originalTitle = document.title;
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'hidden') {
    document.title = "Volte para fazer seu Login! 😭";
  } else {
    document.title = originalTitle;
  }
});
function togglePasswordVisibility() {
var senhaInput = document.getElementById("senha");
var toggleIcon = document.querySelector(".toggle-password i");

if (senhaInput.type === "password") {
  senhaInput.type = "text";
  toggleIcon.textContent = "visibility_off"; // Ícone para ocultar senha
} else {
  senhaInput.type = "password";
  toggleIcon.textContent = "visibility"; // Ícone para mostrar senha
}
}
document.addEventListener("DOMContentLoaded", function() {
  // Adiciona um evento de clique a cada ícone de estilo
  document.querySelectorAll(".icon-options span").forEach(function(icon) {
    icon.addEventListener("click", function() {
      // Obtém o valor do estilo a partir do atributo data-style
      var selectedStyle = this.getAttribute("data-style");
      // Chama a função para alterar o CSS com o estilo selecionado
      changeCSS(selectedStyle);
    });
  });
});

function changeCSS(style) {
  document.getElementById("css-link").setAttribute("href", style);
}

function changeCSS(style) {
  // Remove a classe 'selected' de todos os botões
  document.querySelectorAll(".material-symbols-outlined").forEach(function(button) {
    button.classList.remove("selected");
  });

  // Define a classe 'selected' para o botão clicado
  event.target.classList.add("selected");

  // Atualiza o CSS com o estilo selecionado
  document.getElementById("css-link").setAttribute("href", style);
}
