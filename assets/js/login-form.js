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

const btn_i = document.querySelector('.help--admin i');

const ul_list = document.querySelector('.firstul');

const btn_about = document.getElementById('about');

const adbody = document.querySelector('.ad--body');

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
 


btn_i.addEventListener('click', function(){

    if(ul_list.style.visibility == 'hidden'){ 
        ul_list.style.visibility = 'visible';
    }else{
        ul_list.style.visibility = 'hidden';
    }
   
});


btn_about.addEventListener('click',function(){
    if(adel.style.visibility == 'hidden'){
        adel.style.visibility = 'visible';

        adbody.innerHTML = `
        <small>Hi! I'm Sina — a web designer and front-end developer passionate about creating modern and engaging user experiences. I'm constantly learning and love sharing what I discover along the way. My focus is on building websites that are both visually appealing and functional. On this site, you’ll find 
        my portfolio, skills, and the journey I'm on as a developer.</small>
  <br>

  <small style="color: black; font-family: inherit;">Login form made by :<a href=""></a> sinaJD</small>
`;
    }else{
       adel.style.visibility = 'hidden';
       adbody.innerHTML=`
        <h1>This admin panel made by:</h1>
      <br>
      <small><a href="https://github.com/PlainAdmin/plain-free-bootstrap-admin-template?tab=readme-ov-file#">
        https://github.com/PlainAdmin/plain-free-bootstrap-admin-template?tab=readme-ov-file#
      </a></small>
      <br>
      <small style="color: black; font-family: inherit;">Login form made by :<a href=""></a> sinaJD</small>
       `
    }
});
