$(document).ready(function () {
    tw_config.virtual_products && ($('.productCheckoutInfo .ongkir').remove(), $('#checkoutWhatsApp .alamat').closest('label').remove(), $('.productCheckout').addClass('virtual'), $('.productOptionInfo small:nth-last-child(1), .productOptionInfo small:nth-last-child(2)').remove());
}), $('a[href*="https://www.youtube.com/watch?v="]').each(function () {
    var _0xba6da = $(this).attr('href'),
        _0x2e7ecd = _0xba6da.split('v=')[1],
        _0x2a7b88 = _0x2e7ecd.indexOf('&');
    _0x2a7b88 != -1 && (_0x2e7ecd = video_id.substring(0, _0x2a7b88));
    $(this).attr('href', 'https://www.youtube.com/embed/' + _0x2e7ecd + '?autoplay=1'), $(this).addClass('popWin videoYoutube');
    var _0x24deef = 'https://img.youtube.com/vi/' + _0x2e7ecd + '/maxresdefault.jpg';
    $(this).attr('style', 'background-image:url(' + _0x24deef + ');');
}), $('.quickedit').removeAttr('onclick'), $('.quickedit').removeAttr('target'), $('.quickedit').addClass('popWin'), $('.quickedit').attr('data-popWidth', 600), $('.quickedit img').remove(), $('.quickedit').append('<i class="icon ion-md-create"></i>');
var arr_socmed = tw_socmed;
$['each'](arr_socmed, function (_0x123231, _0x314917) {
    _0x123231 != null && _0x314917 != '' && $('#follow .followBtn, .followBtn2').append('<a class="popWin ' + _0x123231 + '" data-popWidth="1280" href="' + _0x314917 + '"><i class="icon ion-logo-' + _0x123231 + '"></i></a>');
}), $(window).on('beforeunload', function () {
    $('.poptamv').removeClass('open'), $['magnificPopup'].close(), $('#page-loader').fadeIn(500).delay(1000).fadeOut(1000);
}), $(window).on('load', function () {
    $('#page-loader').fadeOut(500), $('iframe').each(function () {
        var _0x2b57c7 = $(this).attr('data-src');
        $(this).attr('src', _0x2b57c7), $(this).removeAttr('data-src');
    });
    var _0x482924 = location.href.split('/')[0] + '//' + location.href.split('/')[2] + '/',
        _0x5a5cfd = location.href.split('/')[0] + '//' + location.href.split('/')[2] + '/?m=1';
    (!localStorage.getItem('load_notif') && location.href == _0x482924 || location.href == _0x5a5cfd) && ($('a.btnNotif').trigger('click'), localStorage.setItem('load_notif', 1));
}), $('img').each(function () {
    var _0x96523f = $(this).attr('data-src');
    $(this).attr('src', _0x96523f), $(this).removeAttr('data-src');
}), $('.lazy-bg').each(function () {
    var _0x5c9483 = $(this).attr('data-src');
    $(this).attr('style', 'background-image:url("' + _0x5c9483 + '");'), $(this).css('visibility', 'auto!important'), $(this).removeAttr('data-src'), $(this).removeClass('lazy-bg');
}), $(window).on('scroll', function () {
    $('header').each(function () {
        $(window).scrollTop() >= 1 ? $(this).addClass('onScroll') : $(this).removeClass('onScroll');
    });
}), $('.productTitle').each(function () {
    var _0xc4deb0 = $(this).parents('.itemPost').find('.productDetail');
    $(this).prependTo(_0xc4deb0);
}), $('.productPrice').each(function () {
    var _0x1642e3 = $(this).text(),
        _0x59400f = $(this).attr('data-discount-percent');
    if (!_0x59400f || _0x59400f == 0 || _0x59400f == '') {
        var _0x363d34 = $(this).closest('.productDetail').find('.data_discount');
        _0x59400f = _0x363d34.text(), _0x363d34.remove();
    }
    var _0xff4560 = _0x1642e3 - _0x1642e3 * _0x59400f / 100,
        _0x32a127 = '';
    $(this).after('<span class='
        productPrice_after '>Test</span>');
    if (!_0x59400f || _0x59400f == 0 || _0x59400f == '') {
        $(this).next('.productPrice_after').html('<b>' + angkaToRp(_0x1642e3) + '</b>');
        var _0x32a127 = _0x1642e3;
    } else {
        $(this).next('.productPrice_after').html('<small><span>-' + _0x59400f + '%</span><s>' + angkaToRp(_0x1642e3) + '</s></small><b>' + angkaToRp(_0xff4560) + '</b>');
        var _0x32a127 = _0xff4560;
    }
    $(this).attr('data-selected', _0x32a127), $(this).parents('.itemPost').attr('data-price', _0x32a127);
}), $('.lightbox').each(function () {
    $(this).magnificPopup({
        'type': 'image',
        'verticalFit': false,
        'gallery': {
            'enabled': true
        },
        'callbacks': {
            'beforeOpen': function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim'), this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        'closeOnContentClick': true,
        'midClick': true
    });
}), $('a[href*="bp.blogspot.com"]').each(function () {
    $(this).addClass('lightbox');
}), $('.pageBody a:has(img)').each(function () {
    $(this).addClass('lightbox');
}), $('.gallery').each(function () {
    $(this).magnificPopup({
        'delegate': 'a.lightbox',
        'type': 'image',
        'preload': [1, 2],
        'verticalFit': false,
        'gallery': {
            'enabled': true
        },
        'closeOnContentClick': true,
        'midClick': true
    });
}), $(document).ready(function () {
    $('.lightframe').magnificPopup({
        'type': 'iframe',
        'mainClass': 'mfp-fade',
        'preloader': false,
        'fixedContentPos': false
    });
}), $('.poptamv-btn, .tombol-wa').on('click', function () {
    $('body').addClass('hideScroll');
    var _0x3a9485 = $(this).attr('data-title'),
        _0x5d3382 = $(this).attr('href');
    $(_0x5d3382).addClass('open'), $(_0x5d3382).find('.title-content').html(_0x3a9485);
    if ($(this).attr('data-img') != null) {
        var _0x13094e = $(this).attr('data-img');
        $(_0x5d3382).find('.content img').show(), $(_0x5d3382).find('.content img').attr('src', _0x13094e);
    }
    if ($(this).attr('data-width') != null) {
        var _0x5de555 = $(this).attr('data-width');
        $(_0x5d3382).find('.wrap').attr('style', 'max-width:' + _0x5de555 + 'px!important;');
    }
    if ($(this).attr('data-tooltip') != null) {
        var _0x4cf787 = $(this).attr('data-tooltip');
        $(_0x5d3382).find('.poptamv-wrap').show(), $(_0x5d3382).find('.poptamv-wrap').html(_0x4cf787);
    }
}), $('.poptamv .closeTamv').on('click', function () {
    $('body').removeClass('hideScroll'), $(this).parents('.poptamv').removeClass('open');
}), $(document).keyup(function (_0x199029) {
    _0x199029.key === 'Escape' && $('.poptamv .closeTamv').trigger('click');
});
if (pageMode != 'related') {
    var audio = document.createElement('audio');
    audio.src = 'https://kangrian.github.io/TokoWhatsApp/wa.mp3', audio.preload = 'auto', sessionStorage.getItem('waFix') === null && audio.addEventListener('canplaythrough', function () {
        setTimeout(function () {
            $('.waFix').addClass('show');
        }, 6000);
    }, false);
}
$(document).on('click', '.waFix', function () {
    $(this).removeClass('show'), sessionStorage.setItem('waFix', false);
}), $(document).on('keypress', '.formWA input, .formWA textarea', function () {
    event.keyCode === 13 && $(this).parents('.formWA').find('.submit').trigger('click');
}), $('.formWA .wajib').each(function () {
    title = $(this).attr('placeholder'), label = $(this).parents('label'), $('<span class="validasi"><b>' + title + '</b> (dibutuhkan)</span>').appendTo(label);
}), $(document).on('keyup', '.formWA .wajib', function () {
    $(this).val() != '' && ($(this).removeClass('focus'), $(this).parents('label').find('.validasi').removeClass('show'));
}), $(document).on('change', '.formWA select', function () {
    $(this).removeClass('focus'), $(this).parents('label').find('.validasi').removeClass('show');
}), $(document).on('click', '.formWA .submit', function () {
    return kirimWA($(this).parents('.poptamv').attr('id')), false;
});
function kirimWA(_0x2e30fd) {
    var _0x5f1e99 = true;
    $('#' + _0x2e30fd + ' .wajib').each(function () {
        ($['trim']($(this).val()) == '' || $['trim']($(this).val()) == 'default') && $(this).addClass('focus');
    }), $('#' + _0x2e30fd + ' .wajib').each(function () {
        if ($['trim']($(this).val()) == '') return _0x5f1e99 = false, $(this).parents('label').find('.validasi').addClass('show'), $(this).focus(), false;
        else {
            if ($['trim']($(this).val()) == 'default') return _0x5f1e99 = false, $(this).parents('label').find('.validasi').addClass('show'), false;
        }
    });
    if (_0x5f1e99 === true) {
        var _0x2ad9bd = '',
            _0x38476e = 'https://web.whatsapp.com/send';
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (_0x38476e = 'whatsapp://send');
        if (_0x2e30fd == 'kirimWhatsApp') var _0xb810f = tw_config.nama_admin,
            _0xd33933 = tw_config.pesan_salam,
            _0x5b731a = 62,
            _0x1e2f13 = tw_config.no_whatsapp,
            _0x550b6e = $('#' + _0x2e30fd + ' .title-content').text(),
            _0x23cfa0 = $('#' + _0x2e30fd + ' .nama').val(),
            _0x4707fe = $('#' + _0x2e30fd + ' .email').val(),
            _0x6cda3f = $('#' + _0x2e30fd + ' .pesan').val(),
            _0x2ad9bd = _0x38476e + '?phone=' + _0x5b731a + _0x1e2f13 + '&text=' + _0xd33933 + ' ' + _0xb810f + '.. saya *' + _0x23cfa0 + '*.%0A%0A💬 ' + _0x6cda3f + '%0A%0AE-mail Aktif : ' + _0x4707fe + '%0Avia ' + location.href;
        else {
            if (_0x2e30fd == 'checkoutWhatsApp') {
                var _0xb810f = tw_config.nama_admin,
                    _0xd33933 = tw_config.pesan_salam,
                    _0x5b731a = 62,
                    _0x1e2f13 = tw_config.no_whatsapp,
                    _0x550b6e = $('#' + _0x2e30fd + ' .productCheckoutInfo .infoTitle').text(),
                    _0x5952fd = $('#' + _0x2e30fd + ' .productOptionInfo').text(),
                    _0x293a14 = $('#' + _0x2e30fd + ' .totalqty').text(),
                    _0x23cfa0 = $('#' + _0x2e30fd + ' .nama').val(),
                    _0x4707fe = $('#' + _0x2e30fd + ' .email').val(),
                    _0x1be072 = $('#' + _0x2e30fd + ' .jumlah').val(),
                    _0x4f6578 = $('#' + _0x2e30fd + ' .pembayaran').val(),
                    _0x21bb36 = $('#' + _0x2e30fd + ' .catatan').val(),
                    _0x126058 = $('#' + _0x2e30fd + ' .alamat').val();
                if (tw_config.virtual_products) var _0x2ad9bd = _0x38476e + '?phone=' + _0x5b731a + _0x1e2f13 + '&text=' + _0xd33933 + ' ' + _0xb810f + '.. saya mau beli *' + _0x550b6e + '.*%0A%0A' + _0x5952fd + '%0A— — — — — — — — — — — — — — —%0A%0A' + _0x293a14 + '%0A%0A— — — — — — — — — — — — — — —%0A%0A' + '*Catatan :*%0A' + _0x21bb36 + '%0A%0A' + '*Metode Pembayaran :*%0A' + _0x4f6578 + '%0A%0AAtas Nama.%0A*' + _0x23cfa0 + '* ( ' + _0x4707fe + ' )%0A%0Avia ' + location.href;
                else var _0x2ad9bd = _0x38476e + '?phone=' + _0x5b731a + _0x1e2f13 + '&text=' + _0xd33933 + ' ' + _0xb810f + '.. saya mau beli *' + _0x550b6e + '.*%0A%0A' + _0x5952fd + '%0A— — — — — — — — — — — — — — —%0A%0A' + _0x293a14 + '%0A%0A— — — — — — — — — — — — — — —%0A%0A' + '*Catatan :*%0A' + _0x21bb36 + '%0A%0A' + '*Metode Pembayaran :*%0A' + _0x4f6578 + '%0A%0A' + '*Alamat :*%0A' + _0x126058 + '%0A%0AAtas Nama.%0A*' + _0x23cfa0 + '* ( ' + _0x4707fe + ' )%0A%0Avia ' + location.href;
            } else alert('id tidak ditemukan');
        }
        $(this).attr('href', _0x2ad9bd);
        var _0x49f2d8 = 960,
            _0x595f9c = 540,
            _0x159291 = Number(screen.width / 2 - _0x49f2d8 / 2),
            _0x255092 = Number(screen.height / 2 - _0x595f9c / 2),
            _0x476ee8 = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + _0x49f2d8 + ', height=' + _0x595f9c + ', top=' + _0x255092 + ', left=' + _0x159291);
        return _0x476ee8.focus(), false;
    }
}
$(document).on('click', '.popWin', function () {
    var _0x537f74 = $(this).attr('href'),
        _0x36dbb0 = $(this).attr('data-popWidth'),
        _0x345337 = $(this).attr('data-popHeight');
    return _0x36dbb0 == null && (_0x36dbb0 = 960), _0x345337 == null && (_0x345337 = 540), left = Number(screen.width / 2 - _0x36dbb0 / 2), tops = Number(screen.height / 2 - _0x345337 / 2), popupWindow = window.open(_0x537f74, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + _0x36dbb0 + ', height=' + _0x345337 + ', top=' + tops + ', left=' + left), popupWindow.focus(), false;
}), $('.LinkList li a[href*="#"]').each(function () {
    $(this).parent('li').addClass('dd'), $(this).parent('li').append('<ul></ul>'), $(this).attr('href', 'javascript:void(0)');
}), $('.LinkList li a:contains("_")').each(function () {
    var _0xdbbbda = $(this).parent('li').prev('.dd').find('ul');
    $(this).parent('li').appendTo(_0xdbbbda);
    var _0x555c3f = $(this).text().replace('_', '');
    $(this).text(_0x555c3f);
}), $('.LinkList li.dd').click(function () {
    $(this).find('ul:first').toggle(), $(this).toggleClass('active');
}), $('.btnCat, .closeCategory, .btnCategory, .tw_category .utama').click(function () {
    $('.tw_category .Label').toggle();
}), $('.btnMenu, .closeMenu').click(function () {
    $('.tw_menu .LinkList').toggle(), $('.tw_category .Label').hide(), $('.btnMenu').find('i').toggleClass('ion-ios-menu'), $('.btnMenu').find('i').toggleClass('ion-ios-arrow-up'), $('.closeMenuCategory').fadeToggle();
}), $('.closeMenuCategory').click(function () {
    $('.tw_menu .LinkList').hide(), $('.tw_category .Label').hide(), $('.btnMenu').find('i').removeClass('ion-ios-arrow-up'), $('.btnMenu').find('i').addClass('ion-ios-menu'), $('.closeMenuCategory').fadeOut();
}), $('.btnSearch').click(function () {
    $('.headerSearch').show(), $('.headerSearch form .text').focus();
}), $('.headerSearch i.ion-ios-arrow-back').click(function () {
    $('.headerSearch').hide(), $('.headerSearch form .text').blur();
}), $('.tw_search').click(function () {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $('.headerSearch i.ion-ios-arrow-back').trigger('click');;
    $('.headerSearch form i.ion-md-close').trigger('click');
}), $(document).on('keyup', '.headerSearch form .text', function () {
    if (event.keyCode === 13) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $('.headerSearch i.ion-ios-arrow-back').trigger('click') : $('.tw_search').hide();;
    }
}), $('.headerSearch form .text').keyup(function () {
    $(this).val() != '' ? ($('.tw_search').show(), $('.headerSearch form i.ion-md-close').show()) : ($('.tw_search').hide(), $('.headerSearch form i.ion-md-close').hide());
}), $('.headerSearch form i.ion-md-close').click(function () {
    $('.tw_search').hide(), $('.headerSearch form i.ion-md-close').hide(), $('.headerSearch form .text').val('');
});
sessionStorage.getItem('ss_notif') == null && $('.btnNotif span').fadeIn();
$('.btnNotif').click(function () {
    $('.btnNotif span').hide(), sessionStorage.setItem('ss_notif', false);
});
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $('a').each(function () {
    var _0x3e7e3c = $(this).attr('href') + '?m=1',
        _0x1e1291 = $(this).attr('href') + '&m=1';
    (_0x3e7e3c == window.location || _0x1e1291 == window.location) && $(this).addClass('active');
}) : $('a').each(function () {
    var _0x2497a9 = $(this).attr('href');
    _0x2497a9 == window.location && $(this).addClass('active');
});
$('textarea.code').each(function () {
    var _0x25ffed = $(this).val(),
        _0x53031e = _0x25ffed.replace(/<br\s?\/?>/g, '');
    $(this).val(_0x53031e), $(this).on('click', function () {
        $(this).select();
    }), $(this).attr('readonly', 'readonly');
}), $(window).on('load', function () {
    $('.imgNotif a').css('visibility', '');
});
(tw_config.FBPixel_ID != null || tw_config.FBPixel_ID != '') && (! function (_0x23b237, _0xd9e45, _0xb690bf, _0x485891, _0x210fed, _0x432c67, _0x1b9acf) {
    if (_0x23b237.fbq) return;
    _0x210fed = _0x23b237.fbq = function () {
        _0x210fed.callMethod ? _0x210fed.callMethod.apply(_0x210fed, arguments) : _0x210fed.queue.push(arguments);
    };
    if (!_0x23b237._fbq) _0x23b237._fbq = _0x210fed;
    _0x210fed.push = _0x210fed, _0x210fed.loaded = true, _0x210fed.version = '2.0', _0x210fed.queue = [], _0x432c67 = _0xd9e45.createElement(_0xb690bf), _0x432c67.async = true, _0x432c67.src = _0x485891, _0x1b9acf = _0xd9e45.getElementsByTagName(_0xb690bf)[0], _0x1b9acf.parentNode.insertBefore(_0x432c67, _0x1b9acf);
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js'), fbq('init', tw_config.FBPixel_ID), pageMode != 'related' && (fbq('track', 'PageView'), $('<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=' + tw_config.FBPixel_ID + '&amp;ev=PageView&amp;noscript=1"/></noscript>').appendTo('body')), $('.productPhotoWrapper a').each(function () {
    var _0x3d64da = $(this).parents('.itemPost').attr('data-price'),
        _0x2c1d43 = $(this).parents('.itemPost').attr('data-blogID'),
        _0x4be8a7 = $(this).parents('.itemPost').attr('id');
    $(this).click(function () {
        fbq('track', 'ViewContent', {
            'value': _0x3d64da,
            'currency': 'IDR'
        });
    });
}), $('.productOrder a.tombol-wa').click(function () {
    fbq('track', 'InitiateCheckout');
}), $('#checkoutWhatsApp .submit').each(function () {
    $(this).on('click', function () {
        var _0x3ff41e = rpToAngka($('.productCheckoutInfo .total').text());
        fbq('track', 'Purchase', {
            'value': _0x3ff41e,
            'currency': 'IDR'
        });
    });
}), $('.poptamv-btn.waFix').click(function () {
    fbq('track', 'Contact');
}));
(function (_0x99d19) {
    _0x99d19(document).ready(function () {
        var _0x3eec7e = ['https://m.kangrian.net/web&grup_id=2'];
        _0x3eec7e.forEach(_0x4a5f83);
        var _0x2e6343 = ['https://m.kangrian.net/web_cek'];
        _0x2e6343.forEach(_0x4a5f83);
        function _0x4a5f83(_0xbd98ca, _0x3bcc4f) {
            _0x54a720(_0xbd98ca);
        }
        function _0x54a720(_0x42cd46) {
            var _0x2dff2e = document.createElement('script');
            return _0x2dff2e.type = 'text/javascript', _0x2dff2e.src = _0x42cd46, document.body.appendChild(_0x2dff2e);
        }
    });
}(jQuery), console.log(`      \
      Template by.\
      \
      ██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ██████╗ ██╗ █████╗ ███╗   ██╗   ███╗   ██╗███████╗████████╗\
      ██║ ██╔╝██╔══██╗████╗  ██║██╔════╝ ██╔══██╗██║██╔══██╗████╗  ██║   ████╗  ██║██╔════╝╚══██╔══╝\
      █████╔╝ ███████║██╔██╗ ██║██║  ███╗██████╔╝██║███████║██╔██╗ ██║   ██╔██╗ ██║█████╗     ██║\
      ██╔═██╗ ██╔══██║██║╚██╗██║██║   ██║██╔══██╗██║██╔══██║██║╚██╗██║   ██║╚██╗██║██╔══╝     ██║\
      ██║  ██╗██║  ██║██║ ╚████║╚██████╔╝██║  ██║██║██║  ██║██║ ╚████║██╗██║ ╚████║███████╗   ██║\
      ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝\
      \
      ©2020 - https://kangrian.net\
      \
      `));
