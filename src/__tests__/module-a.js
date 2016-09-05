jest.unmock("../module-a");
import { getThing } from "../module-a";

it("has the right value for Thing", () => {
    expect(getThing()).toEqual(10);
})
