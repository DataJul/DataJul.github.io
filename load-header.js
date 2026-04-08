document.addEventListener("DOMContentLoaded", async () => {
    const loadPartial = async (selector, url) => {
        const container = document.getElementById(selector);
        if (!container) return;

        try {
            const response = await fetch(new URL(url, window.location.href));
            if (!response.ok) {
                throw new Error(`Impossible de charger ${url} : ${response.status}`);
            }
            container.innerHTML = await response.text();
        } catch (error) {
            console.error(error);
            container.innerHTML = `<p>Élément introuvable. Détails : ${error.message}</p>`;
        }
    };

    await Promise.all([
        loadPartial("site-header", "header.html"),
        loadPartial("site-footer", "footer.html"),
    ]);
});
