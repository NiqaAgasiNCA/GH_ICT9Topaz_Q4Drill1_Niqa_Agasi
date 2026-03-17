// Q4 Drill 1
function electricity() {
    let electricity_name = document.getElementById("elec1").value.toLowerCase();
        if (electricity_name > 0 && electricity_name <= 100) {
        window.alert('Discounted electricity rates')
    }
   else if (electricity_name > 101 && electricity_name <= 200) {
        window.alert('Normal Residential Rate')
    }
   else if (electricity_name > 201 && electricity_name <= 300) {
        window.alert('Typical Electricity Usage')
    }
    else if (electricity_name > 301 && electricity_name <= 500) {
        window.alert('Higher Electricity Usage')
    }
    else if (electricity_name > 500 && electricity_name <= 1000) {
        window.alert('Very High Electricity Usage')
}
}
