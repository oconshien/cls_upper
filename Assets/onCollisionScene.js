#pragma strict

function OnTriggerEnter (col : Collider)
{
    if(col.gameObject.name == "Staircase_window")
    {
        Application.LoadLevel ("hallway");
    }
        
    if(col.gameObject.name == "ske11")
    {
        Application.LoadLevel ("hallway_elev");
    }
    
    if(col.gameObject.name == "lock_door-r")
    {
        Application.LoadLevel ("1");
    }
}