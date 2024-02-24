const generarCodigoButton = document.getElementById('generarCodigo');
generarCodigoButton.addEventListener('click', function() {
    const formElements = document.querySelectorAll('.formulario input[type="text"]');
    const altPortada = formElements[0].value;
    const urlPortada = formElements[1].value;
    const tituloPortada = formElements[2].value;
    const palabra1 = formElements[3].value;
    const palabra2 = formElements[4].value;
    const palabra3 = formElements[5].value;
    const videoNombre = formElements[6].value;
    const videoDescripcion = formElements[7].value;
    const thumbnailUrl = formElements[8].value;
    const idVideoDrive = formElements[9].value;
    const fechaVideo = `2024-${formElements[10].value}`;
    const minutosVideo = formElements[11].value;
    const segundosVideo = formElements[12].value;
    const urlFuenteTikTok = formElements[13].value;
    const nombreFuenteTikTok = formElements[14].value;

    const codigoGenerado = `
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto;">
  <tbody>
    <tr>
      <td style="text-align: center;">
      <img
  alt="${altPortada}"
  border="0"
  width="800"
  height="500"
  loading="lazy"
  src="${urlPortada}"
  style="margin-left: auto; margin-right: auto;"
  title="${altPortada}"
/>
      </td>
    </tr>
    <tr>
      <td class="tr-caption" style="text-align: center;">${palabra1} | ${palabra2} | ${palabra3}</td>
    </tr>
  </tbody>
</table>
<p><span></span></p><!--more--><p></p>
<!-- Video INICIO -->
<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "${videoNombre}",
        "description": "${videoDescripcion}",
        "thumbnailUrl": "${thumbnailUrl}",
        "contentUrl": "https://vz-af017b72-fdb.b-cdn.net/${idVideoDrive}/play_480p.mp4",
        "uploadDate": "${fechaVideo}",
        "duration": "PT${minutosVideo}M${segundosVideo}S",
        "embedUrl": "",
        "interactionStatistic": {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/WatchAction",
            "userInteractionCount": ""
        }
    }
</script>
<div class="video-container">
    <div class="video-wrapper">
        <video id="video-player" autoplay muted loop controls class="video-player" poster="${thumbnailUrl}">
            <source src="https://vz-af017b72-fdb.b-cdn.net/${idVideoDrive}/play_480p.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>
<div class="creditos-creador">
    <p>© <a href="https://tiktok.com/${nombreFuenteTikTok}" target="_blank">${nombreFuenteTikTok}</a></p>
</div>
<!-- Copiar Link de la receta | INICIO -->
<div style="text-align: center;">
    <button id="copyButton" class="nys_solid_large">
        Comparte este ASMR
        <span id="checkMark" style="display: none;">✓</span>
    </button>
</div>
<script>
    const copyButton = document.getElementById('copyButton');
    const checkMark = document.getElementById('checkMark');

    copyButton.addEventListener('click', async () => {
        const urlToCopy = window.location.href;

        // Copiar la URL al portapapeles usando la API del Portapapeles
        try {
            await navigator.clipboard.writeText(urlToCopy);
            checkMark.style.display = 'inline'; // Mostrar el check mark
            setTimeout(() => { checkMark.style.display = 'none'; }, 1000); // Ocultar el check mark después de medio segundo
        } catch (err) {
            console.error('Error al copiar el enlace de la receta: ', err);
        }
    });
</script>
<!-- Copiar Link de la receta | FIN -->
<!-- Copyright del Video | INICIO -->
<div class="credit-box">
    <h5 class="credit-title">Créditos del video.</h5>
    <p class="credit-info">Autor: <a href="https://tiktok.com/${nombreFuenteTikTok}" target="_blank">${nombreFuenteTikTok}</a></p>
    <p class="credit-info">Origen: <a href="${urlFuenteTikTok}" rel="noopener noreferrer" target="_blank" class="credit-link">tiktok.com/${nombreFuenteTikTok}</a></p>
    <p class="copyright-symbol">&#169;</p>
</div>
<!-- Copyright del Video | FIN -->
<!-- Video FIN -->`;
    // Copiar el código generado al portapapeles
    const textarea = document.createElement('textarea');
    textarea.value = codigoGenerado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Código HTML copiado al portapapeles');
});