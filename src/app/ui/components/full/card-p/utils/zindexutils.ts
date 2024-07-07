function ZIndexUtils() {
    let zIndexes:any = [];

    const generateZIndex = (key:any, baseZIndex:any) => {
        let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
        let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;

        zIndexes.push({ key, value: newZIndex });

        return newZIndex;
    };

    const revertZIndex = (zIndex:any) => {
        zIndexes = zIndexes.filter((obj:any) => obj.value !== zIndex);
    };

    const getCurrentZIndex = () => {
        return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
    };

    const getZIndex = (el:any) => {
        return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
    };

    return {
        get: getZIndex,
        set: (key:any, el:any, baseZIndex:any) => {
            if (el) {
                el.style.zIndex = String(generateZIndex(key, baseZIndex));
            }
        },
        clear: (el:any) => {
            if (el) {
                revertZIndex(getZIndex(el));
                el.style.zIndex = '';
            }
        },
        getCurrent: () => getCurrentZIndex()
    };
}

export default ZIndexUtils();