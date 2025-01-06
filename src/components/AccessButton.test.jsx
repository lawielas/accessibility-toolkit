import React from "react";
import { render } from "@testing-library/react";
import { test } from "@jest/globals"
import { AccessButton } from "./AccessButton";

test("access button renders correctly", () => {
    render(<AccessButton />)
}) 