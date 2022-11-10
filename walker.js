class Walker{
    constructor(x,y){
        this.pos = createVector(x, y);
    }

    update(){
        this.pos.add(random(-5,5),random(-5,5));
    }

    show(){
        stroke(255,100);
        strokeWeight(2);
        point(this.pos.x, this.pos.y);
    }
}