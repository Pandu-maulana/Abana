/* =========================
MOBILE MENU
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if(hamburger && navLinks){

        hamburger.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

    /* =========================
    MEGA MENU
    ========================= */

    /* =========================
    EXPERTISE
    ========================= */

    const expertiseCards = document.querySelectorAll('.expertise-card');

    const expertiseObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add('show');

            }else{

                entry.target.classList.remove('show');

            }

        });

    },{
        threshold:0.2
    });

    expertiseCards.forEach(card=>{

        expertiseObserver.observe(card);

    });

    /* =========================
    WHY ABANA
    ========================= */

    const stats = document.querySelectorAll('.stat');

    const statObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add('show');

            }else{

                entry.target.classList.remove('show');

            }

        });

    },{
        threshold:0.2
    });

    stats.forEach(stat=>{

        statObserver.observe(stat);

    });

    /* =========================
    REGIONAL PRESENCE
    ========================= */

    const presenceItems = document.querySelectorAll('.presence-item');

    const presenceObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add('show');

            }else{

                entry.target.classList.remove('show');

            }

        });

    },{
        threshold:0.2
    });

    presenceItems.forEach(item=>{

        presenceObserver.observe(item);

    });

});
const mobileButtons = document.querySelectorAll('.mobile-toggle');

mobileButtons.forEach(button => {

    button.addEventListener('click', function(){

        this.nextElementSibling.classList.toggle('active');

    });

});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger && navLinks){

    hamburger.addEventListener("click", function(){

        navLinks.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

}