export default class PugMath {
    clampMin(x, min) {
        return Math.max(x, min);
    }
    clampMax(x, max) {
        return Math.min(x, max);
    }
    clamp(x,min,max) {
        return Math.max(min, Math.min(x, max))
    }
    random(min, max) {
        return Math.round(max-min*(Math.random()));
    }
    RoundTo(x,rounded) {
        return Math.round(x/rounded)*rounded
    }
}
