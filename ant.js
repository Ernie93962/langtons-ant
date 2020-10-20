var test = window.setInterval(updateAnt, 1)
class box{
    constructor(x, y, l, f){
    this.move=this.offset
    this.color=['#ff0000', '#00ff00', '#0000ff']
    this.x=x
    this.y=y
    this.l=l
    this.f=f
    this.dirty=true
    this.selection
    var canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.ctx.fillStyle = '#000000'
    //this.ctx.fillStyle=this.color[this.selection]
    }
     fillIn(){
         if (this.f==false){
             this.dirty=true
         }
         this.f=true
     }
     clear(){
        if (this.f==true){
            this.dirty=true
        }
         this.f=false
     }

     getSet(){
        return(this.f)
     }

     draw(){
        if(this.dirty){

            if(this.f==true){
                this.ctx.fillRect(this.x, this.y, this.l, this.l)
                this.ctx.fill()
                } else {
                    this.ctx.clearRect(this.x, this.y, this.l, this.l)
                }
            this.ctx.strokeRect(this.x,this.y,this.l,this.l)
            this.dirty=false
            }
        }

     swap(){
            this.f = !this.f
            this.dirty = true
        } 
}

class ant{
    constructor(){
        this.gX = Math.floor((1000/sqSize)/2)
        this.gY = Math.floor((1000/sqSize)/2)
        this.w = 1000/sqSize
        this.dir = 1
        this.idx = ((this.gY-1)*this.w)+(this.gX-1)
    }
   
    setAnt(){
        //grid[this.idx].fillIn()
        this.drawAnt()
            }

    moveAnt(){
       var okay = false
       if(this.dir==0){
           if(this.gX<this.w) {
           this.gX++
           okay = true
           }
       } else if(this.dir==1){
             if(this.gY>1){
             this.gY--
             okay = true
             }
       } else if(this.dir==2){
           if(this.gX>1){
           this.gX--
           okay = true
           }
       } else if(this.dir==3){
           if(this.gY<this.w){
           this.gY++
           okay = true
           }
       }

       if( true == okay ){
       grid[this.idx].swap()
       grid[this.idx].draw()
       this.idx = ((this.gY-1)*this.w)+(this.gX-1)
       grid[this.idx].draw()
       }
           }

    updateAnt(){
        this.rotateAnt()
        this.moveAnt()
    }

    rotateAnt(){
       var s = grid[this.idx]

       if(s.getSet()==true){
           this.dir = (this.dir+1)%4
           } else {
               this.dir = this.dir-1
               }if(this.dir==-1){
                   this.dir = 3
                   }
                       }

    drawAnt(){

        }
            }
console.log(this.selection)
var sqSize = 10
var grid=[]
var pos = 0
var w = Math.floor(1000/sqSize)
var theAnt = new ant()

for(k=0; k<1000; k+=sqSize){
    for(j=0; j<1000; j+=sqSize){
        b=j%50    
        grid.push(new box(j,k,sqSize,false))
            }
                }

theAnt.setAnt()
grid.forEach(drawGrid)

function drawGrid(aBox, idx){
    aBox.draw()
        }

function updateAnt(){
    theAnt.updateAnt()
        }



function setAnt(gX, gY){
    var idx = ((gY-1)*w)+(gX-1)
    grid[idx].fillIn()
        }
function speedControl(speed){
    clearInterval(test)
    test = window.setInterval(updateAnt, speed)
        }        
/*function colorChange(){
    this.selection = (Math.floor(Math.random()*3))
        }     */