// Lấy tất cả các tab-title
var tabTitles = document.querySelectorAll('.tab-title');

// Lặp qua từng tab-title
tabTitles.forEach(function(tabTitle) {
  // Gán sự kiện click cho mỗi tab-title
  tabTitle.addEventListener('click', function(event) {
    event.preventDefault(); 

    var selectedTab = this.getAttribute('data-tab'); 

    // Lấy tất cả các tab-title, holder-heading và holder-item
    var allTabTitles = document.querySelectorAll('.tab-title');
    var allHolderHeadings = document.querySelectorAll('.holder-heading');
    var allHolderItems = document.querySelectorAll('.holder-item');

    // Xóa lớp 'current' khỏi tất cả các tab-title, holder-heading và holder-item
    allTabTitles.forEach(function(tab) {
      tab.classList.remove('current');
    });

    allHolderHeadings.forEach(function(heading) {
      heading.classList.remove('current');
    });

    allHolderItems.forEach(function(item) {
      item.classList.remove('current');
    });

    // Thêm lớp 'current' vào tab-title, holder-heading và holder-item tương ứng
    this.classList.add('current');
    var selectedHolderHeading = document.querySelector('.holder-heading.' + selectedTab);
    if (selectedHolderHeading) {
      selectedHolderHeading.classList.add('current');
    }
    var selectedHolderItem = document.querySelector('.holder-item.' + selectedTab);
    if (selectedHolderItem) {
      selectedHolderItem.classList.add('current');
    }
  });
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