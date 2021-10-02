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
const flyOrSwim = (o: Bird | Fish): void => {
    if (o instanceof Bird) {
        o.fly();
    } else if (o instanceof Fish) {
        o.swim();
    }
}

[new Bird, new Fish].forEach(flyOrSwim);    // fly~ swim~
