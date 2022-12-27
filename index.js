const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 *16 //1024
canvas.height = 64 * 9 //576

let parsedCollisions
let collisionBlocks
let background
let doors
const player = new Player({
    imageSrc: '/img/king/buho-right.png',
    frameRate: 14,
    animations: {
        idleRight: {
            frameRate: 14,
            frameBuffer: 4,
            loop: true,
            imageSrc: '/img/king/buho-front.png',

        },
        idleLeft: {
            frameRate: 14,
            frameBuffer: 4,
            loop: true,
            imageSrc: '/img/kin/buho-front.png',

        },
        runRight: {
            frameRate: 14,
            frameBuffer: 3,
            loop: true,
            imageSrc: '/img/king/buho-right.png',
        },
        runLeft: {
            frameRate: 14,
            frameBuffer: 3,
            loop: true,
            imageSrc: '/img/king/buho-left.png',
        },
        enterDoor: {
            frameRate: 14,
            frameBuffer: 3,
            loop: false,
            imageSrc: '/img/king/buho-enterdoor.png',
            onComplete: () => {
                console.log("complete level")
                gsap.to(overLay, {
                    opacity: 1,
                })
            },
        },
    },
})

let level = 1;
let levels = {
    1: {
        init: () => {
            parsedCollisions = collisionsLevel1.parse2D();
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0, 
                },
                imageSrc: './img/backgroundLevel1.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 767,
                        y: 270,
                    },
                    imageSrc: '/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]

        }
    }
}


const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

const overLay = {
    opacity: 0
}

function animate() {
    window.requestAnimationFrame(animate)
    
    background.draw();
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw()
    })

    doors.forEach((door) => {
        door.draw()
    })
    
    player.handleInput(keys);
    player.draw();
    player.update();

    c.save()
    c.globalAlpha = overLay.opacity
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.restore()
}

levels[level].init()
animate();

//TODO: "IMPLEMANTAR BOTONES PARA MOVER EL SPRITE EN MOBILE"
