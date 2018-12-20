


//bd大小

//$("#bd").height($(window).height());

var LOCALSTORAGE_LOGIN = window.GLOBAL_UTILS.getWithExpire("LOCALSTORAGE_LOGIN");
        if (!LOCALSTORAGE_LOGIN) {
            document.location.href = "login.html";
}

