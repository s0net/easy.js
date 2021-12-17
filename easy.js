document.addEventListener("DOMContentLoaded", function (event) {
    var platfrom = navigator.platfrom

    function ele_id(name) {
        return document.getElementById(name)
    }

    function eles_class(name) {
        return document.getElementsByClassName(name)
    }

    function eles_tagname(name) {
        return document.getElementsByTagName(name)
    }

    function ele(name) {
        if (name.includes("#") == true) {
            return document.getElementById(name.split("#")[1])
        } else if (name.includes(".") == true) {
            return document.getElementsByClassName(name.split(".")[1])
        } else {
            return "put '.' for first element with the class name example .classname else put a # for a element by id example #id"
        }
    }

    function intext(id) {
        if (id.includes("#") == true) {
            return document.getElementById(id.split("#")[1]).innerText
        } else {
            return document.getElementsByClassName(id.split(".")[1]).innerText
        }
    }

    function intext_s(id, data) {
        if (id.includes("#") == true) {
            document.getElementById(id.split("#")[1]).innerText = data
            return "done"
        } else {
            document.getElementsByClassName(id.split(".")[1]).innerText = data
            return "done"
        }
    }

    function inhtml(id) {
        if (id.includes("#") == true) {
            return document.getElementById(id.split("#")[1]).innerHTML
        } else {
            return document.getElementsByClassName(id.split(".")[1]).innerHTML
        }
    }

    function inhtml_s(id, data) {
        if (id.includes("#") == true) {
            document.getElementById(id.split("#")[1]).innerHTML = data
            return "done"
        } else {
            document.getElementsByClassName(id.split(".")[1])[0].innerHTML = data
            return "done"
        }
    }

    function src(id) {
        if (id.includes("#") == true) {
            return document.getElementById(id.split("#")[1]).src
        } else {
            return document.getElementsByClassName(id.split(".")[1]).src
        }
    }

    function src_s(id, data) {
        if (id.includes("#") == true) {
            document.getElementById(id.split("#")[1]).src = data
            return "done"
        } else {
            document.getElementsByClassName(id.split(".")[1]).src = data
            return "done"
        }
    }

    function val_s(id, data) {
        if (id.includes("#") == true) {
            document.getElementById(id.split("#")[1]).value = data
            return "done"
        } else {
            document.getElementsByClassName(id.split(".")[1]).value = data
            return "done"
        }
    }

    function random(num) {
        return Math.floor(Math.random() * num)
    }

    function random_img() {
        return `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`
    }

    function model(title, text, width, heigth, x_text, backgoundcolor, textcolor) {
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
        div.style.border = "4px solid teal"
        div.style.borderRadius = "10px"
        div.style.margin = "0"
        div.style.position = "absolute"
        div.style.top = "50%"
        div.style.left = "50%"
        div.style.transform = "translate(-50%, -50%)"
        div.style.zIndex = "999"
        div.style.fontFamily = "Franklin Gothic Medium"
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

    class type_Writer extends HTMLElement {

        connectedCallback() {
            var txt = this.innerText;
            var speed = 50;

            if (i < txt.length) {
                this.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

    }

    customElements.define("comment-tag", comment);
    customElements.define("code-tag", code_ele);
    customElements.define("time-tag", time)
    customElements.define("type-writer", type_Writer)

    function link(url) {
        window.open(url, '_blank');
    }

    function typeWriter(element, txt) {
        var i = 0;
        var speed = 50;
        if (i < new String(txt).length) {
            element.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
});