window.addEventListener('DOMContentLoaded', () => {

'use sctrict';

const btns = document.querySelectorAll('.counterBtn');
     
// Лічильник

    btns.forEach(btn=> {
        btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('#number');
            const currentValue = +inp.value;
            let newValue;
            if (direction === 'plus') {
                newValue = currentValue + 1;
            } else {
                newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
            }
            
            inp.value = newValue;
        });
    });


//Показ календаря

    const calendar = document.querySelector('.hide'),
          calendar2 = document.querySelector('.hide2'),
          calendarBtn = document.querySelector('.calendarBtn'),
          calendarBtn2 = document.querySelector('.calendarBtn2');

        function openDate () {
            calendarBtn.addEventListener('click', ()=>{
                calendar.classList.toggle('show');
            });
        }

        openDate();

        function openDate2 () {
            calendarBtn2.addEventListener('click', ()=>{
                calendar2.classList.toggle('show');
            });
        }

        openDate2();
});