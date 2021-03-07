const win_height_padded = $(window).height() * 0.8;

$(window).resize(function() {
    let height = $(".wrapper-video").siblings("img").height()
    $($(".wrapper-video")[0]).css("height",height);
    $($(".wrapper-video")[1]).css("height",height);
});
    

$(document).ready(function () {
    // $('.slider').slick({
    //     dots: true,
	// 	autoplay: false,
    //     arrows: false,
    // });

    $(window).scroll(function () {
        const scrolled = $(window).scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
            $(this).css('visibility','hidden');
            const $this = $(this);
            const offsetTop = $this.offset().top;

            if (scrolled + win_height_padded >= offsetTop) {

                if ($this.data('timeout')) {
                    window.setTimeout(function () {
                        $this.css('visibility','visible');
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'), 10));
                } else {
                    $this.css('visibility','visible');
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    });

    
    // let height = $(".wrapper-video").siblings("img").height()
    // $($(".wrapper-video")[0]).css("height",height);
    // $($(".wrapper-video")[1]).css("height",height);

    $(".checkbox-label").on("click", function(){
        let url = $(this).parents(".link-a").attr('href')
        window.location.href = url;
    });

    for( let i = 0; i < $(".checkbox").length; i++){
        $(".checkbox")[i].checked = false;
    }
    

    
    $(".card-bottle-mobile").on("click", function(event){
        let checkbox = $(this).find(".checkbox").prop("checked")
        let $this = $(this);

        if(event.target.type !== 'radio'){
            $($(".card-bottle-mobile")[0]).css("background-color","white");
            $($(".card-bottle-mobile")[1]).css("background-color","white");
            $($(".card-bottle-mobile")[2]).css("background-color","white");
            
            
            $this.css("background-color","#FFC439")
            $(this).find(".checkbox")[0].checked = true;
        }
    });

    

    $(".button-link").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".seventh-section").offset().top
        }, 2000);
    });  

    const widgetContainer = $('#bought-widget');
    const appearingDelaySec = 5;
    const animationFrequency = 5;

    const widgetTexts = [
        {name: 'Vlad', amount: 3, time: 'vor 1 Minute'},
        {name: 'Alex', amount: 5, time: 'vor 6 Minuten'},
        {name: 'Emma', amount: 8, time: 'vor 1 Stunde'},
        {name: 'Tanja', amount: 8, time: 'vor 17 Minuten'},
        {name: 'Benjamin', amount: 8, time: 'vor 23 Minuten'},
        {name: 'Erwin', amount: 8, time: 'vor 25 Minuten'},
        {name: 'Sandro', amount: 8, time: 'vor 27 Minuten'},
        {name: 'Andreas', amount: 8, time: 'vor 32 Minuten'},
        {name: 'Johannes', amount: 8, time: 'vor 1 Stunde'},
        {name: 'Anna', amount: 8, time: 'vor 20 Minuten'},
        ];

    const renderWidget = ({name, amount, time}) => {
        return `<a class="bought-widget-card fadeIn animated">
                    <div class="bought-widget-card__image">
                        <img src="img/1.png" />                    
                    </div>
                     <div class="bought-widget-card__text">
                        <div class="text__name">${name}</div>
                          <div class="text__message">kaufte gerade ${amount} SuperCoat Set</div>
                           <div class="text__time">${time}</div>
                     </div>
                </a>`;
    };

    const runWidgetAnimation = (index) => {
        if(widgetContainer) {
            const card = widgetContainer.find('.bought-widget-card');
            if(card) {
                card.removeClass('animated fadeIn');
                card.addClass('fadeOut animated');
                setTimeout(() => widgetContainer.html(renderWidget(widgetTexts[index])), 1000);
            }
        }
    };

    (function initWidget(){
        setTimeout(() => {
            widgetContainer.html(renderWidget(widgetTexts[0]));

            let index = 1;
            setInterval(() => {

                runWidgetAnimation(index)
                if (index + 1 > widgetTexts.length - 1) {
                    index = 0;
                } else {
                    index++;
                }
            }, animationFrequency * 1000 + 300);
        }, appearingDelaySec * 1000);
    })();

});
