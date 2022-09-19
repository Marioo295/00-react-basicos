import React, {useRef} from 'react'

export default function Referencias() {
    //let refMenu = createRef(), Esto es para class components
    let refMenu = useRef(),
    refMenuBtn = useRef();

    const handleToggleMenu = (e) => {
        /* const $menu = document.getElementById("menu");

        if (e.target.textContent === "Menú") {
            e.target.textContent = "Cerrar";
            $menu.style.display = "Block";
        } else {
            e.target.textContent = "Menú";
            $menu.style.display = "none";
        } */
        if (refMenuBtn.current.textContent === "Menú") {
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "Block";
        } else {
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    };

    return(
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
            <nav id="menu" ref={refMenu} style={{display:"none"}}>
                <a href="https://www.comuniate.com/">Comuniate</a>
                <br></br>
                <a href="https://www.flashscore.es/futbol/espana/">Mis marcadores</a>
                <br></br>
                <a href="https://www.marca.com/">Marca</a>
                <br></br>
                <a href="https://as.com/">As</a>
                <br></br>
                <a href="https://www.mundodeportivo.com/">Mundo deportivo</a>
                <br></br>
            </nav>
        </>
    );
}