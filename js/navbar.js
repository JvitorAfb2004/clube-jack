// Pega o nome do arquivo da URL atual
  const currentPage = window.location.pathname.split('/').pop();

  // Seleciona todos os links do menu
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    // Se o href do link for igual à página atual, adiciona a classe "active"
    if (link.getAttribute('href') === currentPage) {
      link.parentElement.classList.add('active');
    } else {
      link.parentElement.classList.remove('active');
    }
  });