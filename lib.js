function initShader(gl,vertexShaderSource,fragmentShaderSource){
	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	
	gl.shaderSource(vertexShader,vertexShaderSource);
	gl.shaderSource(fragmentShader,fragmentShaderSource);
	
	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);
	
	var program = gl.createProgram();
	
	gl.attachShader(program,vertexShader);
	gl.attachShader(program,fragmentShader);
	gl.linkProgram(program);
	gl.useProgram(program);
	return program;
}

function initWebGL(canvas) {
  // 创建全局变量
  window.gl = null;
  
  try {
    // 尝试创建标准上下文，如果失败，回退到试验性上下文
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}
  
  // 如果没有GL上下文，马上放弃
  if (!gl) {
    alert("WebGL初始化失败，可能是因为您的浏览器不支持。");
    gl = null;
  }
  return gl;
}