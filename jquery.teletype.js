(function($) {
    $.fn.teletype = function(options) {
        var settings = $.extend({
            text: [],       // Array of strings to type out
            typeDelay: 100, // Delay between typing each character (milliseconds)
            backDelay: 50,  // Delay between erasing and typing a new line (milliseconds)
            loop: 0         // Number of loops (0 for infinite loop)
        }, options);

        var $elem = this;
        var loopCount = 0;

        function typeString(index) {
            if (index < settings.text.length) {
                var text = settings.text[index];
                var i = 0;
                var typing = setInterval(function() {
                    if (i < text.length) {
                        $elem.append(text.charAt(i));
                        i++;
                    } else {
                        clearInterval(typing);
                        setTimeout(function() {
                            eraseString(index);
                        }, settings.backDelay);
                    }
                }, settings.typeDelay);
            } else {
                if (settings.loop === 0 || loopCount < settings.loop - 1) {
                    loopCount++;
                    typeString(0);
                }
            }
        }

        function eraseString(index) {
            var text = settings.text[index];
            var i = text.length - 1;
            var erasing = setInterval(function() {
                if (i >= 0) {
                    var newText = text.substring(0, i);
                    $elem.text(newText);
                    i--;
                } else {
                    clearInterval(erasing);
                    setTimeout(function() {
                        typeString(index + 1);
                    }, settings.backDelay);
                }
            }, settings.typeDelay);
        }

        // Start typing
        typeString(0);

        return this;
    };
}(jQuery));

