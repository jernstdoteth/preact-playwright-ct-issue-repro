// App.test.jsx
import { test, expect } from "@preact/playwright-ct";
import { App } from "../App";

test("should work", async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText("hello world");
});
