
function GetHottestDay(){

    var table = document.body.children[1]; // Getting table object

    var totalMaxAverageTemp = -273;        // Max Average temperature
    var indexOfTheHottestAverageDay = -1;  // Index of the day of max average temperature

    var totalMinAverageTemp = 1000;        // Min average temperature
    var indexOfTheColdestAverageDay = -1;  // Index of the day of min average temperature

    var totalMaxTemp = -273;           // Max temperature
    var indexOfTheHottestMaxDay = -1;  // Index of the day of max temperature

    var totalMinTemp = 1000;           // Min temperature
    var indexOfTheColdestMinDay = -1;  // Index of the day of min temperature


    for (let i = 0; i < table.rows.length; i++) {

        let maxTemp = parseFloat(table.rows[i].cells[3].innerHTML); 
        let minTemp = parseFloat(table.rows[i].cells[5].innerHTML);

        if(!(isNaN(maxTemp) || isNaN(minTemp))) // If we can parse temperature
        {
            // Finding the hottest average day
            if(((maxTemp + minTemp) / 2) > totalMaxAverageTemp)
            {
                totalMaxAverageTemp = (maxTemp + minTemp) / 2;
                indexOfTheHottestAverageDay = i;
            }

            // Finding the coldest average day
            if(((maxTemp + minTemp) / 2) < totalMinAverageTemp)
            {
                totalMinAverageTemp = (maxTemp + minTemp) / 2;
                indexOfTheColdestAverageDay = i;
            }

            // Finding the hottest day
            if(maxTemp > totalMaxTemp)
            {
                totalMaxTemp = maxTemp;
                indexOfTheHottestMaxDay = i;
            }

            // Finding the coldest day
            if(minTemp < totalMinTemp)
            {
                totalMinTemp = minTemp;
                indexOfTheColdestMinDay = i;
            }
        }        
    }

    console.log("_______________________________________________________________");
    console.log("День з найвищою середньою температурою:");
    console.log("Дата: " + table.rows[indexOfTheHottestAverageDay].cells[2].innerHTML);
    console.log("Максимальна температура: " + parseFloat(table.rows[indexOfTheHottestAverageDay].cells[3].innerHTML));
    console.log("Мінімальна температура: " + parseFloat(table.rows[indexOfTheHottestAverageDay].cells[5].innerHTML));
    console.log("Середня температура: " + ((parseFloat(table.rows[indexOfTheHottestAverageDay].cells[3].innerHTML) + parseFloat(table.rows[indexOfTheHottestAverageDay].cells[5].innerHTML))/2));
    console.log("_______________________________________________________________");

    console.log("_______________________________________________________________");
    console.log("День з найнижчою середньою температурою:");
    console.log("Дата: " + table.rows[indexOfTheColdestAverageDay].cells[2].innerHTML);
    console.log("Максимальна температура: " + parseFloat(table.rows[indexOfTheColdestAverageDay].cells[3].innerHTML));
    console.log("Мінімальна температура: " + parseFloat(table.rows[indexOfTheColdestAverageDay].cells[5].innerHTML));
    console.log("Середня температура: " + ((parseFloat(table.rows[indexOfTheColdestAverageDay].cells[3].innerHTML) + parseFloat(table.rows[indexOfTheColdestAverageDay].cells[5].innerHTML))/2));
    console.log("_______________________________________________________________");

    console.log("_______________________________________________________________");
    console.log("День з найвищою температурою за весь час:");
    console.log("Дата: " + table.rows[indexOfTheHottestMaxDay].cells[2].innerHTML);
    console.log("Максимальна температура: " + parseFloat(table.rows[indexOfTheHottestMaxDay].cells[3].innerHTML));
    console.log("Мінімальна температура: " + parseFloat(table.rows[indexOfTheHottestMaxDay].cells[5].innerHTML));
    console.log("Середня температура: " + ((parseFloat(table.rows[indexOfTheHottestMaxDay].cells[3].innerHTML) + parseFloat(table.rows[indexOfTheHottestMaxDay].cells[5].innerHTML))/2));
    console.log("_______________________________________________________________");

    console.log("_______________________________________________________________");
    console.log("День з найнижчою температурою за весь час:");
    console.log("Дата: " + table.rows[indexOfTheColdestMinDay].cells[2].innerHTML);
    console.log("Максимальна температура: " + parseFloat(table.rows[indexOfTheColdestMinDay].cells[3].innerHTML));
    console.log("Мінімальна температура: " + parseFloat(table.rows[indexOfTheColdestMinDay].cells[5].innerHTML));
    console.log("Середня температура: " + ((parseFloat(table.rows[indexOfTheColdestMinDay].cells[3].innerHTML) + parseFloat(table.rows[indexOfTheColdestMinDay].cells[5].innerHTML))/2));
    console.log("_______________________________________________________________");

    confirm("_______________________________________________________________\n"
    + "День з найвищою середньою температурою::\n" 
    + "Дата: " + table.rows[indexOfTheHottestAverageDay].cells[2].innerHTML + "\n"
    + "Максимальна температура: " + parseFloat(table.rows[indexOfTheHottestAverageDay].cells[3].innerHTML) + "\n"
    + "Мінімальна температура: " + parseFloat(table.rows[indexOfTheHottestAverageDay].cells[5].innerHTML) + "\n"
    + "Середня температура: " + ((parseFloat(table.rows[indexOfTheHottestAverageDay].cells[3].innerHTML) + parseFloat(table.rows[indexOfTheHottestAverageDay].cells[5].innerHTML))/2) + "\n"
    + "_______________________________________________________________" + "\n" 
    + "День з найнижчою середньою температурою:" + "\n"
    + "Дата: " + table.rows[indexOfTheColdestAverageDay].cells[2].innerHTML + "\n"
    + "Максимальна температура: " + parseFloat(table.rows[indexOfTheColdestAverageDay].cells[3].innerHTML) + "\n"
    + "Мінімальна температура: " + parseFloat(table.rows[indexOfTheColdestAverageDay].cells[5].innerHTML) + "\n"
    + "Середня температура: " + ((parseFloat(table.rows[indexOfTheColdestAverageDay].cells[3].innerHTML) + parseFloat(table.rows[indexOfTheColdestAverageDay].cells[5].innerHTML))/2) + "\n"
    + "_______________________________________________________________" + "\n"
    + "День з найвищою температурою за весь час:" + "\n"
    + "Дата: " + table.rows[indexOfTheHottestMaxDay].cells[2].innerHTML + "\n"
    + "Максимальна температура: " + parseFloat(table.rows[indexOfTheHottestMaxDay].cells[3].innerHTML) + "\n"
    + "Мінімальна температура: " + parseFloat(table.rows[indexOfTheHottestMaxDay].cells[5].innerHTML) + "\n"
    + "Середня температура: " + ((parseFloat(table.rows[indexOfTheHottestMaxDay].cells[3].innerHTML) + parseFloat(table.rows[indexOfTheHottestMaxDay].cells[5].innerHTML))/2) + "\n"
    + "_______________________________________________________________" + "\n"
    + "День з найнижчою температурою за весь час:" + "\n"
    + "Дата: " + table.rows[indexOfTheColdestMinDay].cells[2].innerHTML + "\n"
    + "Максимальна температура: " + parseFloat(table.rows[indexOfTheColdestMinDay].cells[3].innerHTML) + "\n"
    + "Мінімальна температура: " + parseFloat(table.rows[indexOfTheColdestMinDay].cells[5].innerHTML) + "\n"
    + "Середня температура: " + ((parseFloat(table.rows[indexOfTheColdestMinDay].cells[3].innerHTML) + parseFloat(table.rows[indexOfTheColdestMinDay].cells[5].innerHTML))/2) + "\n"
    + "_______________________________________________________________" + "\n");
}
