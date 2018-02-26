window.addEventListener('load', function() {
    var button = document.getElementsByClassName('radio');
    document.getElementById('new-pass').addEventListener('click', function() {
        document.getElementsByClassName('main')[0].style.display = 'block';
        for (var i = 1; i <= 5; i++) {
            if (button[i-1].attributes['aria-selected'].value == 'true') {
                document.getElementsByClassName('pass')[0].value = gen((i*2)+4);
            }
        }
        document.getElementById('new-pass').innerHTML = '&#8635 Refresh';
    });
    for (var i = 0; i < 5; i++) {
        button[i].addEventListener('click', function() {
            var j = this.attributes['value'].value;
            document.getElementsByClassName('pass')[0].value = gen((j*2)+4);
            for (var k = 1; k <= 5; k++) {
                if (k == j) continue;
                else {
                    if (button[k-1].attributes['aria-selected'].value == 'true') {
                        button[k-1].attributes['aria-selected'].value = 'false';
                    }
                }
            }
            this.attributes['aria-selected'].value = 'true';
        });
    }
    document.getElementsByClassName('copy')[0].addEventListener('click', function() {
        var text = document.getElementsByClassName('pass')[0];
        text.disabled = false;
        text.select();
        text.disabled = true;
        document.execCommand('Copy');
        document.getElementsByClassName('toast')[0].style.bottom = '0';
        setTimeout(function() {
            document.getElementsByClassName('toast')[0].style.bottom = '-1.6rem';
        }, 3000);
    });
});