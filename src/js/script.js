"use strict";

// new error messages (DYNAMIC)


document.addEventListener("DOMContentLoaded", () => {

    // modal
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal-backdrop'),
          modalCloseBtn = document.querySelectorAll('[data-close]'),
         modalContent = document.querySelector('.modal-content'),
        modalSuccess = document.querySelector('.modal-content_success');



    function openModal() {
        modalTrigger.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.remove('hidden');
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';

            });
        })
    }

    function closeModal () {
            modal.classList.add('hidden');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            modalContent.classList.remove('hide');
            modalSuccess.classList.add('hide');
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    })

    modalCloseBtn.forEach(item => {
        item.addEventListener('click', closeModal);
    })

    openModal();
    closeModal();


    // forms



    function formModal (i) {
        const successBtn = document.querySelector('.btn-success');
        const errorMsg = document.querySelectorAll('.error-message');
        let inputs = document.querySelectorAll('[data-input]');
        const formBtn = document.querySelector('#buttonForm');

        document.querySelector('[data-form]').addEventListener('submit', function (e) {
            e.preventDefault();

            let form = e.target;

            form.classList.add('submitted');

            if (form.checkValidity()) {
                form.reset();
                form.classList.remove('submitted');
                modalContent.classList.add('hide');
                modalSuccess.classList.remove('hide');
                successBtn.addEventListener('click', () => {
                    closeModal();
                    location.reload();
                })
                formBtn.disabled = false;
            } else {
                formBtn.disabled = true;
            }

            inputs.forEach((input, i) => {
                if (input.value === '') {
                    try {
                        errorMsg[i].innerHTML = `This field is required.`;
                        errorMsg[i].classList.remove('hide');
                        errorMsg[3].innerHTML = `Please fill in all required fields`;
                        errorMsg[3].classList.remove('hide');
                    } catch (e) {
                        console.log(e);
                    }
                }

                inputs[0].addEventListener('input', function () {
                    if (inputs[0].value.length < 3) {
                        console.log(inputs[0].value.length)
                        errorMsg[0].innerHTML = `Error`;
                        errorMsg[0].classList.remove('hide')
                    } else {
                        errorMsg[0].classList.add('hide')
                    }
                })
                inputs[1].addEventListener('input', function () {
                    if (inputs[1].checkValidity()) {
                        errorMsg[1].classList.add('hide')
                    } else {
                        errorMsg[1].innerHTML = `Error`;
                        errorMsg[1].classList.remove('hide')
                    }
                })
            })

        })

        function checkInputs () {
            let inputs = document.querySelectorAll('[data-input]');
            const formBtn = document.querySelector('#buttonForm');

            formBtn.disabled = true;

            inputs.forEach((item, i) => {
                item.addEventListener('input', function () {
                    if (item.length !== 0) {
                        formBtn.disabled = false;
                    }
                    if (document.querySelector('#phone-mask').value !== '') {
                        const icon = document.querySelector('[data-icon]');
                        icon.src = `icons/russiaIcon.svg`;
                    }
                })
            })
        }
        checkInputs();
    }

    formModal();

    // cookie
    function cookie () {
        const cookieBtns = document.querySelectorAll('.cookie-btn');
        const cookieWindow = document.querySelector('.cookie');

        cookieBtns.forEach(button => {
           button.addEventListener('click', () => {
               cookieWindow.classList.add('hide');
           })
        });

    }
    cookie()


    // scroll nav menu
    function scrollNavbar () {
        window.addEventListener('scroll', () => {
           let navbar = document.querySelector('#scroll')
           let activeClass = `navbar_scrolled`;

           if (pageYOffset > 400) {
               navbar.classList.add(activeClass)
           } else {
               navbar.classList.remove(activeClass);
           }
        });
    }
    scrollNavbar();

    // importfrom imuskjs
    IMask(
        document.getElementById('phone-mask'),
        {
            mask: '+{7}(000)000-00-00'
        }
    )

    // burger btn
    function burger () {
        const burgerNav = document.querySelector('.burger-menu_active');
        const burgerButton = document.querySelectorAll('.burger-btn');
        const closeBurgerMenu = document.querySelector('[data-burger]');
        const burgerContact = document.querySelector('[data-burgerContact]');

        console.log(burgerButton);
        burgerButton.forEach(item => {
            item.addEventListener('click', () => {
                burgerNav.classList.remove('hide');
            })
        })

        closeBurgerMenu.addEventListener('click', () => {
            burgerNav.classList.add('hide');

        })

        burgerContact.addEventListener('click', () => {
            burgerNav.classList.add('hide');
            modal.classList.remove('hidden');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        })
    }

    burger();

});