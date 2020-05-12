const CONSTANTS = {
    rad2deg: 57.295779513082320,
};

class LV2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '[' + this.x + ',' + this.y + ']';
    }

    copy() {
        return new LV2(this.x, this.y);
    }

    setAs(o) {
        this.x = o.x;
        this.y = o.y;
    }

    setValues(x, y) {
        this.x = x;
        this.y = y;
    }

    add(o) {
        return new LV2(this.x + o.x, this.y + o.y);
    }

    iadd(o) {
        this.x += o.x;
        this.y += o.y;
    }

    sub(o) {
        return new LV2(this.x - o.x, this.y - o.y);
    }

    isub(o) {
        this.x -= o.x;
        this.y -= o.y;
    }

    scale(s) {
        return new LV2(this.x * s, this.y * s);
    }

    iscale(s) {
        this.x *= s;
        this.y *= s;
    }

    div(s) {
        return new LV2(this.x / s, this.y / s);
    }

    idiv(s) {
        this.x /= s;
        this.y /= s;
    }

    dot(o) {
        return this.x * o.y + this.y * o.x;
    }

    dist(o) {
        var dx = this.x - o.x;
        var dy = this.y - o.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    round() {
        return new LV2(Math.round(this.x), Math.round(this.y));
    }

    floor() {
        return new LV2(Math.floor(this.x), Math.floor(this.y));
    }

    iround() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
    }

    ifloor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
    }

    unit() {
        var m = Math.sqrt(this.x * this.x + this.y * this.y);
        return new LV2(this.x / m, this.y / m);
    }

    iunit() {
        var m = Math.sqrt(this.x * this.x + this.y * this.y);
        this.x /= m;
        this.y /= m;
    }

    interpolateTo(target, time) {
        var to = target.copy();
        to.isub(this);
        to.iscale(time);
        to.iadd(this);
        return to;
    }

    getAngle() {
        var angle = CONSTANTS.rad2deg * Math.atan(this.y / this.x);
        if (this.x < 0.0)
            angle += 180.0;
        else if (y < 0.0)
            angle += 360.0;
        return angle;
    }

    static fromAngle(angle) {
        var rv = new LV2(0, 0);
        angle /= CONSTANTS.rad2deg;
        rv.x = Math.cos(angle);
        rv.y = Math.sin(angle);
        return rv;
    }
}

class LV3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    toString() {
        return '[' + this.x + ',' + this.y + ',' + this.z + ']';
    }

    copy() {
        return new LV3(this.x, this.y, this.z);
    }

    setAs(o) {
        this.x = o.x;
        this.y = o.y;
        this.z = o.z;
    }

    setValues(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(o) {
        return new LV3(this.x + o.x, this.y + o.y, this.z + o.z);
    }

    iadd(o) {
        this.x += o.x;
        this.y += o.y;
        this.z += o.z;
    }

    sub(o) {
        return new LV3(this.x - o.x, this.y - o.y, this.z - o.z);
    }

    isub(o) {
        this.x -= o.x;
        this.y -= o.y;
        this.z -= o.z;
    }

    scale(s) {
        return new LV3(this.x * s, this.y * s, this.z * s);
    }

    iscale(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
    }

    div(s) {
        return new LV3(this.x / s, this.y / s, this.z / s);
    }

    idiv(s) {
        this.x /= s;
        this.y /= s;
        this.z /= s;
    }

    dot(o) {
        return this.x * o.x + this.y * o.y + this.z * o.z;
    }

    cross(o) {
        return new LV3(
            this.y * o.z - this.z * o.y,
            this.z * o.x - this.x * o.z,
            this.x * o.y - this.y * o.x
        );
    }

    icross(o) {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        this.x = y * o.z - z * o.y;
        this.y = z * o.x - x * o.z;
        this.z = x * o.y - y * o.x;
    }

    dist(o) {
        var dx = this.x - o.x;
        var dy = this.y - o.y;
        var dz = this.z - o.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    round() {
        return new LV3(Math.round(this.x), Math.round(this.y), Math.round(this.z));
    }

    floor() {
        return new LV3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z));
    }

    iround() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
    }

    ifloor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
    }

    unit() {
        var m = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        return new LV3(this.x / m, this.y / m, this.z / m);
    }

    iunit() {
        var m = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        this.x /= m;
        this.y /= m;
        this.z /= m;
    }
}

class LMat3 {
    constructor(inp) {
        if (!inp)
            this.arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        else
            this.arr = inp;
    }

    toString() {
        return '|' + this.arr[0] + ',' + this.arr[1] + ',' + this.arr[2] + '|\n' +
            '|' + this.arr[3] + ',' + this.arr[4] + ',' + this.arr[5] + '|\n' +
            '|' + this.arr[6] + ',' + this.arr[7] + ',' + this.arr[8] + '|\n';
    }

    copy() {
        return new LMat3(this.arr.slice());
    }

    itranspose() {
        this.arr = [
            this.arr[0], this.arr[3], this.arr[6],
            this.arr[1], this.arr[4], this.arr[7],
            this.arr[2], this.arr[5], this.arr[8]
        ];
    }

    transpose() {
        return new LMat3([
            this.arr[0], this.arr[3], this.arr[6],
            this.arr[1], this.arr[4], this.arr[7],
            this.arr[2], this.arr[5], this.arr[8]
        ]);
    }

    imult(m) {
        this.arr = [
            this.arr[0] * m.arr[0] + this.arr[1] * m.arr[3] + this.arr[2] * m.arr[6],
            this.arr[0] * m.arr[1] + this.arr[1] * m.arr[4] + this.arr[2] * m.arr[7],
            this.arr[0] * m.arr[2] + this.arr[1] * m.arr[5] + this.arr[2] * m.arr[8],

            this.arr[3] * m.arr[0] + this.arr[4] * m.arr[3] + this.arr[5] * m.arr[6],
            this.arr[3] * m.arr[1] + this.arr[4] * m.arr[4] + this.arr[5] * m.arr[7],
            this.arr[3] * m.arr[2] + this.arr[4] * m.arr[5] + this.arr[5] * m.arr[8],

            this.arr[6] * m.arr[0] + this.arr[7] * m.arr[3] + this.arr[8] * m.arr[6],
            this.arr[6] * m.arr[1] + this.arr[7] * m.arr[4] + this.arr[8] * m.arr[7],
            this.arr[6] * m.arr[2] + this.arr[7] * m.arr[5] + this.arr[8] * m.arr[8],
        ];
    }

    mult(m) {
        return new LMat3([
            this.arr[0] * m.arr[0] + this.arr[1] * m.arr[3] + this.arr[2] * m.arr[6],
            this.arr[0] * m.arr[1] + this.arr[1] * m.arr[4] + this.arr[2] * m.arr[7],
            this.arr[0] * m.arr[2] + this.arr[1] * m.arr[5] + this.arr[2] * m.arr[8],

            this.arr[3] * m.arr[0] + this.arr[4] * m.arr[3] + this.arr[5] * m.arr[6],
            this.arr[3] * m.arr[1] + this.arr[4] * m.arr[4] + this.arr[5] * m.arr[7],
            this.arr[3] * m.arr[2] + this.arr[4] * m.arr[5] + this.arr[5] * m.arr[8],

            this.arr[6] * m.arr[0] + this.arr[7] * m.arr[3] + this.arr[8] * m.arr[6],
            this.arr[6] * m.arr[1] + this.arr[7] * m.arr[4] + this.arr[8] * m.arr[7],
            this.arr[6] * m.arr[2] + this.arr[7] * m.arr[5] + this.arr[8] * m.arr[8],
        ]);
    }

    multLV2(p) {
        return new LV2(p.x * this.arr[0] + p.y * this.arr[1] + 0 * this.arr[2],
            p.x * this.arr[3] + p.y * this.arr[4] + 0 * this.arr[5]);
    }

    multLV3(p) {
        return new LV3(p.x * this.arr[0] + p.y * this.arr[1] + p.z * this.arr[2],
            p.x * this.arr[3] + p.y * this.arr[4] + p.z * this.arr[5],
            p.x * this.arr[6] + p.y * this.arr[7] + p.z * this.arr[8]);
    }

    static zero() {
        return new LMat3();
    }

    static identity() {
        return new LMat3([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    }

    static scale(scalar) {
        return new LMat3([scalar, 0, 0, 0, scalar, 0, 0, 0, 1]);
    }

    static trans(x, y) {
        return new LMat3([1, 0, x, 0, 1, y, 0, 0, 1]);
    }

    static rotate(angle) {
        angle *= 0.0174533;
        var cosine = Math.cos(angle);
        var sinus = Math.sin(angle);
        return new LMat3([cosine, -sinus, 0, sinus, cosine, 0, 0, 0, 1]);
    }

    static rotateX(angle) {
        angle *= 0.0174533;
        var cosine = Math.cos(angle);
        var sinus = Math.sin(angle);
        return new LMat3([1, 0, 0, 0, cosine, -sinus, 0, sinus, cosine]);
    }

    static rotateY(angle) {
        angle *= 0.0174533;
        var cosine = Math.cos(angle);
        var sinus = Math.sin(angle);
        return new LMat3([cosine, 0, sinus, 0, 1, 0, -sinus, 0, cosine]);
    }

    static rotateZ(angle) {
        angle *= 0.0174533;
        var cosine = Math.cos(angle);
        var sinus = Math.sin(angle);
        return new LMat3([cosine, -sinue, 0, sinus, cosine, 0, 0, 0, 1]);
    }
}

class LMat4 {

    constructor(inp) {
        if (inp === undefined) {
            this.arr = [0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0
            ];
        } else this.arr = inp;
    }

    toString() {
        return '|' + this.arr[0] + ',' + this.arr[1] + ',' + this.arr[2] + ',' + this.arr[3] + '|\n' +
            '|' + this.arr[4] + ',' + this.arr[5] + ',' + this.arr[6] + ',' + this.arr[7] + '|\n' +
            '|' + this.arr[8] + ',' + this.arr[9] + ',' + this.arr[10] + ',' + this.arr[11] + '|\n' +
            '|' + this.arr[12] + ',' + this.arr[13] + ',' + this.arr[14] + ',' + this.arr[15] + '|\n';
    }

    copy() {
        return new LMat4(this.arr.slice());
    }

    itranspose() {
        this.arr = [
            this.arr[0], this.arr[4], this.arr[8], this.arr[12],
            this.arr[1], this.arr[5], this.arr[9], this.arr[13],
            this.arr[2], this.arr[6], this.arr[10], this.arr[14],
            this.arr[3], this.arr[7], this.arr[11], this.arr[15]
        ];
    }

    transpose() {
        return new LMat4([
            this.arr[0], this.arr[4], this.arr[8], this.arr[12],
            this.arr[1], this.arr[5], this.arr[9], this.arr[13],
            this.arr[2], this.arr[6], this.arr[10], this.arr[14],
            this.arr[3], this.arr[7], this.arr[11], this.arr[15]
        ]);
    }

    imult(m) {
        this.arr = [
            this.arr[0] * m.arr[0] + this.arr[1] * m.arr[4] + this.arr[2] * m.arr[8] + this.arr[3] * m.arr[12],
            this.arr[0] * m.arr[1] + this.arr[1] * m.arr[5] + this.arr[2] * m.arr[9] + this.arr[3] * m.arr[13],
            this.arr[0] * m.arr[2] + this.arr[1] * m.arr[6] + this.arr[2] * m.arr[10] + this.arr[3] * m.arr[14],
            this.arr[0] * m.arr[3] + this.arr[1] * m.arr[7] + this.arr[2] * m.arr[11] + this.arr[3] * m.arr[15],

            this.arr[4] * m.arr[0] + this.arr[5] * m.arr[4] + this.arr[6] * m.arr[8] + this.arr[7] * m.arr[12],
            this.arr[4] * m.arr[1] + this.arr[5] * m.arr[5] + this.arr[6] * m.arr[9] + this.arr[7] * m.arr[13],
            this.arr[4] * m.arr[2] + this.arr[5] * m.arr[6] + this.arr[6] * m.arr[10] + this.arr[7] * m.arr[14],
            this.arr[4] * m.arr[3] + this.arr[5] * m.arr[7] + this.arr[6] * m.arr[11] + this.arr[7] * m.arr[15],

            this.arr[8] * m.arr[0] + this.arr[9] * m.arr[4] + this.arr[10] * m.arr[8] + this.arr[11] * m.arr[12],
            this.arr[8] * m.arr[1] + this.arr[9] * m.arr[5] + this.arr[10] * m.arr[9] + this.arr[11] * m.arr[13],
            this.arr[8] * m.arr[2] + this.arr[9] * m.arr[6] + this.arr[10] * m.arr[10] + this.arr[11] * m.arr[14],
            this.arr[8] * m.arr[3] + this.arr[9] * m.arr[7] + this.arr[10] * m.arr[11] + this.arr[11] * m.arr[15],

            this.arr[12] * m.arr[0] + this.arr[13] * m.arr[4] + this.arr[14] * m.arr[8] + this.arr[15] * m.arr[12],
            this.arr[12] * m.arr[1] + this.arr[13] * m.arr[5] + this.arr[14] * m.arr[9] + this.arr[15] * m.arr[13],
            this.arr[12] * m.arr[2] + this.arr[13] * m.arr[6] + this.arr[14] * m.arr[10] + this.arr[15] * m.arr[14],
            this.arr[12] * m.arr[3] + this.arr[13] * m.arr[7] + this.arr[14] * m.arr[11] + this.arr[15] * m.arr[15]

        ];
    }

    mult(m) {
        return new LMat4([
            this.arr[0] * m.arr[0] + this.arr[1] * m.arr[4] + this.arr[2] * m.arr[8] + this.arr[3] * m.arr[12],
            this.arr[0] * m.arr[1] + this.arr[1] * m.arr[5] + this.arr[2] * m.arr[9] + this.arr[3] * m.arr[13],
            this.arr[0] * m.arr[2] + this.arr[1] * m.arr[6] + this.arr[2] * m.arr[10] + this.arr[3] * m.arr[14],
            this.arr[0] * m.arr[3] + this.arr[1] * m.arr[7] + this.arr[2] * m.arr[11] + this.arr[3] * m.arr[15],

            this.arr[4] * m.arr[0] + this.arr[5] * m.arr[4] + this.arr[6] * m.arr[8] + this.arr[7] * m.arr[12],
            this.arr[4] * m.arr[1] + this.arr[5] * m.arr[5] + this.arr[6] * m.arr[9] + this.arr[7] * m.arr[13],
            this.arr[4] * m.arr[2] + this.arr[5] * m.arr[6] + this.arr[6] * m.arr[10] + this.arr[7] * m.arr[14],
            this.arr[4] * m.arr[3] + this.arr[5] * m.arr[7] + this.arr[6] * m.arr[11] + this.arr[7] * m.arr[15],

            this.arr[8] * m.arr[0] + this.arr[9] * m.arr[4] + this.arr[10] * m.arr[8] + this.arr[11] * m.arr[12],
            this.arr[8] * m.arr[1] + this.arr[9] * m.arr[5] + this.arr[10] * m.arr[9] + this.arr[11] * m.arr[13],
            this.arr[8] * m.arr[2] + this.arr[9] * m.arr[6] + this.arr[10] * m.arr[10] + this.arr[11] * m.arr[14],
            this.arr[8] * m.arr[3] + this.arr[9] * m.arr[7] + this.arr[10] * m.arr[11] + this.arr[11] * m.arr[15],

            this.arr[12] * m.arr[0] + this.arr[13] * m.arr[4] + this.arr[14] * m.arr[8] + this.arr[15] * m.arr[12],
            this.arr[12] * m.arr[1] + this.arr[13] * m.arr[5] + this.arr[14] * m.arr[9] + this.arr[15] * m.arr[13],
            this.arr[12] * m.arr[2] + this.arr[13] * m.arr[6] + this.arr[14] * m.arr[10] + this.arr[15] * m.arr[14],
            this.arr[12] * m.arr[3] + this.arr[13] * m.arr[7] + this.arr[14] * m.arr[11] + this.arr[15] * m.arr[15]

        ]);
    }

    multLV3(p) {
        return new LV3(p.x * this.arr[0] + p.y * this.arr[1] + p.z * this.arr[2] + this.arr[3],
            p.x * this.arr[4] + p.y * this.arr[5] + p.z * this.arr[6] + this.arr[7],
            p.x * this.arr[8] + p.y * this.arr[9] + p.z * this.arr[10] + this.arr[11]);
    }

    static scale(scalar) {
        return new LMat4([scalar, 0, 0, 0,
            0, scalar, 0, 0,
            0, 0, scalar, 0,
            0, 0, 0, 1
        ]);
    }

    static trans(x, y, z) {
        return new LMat4([1, 0, 0, x,
            0, 1, 0, y,
            0, 0, 1, z,
            0, 0, 0, 1
        ]);
    }

    static rotateX(angle) {
        angle *= 0.0174533;
        var cosine = Math.cos(angle);
        var sinus = Math.sin(angle);
        return new LMat4([1, 0, 0, 0,
            0, cosine, -sinus, 0,
            0, sinus, cosine, 0,
            0, 0, 0, 1
        ]);
    }

    static rotateY(angle) {
        angle *= 0.0174533;
        var cosine = Math.cos(angle);
        var sinus = Math.sin(angle);
        return new LMat4([cosine, 0, sinus, 0,
            0, 1, 0, 0,
            -sinus, 0, cosine, 0,
            0, 0, 0, 1
        ]);
    }

    static rotateZ(angle) {
        angle *= 0.0174533;
        var cosine = Math.cos(angle);
        var sinus = Math.sin(angle);
        return new LMat4([cosine, -sinus, 0, 0,
            sinus, cosine, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    }

    static zero() {
        return new LMat4();
    }

    static identity() {
        return new LMat4([1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    }
}