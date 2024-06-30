function deleteCookie(cookieName1) {
    //Elimino i cookie ponendo la data di scadenza a ora
    var pastDate = new Date(0);

    document.cookie = cookieName1 + "=; expires=" + pastDate.toUTCString() + "; path=/";
    window.location.reload();
}
