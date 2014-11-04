using UnityEngine;
using System.Collections;

public class CollisionController : MonoBehaviour {
	public Transform door;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter (Collider collider){
		print (collider.transform.name);
		door.transform.animation.Play ();
	}
	
}
