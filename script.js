@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');

* {
    border: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: font-family: "DM Serif Text", serif;
    background-color: #e5f2fa;
    color: #142D4C;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #c9d4e349;
    padding: 20px;
    width: 90%;
    margin: auto;
    color: #8b6b50;
    text-align: center;
    margin-top: 20px;
}

.titulo {
    font-size: 50px;
    font-weight: 600;
    margin-top: 5px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 20px;
}

.izquierda {   
    background-color: #ffffffc3;
    border-radius: 28px;
    padding: 50px;
    box-shadow: 0px 24px 32px -8px rgba(110, 136, 121, 0.479);
    width: 80%;
    max-width: 500px;
    margin: 10px 0;
    flex-grow: 0;
}

.ingresaTexto {
    color: #495057;
    width: 80%;
    font-size: 20px;
    color: var(--color-azul);
    background-color: #ffffffc3;
    border: none;
    outline: none;
    resize: none;
    flex-grow: 1;
    box-sizing: border-box; overflow: hidden;
}

.leyenda {
    font-size: 12px;
    color: #120f0cc4;
    margin-top: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.leyenda, .botones {
    position: relative;
    top: 60px;
    margin: auto;
}

.botones {
    margin-bottom: 10%;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
}

.derecha {
    width: 100%;
    max-width: 500px;
    margin: 10px 0;
    background-color: rgba(255, 255, 255, 0.763);
    border-radius: 28px;
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 24px 32px -8px rgba(110, 136, 121, 0.479);
}

.derechaAbajo {
    position: relative;
    bottom: -50px;
    margin: auto;
}
.chica {
    width: auto;
    height: auto;
}

.derecha img {
    width: 30%;
    margin-bottom: 20px;
    justify-content: space-between;
}

.informacion, .inspo {
    color: #495057;
    font-size: 16px;
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.noFound {
    border: none;
    outline: none;
    resize: none;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    color: #495057;
    font-family: regular;
}

button {
    background-color: #8b6b50dc;
    color: #fcfcfc;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.encriptarBoton {
    margin-top: 10px;
    background-color: #8b6b50dc;
    font-family: 'Courier New', Courier, monospace;  
}
button:hover {
    background-color: #8b6b50;
}

#copiar, .desencriptarBoton {
    margin-top: 10px;
    background-color: #8b6b5092;
    font-family: 'Courier New', Courier, monospace;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #ECECEC;
    color: #3d4341e1;
    margin-top: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

footer .redesSociales {
    margin-top: 10px;
}

footer .redesSociales a {
    margin: 0 10px;
}

footer .redesSociales img, .foto {
    width: 30px;
    transition: transform 0.3s; 
    border-radius: 50%;
}
.foto {
    width: 40px;
} 

footer .redesSociales img:hover {
    transform: scale(1.2);
}

@media (min-width: 768px) {
    main {
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
    }

    .izquierda, .derecha {
        max-width: 45%;
    }
}
