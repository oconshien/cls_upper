#pragma strict

function OnTriggerEnter (cubeTrigger : Collider) 
{

Debug.Log("OnTriggerEnter : cubeTrigger.tag" + cubeTrigger.tag)
if(cubeTrigger.tag == "Elevator_1")
{
	Application.LoadLevel("1");
}
if(cubeTrigger.tag == "Elevator_2")
{
	Application.LoadLevel("hallway");
}
}