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
            imageSrc: '/img/king/buho-front.png',

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
                    onComplete: () => {
                        level++

                        if(level === 4) level = 1
                        levels[level].init()
                        player.switchSprite('idleRight')
                        player.preventInput = false
                        gsap.to(overLay, {
                            opacity: 0,
                        })
                    }
                })
            },
        },
    },
})

let level = 5;
let levels = {
    1: {
        init: () => {
            parsedCollisions = collisionsLevel1.parse2D();
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks

            if(player.currentAnimation) {
                player.currentAnimation.isActive = false
            }


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
    },
    2: {
        init: () => {
            parsedCollisions = collisionsLevel2.parse2D();
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 96
            player.position.y = 140

            if(player.currentAnimation) {
                player.currentAnimation.isActive = false
            }


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0, 
                },
                imageSrc: './img/backgroundLevel2.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 771,
                        y: 335,
                    },
                    imageSrc: '/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]

        }
    },
    3: {
        init: () => {
            parsedCollisions = collisionsLevel3.parse2D();
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 817
            player.position.y = 180

            if(player.currentAnimation) {
                player.currentAnimation.isActive = false
            }


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0, 
                },
                imageSrc: './img/backgroundLevel3.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 176,
                        y: 335,
                    },
                    imageSrc: '/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]

        }
    },
    4: {
        init: () => {
            parsedCollisions = collisionsLevel4.parse2D();
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 817
            player.position.y = 180

            if(player.currentAnimation) {
                player.currentAnimation.isActive = false
            }


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0, 
                },
                imageSrc: './img/backgroundLevel4.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 176,
                        y: 335,
                    },
                    imageSrc: '/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]

        }
    },
    5: {
        init: () => {
            parsedCollisions = collisionsLevel5.parse2D();
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 817
            player.position.y = 180

            if(player.currentAnimation) {
                player.currentAnimation.isActive = false
            }


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0, 
                },
                imageSrc: './img/backgroundLevel5.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 176,
                        y: 335,
                    },
                    imageSrc: '/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]

        }
    },
    6: {
        init: () => {
            parsedCollisions = collisionsLevel6.parse2D();
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 65
            player.position.y = 506

            if(player.currentAnimation) {
                player.currentAnimation.isActive = false
            }


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0, 
                },
                imageSrc: './img/backgroundLevel6.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 760,
                        y: 400,
                    },
                    imageSrc: '/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]

        }
    },
    7: {
        init: () => {
            parsedCollisions = collisionsLevel7.parse2D();
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 136
            player.position.y = 434

            if(player.currentAnimation) {
                player.currentAnimation.isActive = false
            }


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0, 
                },
                imageSrc: './img/backgroundLevel7.png',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 760,
                        y: 337,
                    },
                    imageSrc: '/img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]

        }
    },
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
    //collisionBlocks.forEach(collisionBlock => {
    //    collisionBlock.draw()
    //})

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
