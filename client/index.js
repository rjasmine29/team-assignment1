const h = document.querySelector('#h');
const form = document.querySelector('form');


//if user press enter then it will search
searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search()
    }
});

function search() {
    const input = h.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1CHBF_en-GBGB973GB973&sxsrf=AOaemvLcYexzonMp7DbwEWR87V_Y-S63Mg%3A1637187919582&ei=T4GVYZjfIqXnsAeqo7OgAQ&gs_ssp=eJzj4tTP1TcwqUw3SFdgNGB0YPDiKs6uVCguyC8qKQYAYUEHwg&oq=sky&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCC4QxwEQ0QMQJzIECCMQJzIECC4QQzIKCC4QxwEQowIQQzINCC4QsQMQxwEQ0QMQQzIKCAAQsQMQgwEQQzIECC4QQzIECAAQQzIOCC4QgAQQsQMQxwEQrwEyBAgAEEM6BwgjELADECc6BwgAEEcQsAM6EAguEMcBEKMCEMgDELADEEM6CgguEMgDELADEEM6DgguEIAEELEDEMcBEKMCOgsIABCABBCxAxCDAToHCAAQsQMQQzoKCC4QxwEQ0QMQQ0oFCDgSATFKBAhBGABQ7R9Yky5g7TloAnACeACAAV-IAdECkgEBNJgBAKABAcgBD8ABAQ&sclient=gws-wiz"
}

