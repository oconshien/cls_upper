#pragma strict

function OnTriggerEnter (col : Collider)
{
    if(col.gameObject.name == "Staircase_Up")
    {
        Application.LoadLevel ("hallway");
    }
}