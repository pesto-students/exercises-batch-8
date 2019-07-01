<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Canvas</title>
    </head>
    <body>
        <div>
            <canvas id="canvas-shape"></canvas>
        </div>
        
        <script type="text/javascript">
            const canvas = document.getElementById('canvas-shape');
            const context = canvas.getContext('2d');
            context.beginPath();
            context.moveTo(170, 0);
            context.lineTo(60, 55);
            context.lineTo(210, 240);
            context.lineTo(130, 50);
            context.lineTo(120, 180);
            context.lineTo(0, 210);
            context.fill();
        </script>

    </body>

</html>