


class Particle{

    x: number;
    y: number;

    velocity: {x: number, y: number};

    radius: number;
    color: string;

//     constructor(x: number, y: number, radius: number, color: string){
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;

//     this.velocity = {
//         x: Math.random() * 2 - 1,
//         y: Math.random() * 2 - 1
//     }
// }

    constructor(ctx: CanvasRenderingContext2D){
        this.x = Math.random()*ctx.canvas.width;
        this.y = Math.random()*ctx.canvas.height;

        this.velocity = {
            x: (Math.random() - 0.5)* 2,
            y: (Math.random() - 0.5)* 2,
        }
    }
 }