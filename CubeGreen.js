function CubeGreen() {
	this.locations = new Float32Array([
		// front face
		-1, -1, +1,
		-1, +1, +1,
		+1, +1, +1,
		+1, -1, +1,
		
		// back face
		+1, -1, -1,
		+1, +1, -1, 
		-1, +1, -1,
		-1, -1, -1,
		
		// left face
		-1, -1, -1, 
		-1, +1, -1,
		-1, +1, +1,
		-1, -1, +1,
		
		// right face
		+1, -1, +1,
		+1, +1, +1,
		+1, +1, -1,
		+1, -1, -1,
		
		// top face
		-1, +1, +1, 
		-1, +1, -1,
		+1, +1, -1, 
		+1, +1, +1,
		
		// bottom face
		-1, -1, -1,
		-1, -1, +1,
		+1, -1, +1,
		+1, -1, -1
	]);
	
	this.colors= new Float32Array([
		// front face
		0, 1, 0, 1,
		0, 1, 0, 1, 
		0, 1, 0, 1,
		0, 1, 0, 1,
		
		// back face
		0, 0, 1, 1,
		0, 0, 1, 1,
		0, 0, 1, 1,
		0, 0, 1, 1,
		
		// left face
		0, 1, 0, 1,
		0, 1, 0, 1,
		0, 1, 0, 1,
		0, 1, 0, 1,
		
		// right face
		1, 1, 1, 1,
		1, 1, 1, 1,
		1, 1, 1, 1,
		1, 1, 1, 1,
		
		// top face
		1, 0, 1, 1,
		1, 0, 1, 1,
		1, 0, 1, 1,
		1, 0, 1, 1,
		
		// bottom face
		1, 1, 0, 1,
		1, 1, 0, 1,
		1, 1, 0, 1,
		1, 1, 0, 1
	]);
	
	this.idxList= new Uint16Array([
		// front face
		0, 1, 2,
		0, 2, 3,
		
		// back face
		4, 5, 6,
		4, 6, 7,
		
		// left face
		8, 9, 10,
		8, 10, 11,
		
		// right face
		12, 13, 14,
		12, 14, 15,
		
		// top face
		16, 17, 18,
		16, 18, 19,
		
		// bottom face
		20, 21, 22,
		20, 22, 23
	]);
}
