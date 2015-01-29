#pragma strict

function OnTriggerEnter (myCollision : Collision) 
{

if(myCollision.gameObject.name == "Floor")
{
	Application.LoadLevel(0);
}
}