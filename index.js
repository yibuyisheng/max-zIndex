(function(global) {

    global.findMaxZIndex = findMaxZIndex;

    function findMaxZIndex(containerElement) {
        var children = containerElement.children;

        var maxZIndex = 0;
        for (var i = 0, il = children.length; i < il; i += 1) {
            var zIndex;
            var child = children[i];
            var childComputedStyle = window.getComputedStyle(child);
            if (childComputedStyle.position === 'fixed'
                || childComputedStyle.position === 'absolute'
                || childComputedStyle.position === 'relative'
            ) {
                zIndex = parseInt(childComputedStyle.zIndex) || 0;
            } else {
                zIndex = findMaxZIndex(child);
            }

            if (zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        }

        return maxZIndex;
    }

})(window);
