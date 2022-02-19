Victory - Tree Shaking Experiments
==================================

## App

Our experimental app is just a re-exported import from here: https://unpkg.com/browse/victory-core@36.0.0/es/victory-animation/victory-animation.js

(which has `Object.define()` static property calls like nearly all the other calls in https://unpkg.com/browse/victory-core@36.0.0/es/)

```js
import { VictoryAnimation } from "victory";

console.log("TODO HERE", { VictoryAnimation });
```

## Build

Build with webpack for production but with file names and without minification:

```sh
$ yarn webpack
```

Inspect the actual bundle for path names:

```sh
$ cat dist/main.js | egrep '(  \!\*\*\* |(CONCATENATED|EXTERNAL) MODULE)' | grep -o "\.\/[^\*]*" | sort | uniq
./node_modules/d3-color/src/color.js
./node_modules/d3-color/src/define.js
./node_modules/d3-ease/src/back.js
./node_modules/d3-ease/src/bounce.js
./node_modules/d3-ease/src/circle.js
./node_modules/d3-ease/src/cubic.js
./node_modules/d3-ease/src/elastic.js
./node_modules/d3-ease/src/exp.js
./node_modules/d3-ease/src/index.js
./node_modules/d3-ease/src/linear.js
./node_modules/d3-ease/src/math.js
./node_modules/d3-ease/src/poly.js
./node_modules/d3-ease/src/quad.js
./node_modules/d3-ease/src/sin.js
./node_modules/d3-interpolate/src/array.js
./node_modules/d3-interpolate/src/basis.js
./node_modules/d3-interpolate/src/basisClosed.js
./node_modules/d3-interpolate/src/color.js
./node_modules/d3-interpolate/src/constant.js
./node_modules/d3-interpolate/src/date.js
./node_modules/d3-interpolate/src/number.js
./node_modules/d3-interpolate/src/numberArray.js
./node_modules/d3-interpolate/src/object.js
./node_modules/d3-interpolate/src/rgb.js
./node_modules/d3-interpolate/src/string.js
./node_modules/d3-interpolate/src/value.js
./node_modules/d3-timer/src/timer.js
./node_modules/lodash/_DataView.js
./node_modules/lodash/_Hash.js
./node_modules/lodash/_ListCache.js
./node_modules/lodash/_Map.js
./node_modules/lodash/_MapCache.js
./node_modules/lodash/_Promise.js
./node_modules/lodash/_Set.js
./node_modules/lodash/_SetCache.js
./node_modules/lodash/_Stack.js
./node_modules/lodash/_Symbol.js
./node_modules/lodash/_Uint8Array.js
./node_modules/lodash/_WeakMap.js
./node_modules/lodash/_arrayFilter.js
./node_modules/lodash/_arrayLikeKeys.js
./node_modules/lodash/_arrayMap.js
./node_modules/lodash/_arrayPush.js
./node_modules/lodash/_arraySome.js
./node_modules/lodash/_assocIndexOf.js
./node_modules/lodash/_baseEach.js
./node_modules/lodash/_baseFor.js
./node_modules/lodash/_baseForOwn.js
./node_modules/lodash/_baseGet.js
./node_modules/lodash/_baseGetAllKeys.js
./node_modules/lodash/_baseGetTag.js
./node_modules/lodash/_baseHasIn.js
./node_modules/lodash/_baseIsArguments.js
./node_modules/lodash/_baseIsEqual.js
./node_modules/lodash/_baseIsEqualDeep.js
./node_modules/lodash/_baseIsMatch.js
./node_modules/lodash/_baseIsNative.js
./node_modules/lodash/_baseIsTypedArray.js
./node_modules/lodash/_baseIteratee.js
./node_modules/lodash/_baseKeys.js
./node_modules/lodash/_baseMap.js
./node_modules/lodash/_baseMatches.js
./node_modules/lodash/_baseMatchesProperty.js
./node_modules/lodash/_baseOrderBy.js
./node_modules/lodash/_baseProperty.js
./node_modules/lodash/_basePropertyDeep.js
./node_modules/lodash/_baseSortBy.js
./node_modules/lodash/_baseTimes.js
./node_modules/lodash/_baseToString.js
./node_modules/lodash/_baseUnary.js
./node_modules/lodash/_cacheHas.js
./node_modules/lodash/_castPath.js
./node_modules/lodash/_compareAscending.js
./node_modules/lodash/_compareMultiple.js
./node_modules/lodash/_coreJsData.js
./node_modules/lodash/_createBaseEach.js
./node_modules/lodash/_createBaseFor.js
./node_modules/lodash/_equalArrays.js
./node_modules/lodash/_equalByTag.js
./node_modules/lodash/_equalObjects.js
./node_modules/lodash/_freeGlobal.js
./node_modules/lodash/_getAllKeys.js
./node_modules/lodash/_getMapData.js
./node_modules/lodash/_getMatchData.js
./node_modules/lodash/_getNative.js
./node_modules/lodash/_getPrototype.js
./node_modules/lodash/_getRawTag.js
./node_modules/lodash/_getSymbols.js
./node_modules/lodash/_getTag.js
./node_modules/lodash/_getValue.js
./node_modules/lodash/_hasPath.js
./node_modules/lodash/_hashClear.js
./node_modules/lodash/_hashDelete.js
./node_modules/lodash/_hashGet.js
./node_modules/lodash/_hashHas.js
./node_modules/lodash/_hashSet.js
./node_modules/lodash/_isIndex.js
./node_modules/lodash/_isKey.js
./node_modules/lodash/_isKeyable.js
./node_modules/lodash/_isMasked.js
./node_modules/lodash/_isPrototype.js
./node_modules/lodash/_isStrictComparable.js
./node_modules/lodash/_listCacheClear.js
./node_modules/lodash/_listCacheDelete.js
./node_modules/lodash/_listCacheGet.js
./node_modules/lodash/_listCacheHas.js
./node_modules/lodash/_listCacheSet.js
./node_modules/lodash/_mapCacheClear.js
./node_modules/lodash/_mapCacheDelete.js
./node_modules/lodash/_mapCacheGet.js
./node_modules/lodash/_mapCacheHas.js
./node_modules/lodash/_mapCacheSet.js
./node_modules/lodash/_mapToArray.js
./node_modules/lodash/_matchesStrictComparable.js
./node_modules/lodash/_memoizeCapped.js
./node_modules/lodash/_nativeCreate.js
./node_modules/lodash/_nativeKeys.js
./node_modules/lodash/_nodeUtil.js
./node_modules/lodash/_objectToString.js
./node_modules/lodash/_overArg.js
./node_modules/lodash/_root.js
./node_modules/lodash/_setCacheAdd.js
./node_modules/lodash/_setCacheHas.js
./node_modules/lodash/_setToArray.js
./node_modules/lodash/_stackClear.js
./node_modules/lodash/_stackDelete.js
./node_modules/lodash/_stackGet.js
./node_modules/lodash/_stackHas.js
./node_modules/lodash/_stackSet.js
./node_modules/lodash/_stringToPath.js
./node_modules/lodash/_toKey.js
./node_modules/lodash/_toSource.js
./node_modules/lodash/eq.js
./node_modules/lodash/get.js
./node_modules/lodash/hasIn.js
./node_modules/lodash/identity.js
./node_modules/lodash/isArguments.js
./node_modules/lodash/isArray.js
./node_modules/lodash/isArrayLike.js
./node_modules/lodash/isBuffer.js
./node_modules/lodash/isFunction.js
./node_modules/lodash/isLength.js
./node_modules/lodash/isObject.js
./node_modules/lodash/isObjectLike.js
./node_modules/lodash/isPlainObject.js
./node_modules/lodash/isPlainObject.js
./node_modules/lodash/isSymbol.js
./node_modules/lodash/isTypedArray.js
./node_modules/lodash/keys.js
./node_modules/lodash/memoize.js
./node_modules/lodash/orderBy.js
./node_modules/lodash/orderBy.js
./node_modules/lodash/property.js
./node_modules/lodash/stubArray.js
./node_modules/lodash/stubFalse.js
./node_modules/lodash/toString.js
./node_modules/object-assign/index.js
./node_modules/prop-types/factoryWithThrowingShims.js
./node_modules/prop-types/index.js
./node_modules/prop-types/index.js
./node_modules/prop-types/lib/ReactPropTypesSecret.js
./node_modules/react-fast-compare/index.js
./node_modules/react-fast-compare/index.js
./node_modules/react/cjs/react.production.min.js
./node_modules/react/index.js
./node_modules/react/index.js
./node_modules/victory-core/es/victory-animation/util.js
./node_modules/victory-core/es/victory-animation/victory-animation.js
./node_modules/victory-core/es/victory-util/timer-context.js
./node_modules/victory-core/es/victory-util/timer.js
./src/index.js
./src/index.js + 31 modules
```

... and all in all, it looks like we're _just_ getting the `victory-animation` (and transitive import of `victory-util`) that we specified without anything else.


## Maintenance Status

**Archived:** This project is no longer maintained by Formidable. We are no longer responding to issues or pull requests unless they relate to security concerns. We encourage interested developers to fork this project and make it their own!
