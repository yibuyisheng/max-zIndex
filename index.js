(function(global) {

    global.findMaxZIndex = findMaxZIndex;

    function findMaxZIndex(containerElement) {
        var children = containerElement.children;

        var maxZIndex = 0;
        for (var i = 0, il = children.length; i < il; i += 1) {
            var child = children[i];
            if (child.style.position === 'fixed'
                || child.style.position === 'absolute'
                || child.style.position === 'relative'
            ) {
                var zIndex = parseInt(child.style.zIndex) || 0;
            } else {
                var zIndex = findMaxZIndex(child);
            }

            if (zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        }

        return maxZIndex;
    }

})(window);
