$(function () {
    $(window).scroll(() => {
        let sY = $(window).scrollTop()
        // console.log(sY)
        if (sY > 810) {
            $('.right-bar a:last-child').css('display','block')
        }else {
            $('.right-bar a:last-child').css('display','none')
        }
    })
    // $('.right-bar')
})