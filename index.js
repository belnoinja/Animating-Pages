
const body = document.body;
const boxRight = document.getElementById("box-right");
const boxNew = document.getElementById("box-new");
const nav = document.getElementById("nav");

boxRight.addEventListener("click", () => {

    gsap.to("#box1", { y: "-100%", opacity: 0, duration: 1 });
    gsap.to("#box3", { x: "-100%", opacity: 0, duration: 1 });
    gsap.to("#box4", { y: "-100%", opacity: 0, duration: 1 });
    gsap.to("#box6", { x: "100%", opacity: 0, duration: 1 });

    // gate opening
    gsap.to("#section-1", { x: "-50%", duration: 1 });
    gsap.to("#section-2", {
        x: "50%",
        duration: 1,
    });

    gsap.delayedCall(1.5, () => {
        body.classList.add("open-gate");
        gsap.set([boxNew, nav], { zIndex: 3 });
        gsap.set([boxRight], { zIndex: 0 });
        gsap.to("#section-1", { opacity: 0.95 });
        gsap.to("#section-2", { opacity: 0.95 });
    });
});

boxNew.addEventListener("click", () => {

    gsap.set([boxNew, nav], { zIndex: 0 });
    gsap.set([boxRight], { zIndex: 1 });

    // gate closing
    gsap.to("#section-1", { x: "0%", duration: 0.5, opacity: 1 });
    gsap.to("#section-2", {
        x: "0%",
        duration: 0.5,
        opacity: 1,
        onComplete: () => {
            body.classList.remove("open-gate");

            gsap.to("#box1", { y: "-100%", opacity: 1, duration: 0 });
            gsap.to("#box1", { y: "0%", duration: 0.5 });

            gsap.to("#box3", { x: "-100%", opacity: 1, duration: 0 });
            gsap.to("#box3", { x: "0%", duration: 0.5 });

            gsap.to("#box4", { y: "-100%", opacity: 1, duration: 0 });
            gsap.to("#box4", { y: "0%", duration: 0.5 });

            gsap.to("#box6", { x: "100%", opacity: 1, duration: 0 });
            gsap.to("#box6", { x: "0%", duration: 0.5 });
        },
    });
});

