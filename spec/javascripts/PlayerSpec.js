$(function() {
    jasmine.getFixtures().fixturesPath = '/';// 読み込みパスはroot
    describe("index.html", function() {
        console.log(document.readyState);
        it("HTMLがロードできている", function() {
            // ロードは同期的に行われている
            jasmine.getFixtures().load('index.html');// 対象ページ
            expect($('#main')).toHaveText("文章")
        })
    })
})