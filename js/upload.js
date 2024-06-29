function reportInfo(vars, showType = false) {
    if (showType === true) console.log(typeof vars);
    console.log(vars);
}

function addImg(ele, content) {
    var myDIV = document.querySelector(ele);
    var newContent = document.createElement('div');
    newContent.innerHTML = content;

    while (newContent.firstChild) {
        myDIV.appendChild(newContent.firstChild);
    }
}

var feedback = function(res) {
    reportInfo(res, true);
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        var get_id = get_link.substr(20);
        get_id = get_id.slice(-get_id.length,-4)
        var content =
        '<h2>Sharing Code :- <code>'+ get_id +'</code> </h2><br>Sharing Image Link : ' + '<br><input class="image-url" class="btn btn-outline-success" value=\"https://sh20raj.github.io/Gurimg/image/?id=' + get_id + '\"/><br><hr><br>Direct Image Link : ' + '<br><input class="image-url" class="btn btn-outline-success" value=\"' + get_link + '\"/><br><br><hr>' 
             + '<img class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/>';
        addImg('.status', content);
    }
};

new Imgur({
    clientid: '6db47bd7029562d', //You can change this ClientID
    callback: feedback
});
