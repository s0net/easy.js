<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="a js tool">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <meta name="copyright" content="steve">
    <meta name="author" content="steve">
    <meta property="og:title" content="EASY.js">
    <meta property="og:url" id="og_url" content="easy-js-doc.web.app">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://storage.googleapis.com/steve-network.appspot.com/icon.png">
    <meta property="og:description" content="a js tool for making your js file shorter">

    <link rel="stylesheet" href="style.css">
    <title>easy.js</title>

    <script type="module" id="script">
        import * as easyjs from "http://localhost:5000/public/easy.js";
        easyjs.model("title", "text to put inside", "width in css like 100vh", "heigth again in css like 600px", "close button text", "backgound color in css", "text color in css you can use hex rgb or css colors")
    </script>
</head>

<body>
    <div class="main-body">
        <nav id="navbar">
            <header>Documentation Menu</header>
            <a href="#Intro" class="nav-link">
                what is easy js
            </a>
            <a href="#gettingelements" class="nav-link">
                getting elements using easy.js
            </a>
            <a href="#random" class="nav-link">
                random numbers
            </a>
            <a href="#random-pic" class="nav-link">
                random images
            </a>
            <a href="#platfrom" class="nav-link">
                platfrom
            </a>
        </nav>

        <main id="main-doc">
            <section class="main-section" id="Intro">
                <header id="foo">
                    What is easy.js?
                </header>
                <p>
                    easy js is a tool to make your javascript less better and easy <br>
                    with easy js you can do stuff like model box using one line other than 70!!!
                </p>
                <p>
                    <br>Let us now look a example program :<br>
                </p>
                <code contenteditable="true">
                    <span class="purple">import</span> * as easyjs from "../node/easy.js"
                    <br>
                    easyjs.model("hello world", "i made this model by &lt;br&gt;using easy.js", "css width", "css heigth",
                    "close", "background color", "text color")
                    <br>
                    <span class="code">//you can use null to put the defalt value</span>
                    <br>
                    <span class="code">//you can use any heigth and width and close text</span>
                    <br>
                    <span class="code">//you can use any background and text defalt is text=black
                        background=white</span>
                    <br>
                    <span class="code">//open the console and try using it</span>
                    <br>
                </code>
            </section>
            <br>
            <br>
            <section class="main-section" id="gettingelements">
                <header>
                    getting elements using easy.js
                </header>
                <p>
                    <b class="cooltext">
                        using easy.js you can get elements by DOM much easier
                        <br>
                        easy.js give ten options alternatives for DOM
                    </b>
                    <br>
                    <header class="small">
                        ele()
                    </header>
                    <p>
                        use ele("#id") to get an element by id
                        <br>
                        example
                        <code contenteditable="true" id="spam">
                            <span class="purple">import</span> * as easyjs from "../node/easy.js"
                            <br>
                            easyjs.ele("#spam")
                            <br>
                            <span class="code">//try this in console</span>
                        </code>
                        use ele(".id") to get an element by id(first element with that class)
                        <br>
                        example
                        <code contenteditable="true" class="spam">
                            <span class="purple">import</span> * as easyjs from "../node/easy.js"
                            <br>
                            easyjs.ele(".spam")
                            <br>
                            <span class="code">//try this in console</span>
                        </code>
                    </p>
                    <header class="small">
                        ele_id()
                    </header>
                    <p>
                        use ele_id("id") to get an element by id
                        <br>
                        example
                        <code contenteditable="true" id="eggs">
                            <span class="purple">import</span> * as easyjs from "../node/easy.js"
                            <br>
                            easyjs.ele_id("eggs")
                            <br>
                            <span class="code">//try this in console</span>
                        </code>
                    </p>
                </p>
                <header class="small">
                    eles_class()
                </header>
                <p>
                    use ele_class("classname") to get all elements using a classname
                    <br>
                    example
                    <code contenteditable="true" class="eggs">
                        import * as easyjs from "../node/easy.js"
                        <br>
                        easyjs.eles_class("eggs")
                        <br>
                        <span class="code">//try this in console</span>
                    </code>
                </p>
                <header class="small">
                    easyjs.eles_tagname()
                </header>
                <p>
                    use eles_tagname(name) to get all elements using that tag name
                    <br>
                    example
                    <code contenteditable="true">
                        <span class="purple">import</span> * as easyjs from "../node/easy.js"
                        <br>
                        easyjs.eles_tagname("code")
                        <br>
                        <span class="code">//try this in console</span>
                    </code>
                </p>
                <header class="small">
                    intext()
                </header>
                <p>
                    use intext(".classname"/"#id") to get the inner text of a element with a id/classname
                    <br>
                    example
                    <code contenteditable="true">
                        import * as easyjs from "../node/easy.js"
                        <br>
                        easyjs.intext("#foo")
                        <br>
                        <span class="code">//try this in console</span>
                    </code>
                </p>
                <header class="small testy">
                    intext_s()
                </header>
                <p>
                    use intext_s(".classname"/"#id" , "text to replace") to set the inner text of a element with a
                    id/classname
                    <br>
                    example
                    <code contenteditable="true">
                        <span class="purple">import</span> * as easyjs from "../node/easy.js"
                        <br>
                        easyjs.intext_s(".testy", "text changed")
                        <br>
                        <span class="code">//try this in console</span>
                    </code>
                </p>
                <header class="small">
                    inhtml()
                </header>
                <p>
                    use inhtml(".classname"/"#id") to get the inner html of a element with a id/classname
                    <br>
                    example
                    <code contenteditable="true">
                        import * as easyjs from "../node/easy.js"
                        <br>
                        easyjs.inhtml("#foo")
                        <br>
                        <span class="code">//try this in console</span>
                    </code>
                </p>
                <header class="small la">
                    inhtml_s()
                </header>
                <p>
                    use inhtml_s(".classname"/"#id", "changed") to change the inner html of a element with a
                    id/classname
                    <br>
                    example
                    <code contenteditable="true">
                        <span class="purple">import</span> * as easyjs from "../node/easy.js"
                        <br>
                        easyjs.inhtml_s(".la", "cool?")
                        <br>
                        <span class="code">//try this in console</span>
                    </code>
                </p>
                <header class="small">
                    src()
                </header>
                <p>
                    use src(".classname"/"#id") to get the src arrtibute of a element with a id/classname
                    <br>
                    example
                    <code contenteditable="true">
                        import * as easyjs from "../node/easy.js"
                        <br>
                        easyjs.src("#script")
                        <br>
                        <span class="code">//try this in console</span>
                    </code>
                </p>
                <header class="small bar">
                    src_s()
                </header>
                <p>
                    use src_s(".classname"/"#id") to set the src arrtibute of a element with a id/classname
                    <br>
                    example
                    <code contenteditable="true">
                        <span class="purple">import</span> * as easyjs from "../node/easy.js"
                        <br>
                        easyjs.src_s(".bar", "./easy.js")
                        <br>
                        <span class="code">//try this in console</span>
                    </code>
                </p>
            </section>
            <br>
            <section class="main-section" id="random">
                <header>
                    random
                </header>
                <p>
                    easyjs.random(till the number you want)
                </p>
                <p>
                    <br>Let us now look a example program :<br>
                </p>
                this is used to get a random number till the number you want
                <code contenteditable="true">
                    <span class="purple">import</span> * as easyjs from "../node/easy.js"
                    <br>
                    easyjs.random(100)
                    <br>
                    <span class="code">//try this in console</span>
                </code>
            </section>
            <br>
            <section class="main-section" id="random-pic">
                <header>
                    easyjs.random picture
                </header>
                <p>
                    is used to get a random picture this will retrun a url
                </p>
                <p>
                    <br>Let us now look a example program :<br>
                </p>
                <code contenteditable="true">
                    <span class="purple">import</span> * as easyjs from "../node/easy.js"
                    <br>
                    easyjs.random_img()
                    <br>
                    <span class="code">//try this in console</span>
                </code>
            </section>
            <br>
            <section class="main-section" id="platfrom">
                <header>
                    platfrom
                </header>
                <p>
                    this is a var to get the users platfrom like win32
                </p>
                <p>
                    <br>Let us now look a example program :<br>
                </p>
                <code contenteditable="true">
                    <span class="purple">import</span> * as easyjs from "../node/easy.js"
                    <br>
                    console.log(easyjs.platfrom)
                    <br>
                    <span class="code">//try this in console</span>
                </code>
            </section>
            <br>
            <section class="main-section" id="model">
                <header>
                    model
                </header>
                <p>
                    use this to make a model box in html
                </p>
                <p>
                    <br>Let us us see all the options with the help of a code example :<br>
                </p>
                <code contenteditable="true">
                    <span class="purple">import</span> * as easyjs from "../node/easy.js"
                    <br>
                    easyjs.model("title", "text to put inside", "width in css like 100vh", "heigth again in css like 600px", "close button text", "backgound color in css", "text color in css you can use hex rgb or css colors")
                    <br>
                    <span class="code">//try this in console</span>
                </code>
            </section>
        </main>
    </div>
</body>

</html>
