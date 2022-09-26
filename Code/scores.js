function reqListener ()
{
    console.log();
    var scores = JSON.parse(this.responseText);

    for(var i = 0;i < 10 ;i++)
    {
        var nameObj = document.getElementById("Name_"+i);
        var timeObj = document.getElementById("Time_"+i);

        nameObj.innerHTML = scores[i].name;
        
        var hours = String(scores[i].hours).padStart(2, '0');
        var minutes = String(scores[i].minutes).padStart(2, '0');
        var seconds = String(scores[i].seconds).padStart(2, '0');

        timeObj.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
}
  
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://144.217.6.14:5514/getScores");
req.send();