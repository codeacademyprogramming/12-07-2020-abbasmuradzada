$(document).ready(function(){

    activeIndex=0;
    // var cahangeInterval = 1500;


    var carousel = setInterval(function(){
        if(activeIndex<($(".slider-item").length)-1){
            activeIndex++;
            $(".slider-contanier").css({
                "transform":`translateX(-${activeIndex*100}%)`
            })
        }else{
            $(".slider-contanier").append($(".slider-contanier").html());

        }
    },1500);

    $(document).on("mouseover",".slider-wrapper",function(){
        clearInterval(carousel);
    })

    $(document).on("mouseleave",".slider-wrapper",function(){
        carousel = setInterval(function(){
            if(activeIndex<($(".slider-item").length)-1){
                activeIndex++;
                $(".slider-contanier").css({
                    "transform":`translateX(-${activeIndex*100}%)`
                })
            }else{
                $(".slider-contanier").append($(".slider-contanier").html());
    
            }
        },1500);
    })


    $(document).on("click",".right-arrow",function(){
        if(activeIndex<($(".slider-item").length)-1){
            activeIndex++;
            $(".slider-contanier").css({
                "transform":`translateX(-${activeIndex*100}%)`
            })
        }else{
            $(".slider-contanier").append($(".slider-contanier").html());

        }
        
    })
    $(document).on("click",".left-arrow",function(){
        if(activeIndex!=0){
            activeIndex--;
            $(".slider-contanier").css({
                "transform":`translateX(-${activeIndex*100}%)`
            })
        }else{
            activeIndex=($(".slider-item").length)-1;
            $(".slider-contanier").css({
                "transform":`translateX(-${activeIndex*100}%)`
            })
            $(".slider-contanier").prepend($(".slider-contanier").html());
            // activeIndex=($(".slider-item").length)-1;

        }
        
    })

    dotIndex=1;
    for(var i=0; i<($(".slider-item").length); i++){
        $("#slider-dots").append($(`<div class="slider-dot" data-number="${dotIndex}"></div>`));
        dotIndex++;
    }
    
    $(document).on("click",".slider-dot",function(){
    console.log($(".slider-dot").length);
    })
});

