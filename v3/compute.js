    //initial
    session.players.forEach(player => {
      player.fees = session.fee;
    });
    //sync counter
    let hours, min, sec;
    let counter = setInterval(() => {
      let now = Date.now()
      session.players.forEach(player => {
        if (player.active === true) {
          if (player.started === null) {
            player.started = now - player.timer
          }
          player.timer = Math.floor((now - player.started) / 100) / 10;
          sec = player.count % 60;
          min = Math.floor(player.count / 60) % 60;
          hours = Math.floor(player.count / 60 / 60) % 60;
          let display = {
            sec: sec.toLocaleString(undefined, { minimumIntegerDigits: 2 }),
            min: min.toLocaleString(undefined, { minimumIntegerDigits: 2 }),
            hours: hours.toLocaleString(undefined, { minimumIntegerDigits: 2 })
          }
          //player.display.timer = `${display.hours}:${display.min}:${display.sec}`
        } else if (player.active === false) {
          player.started = null
        } else if (player.active === null) {
          player.started = null
          player.timer = 0
          session.timestamp = 0
        }
      });
    }, 100)
/*
    //Give player's a fair cut based on activity
    let dividend = setInterval(() => {
      let cnt = session.players.length;
      session.count = session.players.length;
      let x = 0
      let i = 0
      session.players.forEach(player => {
        if (session.time < player.counter) {
          session.time = player.counter;
        };
        x += player.counter;
      });
      session.players.forEach(player => {
        let y = player.counter / x
        let z = session.amount * y
        let a = z * (1 - (session.fee / 100))
        player.dividend = (Math.floor(y * 10000) / 100) + "%"
        player.money = new Intl.NumberFormat().format(Math.floor(z))
        player.total = new Intl.NumberFormat().format(Math.floor(a))
        player.deductions = new Intl.NumberFormat().format(Math.floor(a - z))
      });
      session.size = JSON.stringify(session).length;
    }, 10)
    function controlAll(stage) {
      session.players.forEach(player => {
        if (stage === 0) {
          player.active = false
        } else if (stage === 1) {
          player.active = true
        } else if (stage === 2) {
          player.active = null
        }
      });
    }
    */