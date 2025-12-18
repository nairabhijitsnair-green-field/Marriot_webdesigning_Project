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