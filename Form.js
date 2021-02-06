class Form {

    constructor () {



    }

    display () {

        var title= createElement('h3')
        title.html("car rasing game")
        title.position(130,0)
        var input=createInput("name")
        input.position(400,160)
        var button=createButton("play")
        button.position(400,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playercount=playercount+1
            player.update(name)
            player.updatecount(playercount)
            var greeting=createElement('h2')
            greeting.position(400,160)
            greating.html("hi "+name) 
        })

    }

}