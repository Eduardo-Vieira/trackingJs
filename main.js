function init(){
    const video = document.getElementById('video')

    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    const tracker = new tracking.ObjectTracker('face')

    const foto = document.getElementById('foto')
    const ctx = foto.getContext("2d");

    
     tracking.track('#video',tracker, {camera:true})
     tracker.on('track',event =>{
        context.clearRect(0,0,canvas.width, canvas.height)
        context.drawImage(video,0,0,410,330)

        event.data.forEach(rect => {
            context.strokeStyle = '#05f14c'
            context.lineWidth = 2
            context.strokeRect(rect.x, rect.y, rect.width, rect.height)
            context.font = "14px Arial";
            context.fillStyle = "#ff0000";
            context.fillText(`x: ${rect.x}, w: ${rect.width}`, rect.x+rect.width+20,rect.y+20)
            context.fillText(`y: ${rect.y}, w: ${rect.height}`, rect.x+rect.width+20,rect.y+40)
            const sourceHeight = rect.height + 90 
            const sourceWidth = rect.width + 90
            ctx.clearRect(0,0,foto.width, foto.height)
            ctx.drawImage(video,rect.x+rect.width-30, rect.y+rect.height-55, sourceWidth, sourceHeight, 0, 0, 250 , 230)

        });
     })
}
window.onload = init()