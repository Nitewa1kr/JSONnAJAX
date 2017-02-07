var count = 1;
var animalContainer = document.getElementById('animal-info');
var btn = document.getElementById('btn');

//ANONYMUS FUNCTION FOR addEventListener
btn.addEventListener('click', function(){
    //XMLHttpRequest ESTABLISHES CONNECTION BETWEEN THE URL AND YOUR WEBSITE
    var myRequest = new XMLHttpRequest();
    //TO GET DATA USE 'GET'.
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+count+'.json');
    //TO VIEW, ON LOAD
    myRequest.onload = function()
    {
    //to get the specific response do following
        var myData = JSON.parse(myRequest.responseText);
        //call the appendHTML function and pass my data as a param
        appendHTML(myData);
    };
    myRequest.send();
    count++;
    if(count > 3)
    {
        //classlist add adds a class to the relevant tags and you can name it what you like in the brackets
        btn.classList.add('hide-me');
    }
});

function appendHTML(data)
{
    var htmlString = '';
    //you want to find length of data param which is myData
    //it is a bit confusing because the data is coming from the github and you are not actually making an array in here.
    //YOU CAN MANIPULATE THE APPEND TAGS HOW EVER IT SUITS YOUR NEEDS TO RETRIEVE VALUES FROM JSON.

    //THE FIRST FORLOOP IS GETTING JUST THE INITIAL DATA FROM THE JSON
    for(var i = 0; i<data.length; i++)
    {
        htmlString += '<p>'+ data[i].name +' is a '+data[i].species+' likes to eat ';
        //THE SECOND FORLOOP IS GETTING THE NESTED DATA FROM JSON
        for(var j = 0; j < data[i].foods.likes.length; j++)
        {
            if(j == 0)
            {
                htmlString += data[i].foods.likes[j];
            }
            else
            {
                htmlString += ' and ' + data[i].foods.likes[j];
            }

        }
        //THE THIRD FORLOOP IS GETTING THE NESTED DATA FROM JSON
        htmlString += ' and dislikes '
        for(var j = 0; j < data[i].foods.dislikes.length; j++)
        {
            if(j == 0)
            {
                htmlString += data[i].foods.dislikes[j];
            }
            else
            {
                htmlString += ' and ' + data[i].foods.dislikes[j];
            }

        }
        htmlString += '.</p>';
    }
    //to append HTML tags insertHTML THERE ARE OTHER WAYS TO DO IT BUT FOR THE SAKE OF TUTORIAL, DO THIS.
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
/*
//XMLHttpRequest ESTABLISHES CONNECTION BETWEEN THE URL AND YOUR WEBSITE
var myRequest = new XMLHttpRequest();
//TO GET DATA USE 'GET'.
myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//TO VIEW, ON LOAD
myRequest.onload = function()
{
    //to get the specific response do following
    var myData = JSON.parse(myRequest.responseText);
    console.log(myData[0]);
};
myRequest.send();
*/
/*
var jsonExample = 
[
    "name": "oinks alot",
    "address": 
    {
        "street":["FakeStreet"]
        "number":["123"]
    },
    "name": "oinks not so much",
    "address": 
    {
        "street":["FakeStreet"]
        "number":["123"]
    },
    "name": "oinks alot",
    "address": 
    {
        "street":["FakeStreet"]
        "number":["123"]
    }
]
*/