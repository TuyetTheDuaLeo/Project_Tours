$('.row-destinations').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev custom-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next custom-next"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows:false,  
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
document.addEventListener('DOMContentLoaded', function() {
    var tabTitles = document.querySelectorAll('.holder-tab-title li');
    var panels = document.querySelectorAll('.holder-panels .row');
  
    // Gắn sự kiện click cho mỗi tab title
    tabTitles.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var selectedTabId = this.id;
        
        // Xóa class react-tabs__tab-panel--selected khỏi tất cả các tab titles
        tabTitles.forEach(function(tab) {
          tab.classList.remove('react-tabs__tab-panel--selected');
        });
  
        // Xóa class react-tabs__tab-panel--selected khỏi tất cả các panels
        panels.forEach(function(panel) {
          panel.classList.remove('react-tabs__tab-panel--selected');
        });
  
        // Thêm class react-tabs__tab-panel--selected vào tab và panel được click
        this.classList.add('react-tabs__tab-panel--selected');
        var selectedPanel = document.querySelector('.holder-panels .row#' + selectedTabId);
        if (selectedPanel) {
          selectedPanel.classList.add('react-tabs__tab-panel--selected');
        }
      });
    });
  });

  $('.swiper-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev custom-prev custom-prev-guide"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next custom-next custom-next-guide"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,   
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      }
    ]
  });


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