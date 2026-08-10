import { expect, test } from "@playwright/test";

test.describe("password generator tabs", () => {
    test("password tab shows a result and Generate refreshes it", async ({ page }) => {
        await page.goto("/");

        const result = page.getByTestId("password-result");
        await expect(result).toHaveText(/^[\s\S]{16}$/);

        const firstPassword = await result.textContent();
        await page.getByRole("button", { name: "Generate" }).click();

        await expect(result).toHaveText(/^[\s\S]{16}$/);
        await expect(result).not.toHaveText(firstPassword ?? "");
    });

    test("bcrypt tab hashes test text", async ({ page }) => {
        await page.goto("/");
        await page.getByText("Bcrypt", { exact: true }).first().click();

        await page.getByPlaceholder("Original Text").fill("test text");
        await page.getByRole("button", { name: "Hash" }).click();

        await expect(page.getByTestId("bcrypt-output")).toHaveValue(/^\$2[aby]\$06\$/);
    });

    test("PGP tab generates an encryption key", async ({ page }) => {
        await page.goto("/");
        await page.getByText("PGP", { exact: true }).first().click();

        const key = page.getByLabel("Encryption key");
        await expect(key).toHaveValue(/^[a-f0-9]{64}$/);

        const firstKey = await key.inputValue();
        await page.getByRole("button", { name: "Generate Key" }).click();

        await expect(key).toHaveValue(/^[a-f0-9]{64}$/);
        await expect(key).not.toHaveValue(firstKey);
        await page.getByLabel("Message").fill("test string");
        await page.getByRole("button", { name: "Encrypt" }).click();

        const encryptedMessage = await page.getByTestId("pgp-result").textContent();
        await expect(page.getByTestId("pgp-result")).not.toHaveText("");
        await page.getByLabel("Message").fill(encryptedMessage ?? "");
        await page.getByRole("button", { name: "Decrypt" }).click();

        await expect(page.getByTestId("pgp-result")).toHaveText("test string");
    });
});