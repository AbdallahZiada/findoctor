$(document).ready(function() {
        
    var i = 1;
    var timeout = 1000;
    
    $(".slidey"+i).addClass('y'); //this is special for the first image apper it delay from getting hide so i will give it another class which will have less time to make the move
    setInterval(function(){ //getting the code that inside the interval into a loop
            //needed in the case that the mouse is enter 
            
            $(".slidex" +i).animate({opacity:"0"},1000); //every speach will disapper after 500 m.s 
            $(".slidey"+i).removeClass('yy'); //every image will stop moving up and down by removing the class from it
            $(".slidey"+i).removeClass('active');
            $(".slidex"+i).removeClass('active');
            $(".selector"+i).removeClass('active');
            //needed if the mouse is enter then we need this function
            $('.selector1,.selector2,.selector3,.selector4,.selector5').click(function () {
                if (this.class == 'selector1') 
                {
                    i=1
                }
                else if (this.class == 'selector2') 
                {
                    i=2
                }
                else if (this.class == 'selector3') 
                {
                    i=3
                }
                else if (this.class == 'selector4') 
                {
                    i=4
                }
                else if (this.class == 'selector5') 
                {
                    i=5
                }
            });
            setTimeout( function(){
                if(i==5){
                    $(".slidey"+(i-4)).removeClass('y');
                    $(".slidex" +(i-4)).animate({opacity:"1"},timeout);
                    $(".slidey"+(i-4)).addClass('yy');
                    $(".slidey"+(i-4)).addClass('active');
                    $(".slidex"+(i-4)).addClass('active');
                    $(".selector"+(i-4)).addClass('active');
                }
                else{
                    $(".slidex" +(i+1)).animate({opacity:"1"},timeout);
                    $(".slidey"+(i+1)).addClass('yy');
                    $(".slidey"+(i+1)).addClass('active');
                    $(".slidex"+(i+1)).addClass('active');
                    $(".selector"+(i+1)).addClass('active');
                }
            },timeout); //this function will add the new slide to the show 
            
            //not needed in the case of mouse enter
            setTimeout( function(){
                if(i==5){
                    $(".slidex" +(i-4)).css('display','block');
                }
                else{
                    $(".slidex" +(i+1)).css('display','block');
                }
                $(".slidex" +i).css('display','none');            
            },timeout); //this function will make the currunt slide disapper and help to show the next slide
                                                    // and help here means that it will initialy make the display block and the upper function will make it raly apper
            //not needed in the case of mouse enter 
            setTimeout( function(){
                i = i + 1;
                if(i==6)
                {
                    i=1
                }
            },timeout); // this function will increment the i every one loop just as we need
        },5000);
    $(".sup1").mouseenter(function() {
            $(".sup1").addClass("sup11");
            $(".sup2").addClass("sup22");
    });
    $(".sup1").mouseout(function() {
                $(".sup1").removeClass("sup11");
                $(".sup2").removeClass("sup22");
    });
    
    
    
    
    
});