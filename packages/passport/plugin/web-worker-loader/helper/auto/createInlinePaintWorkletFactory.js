import {createInlinePaintWorkletFactory as browserCreateInlinePaintWorkletFactory} from '\0rollup-plugin-web-worker-loader::helper::browser::createInlinePaintWorkletFactory';
import {isNodeJS} from '\0rollup-plugin-web-worker-loader::helper::auto::isNodeJS';

export function createInlinePaintWorkletFactory(fn, sourcemapArg) {
    if (isNodeJS()) {
        throw new Error('rollup-plugin-web-worker-loader does not support Paint Worklet in Node.JS');
    }
    return browserCreateInlinePaintWorkletFactory(fn, sourcemapArg);
}

