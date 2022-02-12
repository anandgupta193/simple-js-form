(function() {
    window.addEventListener('load', function() {

        const form = document.getElementById('form')
        const username = document.getElementById('username')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const password2 = document.getElementById('password2')


        function showError(control, message) {
            const formControl = control.parentElement
            formControl.className = 'form-control error'
            const small = formControl.querySelector('small')
            small.innerText = message
        }

        function showSucess(control) {
            const formControl = control.parentElement
            formControl.className = 'form-control success'
        }

        function checkRequired (controlArr) {
            controlArr.forEach(function(control) {
                if (control.value.trim() === '') {
                    showError(control, 'Please enter any value')
                } else {
                    showSucess(control)
                }
            })
        }

        function checkLength(control, min, max) {
            if(control.value.length < min) {
                showError(control, 'Length should be minimum ' + min)
            } else if(control.value.length > max) {
                showError(control, 'Length should be maximum ' + max)
            } else {
                showSucess(control)
            }
        }

        function checkPasswordMatch(password, password2) {
            if (password.value !== password2.value) {
                showError(password2, 'Passwords do not match!!')
            }
        }

        function checkEmail(control) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(control.value.trim())) {
                showSucess(control)
            } else {
                showError(control, 'Email is not in proper format!!')
            }
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            checkRequired([
                username,
                email,
                password,
                password2
            ])

            checkLength(username, 3, 10)
            checkLength(password, 6, 15)
            checkLength(password2, 6, 15)
            checkEmail(email)
            checkPasswordMatch(password, password2)
        })

    })
})()

// js anmations we need to cover


// global scope
function outer () {
    // outer function scope
    let count = 0
    function inner() {
        // inner function scope
        count++
    }
    inner()
}

// Execution Context
console.log(count) // undefined or it will error