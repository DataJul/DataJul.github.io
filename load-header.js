document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("site-header");
    if (!container) return;

    try {
        const response = await fetch(new URL("header.html", window.location.href));
        if (!response.ok) {
            throw new Error(`Impossible de charger le header : ${response.status}`);
        }
        container.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
        container.innerHTML = `<p>Header introuvable. Détails : ${error.message}</p>`;
    }
});
