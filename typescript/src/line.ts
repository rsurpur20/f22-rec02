import { newPolarPoint, PolarPoint } from "./points/polarPoint";
import {Point}  from "./points/Point";



function newLine (point1: Point, point2: Point) {
    return {    
        draw() {
            const x1: number = point1.x
            const y1: number = point1.y
            const x2: number = point2.x
            const y2: number = point2.y
            
            // assume implementation 
    
            console.log("Line drawn from (" + x1 + ", " + y1 +
                        ") to (" + x2 + ", " + y2 + ")");
        }
    }
}

export { newLine }