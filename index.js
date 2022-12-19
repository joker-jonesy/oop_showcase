const stuffEle = document.body.querySelector(".stuff");


class Building {

    constructor(owner){
        this.owner = owner
    }

    writeOwner(){
        return this.owner+"'s house"
    }

    areTheyACoolOwner(check){
        if(check){
           return  this.owner+" is a cool owner"
        }else{
            return  this.owner+" is super lame"
        }
    }
}

class Classrooms extends Building{

    //owner is coming from building class
    constructor(owner, num) {
        super(owner);
        this.classrooms=num;
    }

    // this function is printing the value of rooms in a phrase
    print_rooms(){
        return this.owner+"'s building has "+this.classrooms+" classrooms"
    }

    get rooms(){
        return this.classrooms
    }

    set rooms(x){
        this.classrooms=x;
    }
}

//outside of normal scope
Classrooms.prototype.addClassroom = function(x){
    this.classrooms=this.classrooms+x;
}


const newBuilding = new Building("Davon");
const newBuildingTwo = new Classrooms("Raza", 45);

//uses classroom setter
newBuildingTwo.rooms = newBuildingTwo.classrooms+5;

//uses prototype method to add
newBuildingTwo.addClassroom(10);
console.log(newBuildingTwo.rooms)
stuffEle.innerHTML=newBuildingTwo.print_rooms();
