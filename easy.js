var platfrom = navigator.platfrom

var grab = function (name) {
    return document.querySelector(name)
}

var intext = function (name) {
    return grab(name).innerText
}

var inhtml = function (name){
    return grab(name).innerHTML
}

var src = function (id) {
    return grab(name).src
}

var val = function (name) {
    return grab(name).value
}

var random = function (num) {
    return Math.floor(Math.random() * num)
}

function model(title, text, width, heigth, closetext, backgoundcolor, textcolor) {
    //made by steve
    var close = document.createElement("button")
    close.style.float = "rigth"
    close.style.background = "#222"
    close.style.color = "white"
    close.style.position = "absolute"
    close.style.top = "0px"
    close.style.right = "0px"
    close.style.borderRadius = "100px"
    if (x_text == null) {
        close.innerText = "x"
    } else {
        close.innerText = x_text
    }
    var div = document.createElement("div")
    if (heigth == null) {
        div.style.height = "300px"
    } else {
        div.style.height = heigth
    }
    if (width == null) {
        div.style.width = "500px"
    } else {
        div.style.width = width
    }
    if (backgoundcolor == null) {
        div.style.background = "white"
    } else {
        div.style.background = backgoundcolor
    }
    if (textcolor == null) {
        div.style.color = "black"
    } else {
        div.style.color = textcolor
    }
    div.style.borderRadius = "10px"
    div.style.margin = "0"
    div.style.position = "absolute"
    div.style.top = "50%"
    div.style.left = "50%"
    div.style.transform = "translate(-50%, -50%)"
    div.style.zIndex = "999"
    var titlespan = document.createElement("span")
    titlespan.style.position = "absolute"
    titlespan.style.top = "3px"
    titlespan.style.left = "3px"
    titlespan.style.textTransform = "capitalize"
    titlespan.style.fontSize = "x-large"
    if (title == null) {
        titlespan.innerHTML = " "
    } else {
        titlespan.innerHTML = title
    }
    var span = document.createElement("span")
    span.style.width = "300px"
    span.style.fontSize = "x-large"
    span.style.position = "absolute"
    span.style.top = "50%"
    span.style.left = "50%"
    span.style.transform = "translate(-50%, -50%)"
    span.style.overflow = "hidden"
    span.style.textOverflow = "ellipsis"
    span.style.whiteSpace = "nowrap"
    span.innerHTML = text
    close.addEventListener("click", function () {
        div.remove()
        console.log("model removed")
    })
    div.appendChild(titlespan)
    div.appendChild(close)
    div.appendChild(span)
    document.body.appendChild(div);
    window.scrollTo(0, 0)
}

function ls_s(id, value) {
    localStorage.setItem(id, value);
    return `item ${id} added`
}

function ls_g(id) {
    return localStorage.getItem(id)
}

function ls_r(id) {
    localStorage.removeItem(id)
    return `item ${id} removed`
}

function ls_c() {
    localStorage.clear()
    return "localstoraged is cleared"
}

function ls() {
    return localStorage
}

function hide(id) {
    if (id.includes("#") == true) {
        document.getElementById(id.split("#")[1]).style.display = "none"
    } else {
        document.getElementsByClassName(id.split(".")[1])[0].style.display = "none"
    }
}

function show(id) {
    if (id.includes("#") == true) {
        document.getElementById(id.split("#")[1]).style.display = "block"
    } else {
        document.getElementsByClassName(id.split(".")[1])[0].style.display = "block"
    }
}

class code_ele extends HTMLElement {

    connectedCallback() {
        this.style.background = "rgb(211, 211, 211)"
        this.style.borderRadius = "3px"
        this.style.padding = "0 3px"
        this.style.fontFamily = "courier"
    }

}

class comment extends HTMLElement {

    connectedCallback() {
        this.style.color = "lightslategray"
    }

}

class time extends HTMLElement {

    connectedCallback() {
        var d = new Date()
        this.innerText = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
    }

}

customElements.define("comment-tag", comment);
customElements.define("code-tag", code_ele);
customElements.define("time-tag", time)

function link(url) {
    window.open(url, '_blank');
}

function notify(text) {
    if (!("Notification" in window)) {
      return ("This browser does not support desktop notification");
    }
  
    else if (Notification.permission === "granted") {
      var notification = new Notification(text);
    }
  
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification(text);
        }
      });
    }
}