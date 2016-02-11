
/* subtotal: global variable for filling costs into BOM tables. */
var subtotal = 0.0;

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

/* showLightbox: initializes and shows the lightbox with a given image. */
function showLightbox (project, filename, url, width, height, tip) {
  /* set the lightbox image size. */
  setDimension ("lightboxImage", width, height);

  /* calculate the lightbox image coordinates. */
  var x = window.innerWidth / 2.0 - (width / 2.0);
  var y = window.innerHeight / 2.0 - (height / 2.0);

  /* set the lightbox image coordinates. */
  setPosition ("lightboxImage", x, y);

  /* set the lightbox title coordinates. */
  setPosition ("lightboxTitle", x + 20, y + 20);

  /* set the lightbox text coordinates and width. */
  setPosition ("lightboxText", x, y + height);
  setWidth ("lightboxText", width);

  /* set the lightbox image source. */
  setSrc ("lightboxImage", url);

  /* set the lightbox title text string. */
  setInnerHTML ("lightboxTitle", filename);

  /* set the lightbox text strings. */
  setInnerHTML ("lightboxText", tip);

  /* show the lightbox elements. */
  showElement ("lightboxDiv");
  showElement ("lightboxText");
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

/* completeSidebar: complete the page sidebar, if it exists. */
function completeSidebar () {
  /* check if the sidebar exists. */
  var sb = document.getElementById ("sidebar");
  if (!sb) { return; }

  /* look up all <h1> tags in the document. */
  var heads = document.getElementsByTagName ("h1");
  if (!heads) { return; }

  /* initialize the sidebar html content string. */
  var str = "";

  /* loop over each tag. */
  for (var i = 0; i < heads.length; i++) {
    /* build a link string from the tag id. */
    var headId = heads[i].id.replace ("-", " ");
    var headStr = '<a href="#" onclick="scrollToId(\'' +
                  headId + '\'); return false;">' +
                  '<p class="seclink">' + headId + '</p></a>';

    /* add the link string to the final string. */
    str = str + headStr;
  }

  /* update the contents of the sidebar div and make it visible. */
  setInnerHTML ("sidebar", str);
  showElement ("sidebar");
}

/* completeTables: complete all bills of materials, if any exist. */
function completeTables () {
  /* look up all bom total and subtotal table cells. */
  var cells = document.getElementsByClassName("bom total");
  if (!cells) { return; }

  /* loop over each tag. */
  for (var i = 0; i < cells.length; i++) {
    /* extract the bits of information from the cell. */
    var fields = cells[i].innerHTML.split(',');

    /* update the subtotal variable. */
    var price = fields[0] * fields[1];
    subtotal += price;

    /* check what kind of operation must be performed. */
    if (fields[2] == "i") {
      /* print the subtotal. */
      cells[i].innerHTML = price.toFixed(2);
    }
    else if (fields[2] == "r") {
      /* reset the subtotal. */
      cells[i].innerHTML = '<strong>' + subtotal.toFixed(2) + '</strong>';
      subtotal = 0.0;
    }
  }
}

/* window.onload: perform intelligent page content completion. */
window.onload = function () {
  completeSidebar ();
  completeTables ();
};
