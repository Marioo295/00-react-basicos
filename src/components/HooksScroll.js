import React, { useState, useEffect } from 'react'

export default function ScrollHooks () {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        //console.log("Moviendo el scroll");
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll", detectarScroll);

        return () => window.removeEventListener("scroll", detectarScroll);
    }, [scrollY]);

    //COMPONENT DID MOUNT (MONTAJE)
    useEffect(() => {
        //console.log("Fase de montaje");
    }, []);

    //COMPONENT RENDER
    useEffect(() => {
        //console.log("Fase de actualización");
    });

    //COMPONENT DID UNMOUNT (DESMONTAJE)
    useEffect(() => {
        return () => {
            //console.log("Fase de desmontaje");
        }
    });

    
    return (
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    )
}