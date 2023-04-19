const inputFile = document.querySelector('.input-file');
const videoSelected = document.querySelector('.video-selected');
const playVideo = document.querySelector('.play-video');
const pauseVideo = document.querySelector('.pause-video');
const subirVolumen = document.querySelector('.subir-volumen');
const bajarVolumen = document.querySelector('.bajar-volumen');

const handleInputFile = (event) => {
    event.preventDefault();
    alert('La operación puede tardar unos segundos, por favor espere mientras se carga el video');
    const file = inputFile.files[0];
    const videoURL = URL.createObjectURL(file);
    videoSelected.src = videoURL;
}

inputFile.addEventListener('change', handleInputFile);
playVideo.addEventListener('click', () => videoSelected.play());
pauseVideo.addEventListener('click', () => videoSelected.pause());
subirVolumen.addEventListener('click', () => videoSelected.volume += 0.1);
bajarVolumen.addEventListener('click', () => videoSelected.volume -= 0.1);





