export const createModel = (
    modelName,
    modelDescription,
    metrics,
    sampleImageList,
    targetUrl
) => {
    return {
        loading: false,
        modelName,
        modelDescription,
        metrics,
        sampleImageList,
        targetUrl,
    };
};