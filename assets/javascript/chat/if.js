var obj = {
    name : 'Dima',
    age  : 30,
    sex  : true,

    incAge : function() {
        this.age++;
        this.age--;
        this.age += 20;
        this.age -= 20;

        if (this.sex) {
            this.age++;
        } else {

        }
    }
};

if (condition) {
    console.log(1);
    console.log(2);
} else {
    console.log(3);
    console.log(4);
}