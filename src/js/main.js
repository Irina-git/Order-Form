//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
let langArray = [];
$('.vodiapicker option').each(function(){
    let img = $(this).attr("data-thumbnail");
    let text = this.innerText;
    let value = $(this).val();
    let item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
    langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

//change button stuff on click
$('#a li').click(function(){
    let img = $(this).find('img').attr("src");
    let value = $(this).find('img').attr('value');
    let text = this.innerText;
    let item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
    $('.btn-select').html(item);
    $('.btn-select').attr('value', value);
    $(".b").toggle();
    //console.log(value);
});

$(".btn-select").click(function(){
    $(".b").toggle();
});

//check local storage for the lang
let sessionLang = localStorage.getItem('lang');
if (sessionLang){
    //find an item with value of sessionLang
    let langIndex = langArray.indexOf(sessionLang);
    $('.btn-select').html(langArray[langIndex]);
    $('.btn-select').attr('value', sessionLang);
} else {
    let langIndex = langArray.indexOf('ch');
    console.log(langIndex);
    $('.btn-select').html(langArray[langIndex]);
    //$('.btn-select').attr('value', 'en');
}
