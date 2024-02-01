// Lấy danh sách tất cả các phần tử có lớp "show-more"
var showMoreElements = document.querySelectorAll(".show-more");

// Lặp qua từng phần tử "show-more" và thêm sự kiện click cho chúng
showMoreElements.forEach(function(element) {
  element.addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click

    // Tìm phần tử cha của "show-more" chứa thông tin chuyến đi
    var itineraryElement = element.closest(".itinerary");

    // Tìm phần tử con chứa nội dung chi tiết và nút "SHOW MORE"
    var contentTextElement = itineraryElement.querySelector(".content-text");
    var contentText1Element = itineraryElement.querySelector(".content-text-1");

    // Thay đổi nội dung của nút "SHOW MORE" thành "Show Less" và ngược lại
    if (element.textContent === "SHOW LESS") {
      element.textContent = "SHOW MORE";
    } else {
      element.textContent = "SHOW LESS";
    }

    // Kiểm tra xem phần tử đã có lớp "is-open" hay "is-off" chưa
    var isOpen = contentTextElement.classList.contains("is-open");
    var isOff = contentText1Element.classList.contains("is-off");

    // Thêm hoặc xóa lớp "is-open" và "is-off" tương ứng
    if (isOpen) {
      contentTextElement.classList.remove("is-open");
    } else {
      contentTextElement.classList.add("is-open");
    }

    if (isOff) {
      contentText1Element.classList.remove("is-off");
    } else {
      contentText1Element.classList.add("is-off");
    }
  });
});
// Lấy ra phần tử có class "text"
var textElement = document.querySelector('.text');

// Lấy ra phần tử có class ".holder-modal"
var modalElement = document.querySelector('.holder-modal');

// Thêm sự kiện "click" cho phần tử "text"
textElement.addEventListener('click', function() {
  // Thay đổi thuộc tính "display" của phần tử "modalElement"
  modalElement.style.display = 'block';
});


var closeElement = document.querySelector('.icon-close');

// Lấy ra phần tử có class ".holder-modal"
var modalElement = document.querySelector('.holder-modal');

// Thêm sự kiện "click" cho phần tử "closeElement"
closeElement.addEventListener('click', function() {
  // Thay đổi thuộc tính "display" của phần tử "modalElement"
  modalElement.style.display = 'none';
});



// Start reponsive header


// Lấy phần tử có class "btn-toggler-menu"
const btnTogglerMenu = document.querySelector('.btn-toggler-menu');

// Lấy phần tử có class "holder-offcanvas"
const holderOffcanvas = document.querySelector('.holder-offcanvas');

// Thêm sự kiện click cho phần tử "btn-toggler-menu"
btnTogglerMenu.addEventListener('click', function() {
  // Kiểm tra xem phần tử "holder-offcanvas" đã có class "current" chưa
  const hasCurrentClass = holderOffcanvas.classList.contains('current');

  if (!hasCurrentClass) {
    // Nếu không có class "current", thêm class "current" vào phần tử "holder-offcanvas"
    holderOffcanvas.classList.add('current');
  }
});

var offcanvas = document.querySelector('.offcanvas');
var offcanvasHolder = document.querySelector('.holder-offcanvas');

// Thêm sự kiện click vào vùng chứa offcanvas
offcanvasHolder.addEventListener('click', function(event) {
  // Kiểm tra xem vị trí click có nằm trong offcanvas hay không
  if (!offcanvas.contains(event.target)) {
    // Nếu click ngoài vùng offcanvas, xóa lớp "current"
    offcanvasHolder.classList.remove('current');
  }
});


// Lấy danh sách tất cả các phần mở rộng
    const accordions = document.querySelectorAll('.accordion');

    // Lặp qua từng phần mở rộng và thêm sự kiện click
    accordions.forEach(accordion => {
      accordion.addEventListener('click', () => {
        const content = accordion.querySelector('.content-accordion');
        const allContent = document.querySelectorAll('.content-accordion');

        // Kiểm tra xem phần mở rộng đã có lớp "show-content" chưa
        const isContentShown = content.classList.contains('show-content');

        // Nếu phần mở rộng đã có lớp "show-content", xóa nó
        if (isContentShown) {
          content.classList.remove('show-content');
        } else {
          // Nếu phần mở rộng chưa có lớp "show-content", thêm nó và xóa tất cả các phần mở rộng khác
          allContent.forEach(item=> {
            item.classList.remove('show-content');
          });
          content.classList.add('show-content');
        }
      });
    });

// End reponsive header