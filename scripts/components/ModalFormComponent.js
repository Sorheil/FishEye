class ModalFormComponent {
    constructor() {
        const modalFormCard = new ModalFormCard()
        this._HTML = modalFormCard.render()
        this.addEvent()
    }
    
    addEvent() {
        this.closeModal()
        this.submitData()
    }


    closeModal() {
        const $buttonCloseModal = this._HTML.querySelector('.close-popup')
        $buttonCloseModal.addEventListener("click", () => {
            this._HTML.style.display = 'none';
            this.closeBacdrop()
        })
    }


    submitData() {
        this._HTML.querySelector('.btn-submit').addEventListener('click', function (event) {
            event.preventDefault();
            const prename = document.getElementById('prename').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            console.log('First Name:', prename, '\nLast Name:', name, '\nEmail:', email, '\nMessage:', message);
        });
    }


    closeBacdrop() {
        const $bacdrop = document.querySelector('.backdrop');
        $bacdrop.style.display = 'none';
    }

}