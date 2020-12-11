$('.btn.edit-address').click(function() {
    $(this).hide();
    $(this).parents('td').siblings('.address-edit').show();
    $(this).siblings('.btn.edit-address-cancel').show();
    $(this).siblings('.btn.edit-address-submit').show();
    $(this).siblings('.btn.delete-address').hide();
    $(this).parents('td').siblings('.address-record').hide()
  });
  
  $('.btn.edit-address-submit').click(function() {
    $(this).hide();
    $(this).parents('td').siblings('.address-edit').hide();
    $(this).siblings('.btn.edit-address-cancel').hide();
    $(this).siblings('.btn.edit-address').show();
    $(this).siblings('.btn.delete-address').show();
    $(this).parents('td').siblings('.address-record').show()
  });
  
  $('.btn.edit-address-cancel').click(function() {
    $(this).hide();
    $(this).parents('td').siblings('.address-edit').hide();
    $(this).siblings('.btn.edit-address-submit').hide();
    $(this).siblings('.btn.edit-address').show();
    $(this).siblings('.btn.delete-address').show();
    $(this).parents('td').siblings('.address-record').show()
  });
  
  $('.carousel').carousel()
  
  $('.single-product-images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data('thumb');
      return `<a><img class="img-fluid" src=${thumb} /></a>`;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
$(document).ready(()=>{
  const staticUrl = "https://v3-static.supadu.io/dev/product/9780060577315.json";
    $.getJSON(staticUrl, (data) => {
      data.image = data.image.replace('x145', 'x400');
      data.canadaprice = data.prices[0].amount;
      data.americaprice = data.prices[1].amount;
      window.product = data;
      const el = $('#product');
      console.log(data.prices[0].amount);
      rivets.bind(el, {
          product: data
      });
    });
});
