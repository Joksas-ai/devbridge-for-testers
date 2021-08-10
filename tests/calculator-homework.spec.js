const { test, expect } = require('@playwright/test');
const prototypeSelect = [prototype, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const number1 = 1;
const number2 = 2;

prototypeSelect.forEach(prototypeSelect => {
    test('If calculator loads', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    page.selectOption('#selectBuild', '${prototypeSelect}');
    const isCalculatorVisible = await page.isVisible('#calcForm');

    expect(isCalculatorVisible).toBe(true);
});
});

prototypeSelect.forEach(prototypeSelect => {
    test('If calculator works', async ({ page }) => {
    await page.fill('#number1Field', number1);
    await page.fill('#number2Field', number2);
    page.click('#calculateButton');
    expect('#numberAnswerField').toContain(integer);
});
});

prototypeSelect.forEach(prototypeSelect => {
    test('If calculator multiplies correctly for ${prototypeSelect}', async ({ page }) => {
        page.click('#selectOperationDropdown', 'multiply');
        page.selectOption('#selectBuild', '${prototypeSelect}');
        page.click('#calculateButton');
        expect('#numberAnswerField').toContain(number1*number2);
    });
});

prototypeSelect.forEach(prototypeSelect => {
    test('If calculator adds correctly for ${prototypeSelect}', async ({ page }) => {
        page.click('#selectOperationDropdown', 'add');
        page.selectOption('#selectBuild', '${prototypeSelect}');
        page.click('#calculateButton');
        expect('#numberAnswerField').toContain(number1+number2);
    });
});

prototypeSelect.forEach(prototypeSelect => {
    test('If calculator substracts correctly for ${prototypeSelect}', async ({ page }) => {
        page.click('#selectOperationDropdown', 'substract');
        page.selectOption('#selectBuild', '${prototypeSelect}');
        page.click('#calculateButton');
        expect('#numberAnswerField').toContain(number1-number2);
    });
});
prototypeSelect.forEach(prototypeSelect => {
    test('If calculator divides correctly for ${prototypeSelect}', async ({ page }) => {
        page.click('#selectOperationDropdown', 'divide');
        page.selectOption('#selectBuild', '${prototypeSelect}');
        page.click('#calculateButton');
        expect('#numberAnswerField').toContain(number1/number2);
    });
});

prototypeSelect.forEach(prototypeSelect => {
    test('If calculator concatenates correctly for ${prototypeSelect}', async ({ page }) => {
        page.click('#selectOperationDropdown', 'concatenate');
        page.selectOption('#selectBuild', '${prototypeSelect}');
        page.click('#calculateButton');
        expect('#numberAnswerField'.length).toBe(2);
        expect('#numberAnswerField').toContain(number1, number2);
    });
});