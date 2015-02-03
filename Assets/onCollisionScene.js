#pragma strict

function OnTriggerEnter (col : Collider)
{
    if(col.gameObject.name == "Staircase_window")
    {
        Application.LoadLevel ("hallway");
    }
    
    if(col.gameObject.name == "lock_door-r")
    {
        Application.LoadLevel ("hallway");
    }
}