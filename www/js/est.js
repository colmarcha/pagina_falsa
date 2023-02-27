var rv = self.setInterval(function () {
    regvis();
    OcultarCargando();
}, 600000);

function obtOXH() {
    OcultarCargando();
    var xmlHttp = null;
    try {
        xmlHttp = new XMLHttpRequest();

    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    OcultarCargando();
    return xmlHttp;
}
function regvis()
{
    OcultarCargando();
    var tk = document.getElementById('tk');
    var ob = obtOXH();
    ob.onreadystatechange = function () {
        if (ob.readyState == 4 && ob.status == 200) {
            tk.value = ob.responseText;
            OcultarCargando();
        }
    }
    OcultarCargando();
    ob.open("GET", '/siswww/es/adt/regvis' + '?tk=' + tk.value + '&vis=1', true);
    ob.send(null);
}
function cuedes(ar)
{
    OcultarCargando();
    var tk = document.getElementById('tk');
    var ob = obtOXH();
    ob.onreadystatechange = function () {
        if (ob.readyState == 4 && ob.status == 200) {
            OcultarCargando();
            tk.value = ob.responseText;
            var element = document.createElement('a');
            element.setAttribute('href', ar);
            element.setAttribute('download', "cnar.pdf");
            element.setAttribute('target', "_blank");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
            OcultarCargando();
        }
    }
    ob.open("GET", '/siswww/es/adt/cuedes' + '?tk=' + tk.value + '&arc=' + ar, true);
    ob.send(null);
    OcultarCargando();
}

function ahrefmailto(mailto) {
    var element = document.createElement('a');
    element.setAttribute('href', mailto);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    OcultarCargando();
}

function cuedes2(ar, x, y)
{
    OcultarCargando();
    var tk = document.getElementById('tk');
    var ob = obtOXH();
    var scr = '';
    ob.onreadystatechange = function () {
        if (ob.readyState == 4 && ob.status == 200) {
            OcultarCargando();
            tk.value = ob.responseText;
            if (y > screen.height)
            {
                y = screen.height;
                scr = ',scrollbars=1';
            }
            if (x == undefined || y == undefined) {
                window.open(ar);
            } else {
                window.open(ar, '_blank', 'width=' + x + ', height=' + y + ' top=0,left=0, resizable=no, border=0' + scr);
            }
        }
    }
    ob.open("GET", '/siswww/es/adt/cuedes' + '?tk=' + tk.value + '&arc=' + ar, true);
    ob.send(null);
}

// efecto del menu estatico al navegar a traves de la pagina
window.onscroll = function () {
    MenuScrollable()
};

function MenuScrollable() {
    var header = document.getElementById("encabezado");
    var menuheader = document.getElementById("menuprincipal");
    if (window.matchMedia("(orientation: portrait)").matches || !isMobile()) {
        if (header !== null || menuheader !== null) {
            var sticky = header.offsetTop;
            if (window.pageYOffset > sticky) {
                header.className = "ccbcr sticky";
                menuheader.className = "cssmenucontainer stickyMenu";
            } else {
                header.className = "ccbcr";
                menuheader.className = "cssmenucontainer";
            }
        }
    } else {
        header.className = "ccbcr";
        menuheader.className = "cssmenucontainer";
    }
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

function isMobile() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

window.matchMedia || (window.matchMedia = function () {
    "use strict";
    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media);
    // For those that don't support matchMedium
    if (!styleMedia) {
        var style = document.createElement('style'),
                script = document.getElementsByTagName('script')[0],
                info = null;
        style.type = 'text/css';
        style.id = 'matchmediajs-test';
        if (!script) {
            document.head.appendChild(style);
        } else {
            script.parentNode.insertBefore(style, script);
        }
        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;
        styleMedia = {
            matchMedium: function (media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';
                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }
                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }
    return function (media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());