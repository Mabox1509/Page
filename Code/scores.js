function reqListener ()
{
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

/*
<BR><BR>

        <H2>
            Ranking:
        </H2>

        <TABLE width="500" height="500"  border="0" class="scoreTable">
            <TR>
                
                <TD align="center" width="5%">
                    1.
                </TD>
                <TD width="80%" id="Name_0">
                    Nombre
                </TD>
                <TD width="15%" id="Time_0">
                    Tiempo
                </TD>
            </TR>

            <TR>
                
                <TD align="center" width="5%">
                    2.
                </TD>
                <TD width="80%" id="Name_1">
                    Nombre
                </TD>
                <TD width="15%" id="Time_1">
                    Tiempo
                </TD>
            </TR>

            <TR>
                
                <TD align="center" width="5%">
                    3.
                </TD>
                <TD width="80%" id="Name_2">
                    Nombre
                </TD>
                <TD width="15%" id="Time_2">
                    Tiempo
                </TD>
            </TR>

            <TR>
                
                <TD align="center" width="5%">
                    4.
                </TD>
                <TD width="80%" id="Name_3">
                    Nombre
                </TD>
                <TD width="15%" id="Time_3">
                    Tiempo
                </TD>
            </TR>

            <TR>
                
                <TD align="center" width="5%">
                    5.
                </TD>
                <TD width="80%" id="Name_4">
                    Nombre
                </TD>
                <TD width="15%" id="Time_4">
                    Tiempo
                </TD>
            </TR>

            <TR>
                
                <TD align="center" width="5%">
                    6.
                </TD>
                <TD width="80%" id="Name_5">
                    Nombre
                </TD>
                <TD width="15%" id="Time_5">
                    Tiempo
                </TD>
            </TR>

            <TR>
                
                <TD align="center" width="5%">
                    7.
                </TD>
                <TD width="80%" id="Name_6">
                    Nombre
                </TD>
                <TD width="15%" id="Time_6">
                    Tiempo
                </TD>
            </TR>

            <TR>
                
                <TD align="center" width="5%">
                    8.
                </TD>
                <TD width="80%" id="Name_7">
                    Nombre
                </TD>
                <TD width="15%" id="Time_7">
                    Tiempo
                </TD>
            </TR>

            <TR>
                
                <TD align="center" width="5%">
                    9.
                </TD>
                <TD width="80%" id="Name_8">
                    Nombre
                </TD>
                <TD width="15%" id="Time_8">
                    Tiempo
                </TD>
            </TR>

            <TR>
                
                <TD align="center" width="5%">
                    10.
                </TD>
                <TD width="80%" id="Name_9">
                    Nombre
                </TD>
                <TD width="15%" id="Time_9">
                    Tiempo
                </TD>
            </TR>

        </TABLE>
*/