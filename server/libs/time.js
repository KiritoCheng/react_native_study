// timeFormart YYYY-MM-DD HH:MM:SS
let timeFormart=(myDate)=>{
    let month=myDate.getMonth()+1;
    month=month<10?`0${month}`:month;
    return `${myDate.getFullYear()}-${month}-${myDate.getDate()} ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
}

module.exports = {
    timeFormart
}
