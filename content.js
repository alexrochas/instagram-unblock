var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        $("div[role=presentation]").remove();
        $("body").css("overflow","auto");
        // Debug me: console.log(mutation);
    });
});

mutationObserver.observe(document.documentElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
});
