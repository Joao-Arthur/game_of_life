import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.js";
import { fromString } from "../fromString/mod.js";
import { toggle } from "./toggle.js";

const model = fromString([
    "⬛⬛⬛⬛",
    "⬛⬛⬛⬛",
    "⬜⬜⬜⬜",
    "⬜⬜⬜⬜",
]);

Deno.test("Should toggle cell", () => {
    assertEquals(
        toggle(model, { column: 0, row: 0 }),
        fromString([
            "⬜⬛⬛⬛",
            "⬛⬛⬛⬛",
            "⬜⬜⬜⬜",
            "⬜⬜⬜⬜",
        ]),
    );
    assertEquals(
        toggle(model, { column: 1, row: 1 }),
        fromString([
            "⬛⬛⬛⬛",
            "⬛⬜⬛⬛",
            "⬜⬜⬜⬜",
            "⬜⬜⬜⬜",
        ]),
    );
    assertEquals(
        toggle(model, { column: 2, row: 2 }),
        fromString([
            "⬛⬛⬛⬛",
            "⬛⬛⬛⬛",
            "⬜⬜⬛⬜",
            "⬜⬜⬜⬜",
        ]),
    );
    assertEquals(
        toggle(model, { column: 3, row: 3 }),
        fromString([
            "⬛⬛⬛⬛",
            "⬛⬛⬛⬛",
            "⬜⬜⬜⬜",
            "⬜⬜⬜⬛",
        ]),
    );
    assertEquals(
        toggle(model, { column: 3, row: 0 }),
        fromString([
            "⬛⬛⬛⬜",
            "⬛⬛⬛⬛",
            "⬜⬜⬜⬜",
            "⬜⬜⬜⬜",
        ]),
    );
    assertEquals(
        toggle(model, { column: 0, row: 3 }),
        fromString([
            "⬛⬛⬛⬛",
            "⬛⬛⬛⬛",
            "⬜⬜⬜⬜",
            "⬛⬜⬜⬜",
        ]),
    );
});
