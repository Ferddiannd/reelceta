const generarCodigoButton = document.getElementById('generarCodigo');
generarCodigoButton.addEventListener('click', function() {
    const formElements = document.querySelectorAll('.formulario input[type="text"], .formulario textarea');
    const UrlVideo = formElements[0].value;
    const NombreReceta = formElements[1].value;
    const TitulosAlternativos = formElements[2].value;
    const Ingredientes = formElements[3].value;
    const Descripcion = formElements[4].value;
    const IdVideo = formElements[5].value;
    const TiempoVideo = formElements[6].value;
    const TiempoReceta = formElements[7].value;
    const Instrucciones = formElements[8].value;

    const codigoGenerado = `
(*1)

${UrlVideo}

(*2)

${NombreReceta}

(*3)

${TitulosAlternativos}

(*4)

${Ingredientes}

(*5)

${Descripcion}

(*6)

${IdVideo}

(*7)

${TiempoVideo}

(*8)

${TiempoReceta}

(*9)

${Instrucciones}

`;
    // Copiar el código generado al portapapeles
    const textarea = document.createElement('textarea');
    textarea.value = codigoGenerado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Código copiado al portapapeles');
});
