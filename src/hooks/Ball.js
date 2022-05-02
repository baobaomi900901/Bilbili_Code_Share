export default class Ball {
    constructor(context, radius, color) {
        this.ctx = context
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.radius = radius ? radius : 40;
        this.rotation = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.color = color ? color : "blue";
        this.lineWidth = 1;
    }

    draw() {
        let { ctx } = this
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.scaleX, this.scaleY);

        ctx.lineWidth = this.lineWidth;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        //x, y, radius, start_angle, end_angle, anti-clockwise
        ctx.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
        ctx.closePath();
        ctx.fill();
        if (this.lineWidth > 0) {
            ctx.stroke();
        }
        ctx.restore();
    }
}

