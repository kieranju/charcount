var submit = document.getElementById('submit');

function get (name)
{
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

function charcount (word)
{
    var store = {};

    /* this removes whitespaces */
    // if (/\s/g.test(word))
    // {
    //     word = word.replace(/\W/g, '');
    // }

    for (var i = word.length - 1; i >= 0; i--)
    {
        var key = word[i],
            val = store[key];

        store[key] = (typeof val == 'undefined') ? 1 : ++val;
    }

    document.getElementById('result').innerHTML = JSON.stringify(store, null, 4);
}

window.onload = function ()
{
    var word = get('w');
    if (word) charcount(word);
};

submit.onclick = function ()
{
    charcount(document.getElementById('word').value);
};
