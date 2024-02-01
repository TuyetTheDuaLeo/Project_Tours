function toggleContent() {
    var description = document.querySelector('.section-description');
    var currentElements = description.querySelectorAll('.item');
    var showMore = document.querySelector('.show-more');

    for (var i = 0; i < currentElements.length; i++) {
        if (currentElements[i].style.display === 'none') {
            currentElements[i].style.display = 'block';
            showMore.textContent = 'show less';
        } else {
            currentElements[i].style.display = 'none';
            showMore.textContent = 'show more';
        }
    }
}
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