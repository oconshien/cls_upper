using UnityEngine;
using System.Collections;

public class LoadLevel_Up_Left : MonoBehaviour 
{

	void OnTriggerEnter(Collider other)
	{
		AutoFade.LoadLevel ("2", 2, 4, Color.black);
	}
}
