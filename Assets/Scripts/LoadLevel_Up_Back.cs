﻿using UnityEngine;
using System.Collections;

public class LoadLevel_Up_Back : MonoBehaviour 
{

	void OnTriggerEnter(Collider other)
	{
		AutoFade.LoadLevel ("2_back", 1, 1, Color.black);
	}
}
