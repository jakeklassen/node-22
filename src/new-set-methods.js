class Collider2d {}
class Color {}
class Transform {}

const entityComponents = new Set([Collider2d, Color, Transform]);

const systemComponents = new Set([Collider2d, Transform]);

console.log(entityComponents.difference(systemComponents));

console.log(systemComponents.isSubsetOf(entityComponents));
