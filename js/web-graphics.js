class ShaderManager {
    static createShader(gl, vertexShaderSource, fragShaderSource) {
        const loadShader = (type, source) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
                throw new Error(gl.getShaderInfoLog(shader));
            return shader;
        };
        const vertShader = loadShader(gl.VERTEX_SHADER, vertexShaderSource);
        const fragShader = loadShader(gl.FRAGMENT_SHADER, fragShaderSource);
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertShader);
        gl.attachShader(shaderProgram, fragShader);
        gl.linkProgram(shaderProgram);

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) throw new Error('failed to link');
        return shaderProgram;
    }

}

function createBuffer(gl, positions) {
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return posBuffer;
}

function updateBuffer(gl, buffer, positions) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
}

function setBuffer(gl, attribPointer, buffer, size, type = gl.FLOAT) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(attribPointer, size, type, false, 0, 0);
    gl.enableVertexAttribArray(attribPointer);
}