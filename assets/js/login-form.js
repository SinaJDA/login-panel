const pass_word = '125wxyz';
const name_adMIn = 'Admin';

const form_loding =document.querySelector('.form--login');

const adminEl = document.querySelector('.name-admin input');

const passel = document.querySelector('.pasword-admin input');

const inter_btn = document.querySelector('.btn--login');

const back_login = document.querySelector('.background--login');

const formel = document.querySelector('.form--login form');

const show_offbtn = document.querySelector('.show-off');

const show_offel = document.querySelector('.eye');

// link ad show
const adel = document.querySelector('.ad')

document.body.classList.add('over');


inter_btn.addEventListener('click', function(e){

    e.preventDefault();

    const valueadminEl = adminEl.value;

    const valuepassEl = passel.value;

    if( valueadminEl === name_adMIn && valuepassEl === pass_word){
        document.body.classList.remove('over');
        form_loding.classList.add('correct');
        setTimeout(function(){
            back_login.remove();
            adel.style.visibility = 'visible';
        },1500);
    }
    else{
        form_loding.classList.add('error');
        setTimeout(function(){
            form_loding.classList.remove('error');
        },1000);
    }
});


formel.addEventListener('submit', function(e){

    e.preventDefault();

    const valueadminEl = adminEl.value;

    const valuepassEl = passel.value;

    if( valueadminEl === name_adMIn && valuepassEl === pass_word){
        document.body.classList.remove('over');
        form_loding.classList.add('correct');
        setTimeout(function(){
            back_login.remove();
            form_loding.classList.remove('correct');
            adel.style.visibility = 'visible';
        },1000);
    }
    else{
        form_loding.classList.add('error');
        setTimeout(function(){
            form_loding.classList.remove('error');
        },1000);
    }
    
});

show_offbtn.addEventListener('mousedown', function(e){
    e.preventDefault();
    if(passel.type === 'password'){
        passel.type = 'text';
        show_offel.classList.add('bx-eye');
    }else{
        passel.type = 'password';
        show_offel.classList.remove('bx-eye');
    }
});
 