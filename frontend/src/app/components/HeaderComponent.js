const HeaderComponent = () => {
    return (
        <header class="cabecalho">
            <section class="cabecalho-conteudo">
                <div class="logo">
                    <a href="#">
                        <img src="/img/home/principal/logo-.comDomínio150px.png" alt=""></img>
                    </a>
                </div>
                <nav>
                    <ul class="menu" style="list-style: none;">
                        <li><a href="#principal">Início</a></li>
                        <li><a href="#principal2">Funcionalidades</a></li>
                        <li><a href="#principal3">Benefícios</a></li>
                        <li><a href="#principal4">Contato</a></li>
                    </ul>
                </nav>
                <h2 class="cabecalho-login">
                    <a href="./login">Login</a>
                </h2>
            </section>
        </header>
    );
};

export default HeaderComponent;