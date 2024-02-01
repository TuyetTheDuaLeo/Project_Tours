function toggleDropdown(dropdown) {
    var isOpen = dropdown.classList.contains('is-open');

    var dropdowns = document.getElementsByClassName('Dropdown-root');
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('is-open');
    }

    if (!isOpen) {
        dropdown.classList.add('is-open');
    }
}

// Start reponsive header


const btnTogglerMenu = document.querySelector('.btn-toggler-menu');

const holderOffcanvas = document.querySelector('.holder-offcanvas');

btnTogglerMenu.addEventListener('click', function() {
  const hasCurrentClass = holderOffcanvas.classList.contains('current');

  if (!hasCurrentClass) {
    holderOffcanvas.classList.add('current');
  }
});

var offcanvas = document.querySelector('.offcanvas');
var offcanvasHolder = document.querySelector('.holder-offcanvas');

offcanvasHolder.addEventListener('click', function(event) {
  if (!offcanvas.contains(event.target)) {
    offcanvasHolder.classList.remove('current');
  }
});


    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
      accordion.addEventListener('click', () => {
        const content = accordion.querySelector('.content-accordion');
        const allContent = document.querySelectorAll('.content-accordion');

        const isContentShown = content.classList.contains('show-content');

        if (isContentShown) {
          content.classList.remove('show-content');
        } else {
          allContent.forEach(item=> {
            item.classList.remove('show-content');
          });
          content.classList.add('show-content');
        }
      });
    });

// End reponsive header

var mobileFilterButton = document.querySelector('.mobile-filter');

var tourFilterElement = document.querySelector('.tour-filter');

mobileFilterButton.addEventListener('click', function() {
  tourFilterElement.classList.add('open');
});

var iconCloseButton = document.querySelector('.icon-close');

var tourFilterElement = document.querySelector('.tour-filter');

iconCloseButton.addEventListener('click', function() {
  tourFilterElement.classList.remove('open');
});


var dropdownRoots = document.getElementsByClassName("Dropdown-root");

for (var i = 0; i < dropdownRoots.length; i++) {
    var dropdownControl = dropdownRoots[i].querySelector(".Dropdown-control");
    var dropdownMenu = dropdownRoots[i].querySelector(".Dropdown-menu");

    var dropdownOptions = dropdownMenu.getElementsByClassName("Dropdown-option");

    for (var j = 0; j < dropdownOptions.length; j++) {
        dropdownOptions[j].addEventListener("click", function() {
            var selectedOption = this.innerHTML;
            var dropdownPlaceholder = this.closest(".Dropdown-root").querySelector(".Dropdown-placeholder");
            dropdownPlaceholder.innerHTML = selectedOption;
        });
    }
}