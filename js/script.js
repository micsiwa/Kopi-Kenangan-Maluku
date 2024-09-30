//toogle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika humberger menu di klik. () => {} fungsi panah pengembalian
document.querySelector('#humburger-menu').onclick = () => { 
    navbarNav.classList.toggle('active');
}

//klik di luar sidebar untuk menghilangkan nav
const humberger = document.querySelector('#humburger-menu');
document.addEventListener('click', function(e){
    if (!humberger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})