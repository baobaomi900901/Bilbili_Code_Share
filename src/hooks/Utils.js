export default class Utils {
    constructor() {
    }

    // 监听鼠标
    captureMouse(element) {
        // 鼠标参数
        let mouse = { x: 0, y: 0, event: null }

        element.addEventListener('mousemove', (event) => {
            mouse.x = event.offsetX;
            mouse.y = event.offsetY;
            mouse.event = event;
            // console.log(mouse);
        });
        return mouse;
    };
}
