using UnityEngine;
using System.Collections;

public class LoadLevel_Down_Elev : MonoBehaviour 
{
	
	void OnTriggerEnter(Collider other)
	{
		AutoFade.LoadLevel ("hallway_elev", 1, 1, Color.black);
	}
}
