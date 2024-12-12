const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('#msg');
const user=document.querySelector('#users');
myForm.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    // console.log(nameInput.value);
    //form validation
    if(nameInput.value===''|| emailinput.value===''){
        // alert('please enter something');
        msg.innerHTML='please enter all fields'
        msg.style.color='red';
    }
    else{
        console.log('success');
    }
}