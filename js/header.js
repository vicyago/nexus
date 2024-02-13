window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        document.getElementById("logo").style.width = "5%";
    } else {
        document.getElementById("logo").style.width = "10%";
    }
}
