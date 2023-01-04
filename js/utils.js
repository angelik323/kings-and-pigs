Array.prototype.parse2D = function(data) {
    const rows = [];
    for (let i = 0; i < this.length; i+=16) {
        rows.push(this.slice(i, i + 16))
    }
    return rows;
}


Array.prototype.createObjectsFrom2D = function() {
    const objects = []
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if(symbol === 292 || symbol === 250
                || symbol === 2250 || symbol === 2251 || symbol === 2252 || symbol === 2254
                || symbol === 2255 || symbol === 2256 || symbol === 2257 || symbol === 2258 
                || symbol === 2259 || symbol === 2260 || symbol === 2261 || symbol === 2262
                || symbol === 2263) {
                //push a new collision into collisionBlocks array
                objects.push(
                    new CollisionBlock({
                        position: {
                            x: x * 64,
                            y: y * 64,
                        },
                }))
            }
        })    
    });
    return objects;
}
