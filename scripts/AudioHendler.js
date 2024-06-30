function playAudio() {
    return new Promise((resolve, reject) => {
        let x = document.getElementById("myAudio");
        x.play();
        x.addEventListener('ended', resolve); // Risolve la promessa quando l'audio è finito
        x.addEventListener('error', reject); // Rifiuta la promessa in caso di errore
    });
}

async function login() {
    try {
        await playAudio();
        // Qui il codice continuerà solo dopo che l'audio è stato riprodotto completamente
        window.location.href = '../index.php';
    } catch (error) {
        console.error('Errore durante la riproduzione dell\'audio:', error);
        // Puoi gestire l'errore in modo appropriato se necessario
    }
}