let db = {
    id: 0,
    total: 0,
    deduction: 0,
    fee: 0.5,
    players: [
      {
        name: "John Doe",
        id: 0,
        deduction: 0,
        earned: 0,
        cut: 0,
        timer: 0,
        timestamp: null,
        active: true,
        state: 0
      }
    ]
  }
  let interval = setInterval(function () {
    let d = Date.now();
    db.players.forEach(player => {
        if(player.active === true){

        }
    });
  }, 10);
  angular.module('app', [])
    .controller('appControl', function () {
      let playerList = this;
      playerList.players = db.players;
      playerList.addPlayer = function () {

      }
      playerList.removePlayer = function () {

      }
      playerList.activeToggle = function(index){
          if(db.players[index].active === false){
            db.players[index] = true;
          }else if(db.players[index] === true){
            db.players[index] = false;
          }else{
            db.players[index] = false;
          }
      }
    });
