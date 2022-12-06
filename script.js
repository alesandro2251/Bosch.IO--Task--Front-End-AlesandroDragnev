const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const modal4 = document.querySelector('.modal4');
const modal5 = document.querySelector('.modal5');
const modal6 = document.querySelector('.modal6');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.open-button');

for(let i = 0; i < btnsOpenModal.length; i++ ){
    if(i === 0){
        btnsOpenModal[i].addEventListener('click', function(){
            modal1.classList.remove('hidden');
        });
    }else if(i === 1){
        btnsOpenModal[i].addEventListener('click', function(){
            modal2.classList.remove('hidden');
        });
    }else if (i === 2){
        btnsOpenModal[i].addEventListener('click', function(){
            modal3.classList.remove('hidden');
        });
    }else if (i === 3){
        btnsOpenModal[i].addEventListener('click', function(){
            modal4.classList.remove('hidden');
        });
    }
    else if (i === 4){
        btnsOpenModal[i].addEventListener('click', function(){
            modal5.classList.remove('hidden');
        });
    }
    else{
        btnsOpenModal[i].addEventListener('click', function(){
            modal6.classList.remove('hidden');
        });
    }
}
for(let i = 0; i < btnCloseModal.length; i++ ){
    if(i === 0){
        btnCloseModal[i].addEventListener('click', function(){
            modal1.classList.add('hidden');
        });
    }else if(i === 1){
        btnCloseModal[i].addEventListener('click', function(){
            modal2.classList.add('hidden');
        });
    }else if(i === 2){
        btnCloseModal[i].addEventListener('click', function(){
            modal3.classList.add('hidden');
    });
    }else if(i === 3){
        btnCloseModal[i].addEventListener('click', function(){
            modal4.classList.add('hidden');
        });
    }else if(i === 4){
        btnCloseModal[i].addEventListener('click', function(){
            modal5.classList.add('hidden');
        });
    }else{
        btnCloseModal[i].addEventListener('click', function(){
            modal6.classList.add('hidden');
        });
    }
}