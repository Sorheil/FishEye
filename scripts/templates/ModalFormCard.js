class ModalFormCard {
    constructor() {
    }

    render() {
        const $wrapper = document.createElement('form');
        $wrapper.classList.add('modal-form');
        $wrapper.setAttribute('role', 'dialog');
        $wrapper.setAttribute('aria-labelledby', 'modal-title');

        const content = `
              <h1 id="modal-title">Contactez-moi<br>Mimi Keel</h1>
              <div class="form-data">
                  <div class="form-prename">
                      <label for="prename">Prénom</label>
                      <input type="text" id="prename" name="prename" required aria-required="true">
                  </div>
                  <div class="form-name">
                      <label for="name">Nom</label>
                      <input type="text" id="name" name="name" required aria-required="true">
                  </div>
                  <div class="form-mail">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email" required aria-required="true">
                  </div>
                  <div class="form-message">
                      <label for="message">Votre message</label>
                      <textarea id="message" name="message" required aria-required="true"></textarea>
                  </div>
              </div>
              <button class="btn-submit" type="submit" aria-label="send">Envoyer</button>
              <button class="close-popup" type="button" aria-label="Close Contact form"><i class="fa-solid fa-xmark"></i></button>
          `;
          
        $wrapper.innerHTML = content;

        return $wrapper;
    }
}