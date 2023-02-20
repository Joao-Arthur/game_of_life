import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { fromString } from "../fromString/mod.ts";
import { iterate } from "./iterate.ts";

Deno.test("iterate", () => {
    assertEquals(
        iterate(
            fromString(["⬜"]),
        ),
        fromString(["⬛"]),
    );
    assertEquals(
        iterate(
            fromString([
                "⬜⬜",
                "⬜⬜",
            ]),
        ),
        fromString([
            "⬜⬜",
            "⬜⬜",
        ]),
    );
    assertEquals(
        iterate(
            fromString([
                "⬛⬜⬛",
                "⬛⬜⬛",
                "⬛⬜⬛",
            ]),
        ),
        fromString([
            "⬛⬛⬛",
            "⬜⬜⬜",
            "⬛⬛⬛",
        ]),
    );
    assertEquals(
        iterate(
            fromString([
                "⬛⬛⬛",
                "⬜⬜⬜",
                "⬛⬛⬛",
            ]),
        ),
        fromString([
            "⬛⬜⬛",
            "⬛⬜⬛",
            "⬛⬜⬛",
        ]),
    );
    assertEquals(
        iterate(
            fromString([
                "⬛⬛⬜",
                "⬜⬜⬜",
                "⬛⬛⬛",
            ]),
        ),
        fromString([
            "⬛⬛⬜",
            "⬛⬜⬜",
            "⬛⬜⬛",
        ]),
    );
    assertEquals(
        iterate(
            fromString([
                "⬛⬛⬜",
                "⬛⬜⬜",
                "⬛⬜⬛",
            ]),
        ),
        fromString([
            "⬛⬜⬜",
            "⬛⬜⬜",
            "⬛⬜⬜",
        ]),
    );
    assertEquals(
        iterate(
            fromString([
                "⬜⬜⬛",
                "⬜⬜⬜",
                "⬛⬜⬛",
            ]),
        ),
        fromString([
            "⬜⬛⬜",
            "⬛⬛⬜",
            "⬜⬜⬜",
        ]),
    );
});