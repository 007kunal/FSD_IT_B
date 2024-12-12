//DOM-->DOCUMENT OBJECT MODEL
//WE CAN SELECT HTML ELEMENTS


//SINGLE ELEMENT SELECTORS
//selecting single elemnt by uid
// const form=document.getElementById("my-form");
// console.log(form);

// console.log(document.querySelector('.container'));
//if there are many queries with the same name it will select the first one
// console.log(document.querySelector('h1'));

//MULTIPLE ELEMENT SELECTORS
// console.log(document.querySelectorAll('item'));

//node list is just and html collection
// we cannot use array methods on nodelist

// console.log(document.getElementsByTagName('li'));


//looping through each item
// const items=document.querySelectorAll('.item');
// items.forEach((item)=>console.log(item));

//maniputalting the dom
// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent='hello';
// ul.children[1].innerText='brad';
// ul.lastElementChild.innerHTML="<h4>hello</h4>";


// btn.style.background='red';
//adding events in buttons
// const btn=document.querySelector('.btn');
// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#ccc'
//     // console.log(e.target.className);
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>nigga</h1>';
    
// });
