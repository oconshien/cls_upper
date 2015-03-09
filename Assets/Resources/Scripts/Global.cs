using UnityEngine;
using System.Collections;

public class Global : MonoBehaviour {
	public static Global instance;

	public float JumpForceGlobal;

	void Awake(){
		instance = this;
	}
}
