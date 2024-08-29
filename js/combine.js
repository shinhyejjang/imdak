$(function () {

    // pick
    $.ajax({
        url: "./json/pick.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".pick-box").eq(i).append('<div><a href="#"><img src="./img/pick/' + data[i].url + '" /></a></div>');
                    $(".pick-box").eq(i).append('<h3><a href="#">' + data[i].title + '</a></h3>');
                    $(".pick-box").eq(i).append('<span>' + data[i].price + '</span>');
                }
            }
        }
    });
    
    // time
    $.ajax({
        url: "./json/time.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".time-box").eq(i).append('<div><a href="#"><img src="./img/time/' + data[i].url + '" /></a></div>');
                    $(".time-box").eq(i).append('<h3><a href="#">' + data[i].title + '</a></h3>');
                    $(".time-box").eq(i).append('<span>' + data[i].price + '</span>');
                }
            }
        }
    });

    // price
    $.ajax({
        url: "./json/price.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".price-box").eq(i).append('<div><a href="#"><img src="./img/price/' + data[i].url + '" /></a></div>');
                    $(".price-box").eq(i).append('<h3><a href="#">' + data[i].title + '</a></h3>');
                    $(".price-box").eq(i).append('<span>' + data[i].price + '</span>');
                }
            }
        }
    });

    // product
    $.ajax({
        url: "./json/product.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $(".product-box").eq(i).append('<div><a href="#"><img src="./img/product/' + data[i].url + '" /></a></div>');
                    $(".product-box").eq(i).append('<h3><a href="#">' + data[i].title + '</a></h3>');
                    $(".product-box").eq(i).append('<p><a href="#">'+data[i].subtitle+"</a></p>");
                    $(".product-box").eq(i).append('<span>' + data[i].price + '</span>');
                }
            }
        }
    });

});

window.onload = function () {
    // Set titles
    document.getElementById("title-price").innerHTML = "착한가격 마감세일";
    document.getElementById("title-pick").innerHTML = "고객님 이런상품은 어떠세요?";
    document.getElementById("title-time").innerHTML = "지금 놓치면 후회하는 타임특가";
    document.getElementById("title-product").innerHTML = "아임닭 레시피 속 그 상품";
}