function (idToken) {
    $.ajax({
        url: '/main',
        headers: {
            Authorization: 'Bearer ' + idToken
        },
        processData: false,
    }).done(function (data) {
        localStorage.setItem('name', data.name);
        //or whatever you want done.
    }).fail(function (jqXHR, textStatus) {
        var msg = 'Unable to fetch protected resource';
        msg += '<br>' + jqXHR.status + ' ' + jqXHR.responseText;
        if (jqXHR.status === 401) {
            msg += '<br>Your token may be expired'
        }
        displayError(msg);
    });