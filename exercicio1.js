const horario = '06:15:25PM'

function conversorDeHorarios (horario){
    var stringHorario = String(horario)
    var inicioHorario= stringHorario.slice(0,2)
    if (stringHorario.endsWith('PM')){
        var numberHorario = parseInt(inicioHorario)
        numberHorario +=12
        return String(numberHorario)+stringHorario.slice(2,8)
    }else return stringHorario.slice(0,8)
}

console.log(conversorDeHorarios(horario))