

/*
global describe, it, expect
 */


describe("Tests for Options Configuration object", function() {
    var a = new s43.SPClientLib.Options();

    it("URL is blank when initially created", function() {
        expect("" === a.Url).toBe(true);
    });
    it("Options should have a setDefaults method", function() {
        expect(a.SetDefaults).toBeDefined();
    })
});