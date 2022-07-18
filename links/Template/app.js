
    var linkname = '';
    var linkaddress = '';

    const error = document.getElementById("errorlog");
    const messege = document.getElementById("error-m");

    //Error Log
    document.getElementById('errorx').addEventListener("click", function() {
        error.style.animation = "errorout 0.5s 1";
        error.addEventListener('animationend', function() {error.style = "top: -80px;"});
    })
    function errorman(sms) {
        messege.innerText = sms;
        error.style.animation = "errorin 0.5s 1";
        error.addEventListener('animationend', function() {error.style = "top: 0;"});
    }

    //Add Link Function
    function ToDoInput()
    {
        linkname = window.prompt("Link Name:\nex: Twice");
        linkaddress = window.prompt("Link URL:\nex: https://twice.team");
        
        if (linkname == ''){
            errorman("Link name can't be empty");
        }
        else if (linkaddress == ''){
            errorman("Link URL can't be empty");
        }
        else {
            AddToLinks(linkaddress, linkname);
        }
    }
    
    function AddToLinks(linkurl, linknam) 
    {
        var newlinkli = document.createElement("li");
        var newlink = document.createElement("div");
        newlink.setAttribute("class", "button");

        linkspan = document.createElement("span");
        linkspan.innerText = linknam;
        newlink.appendChild(linkspan);

        linkeditbar = document.createElement("div");
        linkeditbar.setAttribute("class", "edit");
        
            itemspace2 = document.createElement("span");
            itemspace2.setAttribute("class", "edit-item-space");
            itemspace3 = document.createElement("span");
            itemspace3.setAttribute("class", "edit-item-space");

            deletelink = document.createElement("span");
            deletelink.setAttribute("class", "edit-item deletelink");
            deletelink.addEventListener("click", function(){
                newlink.style.animation = "removeitem 0.5s 1";
                newlink.addEventListener('animationend', function() {
                    newlinkli.remove();
                });
            });

            moveup = document.createElement("span");
            moveup.setAttribute("class", "edit-item moveuplink");

            movedown = document.createElement("span");
            movedown.setAttribute("class", "edit-item movedownlink");

        linkeditbar.appendChild(deletelink);
        linkeditbar.appendChild(moveup);
        linkeditbar.appendChild(movedown);
        movedown.before(itemspace2);
        moveup.before(itemspace3);

        newlink.appendChild(linkeditbar);
        newlinkli.appendChild(newlink);
        
        var atag = document.createElement("a");
        atag.setAttribute("href", linkurl);
        atag.setAttribute("style", "display: none;")
        newlinkli.appendChild(atag);
        var ptag = document.createElement("p");
        ptag.innerText = linknam;
        ptag.setAttribute("style", "display: none;");
        newlinkli.appendChild(ptag);
   
        $(function() {
            $('.moveuplink').on('click', function(e) {
                var wrapper = $(this).closest('li')
                wrapper.insertBefore(wrapper.prev())
            })
            $('.movedownlink').on('click', function(e) {
                var wrapper = $(this).closest('li')
                wrapper.insertAfter(wrapper.next())
            })
        })

        document.getElementById("linkul").appendChild(newlinkli);
    }


    window.addEventListener("load", function() {
        var loading = document.getElementById("loading");
        loading.style.animation = "fadeout 1s 1";
        loading.addEventListener('animationend', function() {
                loading.remove();
            });
    });

    document.getElementById("done").addEventListener("click", function(){
        const codevalue = document.getElementById("code");
        if (document.getElementById("name").value == "") { errorman("Name can't be empty");}
        else {codevalue.value = "<!DOCTYPE html> <html lang='en'> <head> <title>" + String(document.getElementById("name").value) + "</title>";
        codevalue.value += '<style>body{width:100%;background-color:#000;background-size:100%;background-position:top;background-repeat:no-repeat;margin:0;padding:0;border:0;font-family:newfont;text-align:center;color:#814883;cursor:default;overflow-x:hidden}#loading{background-color:#2b1d2c;z-index:5;position:absolute;top:0;bottom:0;left:0;right:0;margin:0;border:0;padding:0;transition:.5s}@keyframes fadeout{from{opacity:1}to{opacity:0}}h1{opacity:1;font-size:40px;font-weight:500;position:relative;opacity:.7;margin:0;margin-top:15px;font-family:twice}h1::selection{color:inherit}h2{margin-bottom:20px;margin-top:8px;opacity:.7;letter-spacing:0;font-family:twice}h2::selection{color:inherit}@font-face{font-family:twice;src:url("../antipasto.thin.ttf")}@font-face{font-family:newfont;src:url("../watchword-demo.thin-demo.otf")}.button{width:80%;height:fit-content;border-style:solid;border-color:rgba(180,57,180,.315);background-color:transparent;border-width:2px;font-size:35px;text-align:center;margin:auto;padding:10px;margin-top:30px;cursor:pointer;transition:.3s;display:block;position:relative}a{text-decoration:none;color:inherit}a::selection{color:inherit}.video{background-size:cover;background-position:center;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);height:100%;width:177.77777778vh;width:calc(var(--vh,1vh) * 177.77777778);min-width:100%;min-height:56.25vw}.space-bg{background-size:cover;background-position:center;filter:blur(13px);opacity:.25;z-index:-1;overflow:hidden}.space-bg{background-size:cover;background-position:center;position:fixed;background-color:rgba(223,65,209,.349);top:0;left:0;width:100%;height:100%}h3{text-align:center;font-family:newfont;color:rgba(155,95,155,.719);font-size:40px;margin:0;font-weight:200;margin-top:15px;text-shadow:0 2px 30px #663462,0 -2px 30px #663462,2px 0 30px #663462,-2px 0 30px #663462}@media only screen and (min-width:768px){.button{width:40%}}</style>';
        codevalue.value += '</head> <body>  <a href="https://twice.team/links"><h1>TWICE</h1><h2>LINKS</h2></a> <h3>'+ String(document.getElementById("name").value) +'</h3>';

        var ul = document.getElementById("linkul");
        var ulli = ul.getElementsByTagName("li");
        for (var i = 0; i < ulli.length; ++i){
            codevalue.value += '<a class = "button" href = "' + String(ulli[i].getElementsByTagName("a")[0].getAttribute("href")) + '">' + String(ulli[i].getElementsByTagName("p")[0].innerText) + '</a>';
        }

        codevalue.value += '<div class="space-bg"><video class="video" muted="" loop="" playsinline="" autoplay><source src="../BGvideo.mp4" type="video/mp4"></video></div> </body> </html>';
        $.ajax('https://pooriya007.pythonanywhere.com/links', {
            type: 'POST',  // http method
            data: { pagecode: document.getElementById("code").value,},  // data to submit
            success: function (data, status, xhr) {

            },
            error: function (jqXhr, textStatus, errorMessage) {
                
            }
		});
    }
    });