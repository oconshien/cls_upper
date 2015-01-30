#pragma strict

function OnTriggerEnter (col : Collider)
{
    if(col.gameObject.name == "scene_portal_steps")
    {
        Application.LoadLevel ("hallway");
    }
}