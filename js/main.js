"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const tabsContainer = document.querySelector(".service__tabs");
  const tabContents = document.querySelectorAll(".service__tabs-item");

  tabsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("service__tabs-title")) {
      const tabId = event.target.getAttribute("data-tab");

      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      const activeTab = document.getElementById(tabId);
      activeTab.classList.add("active");

      tabsContainer.querySelectorAll(".service__tabs-title").forEach((tab) => {
        tab.classList.remove("active");
      });

      event.target.classList.add("active");
    }
  });
});

const img = {
  "Graphic Design": ["./images/work-7.jpg", "./images/work-9.jpg", "./images/work-3.jpg"],
  "Web Design": ["./images/work-8.jpg", "./images/work-4.jpg", "./images/work-12.jpg"],
  "Landing Pages": [
    "./images/work-1.jpg",
    "./images/work-5.jpg",
    "./images/work-6.jpg",
    "./images/work-11.jpg",
  ],
  "Wordpress": ["./images/work-2.jpg", "./images/work-10.jpg"],
};

const allImages = [].concat(...Object.values(img));

const workWrapper = document.querySelector(".work__wrapper");
const tabWrap = document.querySelector(".work__tabs");

tabWrap.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("work__tabs-item")) {
    const activeFiltr = ev.target.getAttribute("data-tab");

    document
      .querySelector(".work__tabs-item-active")
      .classList.remove("work__tabs-item-active");

    ev.target.classList.add("work__tabs-item-active");

    if (activeFiltr === "All") {
      // Показати всі зображення, якщо обрано "All"
      displayImages(allImages, activeFiltr);
    } else {
      // Показати зображення обраної категорії
      displayImages(img[activeFiltr], activeFiltr);
    }
  }
});

function displayImages(images, categoryTitle) {
  workWrapper.innerHTML = "";
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.classList.add("work__img");
    imgElement.src = image;
    imgElement.alt = "work__img";
    const wrapperItem = document.createElement("div");
    wrapperItem.classList.add("work__wrapper-item");
    wrapperItem.appendChild(imgElement);
    workWrapper.appendChild(wrapperItem);
    wrapperItem.insertAdjacentHTML(
      "afterbegin",
      `<div class="hide-block">
    <div class="hide-inner">
    <div class="hide-wrap1">
    <svg width="42" height="42" viewBox="0 0 15 15"  xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z"/>
    </svg>
</div>
    <div class="hide-wrap2">
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#dadada}</style><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 160H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"/></svg>
    </div>
    </div>
    <p class="work__wrapper-item-title">creative design</p>
    <p class="work__wrapper-item-text">${categoryTitle}</p>
</div>`
    );
  });
}

displayImages(allImages, "All");

const arrOfImages = [
  "./images/work-18.jpg",
  "https://pbs.twimg.com/media/FNDUA-hWQAABjP-?format=jpg&name=large",
  "./images/work-19.jpg",
  "./images/work-16.jpg",
  "./images/work-15.jpg",
  "./images/work-14.jpg",
  "https://img.wallpapic.com.ua/i4288-843-137/medium/koti-emocii-tvarini-amerikanska-zhorstkoshersta-kishka-shpalery.jpg",
  "./images/work-17.jpg",
  "./images/work-20.jpg",
  "https://oir.mobi/uploads/posts/2020-02/1582080286_3-p-derek-zulander-3.jpg",
  "https://cdn.fishki.net/upload/post/201402/11/1243557/8ce937ea095ba307dce52022a8281842.jpg",
  "https://th.bing.com/th/id/OIP.rE5x73mGnz3x2yiX0iWdMwHaE7?pid=ImgDet&rs=1",
];

const btnLoadMore = document.getElementById("load-more-btn");
const imgContainer = document.querySelector(".container-btn");
const loader = document.querySelector(".loader");
let isLoading = false;
let counter = 0;

btnLoadMore.addEventListener("click", async (ev) => {
  // Показуємо анімацію завантаження
  isLoading = true;
  if (isLoading === true) {
    loader.style.display = "block";
    btnLoadMore.style.display = "none";
  }

  // Імітуємо затримку для емуляції завантаження з сервера (наприклад, 2 секунди)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Додавання картинок після завантаження
  const fragment = document.createDocumentFragment();
  arrOfImages.forEach((src) => {
    const img = createImageTemplate(src);
    fragment.append(img);
  });

  imgContainer.append(fragment);

  // Ховаємо анімацію після завантаження картинок
  isLoading = false;
  counter += 1;
  if (isLoading === false) {
    loader.style.display = "none";
    btnLoadMore.style.display = "block";
  }
  checkCounter();
});

function createImageTemplate(src) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("width", "285");
  img.setAttribute("height", "206");
  img.setAttribute("alt", "data-img");
  img.classList.add("some-class");

  return img;
}

function checkCounter() {
  if (counter === 2) {
    btnLoadMore.style.display = "none";
  }
  return;
}



$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  focusOnSelect: true,
  centerMode: true,
  variableWidth: true,
});

function createMasonryElement(counter) {
  const wrapperOfElement = document.createElement("div");

  if (counter % 3 == 0) {
    wrapperOfElement.classList.add(
      "masonry-item",
      "masonry-item--width4",
      "masonary-item-properties"
    );
  } else {
    wrapperOfElement.classList.add(
      "masonry-item",
      "masonry-item--width3",
      "masonary-item-properties"
    );
  }
  wrapperOfElement.append(imageForMasonry(counter));
  wrapperOfElement.append(createWrapperForLinks());

  return wrapperOfElement;
}

function imageForMasonry(elementNumber) {
  const imageForAdding = document.createElement("img");
  imageForAdding.src = `./images/best-images/best-images${elementNumber}.png`;
  imageForAdding.alt = `best-images${elementNumber}`;
  return imageForAdding;
}

function createWrapperForLinks() {
  const wrapperForLinks = document.createElement("div");
  wrapperForLinks.classList.add("wrapper-for-gallery");
  wrapperForLinks.append(createLinkInMasonryElement("search"));
  wrapperForLinks.append(createLinkInMasonryElement("zoom"));
  return wrapperForLinks;
}

function createLinkInMasonryElement(param) {
  const linkSearch = document.createElement("a");
  if (param === "search") {
    linkSearch.classList.add(
      "wrapper-for-gallery__search",
      "wrapper-for-gallery__size",
      "wrapper-for-gallery__background-color"
    );
    linkSearch.href = "#";
  } else {
    linkSearch.classList.add(
      "wrapper-for-gallery__zoom",
      "wrapper-for-gallery__size",
      "wrapper-for-gallery__background-color"
    );
    linkSearch.href = "#";
  }
  linkSearch.append(createLinkWrapper(param));
  return linkSearch;
}

function createLinkWrapper(param) {
  if (param === "search") {
    const searchIcon = document.querySelector('#search-icon');
    const clonedSearchIcon = searchIcon.cloneNode(true); // true означає глибоке клонування
    return clonedSearchIcon;
  }
  if (param === "zoom") {
    const zoomIcon = document.querySelector('#zoom-icon');
    const clonedZoomIcon = zoomIcon.cloneNode(true);
    return clonedZoomIcon;
  }
}

$(document).ready(function () {
  var $grid = $(".masonry-container").imagesLoaded(function () {
    $grid.masonry({
      itemSelector: ".masonry-item",
      columnWidth: 10,
      gutter: 10,
      percentPosition: true,
    });
  });

  $(".button_adding-masonry-item").on("click", function (event) {
    let counter = event.currentTarget.dataset.click;
    counter++;
    event.currentTarget.dataset.click = counter;

    if (event.currentTarget.dataset.click <= 9) {
      var btn = $(this);
      $(btn).buttonLoader("start");
      setTimeout(function () {
        $(btn).buttonLoader("stop");
      }, 1000);
      setTimeout(() => {
        $grid.append(createMasonryElement(counter));
        $grid.masonry("reloadItems");
        $grid.masonry("layout");
      }, 1100);
    }
  });
});

(function ($) {
  $.fn.buttonLoader = function (action) {
    var self = $(this);
    if (action == "start") {
      if ($(self).attr("disabled") == "disabled") {
        e.preventDefault();
      }
      $(".has-spinner").attr("disabled", "disabled");
      $(self).attr("data-btn-text", $(self).text());
      $(self).html(
        '<span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>Loading'
      );
      $(self).addClass("button_adding-masonry-item_change-properties");
      $(self).addClass("active");
      $(self).removeClass("button__add-item");
    }
    if (action == "stop") {
      $(self).html($(self).attr("data-btn-text"));
      $(self).removeClass("active");
      $(".has-spinner").removeAttr("disabled");
      $(self).addClass("button__add-item");
      $(self).removeClass("button_adding-masonry-item_change-properties");
    }
  };
})(jQuery);
