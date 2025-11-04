
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");


  async function carregarPagina(pagina) {
    try {
      const resposta = await fetch(`html/${pagina}.html`);
      const conteudo = await resposta.text();
      app.innerHTML = conteudo; 
    } catch (error) {
      app.innerHTML = `<p>Erro ao carregar a página: ${pagina}</p>`;
      console.error(error);
    }
  }

  function carregarPaginaDaURL() {
  const pagina = location.hash.replace("#", "") || "home";
  carregarPagina(pagina);
}


carregarPaginaDaURL();


window.addEventListener("hashchange", carregarPaginaDaURL);

  document.querySelectorAll("a[data-link]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const pagina = href.replace(".html", "");
      carregarPagina(pagina);
      history.pushState({ pagina }, "", `#${pagina}`);
    });
  });

 
  window.addEventListener("popstate", e => {
    if (e.state?.pagina) carregarPagina(e.state.pagina);
  });

  
});

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-link]');
  if (link) {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
  }
});
