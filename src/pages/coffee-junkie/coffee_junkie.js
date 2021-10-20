// Hide Pre-loader
// All the Images scripts links have finished loading

// Window Event List

// Event Listeners
eventListeners();
function eventListeners() {
  const ui = new UI();
  // Pre-loader
  window.addEventListener('load', function () {
    ui.hidePreloader();
  });
  // Navigation Button
  document.querySelector('.navigation-button').addEventListener('click', function () {
    ui.showNavigation();
  });
  // Control the Video
  document.querySelector('.video-switch').addEventListener('click', function () {
    ui.videoControls();
  });
  // Submit the Form
  document.querySelector('.drink-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('.input-name').value;
    const lastName = document.querySelector('.input-lastname').value;
    const email = document.querySelector('.input-email').value;

    let value = ui.checkEmpty(name, lastName, email);

    if (value) {
      let customer = new Customer(name, lastName, email);
      console.log(customer);
      ui.addCustomer(customer);
      ui.showFeedback('customer added to the list', 'success');
      ui.clearFields();
    } else {
      ui.showFeedback('some Form values empty', 'error');
    }
  });
  // Display Modal
  const links = document.querySelectorAll('.work-item-icon');

  links.forEach(function (item) {
    item.addEventListener('click', function (event) {
      ui.showModal(event);
    });
  });
  // Hide Modal
  document.querySelector('.work-modal-close').addEventListener('click', function () {
    ui.closeModal();
  });
}
// Constructor Function
function UI() {}

// Hide Pre-loader
UI.prototype.hidePreloader = function () {
  document.querySelector('.pre-loader').style.display = 'none';
};
// Show Navigation
UI.prototype.showNavigation = function () {
  document.querySelector('.navigation').classList.toggle('navigation_show');
};

// Play/Pause Video
UI.prototype.videoControls = function () {
  let btn = document.querySelector('.video-switch-button');
  if (!btn.classList.contains('button-slide')) {
    btn.classList.add('button-slide');
    document.querySelector('.video-item').pause();
  } else {
    btn.classList.remove('button-slide');
    document.querySelector('.video-item').play();
  }
};
//  Check for Empty Values
UI.prototype.checkEmpty = function (name, lastName, email) {
  let result;

  if (name === '' || lastName === '' || email === '') {
    result = false;
  } else {
    result = true;
  }
  return result;
};

UI.prototype.showFeedback = function (text, type) {
  const feedback = document.querySelector('.drink-form-feedback');
  if (type === 'success') {
    feedback.classList.add('success');
    feedback.innerText = text;
    this.removeAlert('success');
  } else if (type === 'error') {
    feedback.classList.add('error');
    feedback.innerText = text;
    this.removeAlert('error');
  }
};

// Remove Alert
UI.prototype.removeAlert = function (type) {
  setTimeout(function () {
    document.querySelector('.drink-form-feedback').classList.remove(type);
  }, 3000);
};
// Add Customer
UI.prototype.addCustomer = function (customer) {
  const images = [1, 2, 3, 4, 5];
  let random = Math.floor(Math.random() * images.length);
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `<img src="content/person-${random}.jpeg" alt="person" class="person-thumbnail">
                    <h4 class="person-name">${customer.name}</h4>
                    <h4 class="person-lastname">${customer.lastName}</h4>`;
  document.querySelector('.drink-card-list').appendChild(div);
};
// Clear Fields
UI.prototype.clearFields = function () {
  document.querySelector('.input-name').value = '';
  document.querySelector('.input-lastname').value = '';
  document.querySelector('.input-email').value = '';
};
// Show Modal

UI.prototype.showModal = function (event) {
  event.preventDefault();
  if (event.target.parentElement.classList.contains('work-item-icon'));
  let id = event.target.parentElement.dataset.id;

  const modal = document.querySelector('.work-modal');
  const modalItem = document.querySelector('.work-modal-item');

  modal.classList.add('work-modal--show');
  modalItem.style.backgroundImage = `url(../../../content/images/coffee_junkie/work-${id}.jpeg)`;
};
// Hide Modal
UI.prototype.closeModal = function () {
  document.querySelector('.work-modal').classList.remove('work-modal--show');
};

// Customer Object Construction
function Customer(name, lastName, email) {
  (this.name = name), (this.lastName = lastName), (this.email = email);
}
