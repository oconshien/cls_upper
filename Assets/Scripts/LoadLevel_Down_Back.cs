﻿using UnityEngine;
using System.Collections;

public class LoadLevel_Down_Back : MonoBehaviour 
{

	void OnTriggerEnter(Collider other)
	{
		AutoFade.LoadLevel ("hallway_back", 1, 1, Color.black);
	}
}
