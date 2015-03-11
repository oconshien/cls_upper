/*
#pragma strict
 
public class RandArtworkMat : MonoBehaviour {
 
	var textures: Texture2D[]; // assign some textures here in the Inspector
 
 	function Start(){
    	while (true){
			renderer.material.SetTexture ("_Art", textures[Random.Range(0, textures.Length)]);
			yield WaitForSeconds(1.0);
    	}
	}
	
	// Assigns a texture named "Assets/Resources/glass" to a Plane.
	function Start () {
		var go = GameObject.Find("_Art");
		var rend = go.GetComponent.<Renderer>();
		rend.material.SetTexture ("_Art", textures[Random.Range(0, textures.Length)]);
	}
}

*/