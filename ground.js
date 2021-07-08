class Ground{
    constructor(x,y,w,h){
        var Options={
            isStatic:true

        }
        this.body=Bodies.rectangle(x,y,w,h,Options)
        this.w=w
        this.h=h
        World.add(world,this.body)
    
    }
    display(){
        fill("red")
        var pos=this.body.position
        push()
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)
        pop()


    }
}
