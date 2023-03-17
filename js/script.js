const inputText = document.querySelector('#txt');
        const myButton = document.querySelector('.btn-save');
        const div = document.querySelector('.content .link');
        myButton.addEventListener('click',(e)=>{
            if(inputText.value!="") {
                e.preventDefault();
                // create block
                const myDiv = document.createElement('h3');
                myDiv.innerHTML = inputText.value;
                div.appendChild(myDiv);

                // create span
                const mySpan = document.createElement('span');
                mySpan.innerHTML = '&times;';
                myDiv.appendChild(mySpan);
            }
            const close = document.querySelectorAll('span');
            for(let i=0; i<close.length; i++){
                close[i].addEventListener('click', ()=>{
                    close[i].parentElement.style.opacity=0;
                    setTimeout(()=>{
                    close[i].parentElement.style.display="none";
                    close[i].parentElement.remove();
                },500);
                })
            }
            inputText.value="";

        });