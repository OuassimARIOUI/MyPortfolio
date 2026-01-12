document.addEventListener("DOMContentLoaded", () => {
    const donuts = document.querySelectorAll(".skill-donut");

    donuts.forEach(donut => {
        const percent = parseInt(donut.getAttribute("data-percent"));
        const ring = donut.querySelector(".donut-ring");

        // Total length of the circle stroke
        const circumference = 2 * Math.PI * 15.9155;
        let progress = 0;

        const animate = () => {
            if (progress <= percent) {
                const offset = circumference * (1 - progress / 100);
                ring.style.strokeDashoffset = offset;
                ring.style.strokeDasharray = `${circumference}`;
                progress++;
                requestAnimationFrame(animate);
            }
        };

        animate();
    });

    // Sliders (inchangés)
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach(slider => {
        const images = slider.querySelectorAll("img");
        let index = 0;
        images[index].classList.add("active");

        setInterval(() => {
            images[index].classList.remove("active");
            index = (index + 1) % images.length;
            images[index].classList.add("active");
        }, 2500);
    });
});
