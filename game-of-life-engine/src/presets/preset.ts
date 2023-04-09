import { modelType } from "../model/mod.js";

export type presetType = {
    readonly name: string;
    readonly id: string;
    readonly discover: {
        readonly name: string;
        readonly year: number;
    };
    readonly model: modelType;
};