/* setInnerHTML: sets the inner html of an element. */
function setInnerHTML (id, markup) {
  /* get the element. */
  var el = document.getElementById (id);

  /* set the inner html. */
  el.innerHTML = markup;
}

/* setPosition: sets the position of an HTML element. */
function setPosition (id, x, y) {
  /* get the element. */
  var el = document.getElementById (id);

  /* set the position of the element. */
  el.style.left = x + "px";
  el.style.top = y + "px";
}

/* setWidth: sets the width of an HTML element. */
function setWidth (id, w) {
  /* get the element. */
  var el = document.getElementById (id);

  /* set the wdith of the element. */
  el.style.width = w + "px";
}

/* setHeight: sets the height of an HTML element. */
function setHeight (id, h) {
  /* get the element. */
  var el = document.getElementById (id);

  /* set the wdith of the element. */
  el.style.height = h + "px";
}

/* setDimension: sets the size of an HTML element. */
function setDimension (id, w, h) {
  /* get the element. */
  var el = document.getElementById (id);

  /* set the size of the element. */
  el.style.width = w + "px";
  el.style.height = h + "px";
}

/* setSrc: sets the src attribute of an HTML element. */
function setSrc (id, src) {
  /* get the element. */
  var el = document.getElementById (id);

  /* set the wdith of the element. */
  el.src = src;
}

/* showElement: sets an element as visible. */
function showElement (id) {
  /* get the element. */
  var el = document.getElementById (id);

  /* show the element. */
  el.style.display = "block";
}

/* hideElement: sets an element as invisible. */
function hideElement (id) {
  /* get the element. */
  var el = document.getElementById (id);

  /* hide the element. */
  el.style.display = "none";
}

/* createRequest: creates an ajax request object. */
function createRequest () {
  /* try any and all means available. */
  try { return new XMLHttpRequest (); } catch (e) {}
  try { return new ActiveXObject ("Msxml2.XMLHTTP.6.0"); } catch (e) {}
  try { return new ActiveXObject ("Msxml2.XMLHTTP.3.0"); } catch (e) {}
  try { return new ActiveXObject ("Msxml2.XMLHTTP"); } catch (e) {}
  try { return new ActiveXObject ("Microsoft.XMLHTTP"); } catch (e) {}

  /* no support exists. */
  return null;
}

/* handleResponse: handles an ajax tooltip request response. */
function handleResponse (request, suffix) {
  /* make sure the response is a successful one. */
  if (request.readyState == 4 && request.status == 200) {
    /* set the inner html of the tooltip div. */
    setInnerHTML ("lightboxText", request.responseText);
    showElement ("lightboxText");
  }
}

/* sendRequest: sends an ajax tooltip request. */
function sendRequest (project, suffix) {
  /* create a request. */
  var request = createRequest ();

  /* only works if we got an object. */
  if (request) {
    /* send an async request. */
    request.open ("GET",
      "../res/wrap/tip.php?p=" + project + "&f=" + suffix, true);
    request.onreadystatechange = function () {
      handleResponse (request, suffix);
    };
    request.send (null);
  }
}

/* showLightbox: initializes and shows the lightbox with a given image. */
function showLightbox (project, filename, w, h) {
  /* set the lightbox image size. */
  setDimension ("lightboxImage", w, h);

  /* calculate the lightbox image coordinates. */
  var x = window.innerWidth / 2.0 - (w / 2.0);
  var y = window.innerHeight / 2.0 - (h / 2.0);

  /* set the lightbox image coordinates. */
  setPosition ("lightboxImage", x, y);

  /* set the lightbox title coordinates. */
  setPosition ("lightboxTitle", x + 20, y + 20);

  /* set the lightbox text coordinates and width. */
  setPosition ("lightboxText", x, y + h);
  setWidth ("lightboxText", w);

  /* set the lightbox image source. */
  setSrc ("lightboxImage", filename);

  /* set the lightbox title text string. */
  setInnerHTML ("lightboxTitle", filename);

  /* set the lightbox text strings. */
  setInnerHTML ("lightboxText", "");

  /* send off for the tooltip. */
  sendRequest (project, filename);

  /* show the lightbox elements. */
  showElement ("lightboxDiv");
  showElement ("lightboxTitle");
  showElement ("lightboxImage");
}

/* hideLightbox: hides the lightbox. */
function hideLightbox () {
  /* hide the lightbox elements. */
  hideElement ("lightboxDiv");
  hideElement ("lightboxText");
  hideElement ("lightboxTitle");
  hideElement ("lightboxImage");
}

/* scrollToId: scroll the page to a given DOM element. */
function scrollToId (idStr) {
  /* look up the element and scroll to it. */
  var el = document.getElementById(idStr);
  el.scrollIntoView();
}

window.onload = function () {
  var heads = document.getElementsByTagName ("h1");
  var str = "";

  for (var i = 0; i < heads.length; i++) {
    var headId = heads[i].id;
    var headStr = '<a onclick="scrollToId(\'' +
                  headId + '\');"><p class="seclink">' +
                  headId + '</p></a>';

    str = str + headStr;
  }

  setInnerHTML ("sidebar", str);
  showElement ("sidebar");
};
