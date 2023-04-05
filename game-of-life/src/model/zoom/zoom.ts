import { modelType } from "../model.js";
import { zoomOut } from "../zoomOut/mod.js";
import { zoomIn } from "../zoomIn/mod.js";

export function zoom(model: modelType, newSize: number): modelType {
    if (newSize > model.size) {
        const amount = Math.ceil((newSize - model.size) / 2);
        return zoomOut(model, amount);
    }
    if (newSize < model.size) {
        const amount = Math.ceil((model.size - newSize) / 2);
        return zoomIn(model, amount);
    }
    return model;
}
