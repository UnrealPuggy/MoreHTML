// Create a class for the element
class Switch extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();      


      const label = document.createElement('label');
      label.setAttribute('class', 'switch');
      const checkbox = document.createElement('input');
      const span = document.createElement('span');
      span.setAttribute('class', 'slider round');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('checked', this.hasAttribute('checked'));
      label.appendChild(checkbox);
      label.appendChild(span);
      /*this.innerHTML = `<label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>`;*/
    this.setAttribute('checked', this.hasAttribute('checked'));
        if(checkbox.getAttribute('checked') == 'false') {
            checkbox.removeAttribute('checked');
        }
        this.appendChild(label);
        checkbox.onchange = function() {
            this.parentElement.parentElement.setAttribute('checked', checkbox.checked);
        }
    }
    get checked() {
        return this.getAttribute('checked');
    }
  }
  
  // Define the new element
  customElements.define("toggle-switch", Switch);
