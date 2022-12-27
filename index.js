const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 *16 //1024
canvas.height = 64 * 9 //576


const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D()


const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0, 
    },
    imageSrc: './img/backgroundLevel1.png',
})

const player = new Player({
    collisionBlocks,
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
        }
    }
})

const doors = [
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

function animate() {
    window.requestAnimationFrame(animate)
    
    backgroundLevel1.draw();
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw()
    })

    doors.forEach((door) => {
        door.draw()
    })
    
    player.handleInput(keys);
    player.draw();
    player.update();
    
}

animate();

//TODO: "IMPLEMANTAR BOTONES PARA MOVER EL SPRITE EN MOBILE"
