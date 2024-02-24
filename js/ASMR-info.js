const generarCodigoButton = document.getElementById('generarCodigo');
generarCodigoButton.addEventListener('click', function() {
    const formElements = document.querySelectorAll('.formulario input[type="text"], .formulario textarea');
    const UrlVideo = formElements[0].value;
    const NombreReceta = formElements[1].value;
    const Titulos = formElements[2].value;
    const Descripcion = formElements[3].value;
    const IdVideo = formElements[4].value;
    const TiempoVideo = formElements[5].value;

    const codigoGenerado = `
(*1)

${UrlVideo}

(*2)

${NombreReceta}

(*3)

${Titulos}

(*4)

${Descripcion}

(*5)

${IdVideo}

(*6)

${TiempoVideo}
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