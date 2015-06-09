var submit = document.getElementById('submit');

submit.onclick = function()
{
    var store = {};

    var input = document.getElementById('word'),
        word = input.value;

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
};
