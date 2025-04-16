const selects = document.querySelectorAll('select');

selects.forEach(element => {
    NiceSelect.bind(element);
});

const typeFile = document.querySelectorAll('.custom-file')
typeFile.forEach(item => {
    console.log(item);
    item.addEventListener('change', ()=> {
        const fileName = item.closest('.control-box').querySelector('.file-name')
        fileName.innerHTML = item.files[0].name;
    })
})

flatpickr("input[type=date]", {
    enableTime: true,
    dateFormat: "d-m-y",
});

const toggle = document.querySelector(".toggle");
const termdate = document.querySelector(".term-date");
toggle.addEventListener('click', ()=>{
    if(termdate.classList.contains('v-h')){
        termdate.classList.remove('v-h');
    }
    else{
        termdate.classList.add('v-h');
    }
    console.log(termdate);
})


