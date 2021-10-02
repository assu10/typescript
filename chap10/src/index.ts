class Bird {
    fly() {
        console.log('fly~')
    }
}
class Fish {
    swim() {
        console.log('swim~')
    }
}

// 함수
const isFlyable = (o: Bird | Fish): o is Bird => {
    return o instanceof Bird;
}
const isSwimmable = (o: Bird | Fish): o is Fish => {
    return o instanceof Fish;
}

const flyOrSwim = (o: Bird | Fish): void => {
    if (isFlyable(o)) {
        o.fly();
    } else if (isSwimmable(o)) {
        o.swim();
    }
}

[new Bird, new Fish].forEach(flyOrSwim);    // fly~  swim~
