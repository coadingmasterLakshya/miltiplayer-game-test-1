class Player{

    constructor () {



    }

    getcount() {

       var playercountref=database.ref ('PlayerCount')
       playercountref.on("value",function(data){
        playercount=data.val()
       })

    }

    updatecount(count) {

        database.ref('/').update({
            PlayerCount:count
        })

    }

    update(name){

        var playerindex ="player"+playercount
        database.ref(playerindex).set({

            name:name

        })

    }

}

//
//
//