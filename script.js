$('.navTrigger').click(menuToggle);
$('.navlinks').click(menuToggle);

function menuToggle(){
    $('.navTrigger').toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
}
