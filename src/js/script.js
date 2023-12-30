$(document).ready(function(){
    $('ul.subheader__tabs').on('click', 'li:not(.subheader__tab_active)', function() {
        $(this) 
            .addClass('subheader__tab_active').siblings().removeClass('subheader__tab_active')
            .closest('div.container').find('div.subheader__content').removeClass('subheader__content_active').eq($(this).index()).addClass('subheader__content_active');
      });

      $('ul.subheader__tabs').on('click', 'li:not(.subheader__tab_block)', function () {
        $(this)
            .addClass('catalog__tab_block').siblings().removeClass('catalog__tab_block')
            .closest('div.container').find('div.subheader-item').removeClass('subheader-item_block').eq($(this).index()).addClass('subheader-item_block');
        });

        $('.subheader__wrapper_tabs').on('click', '.subheader__link_close', function () {
            $(this)
                .addClass('catalog-link_close').siblings().removeClass('catalog-link_close')
                .closest('div.container').find('div.subheader-item').removeClass('subheader-item_block').eq($(this).index()).addClass('subheader-item_block');
        });

      function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
               e.preventDefault();
               $('.subheader-item__content').eq(i).toggleClass('subheader-item__content_active');
               $('.subheader-item_list').eq(i).toggleClass('subheader-item_list_active');
            })
          });
      };
      toggleSlide('.subheader-item__link');
      toggleSlide('.subheader-item__back');

});

window.addEventListener('DOMContentLoaded', ()=> {
    const menu = document.querySelectorAll('.header__list'),
    menuItem = document.querySelectorAll('.header__list_item'),
    hamburger = document.querySelectorAll('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__list-wrapper_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__list_active');
        });
    })

  })