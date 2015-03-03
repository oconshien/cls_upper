using UnityEngine;
using System.Collections;

public class LoadLevel_Up_Elev : MonoBehaviour 
{
	
	void OnTriggerEnter(Collider other)
	{
		AutoFade.LoadLevel ("2_elev", 1, 1, Color.black);
	}
}
