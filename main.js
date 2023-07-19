setInterval(() =>{
   let date = new Date(),
    htime = date.getHours(),
    mtime = date.getMinutes(),
    stime = date.getSeconds();
   h_rotation = 30*htime + mtime/2,
    m_rotation = 6*mtime,
    s_rotation = 6*stime;

   const hourHand = document.getElementById("hour"),
        minuteHand = document.getElementById("minute");
        secondHand = document.getElementById("second"),
    hourHand.style.transform = ` rotate(${h_rotation}deg)`;
    minuteHand.style.transform = ` rotate(${m_rotation}deg)`;
    secondHand.style.transform = ` rotate(${s_rotation}deg)`;

},1000)