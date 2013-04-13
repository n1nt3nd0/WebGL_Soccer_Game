function ModelDrawer(model, shaderProgram, dif, amb, spec) 
{
	this.model = model;
	this.shaderProgram = shaderProgram;
	
	this.prepareBuffers = function() 
	{
		// we must assume these positions are set.  We have decided these by convention and assigned them
		this.shaderProgram.bindArrayBuffer(shaderProgram.vertPos_buff, this.model.locations);
		this.shaderProgram.bindArrayBuffer(shaderProgram.normal_buff, this.model.normals);
		this.shaderProgram.bindArrayBuffer(shaderProgram.textureCoord_buff, this.model.UVs);
		//this.shaderProgram.bindArrayBuffer(shaderProgram.vertColor_buff, this.model.colors);
		this.shaderProgram.bindElementBuffer(shaderProgram.elements_buff, this.model.idxList);
		try
		{
			// GIVE THE MODEL AMBIENT, DIFFUSE, SPECULAR
			shaderProgram.GL.activeTexture(webGL.GL.TEXTURE0);
			shaderProgram.GL.bindTexture(shaderProgram.GL.TEXTURE_2D, this.diffuseTexture);
		
			shaderProgram.GL.activeTexture(webGL.GL.TEXTURE1);
			shaderProgram.GL.bindTexture(shaderProgram.GL.TEXTURE_2D, this.ambientTexture);
		
			shaderProgram.GL.activeTexture(webGL.GL.TEXTURE2);
			shaderProgram.GL.bindTexture(shaderProgram.GL.TEXTURE_2D, this.specularTexture);
		}
		catch(err)
		{
			txt="There was an error on this page.\n\n";
			txt+="Error description: " + err.message + "\n\n";
			txt+="Click OK to continue.\n\n";
			alert(txt);
		}
	}
	
	this.draw = function(MV) 
	{
		// set up the buffers just once
		if (this.shaderProgram.lastModelDrawn != this.model) 
		{
			this.shaderProgram.lastModelDrawn = this.model;
			this.prepareBuffers();
		}
		// Then just draw every frame
		this.shaderProgram.prepare(); // not sure if it hurts to call this every time even if it has not changed.
		this.shaderProgram.GL.uniformMatrix4fv(this.shaderProgram.MVmat_pos, false, new Float32Array(transpose(MV))); // also set by convention
		this.shaderProgram.GL.drawElements(this.shaderProgram.GL.TRIANGLES, this.model.idxList.length, this.shaderProgram.GL.UNSIGNED_SHORT, 0);
	}
	
	this.diffuseTexture = webGL.LoadTexture(dif);
	this.ambientTexture = webGL.LoadTexture(amb);
	this.specularTexture = webGL.LoadTexture(spec);
}