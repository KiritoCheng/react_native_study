// timeFormart YYYY-MM-DD HH:MM:SS
let formart=(digits)=>{
    return digits<10?`0${digits}`:`${digits}`;
}
let timeFormart=(myDate)=>{
    let days = `${myDate.getFullYear()}-${formart(myDate.getMonth()+1)}-${formart(myDate.getDate())}`
    let time = `${formart(myDate.getHours())}:${formart(myDate.getMinutes())}:${formart(myDate.getSeconds())}`
    return  `${days} ${time}`
}

module.exports = {
    timeFormart
}