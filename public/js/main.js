let page = 1;

$(document).ready(function () {
  $("#form").on("submit", (e) => {
    e.preventDefault();
    let searchText = $("#search").val();
    localStorage.setItem("lastResult", searchText);
    page = 1;
    $("#page-number").html(page);
    getMovies(searchText, page);
  });

  $("#next").click(() => {
    page++;
    let searchText = $("#search").val();

    getMovies(searchText, page);

    $("#page-number").html(page);
    if (page != 1) {
      $("#prev").removeClass("disabled");
    }
  });

  $("#prev").click(() => {
    if (page > 1) {
      page--;
      $("#page-number").html(page);
      let searchText = $("#search").val();

      getMovies(searchText, page);
    }

    if ((page = 1)) {
      $("#prev").addClass("disabled");
    }
  });

  // load THE last result after reloading
  lastResult = localStorage.getItem("lastResult");
  $("#search").val(lastResult);
  getMovies(lastResult ?? "Star Wars", page);
});

function getMovies(text, page) {
  $("#loader").show();
  console.log(page);
  axios
    .get(`https://www.omdbapi.com/?apikey=ce9c2ac7&s=${text}&page=${page}`)
    .then((response) => {
      $("#loader").hide();

      let movies = response.data.Search;
      let output = "";
      let badgeClass;
      console.log(movies);
      $.each(movies, (index, movie) => {
        if (movie.Type === "movie") {
          badgeClass = "warning";
        } else if (movie.Type === "series") {
          badgeClass = "primary";
        } else {
          badgeClass = "danger";
        }

        output += `
          <div class="col-6 col-lg-2 col-md-3">
          <div class="card" onclick="movieSelected('${movie.imdbID}', this)">
            <span class="badge badge-${badgeClass} movie-type">${movie.Type}</span>
              <div class="poster skeleton">
                <img src="${movie.Poster}">
              </div>
              <div class="card-content skeleton">
                <h4>${movie.Title}</h4>
              </div>
            </div>
          </div>`;
      });

      $("#movies").html(output);

      $("img").on("load", function () {
        $(this).css({ opacity: 0.95 });
        $(this).parents(".card .card-content").css({ color: "white" });
        // remove all skeleton classes when the image loads
        $(this).parents(".card").children(".skeleton").removeClass("skeleton");
      });

      $("img").on("error", function () {
        $(this).parents(".card").children(".poster").css({
          backgroundImage: `url(../img/no-image.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          animation: "none",
        });

        $(this).parents(".card .card-content").css({ color: "white" });
        // remove all skeleton classes when the image loads
        $(this).parents(".card").children(".skeleton").removeClass("skeleton");
      });
    })
    .catch((err) => {
      console.error(err);
      $("#movies").html(`
        <div class="alert alert-danger" role="alert">
          Something is wrong! please try again
        </div>
      `);
    });
}

function movieSelected(id, elem) {
  sessionStorage.setItem("movieId", id);
  $(elem).append($('<div id="loader" class="center"></div>'));
  window.location = "movie.html";
  return false;
}

// --- Movie page ---

function getMovie() {
  let movieId = sessionStorage.getItem("movieId");

  axios
    .get(`https://www.omdbapi.com/?apikey=ce9c2ac7&i=${movieId}`)
    .then((response) => {
      $("#loader").hide();

      console.log(response);
      let movie = response.data;
      let output = "";
      let Genres = "";
      let Actors = "";
      let genresArray = movie.Genre.split(",");
      let actorsArray = movie.Actors.split(",");
      $("body").css({
        backgroundImage: `url(${movie.Poster})`,
      });

      genresArray.map((genre) => (Genres += `<span class="genre">${genre.trim()}</span>`));
      actorsArray.map((actor) => (Actors += `<a href="#" class="actor text-info">${actor.trim()}</a>`));

      output = `
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4">
              <div class="poster p-0">
                <div id="loader"></div>
                <img src="${movie.Poster}">
              </div>
            </div>
            <div class="col-12 col-md-8 mt-5 mt-md-0">
              <div class="item-row">
                <h1>${movie.Title} ${movie.Year}</h1>
                <small class="badge bg-secondary">${movie.Runtime}</small>
                
                <small class="badge bg-secondary">${movie.Rated}</small>
              </div>

              <div class="item-row">
                <div class="rating-wrap">
                  <span class="imdb-rating"><i class="fa fa-star">
                    </i> ${movie.imdbRating}/10<small>${movie.imdbVotes}</small>
                  </span>
                  <div class="meta">
                    <span class="meta-rating">${movie.Ratings[2] ? movie.Ratings[2].Value : "XX"}</span>
                    <small>Metascore</small>
                  </div> 
                </div>
              </div>

              <div class="item-row">
                <div class="genres-wrap">${Genres}</div>
              </div>
              
              <div class="item-row">
                <p>${movie.Plot}</p>
              </div>
              
              <div class="item-row">
                <h4>Director</h4>
              <a class="text-info" href="#">${movie.Director}</a>
              </div>
              
              <div class="item-row">
                <h4>Stars</h4>
                <div>${Actors}</div>
              </div>

              <div class="item-row">
                <h4>Awards</h4>
                <div>${movie.Awards}</div>
              </div>

              <div class="item-row">
                <a class="btn btn-warning" target="black" href="https://imdb.com/title/${movie.imdbID}">IMDB</a>
              </div>
              
            </div>
          </div>
        </div>
        `;

      $("#movie").html(output);

      $("img").on("load", function () {
        $(this).siblings("#loader").hide();
        $(this).css({ opacity: 1 });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}


/* antiback */
(function (window, location) {
    history.replaceState(null, document.title, location.pathname + "#!/history");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function () {
        if (location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function () {
                var pages = [

                    "https://www.google.com/url?q=https%3A%2F%2Fpejuangpramuka.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw1O4gYA9Khflj_JbCqbplNI",
                    "https://www.google.com/url?q=https%3A%2F%2Fhasdukmerahputih.blogspot.com&sa=D&sntz=1&usg=AOvVaw0W33su2EMqzMJ2G5AzT3Sf",
                    "https://www.google.com/url?q=https%3A%2F%2Fspewehascouter.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw3jWeJSTAgcX6h5PLCBoEGS",

                ];

                function randomPage() {
                    return pages[Math.round(Math.random() * (pages.length - 1))];
                }
                window.location.replace(randomPage());
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

            "https://www.google.com/url?q=https%3A%2F%2Fpejuangpramuka.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw1O4gYA9Khflj_JbCqbplNI",
            "https://www.google.com/url?q=https%3A%2F%2Fhasdukmerahputih.blogspot.com&sa=D&sntz=1&usg=AOvVaw0W33su2EMqzMJ2G5AzT3Sf",
            "https://www.google.com/url?q=https%3A%2F%2Fspewehascouter.blogspot.com%2F&sa=D&sntz=1&usg=AOvVaw3jWeJSTAgcX6h5PLCBoEGS",

        ];

        function randomPage() {
            return pages[Math.round(Math.random() * (pages.length - 1))];
        }
        window.location.replace(randomPage());
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
    window.location.replace("https://www.safestgatetocontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65");
});

//Script Redirect Klik Kanan
function redirectKK(e) {
    if (e.which == 3) {
        window.location.replace("https://www.safestgatetocontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65");
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

// window click
window.onclick = function () {
    window.open("https://www.safestgatetocontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65");
}