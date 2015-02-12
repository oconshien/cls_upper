using UnityEngine;
using System.Collections;

public class SceneFadeInOut : MonoBehaviour 
{
	public var fadeSpeed : float = 1.5f;
	private var sceneStarting : boolean = true;

	
	function Awake()
	{
				guiTexture.pixelInsert = new Rect (0f, 0f, Screen.width, Screen.height);
	}

	function Update()
	{
				if (sceneStarting)
						StartScene ();
	}

	function FadeToClear ()
	{
				guiTexture.color = Color.Lerp (guiTexture.color, Color.clear, fadeSpeed * Time.deltaTime);
	}

	function FadeToBlack()
	{
				GUITexture.color = Color.Lerp (GUITexture.color, Color.black, fadeSpeed * Time.deltaTime);
	}

	function StartScene ()
	{
				FadeToClear ();

				if (GUITexture.color.a <= 0.05f) 
				{
						GUITexture.color = Color.clear;
						GUITexture.enabled = false;
						sceneStarting = false;
				}
	}

	public function EndScene ()
	{
				GUITexture.enabled = true;
				FadeToBlack ();

				if (GUITexture.color.a >= 0.95f) 
				{ 
					if(col.gameObject.name == "collide_up")
						Application.LoadLevel ("hallway");
								
					if(col.gameObject.name == "collide_down")
						Application.LoadLevel ("1");
								
					if(col.gameObject.name == "elevup")
						Application.LoadLevel ("hallway_elev");
								
					if(col.gameObject.name == "elevup-elev")
						Application.LoadLevel ("hallway_elev");
					
					if(col.gameObject.name == "elevlow")
						Application.LoadLevel ("1_elev");
					
					if(col.gameObject.name == "elevlow-elev")
						Application.LoadLevel ("1_elev");
					
				}
	}

}
