document.querySelectorAll('.edube-btn-border').forEach(function (button) {
    button.addEventListener('click', function () {
        const target = this.getAttribute('data-bs-target');
        const others = document.querySelectorAll('.collapse.show');
        
        others.forEach(function (element) {
            if (element.id !== target.slice(1)) {
                element.classList.remove('show');
            }
        });
        
        const targetElement = document.querySelector(target);
        targetElement.classList.add('show');
        
        // Adiciona a classe show ao botão atual e remove dos outros
        document.querySelectorAll('.edube-btn-border').forEach(function (btn) {
            btn.classList.remove('show');
        });
        this.classList.add('show');
    });
});
