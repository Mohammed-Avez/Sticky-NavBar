const nav = document.querySelector('#main');
const topOfnav = nav.offsetTop
console.log(nav);
console.log(nav.offsetHeight);



function navData(e){
    console.log(nav.offsetTop, window.scrollY);
    if(window.scrollY >= topOfnav){
        document.body.classList.add('fixed-nav');
    }
    else{
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', navData)


