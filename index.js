// Diagnóstico (para saber por qué “no abre” en el navegador)
(function () {
    try {
        console.log("[Soledad Bot] index.js cargado");

        // Animación de aparición
        window.addEventListener("load", () => {
            if (document.body) document.body.classList.add("loaded");
            console.log("[Soledad Bot] window.load OK");
        });

        // Botones interactivos (solo los que tienen data-link)
        const buttons = document.querySelectorAll(".btn[data-link]");
        console.log("[Soledad Bot] .btn[data-link] count:", buttons.length);

        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const link = button.getAttribute("data-link");
                console.log("[Soledad Bot] Button clicked, link:", link);

                // Animación click
                button.classList.add("clicked");

                setTimeout(() => {
                    button.classList.remove("clicked");
                }, 250);

                // Abrir enlace en nueva pestaña
                if (link && link !== "#") {
                    console.log("[Soledad Bot] Opening link in new tab:", link);
                    const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
                    if (!newWindow) {
                        alert('Tu navegador bloqueó la nueva pestaña. Por favor permite pop-ups o haz clic en el enlace directamente.');
                    }
                } else {
                    alert("Esta sección aún está en desarrollo.");
                }
            });
        });

        // Efecto parallax suave
        const glow = document.querySelector(".background-glow");
        console.log("[Soledad Bot] .background-glow exists:", !!glow);

        document.addEventListener("mousemove", (e) => {
            if (!glow) return;
            let x = (window.innerWidth / 2 - e.pageX) / 40;
            let y = (window.innerHeight / 2 - e.pageY) / 40;
            glow.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Hover dinámico para cards
        const cards = document.querySelectorAll(".card");
        console.log("[Soledad Bot] .card count:", cards.length);

        cards.forEach((card) => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--x", `${x}px`);
                card.style.setProperty("--y", `${y}px`);
            });
        });

    } catch (err) {
        console.error("[Soledad Bot] Error en index.js:", err);
        alert("Error cargando el script (ver consola).\n" + err.message);
    }
})();

