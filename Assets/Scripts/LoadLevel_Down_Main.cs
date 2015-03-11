using UnityEngine;
using System.Collections;

public class LoadLevel_Down_Main : MonoBehaviour 
{
	
	void OnTriggerEnter(Collider other)
	{
		AutoFade.LoadLevel ("hallway", 1, 1, Color.black);
	}
}