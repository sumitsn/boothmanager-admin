function doAjaxCall(url,data,send_type,showLoading,loaderClass,callback) {
      $.ajax({
      // 'async':true,
      // 'crossDomain':true,
      'url': url,
      'method': send_type,
      'data':'',
      success: function (data) {
       if (showLoading) {
         $('.'+loaderClass).hide();
         $(`.${loaderClass} + .showBlock`).show();
       }
       if(data.status == 401 || data.status_code == 401){
          if (showLoading) {
             $('.'+loaderClass).hide();
             $(`.${loaderClass} + .showBlock`).show();
           }
            window.location.replace("/login.html");
        }
       callback(data,1);
      },
      error: function (data,errorThrown) {
        if(data.status == 401 || data.status_code == 401){
          if (showLoading) {
             $('.'+loaderClass).hide();
             $(`.${loaderClass} + .showBlock`).show();
           }
            window.location.replace("/login.html");
        }
        if (showLoading) {
             $('.'+loaderClass).hide();
             $(`.${loaderClass} + .showBlock`).show();
           }
        callback(data,2);
       }
    });
    }