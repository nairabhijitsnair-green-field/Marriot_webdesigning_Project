const linkDiv=document.querySelectorAll(".linkTo-div");
const contents=document.querySelectorAll(".content-fixed-div");

linkDiv.forEach(link =>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();

        const targetId=link.getAttribute('data-target');
        const targetcontent= document.getElementById(targetId);

        if(!targetcontent) return;

        contents.forEach(content =>{
            content.classList.remove('active');
        });

            targetcontent.classList.add('active')
    });
})

//island sticky
const mainIsland = document.querySelector('.main-island');

const stickyPoint = 120; 

window.addEventListener('scroll', function() {
    if (window.scrollY >= stickyPoint) {
        mainIsland.classList.add('sticky');
        mainIsland.classList.remove('position-absolute');
    } else {
        mainIsland.classList.remove('sticky');
        mainIsland.classList.add('position-absolute');
    }
});