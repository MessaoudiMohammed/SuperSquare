class Perceptron {
    weigths = [-1, 2, 0.5];
    tr = .001;
    guess(inputs) {
        let sum = 0;
        this.weigths.forEach((weigth, index) => {
            sum += inputs[index] * weigth;
        });
        return this.sign(sum);
    }
    sign(output) {
        return output > 0 ? 1 : -1;
    }
    training(inputs, output) {
        let guess = this.guess(inputs);
        let error = output - guess;
        this.weigths.forEach((weigth, index) => {
            weigth += error * inputs[index] * this.tr;
        });
    }
}