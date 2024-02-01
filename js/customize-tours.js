$(document).ready(function() {
    // Gán sự kiện click cho phần tử <span> có lớp CSS "far fa-calendar-alt"
    $(".far.fa-calendar-alt").click(function() {
      // Hiển thị lịch chọn ngày tháng năm
      $(".react-datepicker-wrapper").datepicker({
        onSelect: function(dateText, inst) {
          // Gán ngày tháng năm đã chọn vào phần tử <input> có lớp CSS "react-datepicker__input-container"
          $(".react-datepicker__input-container input").val(dateText);
        }
      });
    });
  });
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
