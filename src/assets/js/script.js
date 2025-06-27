/*----------------------------
#  Header
-------------------------------*/
// $(window).scroll(function() {
//     var header = $('header');
//     var offset = header.offset().top;
//     var scroll = $(window).scrollTop();
//     if(scroll >= offset) {
//         header.addClass('sticky-top');
//         header.find('.navbar').css({
//             'padding-top': '8px',
//             'padding-bottom': '8px'
//         });
//         header.find('.website-logo .nav-item .nav-link').css({
//             'padding' : '0.5rem'
//         });
//     } else {
//         header.removeClass('sticky-top');
//         header.find('.navbar').css({
//             'padding-top': '30px',
//             'padding-bottom': '30px'
//         });
//         header.find('.website-logo .nav-item .nav-link').css({
//             'padding' : '0.5rem 1rem'
//         });
//     }
// });
/*----------------------------
#  sidePanelClose
-------------------------------*/
$('.side-panel-close').click(function() {
    var eleRight = $('.side-btns').css('right');

    if(eleRight == '0px') {
        $('.side-btns').css({
            'right' : '-100px'
        })
        $(this).css({
            'box-shadow' : '0 0 0 #fff,-1px 0 4px 1px #ccc'
        })
        $(this).html('<i class="fas fa-caret-left"></i>');
    } else {
        $('.side-btns').css({
            'right' : '0px'
        })
        $(this).css({
            'box-shadow' : '0 5px 0 #fff,-1px 0 4px 1px #ccc'
        })
        $(this).html('<i class="fas fa-caret-right"></i>');
    }
});

/**------------------------Show & Hide Side Menu------------------------------------ */
$('.menu-btn').click(function() {
  var eleMarginLeft = $('.side-navbar').css('margin-left');
  var windowSize = $(window).width();

  if(eleMarginLeft == '-200px') {
      $('.side-navbar').css({'margin-left':'0px'});
      // $('.menu-btn').html('<i class="icofont-arrow-left"></i>');
      $('.bars').addClass('arrow');
      eleMarginLeft = '0px';
  } else {
      $('.side-navbar').css({'margin-left':'-200px'});
      $('.bars').removeClass('arrow');
      eleMarginLeft = '-200px';
  }
  if(windowSize > 575) {
      if(eleMarginLeft == '0px') {
          $('.breadcrumb-wrapper').css({'width':'calc( 100% - 200px )','left':'200px'});
          $('.section').css({'width':'calc( 100% - 200px )','margin-left':'200px'});
      } else {
          $('.breadcrumb-wrapper').css({'width':'100%','left':'0px'});
          $('.section').css({'width':'100%','margin-left':'0px'});
      }
  }
});
/**------------------------Show & Hide Sub-Menu Items----------------------------- */
$('.side-sub-menu').click(function() {
  $('.side-navbar-sub-menu').not($(this).find('.side-navbar-sub-menu')).slideUp('fast');
  $('.drop-icon').not($(this).find('.drop-icon')).removeClass('rotate-arrow');
  $(this).find('.side-navbar-sub-menu').slideToggle('fast');
  $(this).find('.drop-icon').eq(0).toggleClass('rotate-arrow');
});

$('.side-sub-report-menu').click(function(e) {
  e.stopPropagation();

  $(this).find('.side-navbar-report-menu').not($(this).find('.side-navbar-report-menu')).slideUp('fast');
  $(this).find('.drop-icon').not($(this).find('.drop-icon')).removeClass('rotate-arrow');
  $(this).find('.side-navbar-report-menu').slideToggle('fast');
  $(this).find('.drop-icon').eq(0).toggleClass('rotate-arrow');
});
/**------------------------------Form Validation------------------------------ */
//-------Reset All Validations
function reset_validation() {
  $('.is-invalid').removeClass('is-invalid');
  $('.invalid-feedback').remove();
}
//-------Display Validations
function display_validation(data) {

  $.each(data, function(index,value){

      $('[name="'+index+'"]').addClass('is-invalid');
      $('[name="'+index+'"]').parent().append('<div class="invalid-feedback">'+value+'</div>');
  });
}
/**------------------------------For Showing Notification------------------------------ */
function message(type,msg) {

  $('.notificaiton-bar').html('');

  var alert_class = '';
  if(type == 'error') {
      alert_class = 'alert-danger';
  }
  if(type == 'success') {
      alert_class = 'alert-success';
  }
  if(type == 'warning') {
      alert_class = 'alert-warning';
  }

  var element = '<div class="alert ' + alert_class + ' alert-dismissible fade show" role="alert">'+
                  msg+
                  '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+
              '</div>';

  $('.notificaiton-bar').html(element);
  $('.notificaiton-bar .alert').delay(2000).fadeOut(800);
}

function sticky_message(type,msg) {

  $('.notificaiton-bar').html('');

  var alert_class = '';
  if(type == 'error') {
      alert_class = 'alert-danger';
  }
  if(type == 'success') {
      alert_class = 'alert-success';
  }
  if(type == 'warning') {
      alert_class = 'alert-warning';
  }

  var element = '<div class="alert ' + alert_class + ' alert-dismissible fade show" role="alert">'+
                  msg+
                  '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+
              '</div>';

  $('.notificaiton-bar').html(element);
}

/**------------------------------Pre Loader------------------------------ */
function preloader(action,id = null) {
  // if(action == 'start') {
  //     var loader = '<div id="preloader" class="">'+
  //                     '<img src="<?=base_url('assets/images/preloader/loder2.gif')?>" class="" alt="">'+
  //                     '<div class="loading-text">Please Wait</div>'+
  //                 '</div>';
  //     $(id).addClass('d-none');
  //     $(id).after(loader);
  // }
  // if(action == 'end') {
  //     $(id).removeClass('d-none');
  //     $('#preloader').remove();
  // }

  if(action == 'start') {
      var loader = '<div id="preloader" class="">'+
                      '<div class="preloader-body">'+
                          // '<img src="<?=base_url('assets/images/preloader/loder2.gif')?>" class="" alt="">'+
                          '<div class="loading-text">Please Wait</div>'+
                      '</div>'+
                  '</div>';
      $('body').append(loader);
  }
  if(action == 'end') {
      $('#preloader').remove();
  }
}

/**----------------------------Filter----------------------------------- */
function filter(id,filterfor) {

  var data = $(filterfor).find('th');
  // $(filterfor).attr('id','sorting_data');

  var ele = '<div class="filter-wrapper">';
  ele += '<button type="button" class="btn btn-outline-auto btn-sm filter-btn"><i class="icofont-filter"></i></button>';
  ele += '<div class="filter-box">'+
              '<div class="mb-2"><select name="by_col" data-target="'+filterfor+'" class="form-select">'+
                  '<option value="0">By Column</option>';
              data.each(function(index) {
                  ele += '<option value="'+index+'">'+$(this).text()+'</option>';
              });
      ele += '</select></div>'+
              '<div class="input-group mb-3">'+
                  '<select name="by_order" class="form-select">'+
                      '<option value="0">Ascending</option>'+
                      '<option value="1">Descending</option>'+
                  '</select>'+
                  '<button class="btn btn-auto sort_by" type="button">Sort</button>'+
              '</div>'+
              '<div class="mb-2"><input type="text" name="find_data" data-target="'+filterfor+'" class="form-control" placeholder="Find Data"/></div>'+
          '</div>';
  ele += '</div>';

  $(id).append(ele);
}
$(document).on('click','.filter-btn',function() {
  $('.filter-box').fadeToggle('fast');
});
// $(document).on('click',function() {
//     $('.filter-box').fadeOut('fast');
// });

//---Sorting Table
// function sortTable() {
$(document).on('click','.sort_by',function() {
  var table = $('[name=by_col]').attr('data-target');
  var col = $('[name=by_col]').val();
  var order = $('[name=by_order]').val();
  sortTable(table,col,order);
});

function sortTable(table,col,order=0) {

  var rows = $(table+' tbody tr').get();
  rows.sort(function(a, b) {

      var A = $(a).children('td').eq(col).text().toUpperCase();
      var B = $(b).children('td').eq(col).text().toUpperCase();

      if (order==0) {
          if (A > B) return 1;
          if (A < B) return -1;
      } else {
          if (A > B) return -1;
          if (A < B) return 1;
      }

      return 0;

  });


  $.each(rows, function(index, row) {
      $(table).children('tbody').append(row);
  });
}

/* Find Data */
$(document).on('keyup','[name=find_data]',function() {
  var col = $('[name=by_col]').val();
  var table = $(this).attr('data-target');
  var text = $(this).val().toLowerCase();

  // alert(col);
  // alert(table);
  // alert(text);
  filter_by_text(table,col,text);
});
function filter_by_text(table,col,text) {
  $(table+' tbody tr').filter(function() {
      $(this).toggle($(this).children('td').eq(col).text().toLowerCase().indexOf(text) > -1);
  });
}
// $(document).on('keyup','[name=find_data]',function() {

//     var value = $(this).val().toLowerCase();
//     $("#myTable tr").filter(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
// });
/**----------------------------Countires States Cities----------------------------------- */
// $(document).ready(function() {
//     get_all_countries();
// });
function get_all_countries() {


  $.post("<?=base_url('Common_Controller/get_all_countries')?>", '',function (data, textStatus, jqXHR) {

      var data = $.parseJSON(data);
      var india = data['india'];
      var other = data['ohter'];
      var html = '<option value="">Select Country</option>';
         html += '<option value="'+india['id']+'">'+india['name']+'</option>'

      for(var i=0; i<other.length; i++) {
          html += '<option value="'+other[i]['id']+'">'+other[i]['name']+'</option>';
      }

      $('.get_states').html(html);
  });
}
$('.get_states').change(function() {

  var country_id = $(this).val();
  var dataTraget = $(this).attr('data-target');
  var dataSelect = '';
  if($(this).attr('data-select') != '') {

      dataSelect = $(this).attr('data-select');
  }

  preloader('start');
  $.post("<?=base_url('Common_Controller/get_all_state')?>", {country_id:country_id},function (data, textStatus, jqXHR) {

      var data = $.parseJSON(data);
      var html = '<option value="">Select State</option>';

      for(var i=0; i<data.length; i++) {
          html += '<option value="'+data[i]['id']+'">'+data[i]['name']+'</option>';
      }

      $(dataTraget).html(html);
      $(dataTraget).val(dataSelect).change();

      preloader('end');
  });
});
$('.get_cities').change(function() {

  var state_id = $(this).val();
  var dataTraget = $(this).attr('data-target');
  var dataSelect = '';
  if($(this).attr('data-select') != '') {

      dataSelect = $(this).attr('data-select');
  }

  preloader('start');
  $.post("<?=base_url('Common_Controller/get_all_city')?>", {state_id},function (data, textStatus, jqXHR) {

      var data = $.parseJSON(data);
      var html = '<option value="">Select City</option>';

      for(var i=0; i<data.length; i++) {
          if(dataSelect == data[i]['id']) {

              html += '<option selected value="'+data[i]['id']+'">'+data[i]['name']+'</option>';
          } else {

              html += '<option value="'+data[i]['id']+'">'+data[i]['name']+'</option>';
          }
      }

      $(dataTraget).html(html);
      preloader('end');
  });
});
/**----------------------------Enter only Numbers----------------------------------- */
$(document).on("input", ".only-numbers", function() {
  this.value = this.value.replace(/\D/g,'');
});
/**----------------------------Checkbox Collapse----------------------------------- */
$(document).on('click','.checkbox-collapse-toggle',function() {

  var dataTarget = $(this).attr('data-target');
  var arrow = $(this).find('.checkbox-collapse-header-icon');

  $('.checkbox-collapse-body').not(dataTarget).slideUp('fast');
  $('.checkbox-collapse-header-icon').not(arrow).removeClass('rotate-collapse-arrow');

  $(dataTarget).slideToggle('fast');
  arrow.toggleClass('rotate-collapse-arrow');
});

$(document).on('click','.master_module_checkbox',function(e) {

  e.stopPropagation();

  var dataTarget = $(this).parents().eq(2).attr('data-target');
  var arrow = $(this).parents().eq(1).siblings('.checkbox-collapse-header-icon');
  var id = $(this).attr('id');

  if($(this).is(':checked')) {
      $('.checkbox-collapse-body').not(dataTarget).slideUp('fast');
      $('.checkbox-collapse-header-icon').not(arrow).removeClass('rotate-collapse-arrow').attr('class');
      $(dataTarget).slideDown('fast');
      $(dataTarget).find('[type=checkbox]').prop('checked',true);
      // $('.'+id).prop('checked',true);
      arrow.addClass('rotate-collapse-arrow').attr('class');
  } else {
      $(dataTarget).slideUp('fast');
      $(dataTarget).find('[type=checkbox]').prop('checked',false);
      // $('.'+id).prop('checked',false);
      arrow.removeClass('rotate-collapse-arrow').attr('class');
  }
});

$(document).on('click','[name=sub_module_checkbox]',function() {
  var name = $(this).attr('name');
  var eles = $(this).parents().eq(2).find('[name='+name+']');
  var gg_parent_id =  $(this).parents().eq(2).attr('id');
  var count = 0;
  eles.each(function(){
      if($(this).is(':checked')) {
         count++;
      }
  });
  if(count == 0) {
      $('[data-target="#'+gg_parent_id+'"]').find('[name=master_module_checkbox]').prop('checked',false);
  } else {
      $('[data-target="#'+gg_parent_id+'"]').find('[name=master_module_checkbox]').prop('checked',true);
  }
});

/**----------------------------Auto-Complete----------------------------------- */
function autocomplete(inp, arr) {
/*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
var currentFocus;
/*execute a function when someone writes in the text field:*/
inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
        });
        a.appendChild(b);
      }
    }
});
/*execute a function presses a key on the keyboard:*/
inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
});
function addActive(x) {
  /*a function to classify an item as "active":*/
  if (!x) return false;
  /*start by removing the "active" class on all items:*/
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = (x.length - 1);
  /*add class "autocomplete-active":*/
  x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
  /*a function to remove the "active" class from all autocomplete items:*/
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
  }
}
function closeAllLists(elmnt) {
  /*close all autocomplete lists in the document,
  except the one passed as an argument:*/
  var x = document.getElementsByClassName("autocomplete-items");
  for (var i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

/**----------------------Date Time Formate---------------------------- */
function date_time_format(date_time,format='date'){
  var date_time = new Date(date_time);
  var d = date_time.getDate();
  if(d.toString().length == 1) {
      d = '0'+d;
  }

  var m = date_time.getMonth()+1;
  if(m.toString().length == 1) {
      m = '0'+m;
  }

  var y = date_time.getFullYear();
  var h = date_time.getHours();
  var i = date_time.getMinutes();
  if(i.toString().length == 1) {
      i = '0'+i;
  }

  var s = date_time.getSeconds();
  if(s.toString().length == 1) {
      s = '0'+s;
  }

  var a = 'AM';

  if(h >= 12) {
      h = h-12;
      a = 'PM';
  }
  if(h == 0) {
      h = 12;
  }

  if(format == 'date') {
      return d+'-'+m+'-'+y;
  } else if(format == 'time') {
      return h+':'+i+':'+s+' '+a;
  } else if(format == 'datetime') {
      return d+'-'+m+'-'+y+' '+h+':'+i+':'+s+' '+a;
  } else {
      return 'format is wrong';
  }
}

/**----------------------Print Table---------------------------- */
function printData(id)
{
  var divToPrint=document.getElementById(id);
  newWin= window.open("");
  var template = '<!DOCTYPE html><html><head><style>'+
                  'table{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}table td,table th{border:1px solid #ddd;padding:5px}table th{padding-top:8px;padding-bottom:8px;text-align:left;background-color:var(--main-color);color:var(--secondary-color)}.noprint{display: none;}'+
                  '</style></head><body>'+divToPrint.outerHTML+'</body></html>';
  newWin.document.write(template);
  newWin.print();
  newWin.close();
}
/**----------------------Bootstrap 5 Tooltip---------------------------- */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})
/*---------------------Number-to-Roman-----------------------*/
function numToRoman(num) {
  var roman = {
                  M: 1000,
                  CM: 900,
                  D: 500,
                  CD: 400,
                  C: 100,
                  XC: 90,
                  L: 50,
                  XL: 40,
                  X: 10,
                  IX: 9,
                  V: 5,
                  IV: 4,
                  I: 1
              };
  var str = '';

  for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
  }

  return str;
}
