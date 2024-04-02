function moveToNextInput(input) {
            let nextInput = input.nextElementSibling;
            if (input.value && nextInput) {
                nextInput.focus();
            }
        }

        document.querySelectorAll('.code').forEach(input => {
            input.addEventListener('keydown', e => {
                if (e.key === 'Backspace' && !input.value) {
                    let prevInput = input.previousElementSibling;
                    if (prevInput) {
                        prevInput.focus();
                    }
                }
            });
        });
